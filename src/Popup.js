/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import shouldRender from './shouldRender';
import Hammer from 'hammerjs';
import close from './close.png';

@shouldRender()
class Popup extends React.PureComponent {
  componentDidMount() {
    this.createHammer();
    this.setScroll();
  }
  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.props;
    const { isOpen: prevIsOpen } = prevProps;
    if (isOpen !== prevIsOpen) {
      this.setScroll();
    }
  }
  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }
  createHammer() {
    const { onClose } = this.props;
    const mc = new Hammer.Manager(this.container);
    mc.add(new Hammer.Swipe());
    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    const { position = 'bottom' } = this.props;
    if (position === 'left') {
      mc.on('swipeleft', onClose);
    } else if (position === 'right') {
      mc.on('swiperight', onClose);
    } else if (position === 'top') {
      mc.on('swipeup', onClose);
    } else {
      mc.on('swipedown', onClose);
    }
  }
  setScroll = () => {
    const { isOpen } = this.props;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  renderMask = () => {
    const { mask = true, isOpen, onMaskClick, maskColor = 'rgba(0, 0, 0, 0.5)', isRender } = this.props;
    if (!mask || !isRender) return null;
    return (
      <div
        onClick={onMaskClick}
        ref={(me) => (this.mask = me)}
        css={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: maskColor,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          zIndex: 4401,
          overscrollBehavior: 'contain',
        }}
      ></div>
    );
  };
  positionCss = () => {
    const { isOpen, position = 'bottom', borderRadius = 5 } = this.props;
    if (position === 'left') {
      return { bottom: 0, left: 0, top: 0, transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' };
    } else if (position === 'right') {
      return { bottom: 0, right: 0, top: 0, transform: isOpen ? 'translateX(0)' : 'translateX(100%)' };
    } else if (position === 'top') {
      return { top: 0, left: 0, right: 0, transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' };
    } else {
      return {
        bottom: 0,
        left: 0,
        right: 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      };
    }
  };
  renderTitle = () => {
    const { title, onClose } = this.props;
    if (!title) return null;
    return (
      <React.Fragment>
        <div css={{ height: 50, color: '#1a1a1a', fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            css={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: 1,
              marginLeft: 15,
            }}
          >
            {title}
          </div>
          <div onClick={onClose} css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', width: 46 }}>
            <img css={{ width: 16, height: 16 }} src={close} alt='' />
          </div>
        </div>
        <div css={{ margin: '0 15px', borderBottom: '1px solid #efefef' }}></div>
      </React.Fragment>
    );
  };
  onClickWp = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  render() {
    const { children, className, style } = this.props;
    return (
      <React.Fragment>
        {this.renderMask()}
        <div
          onClick={this.onClickWp}
          ref={(me) => (this.container = me)}
          css={{
            position: 'fixed',
            transition: 'transform 0.3s ease-in-out',
            zIndex: 4401,
            background: '#fff',
            ...this.positionCss(),
          }}
          className={className}
          style={style}
        >
          {this.renderTitle()}

          {children}
        </div>
      </React.Fragment>
    );
  }
}
export default Popup;
