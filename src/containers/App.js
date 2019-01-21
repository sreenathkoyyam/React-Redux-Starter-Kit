import React, {Component} from 'react';
import InputPreview from '../components/firstPage/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';

class App extends Component {

	_onChange = (value) => {
		this.props.dispatch(setMessage(value))
	}

    render () {
        console.log(this.props)
    	const {message} = this.props.rootReducer.message;

        return (
        	<div>
                <InputPreview
                    value={message}
                    onChange={this._onChange}/>
                <Link to="/about">
                    <button>Go to About</button>
                </Link>
            </div>
        )
    }
}

export default connect(state => state)(App);