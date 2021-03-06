const React = require("react");


var Minion = React.createClass({
	getStyles(mood) {
		var styles= {
			background: 'url(minions/' + mood + '.png) no-repeat',
			backgroundSize: '150px',
			width: '200px',
			height: '200px',
			position: 'relative',
			textAlign: 'center'
		};
		return styles;
	},
	render() {
		var styles = this.getStyles(this.props.mood);
		var textStyles = {
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '200px',
			fontSize:'18px',
			fontWeight: 'bold',
			color: 'white'
		};

		return <div>
			<div style={styles}>
				<div style={textStyles}>Hey I'm {this.props.name}<br />and I am {this.props.mood}!</div>
			</div>
		</div>;
	}
});

module.exports = Minion;
