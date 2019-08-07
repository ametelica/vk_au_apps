import React from 'react';
import PropTypes from 'prop-types';

class Time extends React.Component {
	constructor(props) {
		super(props)
		this.state={
    		time: null,
    		city: this.props.city
		}
	}

	componentDidMount() {
 	   this.timeUpdate()
	}

	timeUpdate = () => setInterval(() => {
    	this.setState({time: new Date().toLocaleTimeString()})
	}, 1000);

	render() {
		return (
			<div style={{
	            border: "8px solid", 
	            borderImage: "linear-gradient(-45deg, #743ad5, #d53a9d) 1"
	        }}>
            Время в городе {this.state.city}:<br/>
            {this.state.time}
        </div>
		)
	}
}

Time.propTypes = {
	city: PropTypes.string.isRequired
}

export {Time};