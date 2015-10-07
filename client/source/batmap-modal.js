var React = require('react');
var Modal = require('react-modal');
var ModalForm = require('./form')
var PoliceNumber = require('./police')

var customStyles = {
  content: {
    boardColor: 'black',
    backgroundColor: 'grey',
    width: '225px',
    height: '500px'
  }
}


module.exports = React.createClass({

  getInitialState: function() {
    return {
      modalIsOpen: false,
      lifeThreatening: false
    };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  handleModalCloseRequest: function() {
    this.setState({modalIsOpen: false});
  },

  handleInputChange: function() {
    this.setState({lifeThreatening: !this.state.lifeThreatening})
  },

  render: function() {
    return (
      <div className="buttonform">
        <img src={'/assets/BatMapButton.png'} alt="batman" className="img-responsive" onClick={this.openModal} />
        <Modal
          style={customStyles}
          closeTimeoutMS={100}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalCloseRequest}>
          <h1>Is your crime life threatening?</h1>
          <form>
            <input type="radio" name="crime" value="yes" onChange={this.handleInputChange} checked={this.state.lifeThreatening}>Yes</input>
            <input type="radio" name="crime" value="no" onChange={this.handleInputChange} checked={!this.state.lifeThreatening}>No</input>
            <br/>
          </form>
          {this.state.lifeThreatening ? <PoliceNumber  /> : <ModalForm closeModal={this.closeModal} />}
           <img src={'/assets/batclose.png'} alt="batman" className="img-close" onClick={this.closeModal} />
        </Modal>
      </div>
    );
  }
});



