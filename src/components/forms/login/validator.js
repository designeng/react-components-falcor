import React from 'react';
import Valya from 'valya';

@Valya
export default class Validator extends React.Component {
    static displayName = 'Validator';

    renderError() {
        if (!this.props.enabled || this.props.isValid) {
            return null;
        }

        return (
            <span className="validator__error" key="error">
                {this.props.validationErrorMessage}
            </span>
        );
    }

    render () {
        return (
            <span className="validator">
                <span className="validator__target" key="target">
                    {this.props.children}
                </span>
                {this.renderError()}
            </span>
        );
    }
}