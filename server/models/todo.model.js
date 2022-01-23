function createTodo(sequelize, DataTypes) {
  const Todo = sequelize.define('todo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    category: DataTypes.STRING,
    due: DataTypes.DATE,
  });
  return Todo;
}

module.exports = createTodo;
