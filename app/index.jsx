import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import stylesheet from './style.scss'

class Home extends React.Component {
	render () {
		return <div>home</div>
	}
}

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