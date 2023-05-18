import React from 'react';
import {Image, ListRenderItem} from 'react-native';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../assets/images';

interface ITodoList {
  todoList: {text: string; completed: boolean}[];
  onPressDeleteBtn: (index: number) => void;
  toggleCompletion: (index: number) => void;
}

const TodoList: React.FC<ITodoList> = ({
  todoList,
  onPressDeleteBtn,
  toggleCompletion,
}) => {
  const TodoBox: ListRenderItem<{text: string; completed: boolean}> = ({
    item,
    index,
  }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          borderWidth: 1,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            marginLeft: 10,
            marginRight: 20,
          }}
          onPress={() => toggleCompletion(index)}>
          <Image
            source={item.completed ? images.checked : images.notchecked}
            resizeMode="contain"
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <View style={{flex: 9}}>
          <Text
            style={{
              textDecorationLine: item.completed ? 'line-through' : 'none',
            }}>
            {item.text}
          </Text>
        </View>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => onPressDeleteBtn(index)}>
          <Image source={images.delete} style={{width: 30, height: 30}} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={todoList}
        renderItem={TodoBox}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TodoList;
