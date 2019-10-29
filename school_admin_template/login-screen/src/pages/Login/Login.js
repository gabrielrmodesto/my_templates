import React, { Component } from 'react';

import './Login.css';
import schoolLogo from '../../assets/img/Kids-school-logo.jpg';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
           loginEmail: '',
           passwordLogin: ''
        }
    }
    handleSubmitForm = (event) => {
        event.preventDefault();
        this.setState({
            loginEmail: event.target.value,
            passwordLogin: event.target.value
        })
        
        if((this.state.loginEmail === 'email@email.com') && (this.state.passwordLogin === '123')){
            console.log('acertou');
        }else{
            console.log('errou');
        }
    }
    render() {
        console.log(this.state);
        return(
            <div className="login_page_background">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="card" id="login-card">
                                <div className="card-body">
                                    <div className="row justify-content-center text-center">
                                        <div className="col-12">
                                            <img src={schoolLogo} className="logoSchool" alt="Logo from school" />
                                        </div>
                                    </div>
                                    
                                    <form onSubmit={this.handleSubmitForm} className="login_page_form">
                                        <div className="row justify-content-center">
                                            <div className="form-group col-12 col-lg-10 col-md-10">
                                                <label htmlFor="loginEmail">E-mail</label>
                                                <input type="email" name="loginEmail" id="loginEmail" placeholder="Enter with your e-mail" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="form-group col-12 col-lg-10 col-md-10">
                                                <label htmlFor="passwordLogin">Password</label>
                                                <input type="password" name="passwordLogin" id="passwordLogin" placeholder="Enter with your password" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center text-center">
                                            <div className="col-12 col-lg-10 form-group">
                                                <button className="btn btn-primary btn-block" id="loginBtn">Enter</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row justify-content-center text-center">
                                        <div className="col-6 form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="remember-me" />
                                                <label className="custom-control-label" htmlFor="remember-me">Remember-me</label>
                                            </div>
                                        </div>
                                        <div className="col-6 form-group">
                                            <a href="#" id="forgotpassword">Forgot Password?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-12 form-group" id="signup">
                            Don't have an account?<a href="#" id="createaccount"> Signup Now!</a>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}
