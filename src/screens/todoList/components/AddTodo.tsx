import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {commonStyles} from '../styles';

interface IAddTodo {
  addText: string;
  setAddText: React.Dispatch<React.SetStateAction<string>>;
  onPressAddBtn: () => void;
}

const AddTodo: React.FC<IAddTodo> = ({addText, setAddText, onPressAddBtn}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
      }}>
      <TextInput
        onChangeText={text => setAddText(text)}
        placeholder="할일을 입력하세요"
        style={{
          flex: 10,
          borderColor: 'black',
          borderWidth: 1,
        }}>
        {addText}
      </TextInput>
      <TouchableOpacity
        onPress={onPressAddBtn}
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
        }}>
        <Text style={commonStyles.baseFont}>추가</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
