const React = require("react");


var Minion = React.createClass({
	getStyles(mood) {
		var styles= {
			background: 'url(presentation/img/minions/' + mood + '.png) no-repeat',
			backgroundSize: '150px',
			width: '150px',
			height: '200px',
			position: 'relative'
		};		
		return styles;
	},
	render() {
		var styles = this.getStyles(this.props.mood);
		var textStyles = {
			position: 'absolute',
			bottom: 0,
			left: 0,
			fontSize:'22px',
			fontWeight: 'bold',
			color: 'white'
		};

		return <div> 
			<div style={styles}>
				<div style={textStyles}>Hy i'm {this.props.name} and i'm {this.props.mood}!</div>
			</div>
		</div>;
	}
});

module.exports = Minion;