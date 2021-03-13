import * as React from "react";

type Action = { type: "increment" } | { type: "decrement" };
type Dispatch = (action: Action) => void;
type State = { cutCount: number };
type ToolBarProviderProps = { children: React.ReactNode };

const ToolBarStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function toolBarReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment": {
      return { cutCount: state.cutCount + 1 };
    }
    case "decrement": {
      return { cutCount: state.cutCount - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}
function ToolBarProvider({ children }: ToolBarProviderProps) {
  const [state, dispatch] = React.useReducer(toolBarReducer, { cutCount: 0 });

  const value = { state, dispatch };
  return (
    <ToolBarStateContext.Provider value={value}>
      {children}
    </ToolBarStateContext.Provider>
  );
}

function useToolBarContext() {
  const context = React.useContext(ToolBarStateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
export { ToolBarProvider, useToolBarContext };
