import {View} from 'react-native';
import {DImage} from '../../../components/image/DImage.tsx';

export function landingView() {
  return (
    <View
      style={{
        alignSelf: 'center',
      }}>
      <DImage
        path={require('../../assets/png/Logo_PLN.png')}
        resizeMode={'contain'}
        width={100}
        height={100}
      />
    </View>
  );
};

export default landingView;