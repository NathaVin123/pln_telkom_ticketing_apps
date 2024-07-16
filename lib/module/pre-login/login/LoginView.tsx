import {View} from 'react-native';
import {DImage} from '../../../components/image/DImage.tsx';
import {DSizedBox} from '../../../components/sizedBox/DSizedBox.tsx';
import {s10, s2, s8} from '../../../components/size/DSize.tsx';
import {DButton} from '../../../components/button/DButton.tsx';
import {LoginViewModel} from './LoginViewModel.ts';

export function LoginView() {
  const controller = LoginViewModel();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DImage
        path={require('../../../assets/png/Logo_PLN.png')}
        resizeMode={'contain'}
        width={150}
        height={150}
      />
      <DSizedBox height={s8}></DSizedBox>
      <View
        style={{
          alignSelf: 'flex-start',
          paddingLeft: s2,
          paddingRight: s2,
        }}></View>
      <DSizedBox height={s10}></DSizedBox>
      <View style={{alignSelf: 'flex-end', paddingRight: s2}}>
        <DButton
          iconPosition={'right'}
          size={'medium'}
          icon={require('../../../assets/png/componentIcon/arrow_forward.png')}>
          Get Started
        </DButton>
      </View>
    </View>
  );
};