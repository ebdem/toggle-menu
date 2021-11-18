import React, { useRef } from 'react';
import './style.css';
import { HomeOutlined } from '@ant-design/icons';

export default function App() {
  const [active, setActive] = React.useState(true);
  const wrapperRef = useRef(null);
  function handleClick() {
    setActive(!active);
  }
  return (
    <div ref={wrapperRef} className={active ? 'wrapper' : 'is-nav-open'}>
      <div className="nav">
        <HomeOutlined className="nav__icon" onClick={handleClick} />
        <div>
          Lorem One of them is to create a wrapper above navigation and to
          trigger changes in margin. The navigation has constant width equal
          250px. And the wrapper with margin-left or translateX property with
          the same width. When we need to show the navigation we have to add
          className="is-nav-open" for the wrapper and move the wrapper on
          margin-left/translateX:
        </div>
        {/*  <i
          className="nav__icon"
          type="menu-fold"
          onClick={() => handleClick()}
        />
        */}
      </div>
    </div>
  );
}
