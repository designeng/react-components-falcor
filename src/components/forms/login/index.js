import React        from 'react';
import bindAll      from 'lodash/function/bindAll';

import Validator    from './validator';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        bindAll(this, ["onInputChange"]);
    }

    onInputChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render () {
        return (
            <Validator
                value={this.state.value}
                onStart={() => {
                    console.log('Validation start');
                }}
                onEnd={(isValid, message) => {
                    console.log('validation end:', isValid, message);
                }}
                validators={[
                    {
                        validator(value, params) {
                            if (value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(params.message);
                        },
                        params: {
                            message: 'Field is required'
                        }
                    }
                ]}>
                <div>
                    <input type="text" value={this.state.value} onChange={this.onInputChange} />
                </div>
            </Validator>
        );
    }
}