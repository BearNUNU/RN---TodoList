import React from 'react';
import {SafeAreaView} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

interface ITodoListPresenter {
  addText: string;
  setAddText: React.Dispatch<React.SetStateAction<string>>;
}

const TodoListPresenter: React.FC<ITodoListPresenter> = ({
  addText,
  setAddText,
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DateHead />
      <TodoList />
      <AddTodo addText={addText} setAddText={setAddText} />
    </SafeAreaView>
  );
};

export default TodoListPresenter;
