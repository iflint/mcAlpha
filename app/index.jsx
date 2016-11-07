import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './components/home.jsx'

import stylesheet from './style.scss'
import database from './database.js'


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
				<Route path='*' component={NotFound}/>
			</Router>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))