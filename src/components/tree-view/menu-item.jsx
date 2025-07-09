import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import MenuList from './menu-list';

export default function MenuItem({ item }) {
  const hasChildren = !!item?.children?.length;
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(label) {
    setDisplayCurrentChildren(prev => ({
      ...prev,
      [label]: !prev[label],
    }));
  }

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>

        {hasChildren && (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        )}
      </div>

      {hasChildren && displayCurrentChildren[item.label] && (
        <MenuList list={item.children} />
      )}
    </li>
  );
}
