import React from "react";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      //
      return <div>Something went wrong. Please try again later.</div>;
      //   return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
