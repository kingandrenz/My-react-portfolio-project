import Tabs from './tabs';
import './style.css';

export default function TabTest() {
  function RandomComponent() {
    return <h1>some random comp</h1>;
  }

  const tabs = [
    {
      label: "tab 1",
      content: <div>content for tab1</div>
    },
    {
      label: "tab 2",
      content: <div>content for tab2</div>
    },
    {
      label: "tab 3",
      content: <RandomComponent />
    }
  ];
  
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs contentTabs={tabs} onChange={handleChange} />;
}
