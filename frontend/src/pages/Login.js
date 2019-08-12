import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
    state = {
        username: ''
    };

    handlerSubmit = event => {
        event.preventDefault();

        const { username } = this.state;

        if (!username.length) return;

        localStorage.setItem('@GoTwitter:username', username);

        this.props.history.push('/timeline');
    };

    handlerInputChange = event => {
        this.setState({ username: event.target.value });
    };

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handlerSubmit}>
                    <input placeholder="Nome de usuário" value={this.state.username} onChange={this.handlerInputChange} />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}
