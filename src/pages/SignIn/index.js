import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import { logIn } from '../../Services/user'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sucess: false
        }
        this.validateCredentials = this.validateCredentials.bind(this)
    }

    async validateCredentials(dataCredentials){
        const response = await logIn(dataCredentials)
        const responseJSON = await response.json()
        console.log(responseJSON)

        if(responseJSON.sucess) {
            //console.log('token here:', responseJSON.data.token)
            localStorage.setItem("authTokenUser", responseJSON.data.token)
            this.setState({
                success: true
            })
        } else if(!responseJSON.sucess) {
            this.setState({
                success: false
            })
        }

    }

    render() {
        const { success } = this.state;
        if (success) {
          window.location.href = "/";
        }
        return (
          <div>
            <LoginForm validateCredentials={this.validateCredentials}/>
          </div>
        );
    }
}

export default SignIn;