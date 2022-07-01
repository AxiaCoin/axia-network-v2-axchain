import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import TxList from "../TxList";
import { hexToDate, hexToString, hexToNumber } from "@etclabscore/eserialize";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import useDarkMode from "use-dark-mode";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  LinearProgress,
  Typography,
  Grid,
} from "@material-ui/core";

import BlockGasPrice from "./BlockGasPrice";
import { relative } from "path";

function BlockView(props: any) {
  const { block } = props;
  const history = useHistory();
  const { t } = useTranslation();
  const darkMode = useDarkMode();
  const heading = darkMode.value
    ? {
        fontSize: "12px",
        color: "#838FAE",
        margin: "40px 0",
      }
    : {
        fontSize: "12px",
        color: "#313F61",
        margin: "40px 0",
      };

  if (!block) {
    return <div>Loading...</div>;
  }

  const {
    timestamp,
    hash,
    parentHash,
    miner,
    nonce,
    difficulty,
    extraData,
    stateRoot,
    transactionsRoot,
    receiptsRoot,
    transactions,
    gasUsed,
    gasLimit,
    size,
  } = block;

  const filledPercent = (hexToNumber(gasUsed) / hexToNumber(gasLimit)) * 100;
  return (
    <div style={{ margin: "0 50px" }}>
        <div style={heading}>
          Blocks / Number / #{hexToNumber(block.number)}
      <Button
        onClick={() => {
          history.push(`/block/${block.hash}/raw`);
        }}
        style={{
          border: "2px solid #178FE1",
          borderRadius: "12px",
          color: '#178FE1',
          position: 'relative',
          float: 'right'
        }}
      >
        View Raw
      </Button>
      </div>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>{t("Number")}</TableCell>
            <TableCell>{hexToNumber(block.number)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>
              {t("Gas Usage")}
            </TableCell>
            <TableCell>
              <Grid container>
                <LinearProgress
                  style={{
                    width: "150px",
                    alignSelf: "center",
                    marginRight: "10px",
                    height: "6px",
                  }}
                  value={filledPercent}
                  variant="determinate"
                />
                <Typography variant="caption">
                  {hexToNumber(gasUsed)}/{hexToNumber(gasLimit)}
                </Typography>
              </Grid>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>
              {t("Timestamp")}
            </TableCell>
            <TableCell>
              {t("Timestamp Date", { date: hexToDate(timestamp) })}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>{t("Hash")}</TableCell>
            <TableCell>{hash}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>
              {t("ParentHash")}
            </TableCell>
            <TableCell>
              <Link
                component={({
                  className,
                  children,
                }: {
                  children: any;
                  className: string;
                }) => (
                  <RouterLink className={className} to={`/block/${parentHash}`}>
                    {children}
                  </RouterLink>
                )}
              >
                {parentHash}
              </Link>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>{t("Miner")}</TableCell>
            <TableCell>
              <Link
                component={({
                  className,
                  children,
                }: {
                  children: any;
                  className: string;
                }) => (
                  <RouterLink className={className} to={`/address/${miner}`}>
                    {children}
                  </RouterLink>
                )}
              >
                {miner}
              </Link>
            </TableCell>
          </TableRow>

          <BlockGasPrice block={block} />

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>
              {t("Gas Limit")}
            </TableCell>
            <TableCell>{hexToNumber(gasLimit)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>{t("Size")}</TableCell>
            <TableCell>{hexToNumber(size)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>{t("Nonce")}</TableCell>
            <TableCell>{hexToNumber(nonce)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>
              {t("Difficulty")}
            </TableCell>
            <TableCell>{hexToNumber(difficulty)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>
              {t("Extra Data")}
            </TableCell>
            <TableCell>{hexToString(extraData)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>
              {t("State Root")}
            </TableCell>
            <TableCell>{stateRoot}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>
              {t("Transaction Root")}
            </TableCell>
            <TableCell>{transactionsRoot}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ fontWeight: "600" }}>
              {t("Receipts Root")}
            </TableCell>
            <TableCell>{receiptsRoot}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <TxList transactions={transactions} />
    </div>
  );
}

export default BlockView;
