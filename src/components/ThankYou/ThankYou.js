import React, { Component } from 'react';
import { connect } from 'react-redux';


class ThankYou extends Component {
    state = {
      thankYou:'',
    }

    handleClick = () => {
      console.log('thank you');
        this.props.history.push('/') //pushes to the next page with all the data
        const action = {type: 'SUBMIT_THANKYOU_RATING',  payload:this.state.thankYou}
        this.props.dispatch(action)
        }
   
  render() {
    return (
      <div>
        <header>
        <h4>Thank You for submitting feedback</h4>
        </header>
        <button onClick={this.handleClick}>Submit Feedback</button>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapReduxStateToProps)(ThankYou);