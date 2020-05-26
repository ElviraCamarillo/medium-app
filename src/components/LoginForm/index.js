import React, { Component } from 'react';

import './LoginForm.css'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            success: false
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput({ target: { name, value } }) {
        this.setState({
            [name]: value
        })        
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('envoandp datos')
        const { email, password } = this.state
        const dataCredentials = {
            email,
            password
        }
        this.props.validateCredentials(dataCredentials)

        //
    }

    render() {
        const { email, password } = this.state
        return (
            <>
                {/* {NavBar Login SECTION} */}
                <div className="navbar-login navbar-dark navbar-expand-md"></div>
                {/* { FLOAT LOGIN SECTION} */}
                <div className="float-login d-flex">
                    <div className="container-login">
                    <div className="card-login card">
                    {/* {alerta ? (
                        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
                        ) : null} */}
                        <h1 className="title-session-login">Welcome</h1>
                        <hr />
                        <form className="card-body-login card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                            type="email"
                            id="email"
                            name={"email"}
                            placeholder="Your email here"
                            className="form-control"
                            value={ email }
                            onChange={ this.handleInput }
                            />
                            <div className="align-error">
                            {/* {alerta ? (
                                <div className={`alerta ${alerta.categoria}`}>
                                {alerta.msg}
                                </div>
                            ) : null}
                            */}
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                            type="password"
                            id="password"
                            name={"password"}
                            className="form-control"
                            placeholder="*****"
                            value={ password }
                            onChange={ this.handleInput }
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-dark text-white"
                            style={{
                            fontSize: "14px",
                            fontWeight: "560",
                            paddingTop: "5px",
                            paddingBottom: "auto",
                            }}
                        >
                            Log in
                        </button>
                        </form>
                        <div className="register-inlogin-section">
                        </div>
                    </div>
                    </div>
                </div>
            </>

        );
    }
}

export default LoginForm;