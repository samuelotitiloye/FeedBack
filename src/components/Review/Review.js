import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {
  state = {
    feedback: {},
  }

  handleClick = () => {
    this.props.history.push('/6'); //this will push to the thankYou page.
    const action = { type: 'ADD_REVIEW_RATING', payload: this.state.feedback }
    this.props.dispatch(action);
    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        feeling: this.props.reduxState.feelingReducer,
        understanding: this.props.reduxState.contentReducer,
        support: this.props.reduxState.supportReducer,
        comments: this.props.reduxState.commentReducer
      }
    }).then((response) => {
      console.log(response.data);
    })
  }// 



render() {
  return (
    <div className="Review">
      <h5>Review your feedback</h5>
      <h6>Feeling:{this.props.reduxState.feelingReducer}</h6>
      <h6>Understanding:{this.props.reduxState.contentReducer}</h6>
      <h6>Support:{this.props.reduxState.supportReducer}</h6>
      <h6>Comments:{this.props.reduxState.commentReducer}</h6>
      <br />
      <button onClick={this.handleClick}>Submit</button>
      <br />
    </div>
  )
}
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Review);


