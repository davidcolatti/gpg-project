import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import UserList from './components/UserList';

class App extends Component {
	state = {
		authorList: null
	};

	async componentDidMount() {
		let res = await axios.get('https://jsonplaceholder.typicode.com/users');
		console.log(res.data);

		this.setState({
			authorList: res.data
		});
	}

	render() {
		return (
			<div className="App">
				<Header />

				<div className="UserList segment ui middle aligned divided list">
					{this.state.authorList ? <UserList authorList={this.state.authorList} /> : ''}
				</div>

				<Switch>
					<Route exact path="/detail/:id" />
				</Switch>
			</div>
		);
	}
}

export default App;
