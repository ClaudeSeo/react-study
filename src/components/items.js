import React from 'react';

class AddTodo extends React.Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="..."/>
			</form>
		)
	}
}

class TodoRow extends React.Component {
	constructor(props) {
	super(props);
		this.state = {checked: ''};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({checked: event.target.checked});
	}
	render() {
		var name = this.props.todo.name
		return (
			<tr>
				<td>
					<input type='checkbox' onChange={this.handleChange}/>
					</td>
				<td>{name}</td>
			</tr>
		)
	}
}

class TodoTable extends React.Component {
	render() {
		var rows = [];
		this.props.todos.forEach(function(todo, i) {
			rows.push(<TodoRow todo={todo} key={i}/>);
		});
		return (
			<table>
				<thead>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
}

module.exports = {
	'TodoTable': TodoTable
}