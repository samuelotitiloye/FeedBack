import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Comment extends Component {
    state = {
        comment: '',
    }

    handleClick = () => {
      console.log('comment away');
        this.props.history.push('/5')
        const action = {type: 'ADD_COMMENT_RATING', payload: this.state.comment}
        this.props.dispatch(action)
    }

    handleChange = (event) => {
      this.setState({
        comment:event.target.value
      });
    }
    render() {
      return (
        <div className="Comment">
            <header className="Comment-header">
            </header>
            <h4>Any comment you want to leave?</h4>
            <textarea type="textbox" id="commentBox" onChange={this.handleChange}/>
            <br/>
            <button onClick={this.handleClick}>Next</button>
          <br/>
        </div>
      );
    }
  } 

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapReduxStateToProps)(Comment);


