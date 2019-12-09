import React from "react";

export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError(error) {
    console.warn(error);
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <div>Something went wrong!</div> : children;
  }
}
