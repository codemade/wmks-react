const React = require("react");
import Son from './catChild.react.js';

var styles = {
	height: '400px',
	position: 'relative',
	backgroundImage: 'url('+'./presentation/img/catFather.png'+')',
	backgroundSize:'350px',
	backgroundRepeat:'no-repeat'
};

var buttonStyles = {
	backgroundColor: '#e74c3c',
	borderRadius: '5px',
	padding: '5px',
	border: 'none',
	outline: 'none',
	float: 'left',
	color: 'white'
};

var Father = React.createClass({
	getInitialState() {
		return {caughtMiceCount:0};
	},
	catchMouse() {
		this.setState({caughtMiceCount: this.state.caughtMiceCount+1});
	},
	render() {
		return <div style={styles}>
			<Son miceCount={this.state.caughtMiceCount}/>	
			<button onClick={this.catchMouse} style={buttonStyles}>Catch a mouse</button>
		</div>;
	}
});

module.exports = Father;