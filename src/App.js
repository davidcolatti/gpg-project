import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import UserList from './components/UserList';

const App = () => {
	const [ authorList, setAuthorList ] = useState(() => null);
	const [ authorSelected, setAuthorSelected ] = useState(() => null);

	useEffect(async () => {
		let res = await axios.get('https://jsonplaceholder.typicode.com/users');
		console.log(res.data);

		setAuthorList(res.data);
		setAuthorSelected(res.data[0]);
	}, []);

	return (
		<div className="App">
			<Header authorSelected={authorSelected} />

			<div className="UserList segment ui middle aligned divided list">
				{authorList ? <UserList setAuthorSelected={setAuthorSelected} authorList={authorList} /> : ''}
			</div>

			<Switch>
				<Route exact path="/author/:id" />
			</Switch>
		</div>
	);
};

export default App;
