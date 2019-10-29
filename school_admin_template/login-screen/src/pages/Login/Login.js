import React, { Component } from 'react';

import './Login.css';
import schoolLogo from '../../assets/img/Kids-school-logo.jpg';

export default class Login extends Component {
  render() {
    return(
        <div className="login_page_background">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 col-md-6">
                        <div className="card" id="login-card">
                            <div className="card-body">
                                <div className="row justify-content-center text-center">
                                    <div className="col-12">
                                        <img src={schoolLogo} className="logoSchool" />
                                    </div>
                                </div>
                                
                                <form action="" className="login_page_form">
                                    <div className="row justify-content-center">
                                        <div className="form-group col-12 col-lg-10 col-md-10">
                                            <label htmlFor="loginEmail">E-mail</label>
                                            <input type="email" name="loginEmail" id="loginEmail" placeholder="Enter with your e-mail" className="form-control input_login_form"/>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="form-group col-12 col-lg-10 col-md-10">
                                            <label htmlFor="passwordLogin">Password</label>
                                            <input type="password" name="passwordLogin" id="passwordLogin" placeholder="Enter with your password" className="form-control input_login_form"/>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <div className="col-10 form-group">
                                            <button type="button" className="btn btn-primary btn-block">Enter</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>  
    );
  }
}
