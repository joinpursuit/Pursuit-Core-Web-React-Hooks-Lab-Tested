# Pursuit-Core-Web-React-Hooks-Lab

[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

## Tasks

Refactor the existing Todo app so that it's **Class Components** and **Lifecycle Methods** are replaced by **Functional Components** and **Hooks**. The existing Todo app has the following functionality. The existing tests only confirm the UI functionality, not use of Hooks.

- Users can create a new Todo by typing text into an `input` inside a `form` and pressing enter
- Shows a list of todos with id `#todos` underneath that input
  - Use an instance of a `Todo` component for each of the Todos
- Users can delete an existing Todo by pressing an 'x' `button` next to it
- When a todo is created or deleted, a pop-up "toast" will appear to notify the user that the action has been completed.
- Whenever the count of todos changes, a pop-up "toast" will appear to notify the user that the todo count has changed.

Refactor **Class Components** and replace **Lifecycle Methods** with **Functional Components** and **Hooks** to fire the created/deleted/count notifications:

- Replace `componentDidMount` in `Todo` with `useEffect` to show a `"success"` toast with the text `New todo added: {todo}`
- Replace `componentWillUnmount` in `Todo` with `useEffect` to show an `"error"` toast with the text `Todo deleted: {todo}`
- Replace `componentDidUpdate` in `App` with `useEffect` to show a `"default"` toast with the text `Remaining todos: {count}`.

For the toasts notifications, this app uses the [react-toastify](https://github.com/fkhadra/react-toastify) library that has already been installed with this lab. See its `README.md` for example usage.

![todos react app in use](./todosHooksAppGif.gif)

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm run cypress` to open the cypress testing window

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines

- When finished, commit and push your work.
- Make a pull request on github.
- Submit the link to your pull request on Canvas.
