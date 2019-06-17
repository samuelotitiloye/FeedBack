import React, { Component } from 'react';
import { connect } from 'react-redux';


class Content extends Component {
    state = {
        content: '',
      }

    handleClick =()=>{
        this.props.history.push('/3')
        const action= {type: 'ADD_CONTENT_RATING', payload: this.state.content}
        this.props.dispatch(action) 
      }

      one = () => {
        this.setState({
          content: '1'
        })
      }

      two = () => {
        this.setState({
            content: '2'
        })
      }

      three = () => {
        this.setState({
            content: '3'
        })
      }

      four = () => {
        this.setState({
            content:'4'
        })
      }

      five = () => {
        this.setState({
            content: '5'
        })
      }
      
  render() {
    return (
        <div>
        <header>
        <h4>How well are you understanding the content?</h4>
        </header>
        <input type="radio" name="option" className="nameInputs" value="1" onClick={this.one}/>
        <label className="nameInputs">1      </label>
        <input type="radio" name="option" className="nameInputs"value="2"onClick={this.two}/>
        <label className="nameInputs">2      </label>
        <input type="radio" name="option" className="nameInputs"value="3"onClick={this.three}/>
        <label className="nameInputs">3      </label>
        <input type="radio" name="option" className="nameInputs"value="4"onClick={this.four}/>
        <label className="nameInputs">4      </label>
        <input type="radio" name="option" className="nameInputs"value="5"onClick={this.five}/>
        <label className="nameInputs">5      </label>
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

export default connect(mapReduxStateToProps)(Content);