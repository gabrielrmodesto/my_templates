import React from 'react';
import './Register.css';

const Register = () => (
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-12">
				<div className="card">
					<div className="card-body">
						<form method="post">
							<div className="row justify-content-center">
								<div className="col-10 form-group">
									<label htmlFor="registerName">Name</label>
									<input type="text" name="registerName" id="registerName" className="form-control"/>
								</div>
								<div className="col-10 form-group">
									<label htmlFor="registerEmail">E-mail</label>
									<input type="email" name="registerEmail" id="registerEmail" className="form-control"/>
								</div>
								<div className="col-10 form-group">
									<label htmlFor="registerPassword">Password</label>
									<input type="password" name="registerPassword" id="registerPassword" className="form-control"/>
								</div>
							</div>
							<div className="row justify-content-center text-center">
								<div className="col-10">
									<button type="submit" className="btn btn-primary btn-block" id="registerButton">Register</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
);

export default Register;