import React from "react";

import Copy from "./tools/copy";
import Cut from "./tools/cut";
import Paste from "./tools/paste";

export default function ToolBar() {
  return (
    <div>
      <Cut />
      <Copy />
      <Paste />
    </div>
  );
}
