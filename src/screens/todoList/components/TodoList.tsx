import React from 'react';
import {Image} from 'react-native';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../assets/images';

const TodoList = () => {
  const TodoBox = () => {
    const [checked, setChecked] = React.useState(false);
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
          onPress={() => setChecked(!checked)}>
          <Image
            source={checked ? images.checked : images.notchecked}
            resizeMode="contain"
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <View style={{flex: 9}}>
          <Text style={{textDecorationLine: checked ? 'line-through' : 'none'}}>
            할일
          </Text>
        </View>
        <TouchableOpacity style={{flex: 1}}>
          <Image source={images.delete} style={{width: 30, height: 30}} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <TodoBox />
    </View>
  );
};

export default TodoList;
