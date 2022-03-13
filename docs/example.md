
## example

Demo:

```tsx
import React from "react";
import Popup from "dxc-popup";
import "dxc-normalize-css";
class demo extends React.PureComponent {
  state = {
    isOpen: false,
    position: undefined,
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
  handleOpen = (position) => {
    this.setState({ position, isOpen: true });
  };
  renderContent = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      items.push(
        <div key={i} style={{ height: 40, minWidth: 200 }}>
          {i}
        </div>,
      );
    }
    return <div style={{ maxHeight: "40vh",  overflowY: 'auto' }} >{items}</div>;
  };
  render() {
    const { isOpen, position } = this.state;
    return (
      <div>
        <div onClick={this.handleOpen.bind(this)}>底部弹出</div>
        <div onClick={this.handleOpen.bind(this, "top")}>顶部弹出</div>
        <div onClick={this.handleOpen.bind(this, "left")}>左侧弹出</div>
        <div onClick={this.handleOpen.bind(this, "right")}>右侧弹出</div>
        <div style={{height:'200vh'}} ></div>
         <div onClick={this.handleOpen.bind(this)}>底部弹出</div>
        <div onClick={this.handleOpen.bind(this, "top")}>顶部弹出</div>
        <div onClick={this.handleOpen.bind(this, "left")}>左侧弹出</div>
        <div onClick={this.handleOpen.bind(this, "right")}>右侧弹出</div>
        <Popup
          title='标题'
          isOpen={isOpen}
          position={position}
          onClose={this.handleClose}
          onMaskClick={this.handleClose}
        >
          {this.renderContent()}
        </Popup>
      </div>
    );
  }
}
export default demo;


```
