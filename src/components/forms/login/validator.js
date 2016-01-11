import React from 'react';
import Valya from 'valya';

import styles from './Login.css';

@Valya
export default class Validator extends React.Component {
    static displayName = 'Validator';

    renderError() {
        if (!this.props.enabled || this.props.isValid) {
            return null;
        }

        return (
            <span className={styles.error} key="error">
                {this.props.validationErrorMessage}
            </span>
        );
    }

    render () {
        return (
            <span className={styles.validator}>
                <span className={styles.target} key="target">
                    {this.props.children}
                </span>
                {this.renderError()}
            </span>
        );
    }
}