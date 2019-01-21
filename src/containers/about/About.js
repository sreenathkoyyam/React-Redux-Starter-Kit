import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setMessage} from '../../actions/message';
import InputPreview from '../../components/firstPage/InputPreview';

class About extends React.Component {
_onChange = (value) => {
		this.props.dispatch(setMessage(value))
	}
	render () {
	const {name} = 'jjjj';
		return (
			<div>
				<InputPreview
                    value={name}
                    onChange={this._onChange}/>
				<Link to="/">
                    <button>Go Home</button>
                </Link>
			</div>
		)
	}
}

export default connect(state => state)(About);