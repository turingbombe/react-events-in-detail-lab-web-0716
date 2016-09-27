const React = require('react')

class CoordinatesButton extends React.Component{

	onLocale(event){
		let x = event.clientX
		let y = event.clientY
		this.props.onReceiveCoordinates([x,y])
	}

	render(){
		return(
			<div>
				<button onClick = {this.onLocale.bind(this)}>BUTTON</button>
			</div>
		)
	}
}

CoordinatesButton.defaultProps = {
	onReceiveCoordinates: function(array){
	  console.log(array)
	}
}

module.exports = CoordinatesButton