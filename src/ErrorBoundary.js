import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <h1>Oops!, there was an error {this.state.error.message}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
