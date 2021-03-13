import * as React from "react";

import { useToolBarContext } from "../../contexts/tool-bar";

import Cut from "./tools/cut";
import Copy from "./tools/copy";
import Paste from "./tools/paste";

export default function ToolBar() {
  const { state, dispatch } = useToolBarContext();

  function increment(event: KeyboardEvent) {
    if (event.key === "x" && event.ctrlKey) {
      dispatch({ type: "increment" });
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", increment);

    return () => window.removeEventListener("keydown", increment);
  }, []);

  return (
    <div>
      {state.cutCount < 3 && <Cut />}
      <Copy />
      <Paste />
    </div>
  );
}
