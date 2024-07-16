import {View} from 'react-native';
import React from 'react';

interface ContainerProps {
  children?: JSX.Element;
}

export const DContainer = (props: ContainerProps) => {
  return <View>{props.children}</View>;
};