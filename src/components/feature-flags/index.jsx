import { useContext } from 'react';
import { FeatureFlagContext } from './path/to/context';

import LightDarkMode from './components/LightDarkMode';
import TicTacToeBoard from './components/TicTacToeBoard';
import RandomColorGenerator from './components/RandomColorGenerator';
import Accordion from './components/Accordion';
import TreeView from './components/TreeView';

export default function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: 'showLightDarkMode',
      component: <LightDarkMode />
    },
    {
      key: 'showTicTacToeBoard',
      component: <TicTacToeBoard />
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColorGenerator />
    },
    {
      key: 'showAccordion',
      component: <Accordion />
    },
    {
      key: 'showTreeView',
      component: <TreeView />
    }
  ];

  function checkEnabledFlags(currentKey) {
    return enableFlags[currentKey];
  }

  if (loading) {
    return <div>Please wait! Data is loading!!!</div>;
  }

  return (
    <div>
      {componentsToRender.map((item, index) =>
        checkEnabledFlags(item.key) ? <div key={index}>{item.component}</div> : null
      )}
    </div>
  );
}
