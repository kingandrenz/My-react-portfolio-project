import { useRef, useState } from 'react';
import useOutsideClick from './test.jsx'; // make sure this path is correct

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {
        showContent ? (
          <div ref={ref}>
            <h1>something</h1>
            <p>testing outside click</p>
          </div>
        ) : (
          <button onClick={() => setShowContent(true)}>Show content</button>
        )
      }
    </div>
  );
}
