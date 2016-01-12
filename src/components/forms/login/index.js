import React        from 'react';
import bindAll      from 'lodash/function/bindAll';
import connectModel from 'connect-data-decorator';

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

@connectModel({
    sourcePath: '/user/model.json'
})
export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        bindAll(this, ['onInputChange', 'onEnter']);
    }

    onValidationStart() {}

    onValidationEnd(isValid, message) {
        console.log('validation end:', isValid, message);
        if (isValid) {

        }
    }

    onInputChange(e) {
        this.setState({
            login: e.target.value
        })
    }

    onEnter() {
        this.context.model.setValue('login', this.state.login)
            .then(response => {
                console.log("LOGIN RESPONSE::::", response);
            })
    }

    render () {
        return (
            <Validator
                value={this.state.login}
                onStart  ={this.onValidationStart}
                onEnd    ={this.onValidationEnd}
                validators={inputValidators}>
                <input type="text" value={this.state.login} onChange={this.onInputChange} />
                <input type="button" onClick={this.onEnter} disabled={!this.state.login}/>
            </Validator>
        );
    }
}