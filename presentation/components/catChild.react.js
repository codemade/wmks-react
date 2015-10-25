const React = require("react");

var styles = {
	width: '300px',
	height: '300px',
	position: 'absolute',
	right: '0',
	bottom: '0',
	backgroundImage: 'url('+'./presentation/img/cat.png'+')',
	backgroundSize:'250px',
	backgroundRepeat:'no-repeat'
};

var messageStyles = {
	backgroundColor:'#27ae60',
	borderRadius:'4px',
	padding: '5px',
	color: 'white'
};

var Son = React.createClass({
	render() {
		return <div style={styles}>
			<div style={messageStyles}>
				Thanks, i'll eat all ({this.props.miceCount})
			</div>
		</div>;
	}
});

module.exports = Son;