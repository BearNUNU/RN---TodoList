import React, {useEffect, useState} from 'react';
import TodoListPresenter from './TodoListPresenter';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoListStorage from '../../storages/TodoListStorage';

const TodoListContainer = () => {
  const [addText, setAddText] = useState<string>('');
  // 일정 추가 입력창 텍스트 상태
  const [todoList, setTodoList] = useState<
    {text: string; completed: boolean}[]
  >([]);
  // 일정 목록 상태, completed: 완료 여부, text: 일정 내용

  const loadTodoList = () => {
    TodoListStorage.loadTodoList;
  };
  // 앱 실행 시 AsyncStorage에서 todoList를 불러옴
  const saveTodoList = () => {
    TodoListStorage.saveTodoList(todoList);
  };
  // 일정 추가 버튼을 누를 경우 추가된 일정 목록을 AsyncStorage에 저장
  const deleteTodoList = (index: number) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
    saveTodoList;
  };
  // 일정 삭제 버튼을 누를 경우 해당 일정을 제외한 일정 목록을 AsyncStorage에 저장
  const toggleCompletion = (index: number) => {
    const newTodoList = todoList.map((item, i) =>
      i === index ? {...item, completed: !item.completed} : item,
    );
    setTodoList(newTodoList);
    saveTodoList;
  };
  // 일정 완료 버튼을 누를 경우 해당 일정의 완료 여부를 반전시킨 후 일정 목록을 AsyncStorage에 저장
  useEffect(() => {
    loadTodoList;
  }, []);
  // 렌더링 시 AsyncStorage에서 todoList를 불러옴
  const handleAddBtn = () => {
    setAddText('');
    setTodoList([...todoList, {text: addText, completed: false}]);
    saveTodoList;
  };
  // 일정 추가버튼
  const handleDeleteBtn = (index: number) => {
    deleteTodoList(index);
  };
  // 일정 삭제버튼
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
