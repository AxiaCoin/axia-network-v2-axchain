import * as React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import barcodeIcon from "../icons/barcode.svg";
import blockHeightIcon from "../icons/blockHeight.svg";
import gasPriceIcon from "../icons/gasPrice.svg";
import networkIcon from "../icons/network.svg";
import peersIcon from "../icons/peers.svg";

interface IProps {
  children: any;
  title: any;
}

const ChartCard: React.FC<IProps> = (props) => {
  return (
    <Card style={{background: "transparent"}} elevation={0}>
      <CardContent>
        <Typography style={{ fontSize: '16px'}}>{props.title}</Typography>
        {props.children}
      </CardContent>
    </Card>
  );
};

export default ChartCard;
