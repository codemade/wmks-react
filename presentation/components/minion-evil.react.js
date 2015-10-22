const React = require("react");

var MinionEvil = React.createClass({
  render: function() {
    return (
    <div className="container">
      <div className="evil">

				<ul className="evil_hair">
					<li className="eh1"></li>
					<li className="eh2"></li>
					<li className="eh3"></li>
					<li className="eh4"></li>
					<li className="eh5"></li>
				</ul>

				<div className="eyes">
					<div className="eye_animate"></div>

					<div className="glasses"></div>
						<div className="white_part">
							<div className="brown_eye">
								<span className="black_part"></span>
							</div>
						</div>
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

				<div className="evil_mouth">
					<span className="evil_teeth"></span>
					<span className="evil_teeth1"></span>
				</div>

				<div className="clothes">
					<div className="right_shirt evil_right_shirt"></div>
					<div className="right_shirt evil_left_shirt"></div>
					<div className="evil_bottom"></div>
					<div className="evil_logo"><p>M</p></div>
				</div>

				<div className="legs">
					<div className="evil_right_leg"></div>
					<div className="evil_right_leg evil_left_leg"></div>
					<div className="shoes evil_right_shoes"><span className="small_shoes"></span></div>
					<div className="shoes evil_left_shoes"><span className="small_shoes"></span></div>
				</div>


				<div className="evil_hand">
					<div className="evil_rh">
						<span className="evil_gloves_rh"></span>
					</div>
					<div className="evil_lh">
						<span className="evil_gloves_lh"></span>
					</div>
				</div>
			</div>
    </div>);
  }
});

module.exports = MinionEvil;
