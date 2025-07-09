import { useState } from 'react';

export default function Tabs({ contentTabs, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(currentIndex) {
    setCurrentTabIndex(currentIndex);
    if (onChange) onChange(currentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {contentTabs.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? 'active' : ''}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {contentTabs[currentTabIndex] && contentTabs[currentTabIndex].content}
      </div>
    </div>
  );
}
