import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// main routes
import AppRoutes from './containers/routes';

import store from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>,
	 document.getElementById('root')
)