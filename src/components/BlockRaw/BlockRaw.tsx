import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Editor from "@monaco-editor/react";
import useDarkMode from "use-dark-mode";
import "./blockRaw.scss";
interface IProps {
  block: any;
}

const BlockRaw: React.FC<IProps> = (props) => {
  const history = useHistory();
  const darkMode = useDarkMode();
  const { block } = props;
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
  const data = (name: string) => {
    return (
      <div className={name} style={{ margin: "0px 50px" }}>
        <div style={heading}>
          Blocks / Number
          <Button
            onClick={() => {
              history.push(`/block/${block.hash}`);
            }}
            style={{
              border: "2px solid #178FE1",
              borderRadius: "12px",
              color: "#178FE1",
              position: "relative",
              float: "right",
            }}
          >
            View Block
          </Button>
        </div>
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
            wordWrap: "on",
            lineNumbers: "off",
            wrappingIndent: "deepIndent",
            readOnly: true,
            showFoldingControls: "always",
          }}
          theme={darkMode.value ? "dark" : "light"}
          width="100%"
          height="60vh"
          language="json"
          value={JSON.stringify(block, null, 4)}
        />
      </div>
    );
  };
  return darkMode.value ? data("blockRawDark") : data("blockRawLight");
};

export default BlockRaw;
