var React = require('react');

module.exports = React.createClass({
	render: function() {



		return(
			<div className="police">
				<p>Batmans already behind you!</p>
				<img src={'/assets/batman.png'} alt='batman' className='bat-img'/>

			</div>
		)
	}
})
