import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'todoList';

const TodoListStorage = {
  async loadTodoList() {
    try {
      const todoList = await AsyncStorage.getItem(key);
      if (todoList !== null) {
        return JSON.parse(todoList);
      }
    } catch (e) {
      console.log(e);
    }
  },
  async saveTodoList(todoList: {text: string; completed: boolean}[]) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(todoList));
    } catch (e) {
      console.log(e);
    }
  },
  async deleteTodoList(
    index: number,
    todoList: {text: string; completed: boolean}[],
  ) {
    try {
      const newTodoList = todoList.filter((_, i) => i !== index);
      await AsyncStorage.setItem(key, JSON.stringify(newTodoList));
    } catch (e) {
      console.log(e);
    }
  },
  async toggleCompletion(
    index: number,
    todoList: {text: string; completed: boolean}[],
  ) {
    try {
      const newTodoList = todoList.map((item, i) =>
        i === index ? {...item, completed: !item.completed} : item,
      );
      await AsyncStorage.setItem('todos', JSON.stringify(newTodoList));
    } catch (e) {
      console.log(e);
    }
  },
};

export default TodoListStorage;
