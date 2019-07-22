import React from 'react';
import classnames from "classnames";
import './SearchBox.css'

const SearchBox = ({searchChange, name, text, upperText, clickToChoose, keyDown, suggestions, showSuggestions, onButtonSubmit, active}) => {
	return (
		<div className ='pa2'>
			<p className = 'garamond fw7 green f3'> {upperText} </p>
			<input
				className = 'w-30 pa3 ba b--gray bw1 br4 dim bg-light-green tc '
				type ='search' 
				placeholder = {text}
				onChange = {searchChange} 
				value = {name}
			/>
			{ (showSuggestions || searchChange) 
				? 
				suggestions.length 
					? 
					<div className = 'flex content-center justify-center'>
						<ul className = 'suggestions pa3 bw1 br2'>
							{
								suggestions.map((suggestion, index) => {
									let className = false;
									if (index === active) {
										className = true
									}
									return (
										<li key = {index} className = { classnames({"suggestion-active": className} )} onClick = {clickToChoose}>
											{suggestion}
										</li>
									);
								})
							}
						</ul>
					</div>
					:
						<div className = 'no-suggestions'>
							
						</div>
				:
				''
			}

		</div>
	);
}

export default SearchBox;