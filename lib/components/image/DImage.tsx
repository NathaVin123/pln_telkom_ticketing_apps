import {Image} from 'react-native';

interface InterfaceDImage {
  path: any;
  width: number;
  height: number;
  borderRadius?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
  backgroundColor?: string;
  color?: string;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

export const DImage = (props: InterfaceDImage) => {
  return (
    <Image
      source={props.path}
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        borderTopRightRadius: props.borderTopRightRadius,
        borderTopLeftRadius: props.borderTopLeftRadius,
        borderBottomRightRadius: props.borderBottomRightRadius,
        borderBottomLeftRadius: props.borderBottomLeftRadius,
        backgroundColor: props.backgroundColor ?? 'transparent',
        tintColor: props.color,
      }}
      resizeMode={props.resizeMode ?? 'contain'}
    />
  );
};
