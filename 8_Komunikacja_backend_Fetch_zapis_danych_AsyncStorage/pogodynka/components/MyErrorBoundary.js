import React from "react";
import Test from "./Test";

class MyErrorBoundary extends React.Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError(error) {
        return {hasError: true};
    };
    componentDidCatch(error, errorInfo) {
        // A custom error logging function
        console.log(error, errorInfo);
    };
    render() {
        return this.state.hasError ? <Test /> : this.props.children;
    }
}

export default MyErrorBoundary;