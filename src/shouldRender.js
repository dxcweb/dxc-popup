import React from 'react';
export default () => {
  return (WrappedComponent) => {
    class NewComponent extends React.PureComponent {
      state = {
        isOpen: false,
        isRender: false,
      };
      componentDidMount() {
        this.modifyIsOpen();
      }
      componentDidUpdate(prevProps, prevState) {
        const { isOpen } = this.props;
        const { isOpen: prevIsOpen } = prevProps;
        if (isOpen !== prevIsOpen) {
          this.modifyIsOpen();
        }
      }
      modifyIsOpen = () => {
        const { isOpen, duration = 300 } = this.props;
        if (isOpen) {
          this.setState({ isRender: true });
          this.timeout2 = setTimeout(() => {
            this.setState({ isOpen: true });
          });
        } else {
          this.setState({ isOpen: false });
          this.timeout = setTimeout(() => {
            this.setState({ isRender: false });
          }, duration);
        }
      };
      componentWillUnmount() {
        clearTimeout(this.timeout);
        clearTimeout(this.timeout2);
      }
      render() {
        const { destroyOnClose = true, ...other } = this.props;
        const { isOpen, isRender } = this.state;
        if (destroyOnClose && !isRender) return null;
        return <WrappedComponent {...other} isOpen={isOpen} isRender={isRender} />;
      }
    }
    return NewComponent;
  };
};
