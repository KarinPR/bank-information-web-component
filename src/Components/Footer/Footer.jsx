import React from 'react';


import { Row, Col } from "reactstrap";


const Footer = () => {
	return (
		<div className = 'section z-2 ' style = {{ borderTop: '2px solid var(--success)' }}>
			<div className = 'w-100 content-around mb0' style = {{}}>
				<div className = ''>
					<Row className = 'inline-flex'>
						<Col lg = '12'>	
				        {/*<FollowButtons/>*/}
							<div className = 'tc flex h1 v-btm pt4 ma4 ' >
								{/*LinkedIn*/}
								<div className = 'tc br-100 mh3 ' style = {{ opacity: '0.9', height: '2.5rem', width: '2.3rem' }}>
									<a className = "  " href="https://www.linkedin.com/in/karin-povolozki-rabichev-690456187/" target="_blank"  rel="noopener noreferrer" title="LinkedIn">
									<i className = "fab fa-linkedin" style = {{fontSize: '1.5rem', color: 'rgba(0, 0, 0, 0.7)'}}></i>
							    	{/*<span className="f6 db"></span>*/}
							  		</a>
							  	</div>
								{/*GitHub*/}
								<div className = 'tc br-100 mh3' style = {{ opacity: '0.9', height: '2.5rem', width: '2.3rem' }}>		
									<a className="" href="https://github.com/KarinPR" target="_blank"  rel="noopener noreferrer" title="GitHub">
									<i className="fab fa-github" style = {{fontSize: '1.5rem', color: 'rgba(0, 0, 0, 0.7)'}}></i>							    
									</a>
								</div>
								{/*Website*/}
								<div className = 'tc br-100 mh3' style = {{opacity: '0.9', height: '2.5rem', width: '2.3rem' }}>
									<a className="" href="https://karin-personal-website.herokuapp.com/" target="_blank"  rel="noopener noreferrer" title="My Website">
										<i className="fas fa-link" style = {{fontSize: '1.5rem', color: 'rgba(0, 0, 0, 0.7)'}}></i>
									</a>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg = '12'>
							<div className = 'tc gray o-80 tracked ma1'>
							&copy; 2019, Designed and Coded by <span style = {{fontWeight: '650'}}> Karin Povolozki - Rabichev </span>
							<br/>
							</div>		
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default Footer;