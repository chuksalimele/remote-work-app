import React from "react";
import classnames from "classnames";
import styled from "styled-components";
import Alert from "react-feather/dist/icons/alert-triangle";

const Fallback = React.memo(styled(({ className }) => (
  <div className={classnames("error-boundary", className)}>
    <Alert color="orange" size={48} />
    <span>Oops! Something went wrong...</span>
  </div>
))`
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  width: 200px;
  height: 200px;
  align-items: center;
  align-content: center;
  justify-content: center;

  span {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.25rem;
    color: #333;
  }
`);

export default class extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.logErrorToRemoteService(error, errorInfo);
  }

  logErrorToRemoteService(error, errorInfo) {
    //TODO
  }

  render() {
    return this.state.hasError ? <Fallback /> : this.props.children;
  }
}
