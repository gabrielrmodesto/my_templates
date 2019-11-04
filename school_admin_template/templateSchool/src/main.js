import React from 'react';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/home' component={Home} />
		</Switch>
	</main>
);

export default Main;