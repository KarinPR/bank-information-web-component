import React from 'react';

import './Card.css'

const Card = ({bankInfo, location}) => {
	const imageURL = location
	return (
		<div className='grid tc bg-light-green br3 pa3 ma2  bw2 shadow-5 '>
			<div>
				<table className ="table-info pa3">
					<thead>
						<tr>
						    <th colSpan = '2' > {bankInfo.Bank_Name} - {bankInfo.Branch_Code}</th> 
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Bank Number: </th>
							<td>{bankInfo.Bank_Code}</td> 
						</tr>
						<tr>
							<th>Branch Name: </th>
							<td>{bankInfo.Branch_Name}</td> 
						</tr>
						<tr>
							<th>Branch Address: </th>
							<td> {bankInfo.Branch_Address} - {bankInfo.City} </td> 
						</tr>
						<tr>
							<th>ZIP Code: </th>
							<td> {bankInfo.Zip_Code} </td> 
						</tr>
						<tr>
							<th>PO Box: </th>
							<td> {bankInfo.POB} </td> 
						</tr>
						<tr>
							<th>Telephone Number: </th>
							<td> {bankInfo.Telephone} </td> 
						</tr>
						<tr>
							<th>Fax Number: </th>
							<td> {bankInfo.Fax} </td> 
						</tr>
						<tr>
							<th>Toll Free Number: </th>
							<td> {bankInfo.Free_Tel} </td> 
						</tr>
						<tr>
							<th>Handicap Access: </th>
							<td> {bankInfo.Handicap_Access} </td> 
						</tr>
						<tr>
							<th>Day Closed: </th>
							<td> {bankInfo.day_closed} </td> 
						</tr>						
					</tbody>
				</table>
			</div>
			<div  className = 'map-style  ph2' >
				<img alt='banks' src={imageURL}  style={{ height: 'max-content', width: '35vw', border: '4px solid #555555' }}/>
			</div>
		</div>
	);
}

export default Card;