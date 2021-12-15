import React from 'react';
import { TodoList } from './components/TodoList/TodoList';

import { User } from './types/User';
import { TodoPrepared } from './types/TodoPrepared';

import './App.scss';

import users from './api/users';
import todos from './api/todos';

const preparedTodos = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId);

  return {
    user: user || null,
    ...todo,
  };
});

type State = {
  users: User[],
  todos: TodoPrepared[],
  todoTitle: string,
  selectedUserId: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    users: [...users],
    todos: [...preparedTodos],
    todoTitle: '',
    selectedUserId: 0,
  };

  handleAddTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      todoTitle: event.target.value,
    });
    // eslint-disable-next-line
    console.log(this.state.todoTitle);
  };

  handleSelecte = (event :React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedUserId: Number(event.target.value),
    });
    // eslint-disable-next-line
    console.log(this.state.selectedUserId);
  };

  handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    this.setState((state) => ({
      todos: [
        ...state.todos,
        {
          userId: state.selectedUserId,
          id: state.todos.length + 1,
          title: state.todoTitle,
          completed: false,
          user: users.find(person => person.id === state.selectedUserId) || null,
        },
      ],
    }));
    // eslint-disable-next-line
    console.log(this.state.todos);
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <div className="App__form-wrapper">
          <form className="App__form" onSubmit={this.handleSubmit}>
            <label className="App__title" htmlFor="title">
              Enter todo title:
              <input
                id="title"
                className="App__input-title"
                type="text"
                name="title"
                placeholder="Todo title"
                onChange={this.handleAddTitle}
              />
            </label>

            <label className="App__select-user" htmlFor="users">
              Select user:
              <select
                className="App__select"
                name="users"
                id="users"
                onChange={this.handleSelecte}
              >
                <option
                  className="App__option"
                  value="0"
                  key="0"
                  selected
                >
                  Choose user
                </option>
                {
                  this.state.users.map(user => (
                    <option
                      className="App__option"
                      value={user.id}
                      key={user.id}
                    >
                      {user.name}
                    </option>
                  ))
                }
              </select>
            </label>

            <button className="App__button" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="App__todos-wrapper">
          <TodoList todoList={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
