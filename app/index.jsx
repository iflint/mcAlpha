import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './components/home.jsx'
import Dashboard from './components/dashboard.jsx'
import Builder from './components/builder.jsx'
import Settings from './components/settings.jsx'

import stylesheet from './style.scss'

class Login extends React.Component {
	render () {
		return <div>login</div>
	}
}

class NotFound extends React.Component {
	render () {
		return <div>404</div>
	}
}

class App extends React.Component {
	render () {
		return (

			<Router history={hashHistory}>
				<Route path='/' component={Home}/>
				<Route path='login' component={Login}/>
				<Route path='dashboard' component={Dashboard}/>
				<Route path='builder' component={Builder}/>
				<Route path='settings' component={Settings}/>
				<Route path='*' component={NotFound}/>
			</Router>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))