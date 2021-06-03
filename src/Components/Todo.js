import React from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

function Todo({ todo, deleteToDo }) {
	useEffect(() => {
		toast.success(`New todo added: ${todo.text}`)
		return () => {
			toast.error(`Todo deleted: ${todo.text}`)
		}
	}, [])

	return (
		<div>
			<li className='todos'>
				{todo.text}
				<button onClick={() => deleteToDo(todo)}>x</button>
			</li>
		</div>
	)
}

export default Todo
