import React from 'react'; 

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {'name': ''}
		this.submitHandle = this.submitHandle.bind(this);
		this.changeHandle = this.changeHandle.bind(this);
	}

	submitHandle(event) {
		event.preventDefault();
		this.props.addTodo(this.state['name']);
	}

	changeHandle(event) {
		this.setState({'name': event.target.value})
	}

	render() {
		return (
			<form onSubmit={this.submitHandle}>
				<input type="text" onChange={this.changeHandle} />
			</form>
		)
	}
} 

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.clickHandle = this.clickHandle.bind(this);
	}

	clickHandle(event) {
		event.preventDefault();
		this.props.removeTodo(this.props.todo.id);
	}

	render() {
		return (
			<div>
				<a href='#' onClick={this.clickHandle}>{this.props.todo.name}</a>
				<br/>
			</div>
		)
	}
}

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var rows = [];
		const removeTodo = this.props.removeTodo;
		this.props.todos.forEach(function(todo) {
			rows.push(<Todo todo={todo} key={todo.id} removeTodo={removeTodo}/>);
		});
		return (
			<div>
				{rows}
			</div>
		)
	}
}

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {'todos': []}
		this.removeTodo = this.removeTodo.bind(this);	
		this.addTodo = this.addTodo.bind(this);
	}

	removeTodo(id) {
		const todos = this.state.todos.filter(function (todo) {
			if (todo.id !== id) {
				return todo
			}
		})
		this.setState({'todos': todos});
	}

	addTodo(name) {
		const current = new Date().getTime();
		const todo = {'name': name, 'id': current};
		this.state.todos.push(todo);
		this.setState({'todos': this.state.todos});
	}

    render() {
        return (
        	<div>
        		<TodoForm addTodo={this.addTodo}/>
        		<TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
        	</div>
        )
    }
}
 
export default TodoApp;
