import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    state = {
        support: '',
      }
    handleClick =()=>{
      console.log('in handleClick');
        this.props.history.push('/4')
        const action= {type: 'ADD_SUPPORT_RATING', payload: this.state.support}
        this.props.dispatch(action)
        }

      
      one = () => {
        this.setState({
          support: '1'
        })
      }

      two = () => {
        this.setState({
            support: '2'
        })
      }

      three = () => {
        this.setState({
            support: '3'
        })
      }

      four = () => {
        this.setState({
            support: '4'
        })
      }

      five = () => {
        this.setState({
            support: '5'
        })
      }

  render() {
    return (
        <div>
        <header>
        <h4>How well are you being supported?</h4>
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
        <br/>
        <br/>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapReduxStateToProps)(Support);