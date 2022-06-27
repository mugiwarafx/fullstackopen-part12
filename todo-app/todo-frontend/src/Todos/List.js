import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  let counter = 0
  return (
    <>
      {todos
        .map((todo) => {
          counter++

          const doneInfo = (
            <div>
              <span>This todo is done</span>
              <span>
                <button onClick={onClickDelete(todo)}> Delete </button>
              </span>
            </div>
          )

          const notDoneInfo = (
            <div>
              <span>This todo is not done</span>
              <span>
                <button onClick={onClickDelete(todo)}> Delete </button>
                <button onClick={onClickComplete(todo)}> Set as done </button>
              </span>
            </div>
          )

          return (
            <Todo
              key={`${counter}`}
              counter={counter}
              todo={todo}
              doneInfo={doneInfo}
              notDoneInfo={notDoneInfo}
            />
          )
        })
        .reduce(
          (acc, cur) => [
            ...acc,
            <hr key={Math.random() + Math.random()} />,
            cur,
          ],
          []
        )}
    </>
  )
}

export default TodoList
