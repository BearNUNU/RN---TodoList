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
};

export default TodoListStorage;
