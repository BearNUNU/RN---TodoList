import React, {useEffect, useState} from 'react';
import TodoListPresenter from './TodoListPresenter';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoListContainer = () => {
  const [addText, setAddText] = useState<string>('');
  const [todoList, setTodoList] = useState<
    {text: string; completed: boolean}[]
  >([]);

  const loadTodoList = async () => {
    try {
      const temtodoList = await AsyncStorage.getItem('todos');
      if (temtodoList !== null) {
        setTodoList(JSON.parse(temtodoList));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveTodoList = async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todoList));
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodoList = async (index: number) => {
    try {
      const newTodoList = todoList.filter((_, i) => i !== index);
      setTodoList(newTodoList);
      await AsyncStorage.setItem('todos', JSON.stringify(newTodoList));
    } catch (e) {
      console.log(e);
    }
  };

  const toggleCompletion = async (index: number) => {
    try {
      const newTodoList = todoList.map((item, i) =>
        i === index ? {...item, completed: !item.completed} : item,
      );
      setTodoList(newTodoList);
      await AsyncStorage.setItem('todos', JSON.stringify(newTodoList));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadTodoList();
  }, []);

  const handleAddBtn = () => {
    setAddText('');
    setTodoList([...todoList, {text: addText, completed: false}]);
    saveTodoList;
  };

  const handleDeleteBtn = (index: number) => {
    deleteTodoList(index);
  };

  return (
    <>
      <TodoListPresenter
        addText={addText}
        setAddText={setAddText}
        onPressAddBtn={handleAddBtn}
        onPressDeleteBtn={handleDeleteBtn}
        toggleCompletion={toggleCompletion}
        todoList={todoList}
      />
    </>
  );
};

export default TodoListContainer;
