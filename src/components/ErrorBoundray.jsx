import React, { Component } from 'react';

export class ErrorBoundray extends Component {
    constructor() {
        super();
        this.state = {
            hasErrored: false,
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }
    componentDidCatch(error, infor) {
        console.log(error);
    }
    render() {
        if (this.state.hasErrored) {
            return (
                <div>this page is broken</div>
            )
        }
        return this.props.children;

    }
}

export default React.memo(ErrorBoundray);