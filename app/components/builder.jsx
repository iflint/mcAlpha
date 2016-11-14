import React from 'react'
import database from './database.js'
import TopBar from './topBar.jsx'


class Categories extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			items: database
		}
	}

	editState = (newItemData) => {
		this.setState({
			items: newItemData
		})
	}

	addCategory = (counter) => {
		var newData = {
			items: [{
				title: 'NewCategory',
				type: 'title'
			}]
		}
		let postAdd = this.state.items
		postAdd.splice(counter, 0, newData)
		this.setState({
			items: postAdd
		})
	}

	deleteCategory = (counter) => {
		let postDelete = this.state.items
		postDelete.splice(counter, 1)
		this.setState({
			items: postDelete
		})
	}

	addRow = (counter) => {

	}

	editTitle = (counter) => {

	}

	render() {
		let listCategories = this.state.items.map((item, i) => {
			return (
				<div key={i}>
					<div className="mainContainer">
						<div className="mcBody">
							

							<ItemList category={i} list={item.items} fullState={this.state.items} editState={this.editState}/>

							<div className="spaceRow">
								<div className="deleteSection" onClick={() => this.deleteCategory(i)}> - Delete Section</div>
							</div>
						</div>
					</div>
					<div className="mainContainer newMC" onClick={() => this.addCategory(i + 1)}> + Add New Section</div>
				</div>

			)

		})
		return (
			<div>
				<div className="mainContainer newMC" onClick={() => this.addCategory(0)}> + Add New Section</div>
				{listCategories}
			</div>
		)
	}
}

class ItemList extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			items: this.props.fullState

		}
	}

	newPickType = (counter) => {
		let initialItems = this.state.items[this.props.category].items
		let initialItemData = {
			title: 'New Item',
			type: 'pickType',
			price: 0,
			desc: ''
		}
		initialItems.splice(counter, 0, initialItemData)
		let newDB = this.state.items
		newDB[this.props.category].items = initialItems
		this.props.editState(newDB)
	}
	editItem = (counter) => {
		let initialItems = this.state.items
		initialItems[this.props.category].items[counter].type = 'editItem'
		this.props.editState(initialItems)
	}
	editTitle = (counter) => {
		let initialItems = this.state.items
		initialItems[this.props.category].items[counter].type = 'editTitle'
		this.props.editState(initialItems)
	}
	editSubtitle = (counter) => {
		let initialItems = this.state.items
		initialItems[this.props.category].items[counter].type = 'editSubtitle'
		this.props.editState(initialItems)
	}
	saveEditItem = (counter, title, price, desc) => {
		let initialItems = this.state.items[this.props.category].items
		let initialItemData = {
			title: title,
			type: 'item',
			price: price,
			desc: desc
		}
		initialItems.splice(counter, 1, initialItemData)
		let newDB = this.state.items
		newDB[this.props.category].items = initialItems
		this.props.editState(newDB)
	}
	saveEditTitle = (counter, title) => {
		let initialItems = this.state.items[this.props.category].items
		let initialItemData = {
			title: title,
			type: 'title'
		}
		initialItems.splice(counter, 1, initialItemData)
		let newDB = this.state.items
		newDB[this.props.category].items = initialItems
		this.props.editState(newDB)
	}
	saveEditSubtitle = (counter, subtitle) => {
		let initialItems = this.state.items[this.props.category].items
		let initialItemData = {
			title: subtitle,
			type: 'subtitle',
			price: '',
			desc: ''
		}
		initialItems.splice(counter, 1, initialItemData)
		let newDB = this.state.items
		newDB[this.props.category].items = initialItems
		this.props.editState(newDB)
	}
	deleteItem = (counter) => {
		let initialItems = this.state.items[this.props.category].items
		initialItems.splice(counter, 1)
		let newDB = this.state.items
		newDB[this.props.category].items = initialItems
		this.props.editState(newDB)
	}

	render () {
		let listItems = this.props.list.map((item, i) => {
			if (item.type == 'item') {
				return (
					<div key={i}>
						<div className="menuRow">
							<div className="orderColumn">
								<div className="atcCircle">+</div>
								<div className="atcPrice">$<span className="itemPrice">{item.price}</span></div>
							</div>
							<div className="menuColumn">
								<div className="leftTitle">{item.title}</div>
								<div className="itemDesc">{item.desc}</div>
							</div>
							<div className="insertRow">
								<div className="addRow" onClick={() => this.newPickType(i + 1)}>Add Row</div> | 
								<div className="editRow" onClick={() => this.editItem(i)}>Edit Row</div> | 
								<div className="deleteRow" onClick={() => this.deleteItem(i)}>Delete</div>
							</div>
						</div>
					</div>
				)
			} else if (item.type == 'editItem') {
				return (
					<div key={i}>
						<div className="menuRow">
							<div className="orderColumn">
								<div className="atcCircle">+</div>
							</div>
							<div className="menuColumn">
								<ItemForm item={item} counter={i} submitForm={this.saveEditItem} deleteItem={() => this.deleteItem(i)}/>
							</div>
						</div>
					</div>
				)
			} else if (item.type == 'pickType') {
				return (
					<div key={i}>
						<div className="editTitleContain">
							<span>Pick Row Type:</span>
							<button className="pickRowType" onClick={() => this.editItem(i)}>Item</button>
							<button className="pickRowType" onClick={() => this.editSubtitle(i)}>Subtitle</button>
							<button className="pickRowType" onClick={() => this.deleteItem(i)}>Cancel</button>
						</div>
					</div>
				)
			} else if (item.type == 'title') {
				return (
					<div key={i}>
						<div className="menuRow">
						  <div className="centerTitle">{item.title}</div>
						  <div className="insertRow">
							  <div className="addRow" onClick={() => this.newPickType(i + 1)}>Add Row</div> | 
							  <div className="editTitle" onClick={() => this.editTitle(i)}>Edit Title</div>
						  </div>
					  </div>
					</div>
				)
			} else if (item.type == 'editTitle') {
				return (
					<div key={i}>
						<div className="menuRow">
							<TitleForm item={item} counter={i} submitForm={this.saveEditTitle}/>
						</div>
					</div>
				)
			} else if (item.type == 'subtitle') {
				return (
					<div key={i}>
						<div className="menuRow">
							<div className="orderColumn"></div>
							<div className="menuColumn">
								<div className="menuSubtitle">{item.title}</div>
							</div>
							<div className="insertRow">
								<div className="addRow" onClick={() => this.newPickType(i + 1)}>Add Row</div> | 
								<div className="editSubtitle" onClick={() => this.editSubtitle(i)}>Edit Subtitle</div> | 
								<div className="deleteSubtitle" onClick={() => this.deleteItem(i)}>Delete</div>
							</div>
						</div>
					</div>
				)
			} else if (item.type == 'editSubtitle') {
				return (
					<div key={i}>
						<div className="menuRow">
							<div className="orderColumn"></div>
							<div className="menuColumn">
								<SubtitleForm item={item} counter={i} submitForm={this.saveEditSubtitle} deleteItem={() => this.deleteItem(i)}/>
							</div>
						</div>
					</div>
				)
			}
		})

		return (
			<div>
				{listItems}
			</div>
		)
	}
}

class TitleForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.item.title
		}
	}
	handleChange = (event) => {
		console.log(event.target.value)
		this.setState({
			title: event.target.value
		})
	}
	handleClick = () => {
		this.props.submitForm(this.props.counter, this.state.title)
	}

	render () {
		return (
			<div className="editTitleContain">
				<input className="editTitleInput" type="text" defaultValue={this.state.title} onChange={this.handleChange}/>
				<button className="editTitleButton" type="button" onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
}

class SubtitleForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			subtitle: this.props.item.title
		}
	}
	handleChange = (event) => {
		console.log(event.target.value)
		this.setState({
			subtitle: event.target.value
		})
	}
	handleClick = () => {
		this.props.submitForm(this.props.counter, this.state.subtitle)
	}

	render () {
		return (
			<div className="editSubtitleContain">
				<input className="editSubtitleInput" type="text" defaultValue={this.state.subtitle} onChange={this.handleChange}/>
				<button className="editSubtitleButton" onClick={() => this.handleClick()}>Submit</button>
				<button className="cancelRowType" onClick={this.props.deleteItem}>Cancel</button>
			</div>
		)
	}
}

class ItemForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.item.title,
			desc: this.props.item.desc,
			price: this.props.item.price
		}
	}
	handleChange = (event, name) => {
		let newVals = {}
		newVals[name] = event.target.value
		console.log(newVals)
		this.setState(newVals)
		console.log(this.state)
	}
	handleClick = (e) => {
		this.props.submitForm(this.props.counter, this.state.title, this.state.price, this.state.desc)
	}
	render () {
		return (
			<div>
				<input className="itemTitleInput" type="text" defaultValue={this.state.title} onChange={(event) => this.handleChange(event, 'title')}/>
				<textarea className="itemDescInput" defaultValue={this.state.desc} onChange={(event) => this.handleChange(event, 'desc')}/>
				$<input className="itemPriceInput" type="number" defaultValue={this.state.price} onChange={(event) => this.handleChange(event, 'price')}/>
				<button className="addRowFinal" type="button" onClick={() => this.handleClick()}>Save</button>
				<button className="cancelAddRow" type="button" onClick={this.props.deleteItem}>Delete</button>
			</div>
		)
	}
}


class Builder extends React.Component {
	render () {
		return (
			<div className="allBuilder">

				<TopBar />

				<div className="spaceRow"></div>
				<div className="spaceRow"></div>

				<div className="centerTitle">Your Menu</div>

				<Categories />

				<div className="footer"></div>

			</div>
		)
	}
}

export default Builder