const React = require("react");

var MinionJerry = React.createClass({
  render: function() {
    return (
    <div className="container">
      <div className="jerry">
				<div className="lights">
					<span className="white_light"></span>
					<span className="dark_light"></span>
				</div>
				<div className="jerry_hair">
					<ul>
					<li className="h1"></li>
					<li className="h2"></li>
					<li className="h3"></li>
					<li className="h4"></li>
					<li className="h5"></li>
					<li className="h6"></li>
					<li className="h7"></li>
					<li className="h8"></li>
					<li className="h9"></li>
					<li className="h10"></li>
					<li className="h11"></li>
					<li className="h12"></li>
					</ul>
				</div>

				<div className="eyes1">
					<div className="eye_animate"></div>

					<div className="glasses"></div>
						<div className="white_part">
							<div className="brown_eye">
								<span className="black_part"></span>
							</div>
						</div>
				</div>

				<div className="eyes2">
					<div className="eye_animate"></div>

					<div className="glasses"></div>
						<div className="white_part">
							<div className="brown_eye">
								<span className="black_part"></span>
							</div>
						</div>
				</div>

				<div className="jerry_hand">
					<div className="jerry_lh"></div>
					<div className="animated_lh">
						<span className="gloves_lh"></span>
						<span className="gloves_lh2"></span>
					</div>

					<div className="jerry_rh"></div>
					<span className="gloves_rh"></span>
				</div>

				<div className="black_tie">
					<span className="right_tie">
						<div className="top_tie"></div>
						<div className="down_tie"></div>
					</span>
					<span className="left_tie">
						<div className="top_tie"></div>
						<div className="down_tie"></div>
					</span>
				</div>

				<div className="jerry_smile">
					<span className="teeth1"></span>
					<span className="teeth2"></span>
				</div>

				<div className="curves">
					<span className="jerry_curve1"></span>
					<span className="jerry_curve1 jerry_left_curve"></span>
					<span className="jerry_curve2"></span>
				</div>

				<div className="clothes">
					<div className="main_jerry"></div>
					<div className="right_shirt jerry_right_shirt"></div>
					<div className="right_shirt jerry_left_shirt"></div>
					<div className="jerry_bottom"></div>
				</div>

				<div className="pocket">
					<div className="logo"></div>
					<span className="lines"></span>
				</div>

				<div className="legs">
					<div className="jerry_shoes"><span className="jerry_small_shoes"></span></div>
					<div className="jerry_shoes jerry_left_shoes"><span className="jerry_small_shoes"></span></div>
				</div>
			</div>
    </div>);
  }
});

module.exports = MinionJerry;
