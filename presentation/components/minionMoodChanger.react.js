const React = require("react");
const Minion = require("./minion.react.js");

var moods = ['happy', 'hungry', 'sad', 'shy', 'sporty', 'amazed', 'crazy'];

var MinionMoodChanger = React.createClass({
	getInitialState() {
		return {currentMood: 'happy'};
	},
	getMoodOptions() {
		return moods.map((mood) => {
			return <option value={mood}>{mood}</option>;
		});
	},
	onMoodChanged(event) {
		let newMood = event.target.value;
		this.setState({currentMood: newMood});
	},
	render() {
		let moods = this.getMoodOptions();
		let styles = {
			width: '200px',
			margin: '0 auto',
			textAlign: 'center'
		};
		let selectStyle = {
			border: '1px solid blue',
			color: 'black',
			width: '200px'
		};
		return <div style={styles}>
			<select style={selectStyle} onChange={this.onMoodChanged}>{moods}</select>
			<br />
			<br />
			<Minion name="Bill" mood={this.state.currentMood} />
		</div>;
	}
});

module.exports = MinionMoodChanger;
