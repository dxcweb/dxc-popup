/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import style from './test.css';

class test extends React.PureComponent {
  renderMask = () => {
    const { mask = true, isOpen, onMaskClick, maskColor = 'rgba(0, 0, 0, 0.5)', isRender } = this.props;
    return (
      <div
        onClick={onMaskClick}
        css={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: maskColor,
          opacity: 1,
          transition: 'opacity 0.3s ease-in-out',
          zIndex: 4401,
        }}
      ></div>
    );
  };
  render() {
    return (
      <div style={{ height: '100%', background: 'red' }}>
        <div style={{ height: '200vh', background: 'red' }}></div>
        {/* {this.renderMask()} */}
      </div>
    );
  }
}
export default test;
