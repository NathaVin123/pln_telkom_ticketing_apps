import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {DImage} from '../../../components/image/DImage.tsx';
import {DSizedBox} from '../../../components/sizedBox/DSizedBox.tsx';
import {s1, s2, s8} from '../../../components/size/DSize.tsx';
import {DButton} from '../../../components/button/DButton.tsx';
import {LoginViewModel} from './LoginViewModel.ts';
import {Text} from 'react-native-paper';
import {Raleway} from '../../../core/font/font';
import {DTextField} from '../../../components/textfield/DTextField.tsx';
import {theme} from '../../../core/theme/theme';

export function LoginView() {
  const controller = LoginViewModel();

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.onPrimary,
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
        <Text style={Raleway.H3}>Welcome Back!</Text>
        <DSizedBox height={s1}></DSizedBox>
        <Text style={Raleway.Overline1}>Please enter your details</Text>
        <DSizedBox height={s1}></DSizedBox>
        <DTextField
          width={300}
          label={''}
          onChangeText={(e: string) => {
            controller.setNik(e);
          }}
          placeholder={'Username/NIK'}></DTextField>
        <DTextField
          secureTextEntry={true}
          width={300}
          label={''}
          onChangeText={(e: string) => {
            controller.setPassword(e);
          }}
          placeholder={'Password'}></DTextField>
        <DSizedBox height={s2}></DSizedBox>
        <DButton
          disabled={controller.enableSubmit()}
          onPress={() => {
            controller.submitLogin();
          }}
          // iconPosition={'right'}
          // icon={require('../../../assets/png/componentIcon/arrow_forward.png')}>
          size={'medium'}>
          Log In
        </DButton>
      </View>
      {controller.isLoading && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      )}
    </>
  );
};