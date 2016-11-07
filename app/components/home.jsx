import React from 'react'

import mainPic from './blueflame.jpg'
import logo from './logo.svg'

class Home extends React.Component {
	render () {
		// const listItems = database.map(function(item, i) {
		// 	return <div className='listedItem' key={i}>{item.title}</div>
		// })


		return (
			<div className='allHome'>
				<div className="mainContainerBorderless topBar">
				    <img src={logo} className="logoPic"/>
				    <a className="logoText" href="/">menucamp</a>
				    <div className="topRight">
					    <a className="accountButton" href="/#/login">Log In</a>
					    <a className="accountButton" href="/signup">Sign Up</a>
					</div>
				</div>

				<div className="mainContainerBorderless">
					<img src={mainPic} className="headerPic"/>
				</div>

				<div className="mainContainerBorderless">
					<div className="centerTitle">Online ordering made easy</div>
					<div className="centerParagraph">With Menucamp, you can start accepting orders in minutes. First you will be prompted to make an account with Stripe, our payment processor. When finished, input your restaurant's offerings with our menu builder. Then just choose a style template and your menu will be ready to take orders online.</div>
				</div>

				<div className="mainContainer">
					<div className="mcTitle">
						<div className="mcTitleInner">Pricing</div>
					</div>
					<div className="mcBody">
						<div className="spaceRow"></div>
						<div className="centerTitle">$0 monthly fees</div>
						<div className="centerTitle">+</div>
						<div className="centerTitle">2% per transaction</div>
						<div className="centerTitle">+</div>
						<div className="centerTitle">Credit card processing</div>
						<div className="spaceRow"></div>
					</div>
				</div>

				<div className="mainContainerBorderless">
					<div className="centerTitle">Online ordering made easy</div>
					<div className="centerParagraph">With Menucamp, you can start accepting orders in minutes. First you will be prompted to make an account with Stripe, our payment processor. When finished, input your restaurant's offerings with our menu builder. Then just choose a style template and your menu will be ready to take orders online.</div>
				</div>

				<div className="footer"></div>
			</div>
		)
	}
}

export default Home