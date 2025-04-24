

import React from 'react';
import { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        error: false
    }

    componentDidCatch (err, errInfo) {
        console.log(err, errInfo);

        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            return <h2>Something went wrong</h2>
        }

        return this.props.children;
    }
}

export default ErrorBoundary