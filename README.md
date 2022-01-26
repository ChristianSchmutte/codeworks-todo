# Intro
This is a simple todo application:
- User can create tasks with a name, category, due date and done status
- Click add task, provide a task name (required), category (optional) and date (default today)
- Tasks are displayed in the order they are created
- Categories of tasks will display on the left hand sidebar with the count of tasks
- User can click on a category to filter the tasks to that category
- Clicking an already filtered category will remove the filter
- By default completed (done) tasks are hidden, but the user can click to show completed

# Tech Stack
- React
- Styled-Components
- Express
- Sequelize
- Postgres

# Install & Run
### Server
- create .env file with database credentials + server port
  ```
  SERVER_PORT=
  DB_NAME=
  DB_USER=
  DB_PW=
  DB_HOST=
  DB_PORT=
  ```
- `npm install` dependencies
- `npm start` the server

### Client
- `npm install` dependencies
- create .env file with server URL
  ```
  REACT_APP_SERVER=
  ```
- `npm start` the client
