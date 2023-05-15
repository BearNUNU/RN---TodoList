import React, {useState} from 'react';
import TodoListPresenter from './TodoListPresenter';
import {Text} from 'react-native';

const TodoListContainer = () => {
  const [addText, setAddText] = useState<string>('');
  const onPressAddBtn = () => {
    setAddText('');
  };
  return (
    <>
      <TodoListPresenter addText={addText} setAddText={setAddText} />
    </>
  );
};

export default TodoListContainer;
