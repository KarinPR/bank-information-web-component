import React, { Component } from 'react';
import Card from '../Components/Card/Card';
import SearchBox from '../Components/SearchBox/SearchBox';
import Footer from '../Components/Footer/Footer';

import './App.css'
import logo from './logo.jpg';

const initialState = {
	bankName : '',
	activeSuggestion: 0,
	nameSuggestions: [],
	showSuggestions: false,
	showBranchSuggestions: false,
	branchNumber: '',
	branchNumberSuggetion: [],
	isMouseInside: false,
	bankInfo: {},
	imageUrl: '',
	route: 'choose',
}

class App extends Component {
	constructor () {
		super()
		this.state = initialState
	}

	componentDidMount() {

	}
	// Event executed when the user puts his input
	onBankSearchChange = (event) => {
		this.setState({ bankName: event.target.value })
		console.log(this.state.bankName)
		fetch('http://localhost:3000/search-bank-name', {
		    method: 'post',
		    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'},
		    body: JSON.stringify({
		        input: this.state.bankName
		    })
	    })
	    .then(response => response.json())
	    .then( names => {
	    	this.setState({ 
	    		activeSuggestion: 0, 
	    		nameSuggestions: [...names], 
	    		showSuggestions: true,
	    		showBranchSuggestions: false, 
	    	})
	    })	
	}

	// When an item is chosen
	//Bank
	onClickToChooseBank = (event) => {
	    this.setState({ 
			activeSuggestion: 0, 
			nameSuggestions: [], 
			showSuggestions: false,
			branchNumberSuggetion: this.state.branchNumberSuggetion,
			showBranchSuggestions: true,
	    	bankName: event.currentTarget.innerText
    	})	
	}
	//Barnch
	onClickToChooseBranch = (event) => {
		this.setState({ 
			activeSuggestion: 0, 
			branchNumberSuggetion: [], 
			showSuggestions: false, 
			showBranchSuggestions: true,
			branchNumber: event.target.innerText 
		});
	}



	onBranchSearchChange = (event) => {
		fetch('http://localhost:3000/search-branch-number', {
		    method: 'put',
		    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'},
		    body: JSON.stringify({
		        bankName: this.state.bankName,
		        input: event.target.value
		    })
	    })
	    .then(response => response.json())
	    .then( numbers => {
	    	this.setState({ 
	    		activeSuggestion: 0, 
	    		branchNumberSuggetion: [...numbers], 
	    		showBranchSuggestions: true 
	    	})
	    })	
	}
	onButtonSubmit = () => {
		this.setState({bankName : this.state.bankName, branchNumber: this.state.branchNumber})
		if (!this.state.bankName) {
			alert('Please Choose Vlid Bank name')
		}
		fetch('http://localhost:3000/bank-information', {
		    method: 'post',
		    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin' : '*'},
		    body: JSON.stringify({
		        bankName: this.state.bankName,
		        branchNumber: this.state.branchNumber
		    })
	    })
	    .then(response => response.json())
	    .then( bank => {
	    	this.setState({ bankInfo: bank[0]})
	    	console.log('hi')
	    	fetch('http://localhost:3000/google-location-image', {
			    method: 'put',
			    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'},
			    body: JSON.stringify({
			    	bankName: this.state.bankName,
			        bankInfo: this.state.bankInfo
			    })
		    })
		    .then(response => response.json())
		    .then( imageBase => {
		    	if (this.state.bankName.length > 0 ) {
			    	this.setState({ imageUrl : imageBase, route: 'final', bankName : [], branchNumber: [] })
			    	console.log(this.state.imageUrl)    		
		    	}
		    })
	    })

	}

		// When key pressed
	onKeyDown = (event) => {
	    const { activeSuggestion, nameSuggestions, branchNumberSuggetion } = this.state;
        if (event.keyCode === 13) {
		    this.setState({
		    	activeSuggestion: 0,
		        showSuggestions: false,
		        showBranchSuggestions: true,
		        bankName: nameSuggestions[activeSuggestion],
		        branchNumber: branchNumberSuggetion[activeSuggestion]
			});
	    } else if (event.keyCode === 38) { // up arrow
	    	if (activeSuggestion === 0) {
	    		return
	    	}
	    	this.setState({activeSuggestion : activeSuggestion - 1})
	    } else if (event.keyCode === 40) {
	    	if(activeSuggestion - 1 === nameSuggestions.length) {
	    		return
	    	}
	    	this.setState({activeSuggestion : activeSuggestion + 1})
	    }
	}
	onClickClear = () => {
		window.location.reload()
	}

	render () {
		const { route, bankName, branchNumber, bankInfo, imageUrl,  branchNumberSuggetion, activeSuggestion, nameSuggestions, showSuggestions, showBranchSuggestions } = this.state;

		return (
			<div className = 'ma4'>
				<div className = 'tc'>
					<h1 className = 'f1 green'> Israeli Bank Information </h1>
					<div >
						{ route === 'choose'
							? <div className = 'vh-50 justify-center items-center'>
								<div >
									<SearchBox 
										searchChange = {this.onBankSearchChange} 
										name = {bankName} 
										clickToChoose = {this.onClickToChooseBank} 
										keyDown = {this.onKeyDown} 
										suggestions = {nameSuggestions} 
										showSuggestions = {showSuggestions} 
										active = {activeSuggestion}
										text = {'Search Bank Name'}
										upperText = {'1 - Please start typing your desired Bank Name'}
									/>
									<SearchBox 
										searchChange = {this.onBranchSearchChange} 
										name = {branchNumber} 
										clickToChoose = {this.onClickToChooseBranch} 
										keyDown = {this.onKeyDown} 
										suggestions = {branchNumberSuggetion} 
										showSuggestions = {showBranchSuggestions} 
										active = {activeSuggestion}
										text = {'Search Branch Number'}
										upperText = {'2 - Choose your Branch Number'}
									/>
								</div>
								<div>
									<button 
										className = 'w-20 f4 link no-underline bw1 br3 ba bg-green b--gray yellow mv4 ph3 pv2 mb2 dib black shadow-5 garamond b f2' 
										onClick = {this.onButtonSubmit} > Find 
									</button>
								</div>
							</div>
							: 
							(route === 'final'
								? <div>
									<div className = 'vh-50 justify-center items-center mv5 pv3'>
										<li className = 'list mh1'> <i className="fas fa-redo-alt redo" style = {{fontSize: '1.5rem', color: 'rgba(0, 0, 0, 0.7)'}} onClick = {this.onClickClear}></i></li>
										<Card bankInfo = {bankInfo} location = {imageUrl}/>
									</div>
								</div>
									
								: <div> 
									<img src = {logo} className="App-logo ma6" alt="logo" />
								</div>
							)
						}
					</div>
					<div className="tc items-baseline mv5 pv2">
						<Footer/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;