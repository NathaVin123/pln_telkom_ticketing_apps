import React from 'react';
import {View} from 'react-native';

export const DSizedBox = ({height = 8, width = 8}) => {
  return <View style={{height: height, width: width}} />;
};
