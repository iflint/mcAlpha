import React from 'react'
import logo from './logo.svg'

class TopBar extends React.Component {
	render() {
		return (
			<div>
				<div className="mainContainerBorderless topBar">
				    <img className="logoPic" src={logo}/>
				    <a className="logoText" href="/">menucamp</a>
				    <div className="topRight">
					    <a className="accountButton" href="/logout">Log Out</a>
					</div>
				</div>

				<div className="dashBar"></div>
				<div className="dashMenu">
					<div className="dashMenuInner">
						<a className="dashMenuItem" href="/#/dashboard">Dashboard</a>
						<a className="dashMenuItem" href="/#/settings">Settings</a>
						<a className="dashMenuItem" href="/#/builder">Builder</a>
					</div>
				</div>
			</div>
		)
	}
}

export default TopBar