import React        from 'react';
import bindAll      from 'lodash/function/bindAll';

import Validator    from './validator';

var inputValidators = [
    {
        validator(login, params) {
            if (login) {
                return Promise.resolve();
            }

            return Promise.reject(params.message);
        },
        params: {
            message: 'Field is required'
        }
    }
];

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        bindAll(this, ["onInputChange"]);
    }

    onInputChange(e) {
        this.setState({
            login: e.target.value
        })
    }

    render () {
        return (
            <Validator
                value={this.state.login}
                onStart={() => {
                    console.log('Validation start');
                }}
                onEnd={(isValid, message) => {
                    console.log('validation end:', isValid, message);
                }}
                validators={inputValidators}>
                <input type="text" value={this.state.login} onChange={this.onInputChange} />
            </Validator>
        );
    }
}