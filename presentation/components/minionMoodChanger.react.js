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
			width: '300px',
			margin: '0 auto'
		};
		return <div style={styles}> 
			<Minion name="Bill" mood={this.state.currentMood} />
			<select onChange={this.onMoodChanged}>{moods}</select>
		</div>;
	}
});

module.exports = MinionMoodChanger;