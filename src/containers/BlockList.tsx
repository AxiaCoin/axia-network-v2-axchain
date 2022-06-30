import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import useEthRPCStore from "../stores/useEthRPCStore";
import * as React from "react";
import BlockList from "../components/BlockList";
import getBlocks from "../helpers";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import { Block as IBlock } from "@etclabscore/ethereum-json-rpc";
interface IProps {
  from: number;
  to: number;
  disablePrev: boolean;
  disableNext: boolean;
  style?: any;
  onNext?: any;
  onPrev?: any;
}

export default function BlockListContainer(props: IProps) {
  const { from, to, style } = props;
  const [erpc] = useEthRPCStore();
  const [blocks, setBlocks] = React.useState<IBlock[]>();
  const [showIcon, setShow] = React.useState(false);
  React.useEffect(() => {
    if (!erpc) {
      return;
    }
    getBlocks(from, to, erpc).then(setBlocks);
    if (window.location.pathname !== "/") {
      setShow(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to]);

  if (!blocks) {
    return <CircularProgress />;
  }
  return (
    <div style={style}>
      <Grid container wrap="nowrap" style={{marginTop: '5px'}}>
        <Grid>
          <Typography variant="h6"> Blocks</Typography>
        </Grid>
        {!showIcon ? (
          <Grid container justify="flex-end">
            <Button
              variant="text"
              onClick={props.onNext}
              disabled={props.disableNext}
            >
              See All
            </Button>
          </Grid>
        ) : (
          <Grid container justify="flex-end">
            <IconButton onClick={props.onPrev} disabled={props.disablePrev}>
              <ArrowBackIos />
            </IconButton>
            <IconButton onClick={props.onNext} disabled={props.disableNext}>
              <ArrowForwardIos />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <BlockList blocks={blocks} />
    </div>
  );
}
