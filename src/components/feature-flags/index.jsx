import { useContext } from "react";
import { FeatureFlagContext } from "./context/index_c.jsx";

import LightDarkMode from "../light-dark-mode/index.jsx";
import TicTacToeBoard from "../tic-tac-toe/index.jsx";
import RandomColorGenerator from "../random_color/index.jsx";
import Accordion from "../accordion/index.jsx";
import TreeView from "../tree-view/index.jsx";

export default function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    { key: "showLightDarkMode", component: <LightDarkMode /> },
    { key: "showTicTacToeBoard", component: <TicTacToeBoard /> },
    { key: "showRandomColorGenerator", component: <RandomColorGenerator /> },
    { key: "showAccordion", component: <Accordion /> },
    { key: "showTreeView", component: <TreeView /> },
  ];

  if (loading) {
    return <div>Please wait! Data is loading!!!</div>;
  }

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "20px", padding: "10px", alignItems: "center"}}>
      {componentsToRender.map((item) =>
        enableFlags[item.key] ? <div key={item.key} style={{padding: "4px", marginLeft:"5px"}}>{item.component}</div> : null
      )}
    </div>
  );
}
