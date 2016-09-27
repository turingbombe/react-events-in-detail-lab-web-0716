const React = require('react')

class DelayedButton extends React.Component{
	onDelay(event){
		event.persist()
		setTimeout(()=> this.props.onDelayedClick(event),this.props.delay)
	}
	render(){
		return(
			<button onClick={this.onDelay.bind(this)}> Another button </button>
		)
	}
}

// DelayedButton.defaultProps = {
// 	onDelayedClick: function(array){
// 		console.log(array)
// 	},
// 	delay: 500
// }
module.exports = DelayedButton