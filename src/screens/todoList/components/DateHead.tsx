import React from 'react';
import {Text, View} from 'react-native';
import {commonStyles, styles} from '../styles';

const DateHead = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const dateHead = `${year}년 ${month}월 ${date}일`;

  return (
    <>
      <View style={styles.head}>
        <Text style={commonStyles.titleFont}>{dateHead}</Text>
      </View>
    </>
  );
};

export default DateHead;
