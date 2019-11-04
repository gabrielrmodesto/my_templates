import React from 'react';
import Login from './pages/Login/Login';
import Home from './pages/Home/';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Login} />
			<Route path='/home' component={Home} />
		</Switch>
	</main>
);

export default Main;