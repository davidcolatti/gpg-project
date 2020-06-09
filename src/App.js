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
			authorList: res.data,
			authorSelected: res.data[0]
		});
	}

	setAuthorToState = (author) => {
		console.log(author);

		this.setState({
			authorSelected: author
		});
	};

	render() {
		return (
			<div className="App">
				<Header authorSelected={this.state.authorSelected} />

				<div className="UserList segment ui middle aligned divided list">
					{this.state.authorList ? (
						<UserList setAuthorToState={this.setAuthorToState} state={this.state} />
					) : (
						''
					)}
				</div>

				<Switch>
					<Route exact path="/author/:id" />
				</Switch>
			</div>
		);
	}
}

export default App;
