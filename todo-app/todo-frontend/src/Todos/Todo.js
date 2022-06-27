import React from 'react'

const Todo = ({ todo, doneInfo, notDoneInfo, counter }) => {
  console.log(todo)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '70%',
        margin: 'auto',
      }}
    >
      <span>{todo.text} using docker containers vs code app</span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
}
export default Todo
