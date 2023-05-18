import React from 'react';
import {SafeAreaView} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

interface ITodoListPresenter {
  addText: string;
  setAddText: React.Dispatch<React.SetStateAction<string>>;
  onPressAddBtn: () => void;
  onPressDeleteBtn: (index: number) => void;
  todoList: {text: string; completed: boolean}[];
  toggleCompletion: (index: number) => void;
}

const TodoListPresenter: React.FC<ITodoListPresenter> = ({
  addText,
  setAddText,
  onPressAddBtn,
  onPressDeleteBtn,
  toggleCompletion,
  todoList,
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DateHead />
      <TodoList
        todoList={todoList}
        onPressDeleteBtn={onPressDeleteBtn}
        toggleCompletion={toggleCompletion}
      />
      <AddTodo
        addText={addText}
        setAddText={setAddText}
        onPressAddBtn={onPressAddBtn}
      />
    </SafeAreaView>
  );
};

export default TodoListPresenter;
