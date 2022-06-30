import React from "react";
import BigNumber from "bignumber.js";
import { hashesToGH } from "../formatters";
import { hexToNumber } from "@etclabscore/eserialize";
import { Grid } from "@material-ui/core";
import ChartCard from "../ChartCard";
import { VictoryLine, VictoryBar, VictoryChart } from "victory";
import { useTranslation } from "react-i18next";
import './statChart.scss'
const config = {
  blockTime: 15, // seconds
  blockHistoryLength: 100,
  chartHeight: 200,
  chartWidth: 400,
};

const blockMapGasUsed = (block: any) => {
  return {
    x: hexToNumber(block.number),
    y: new BigNumber(block.gasUsed).dividedBy(1000000),
  };
};

const blockMapUncles = (block: any) => {
  return {
    x: hexToNumber(block.number),
    y: block.uncles.length,
  };
};

const blockMapHashRate = (block: any) => {
  return {
    x: hexToNumber(block.number),
    y: hashesToGH(new BigNumber(block.difficulty, 16).dividedBy(config.blockTime)),
  };
};

const blockMapTransactionCount = (block: any) => {
  return {
    x: hexToNumber(block.number),
    y: block.transactions.length,
  };
};

interface IProps {
  blocks: any[];
  victoryTheme?: any;
}

const StatCharts: React.FC<IProps> = ({ blocks, victoryTheme }) => {
  const { t } = useTranslation();
  return (
    <Grid className="statCharts" spacing={4} justify="space-between" item container>
      <Grid className="items" key="hashChart" item xs={12} md={6} lg={3}>
        <ChartCard title={t("Hash Rate")}>
          <VictoryChart height={config.chartHeight} width={config.chartWidth} theme={victoryTheme as any}>
            <VictoryLine data={blocks.map(blockMapHashRate)} />
          </VictoryChart>
        </ChartCard>
      </Grid>
      <Grid className="items" key="txChart" item xs={12} md={6} lg={3}>
        <ChartCard title={t("Transaction count")}>
          <VictoryChart height={config.chartHeight} width={config.chartWidth} theme={victoryTheme as any}>
            <VictoryBar data={blocks.map(blockMapTransactionCount)} />
          </VictoryChart>
        </ChartCard>
      </Grid>
      <Grid className="items" key="gasUsed" item xs={12} md={6} lg={3}>
        <ChartCard title={t("Gas Used")}>
          <VictoryChart height={config.chartHeight} width={config.chartWidth} theme={victoryTheme as any}>
            <VictoryBar data={blocks.map(blockMapGasUsed)} />
          </VictoryChart>
        </ChartCard>
      </Grid>
      <Grid className="items" key="uncles" item xs={12} md={6} lg={3}>
        <ChartCard title={t("Uncles")}>
          <VictoryChart height={config.chartHeight} width={config.chartWidth} theme={victoryTheme as any}>
            <VictoryBar data={blocks.map(blockMapUncles)} />
          </VictoryChart>
        </ChartCard>
      </Grid>
    </Grid>
  );
};

export default StatCharts;
