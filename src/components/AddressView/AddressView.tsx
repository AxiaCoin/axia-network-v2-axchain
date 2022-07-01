import * as React from "react";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import useDarkMode from "use-dark-mode";
export interface IAddressViewProps {
  address: string;
  balance: string;
  txCount: number;
  code: string;
  blockNumber: any;
}
const style = {
  boxShadow: "0px 4px 16px rgba(20, 92, 143, 0.08)",
  borderRadius: "12px",
};

function AddressView(props: IAddressViewProps) {
  const { address, balance, txCount, code, blockNumber } = props;
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
  const codeStyle = darkMode.value
    ? {
        fontSize: "12px",
        color: "#838FAE",
        margin: "15px",
      }
    : {
        fontSize: "12px",
        color: "#313F61",
        margin: "15px",
      };
  const { t } = useTranslation();
  return (
    <div>
      <div style={heading}> Blocks / Author</div>
      <Card style={style}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Typography variant="h6">
              {t("Address")}:<Typography variant="h6">{address}</Typography>
            </Typography>
            <Typography variant="h6">
              {t("Balance")}:<Typography variant="h6">{balance}</Typography>
            </Typography>
            <Typography variant="h6">
              {t("Transactions")}:
              <Typography variant="h6">{txCount}</Typography>
            </Typography>
          </Grid>
          <br />
          <hr
            style={{
              margin: "auto",
              border: "1px solid #CDE6F6",
            }}
          />
          <div style={codeStyle}>
            <div>
              {t("Code")} : {code}{" "}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddressView;
