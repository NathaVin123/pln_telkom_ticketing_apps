import {Text, View} from 'react-native';
import {DImage} from '../../../components/image/DImage.tsx';
import {DSizedBox} from '../../../components/sizedBox/DSizedBox.tsx';
import {s10, s2, s8} from '../../../components/size/DSize.tsx';
import {Raleway} from '../../../core/font/font';
import {DButton} from '../../../components/button/DButton.tsx';
import {LandingViewModel} from './LandingViewModel.ts';

export function LandingView() {
  const controller = LandingViewModel();

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
      <DSizedBox height={s8} />
      <View
        style={{alignSelf: 'flex-start', paddingLeft: s2, paddingRight: s2}}>
        <Text style={Raleway.H1}>PLN Telkom Ticketing Apps</Text>
        <DSizedBox height={s2} />
        <Text style={Raleway.Overline1}>
          You can start your necessery in this apps, lets start your ticket here
        </Text>
      </View>
      <DSizedBox height={s10} />
      <View style={{alignSelf: 'flex-end', paddingRight: s2}}>
        <DButton
          iconPosition={'right'}
          size={'medium'}
          icon={require('../../../assets/png/componentIcon/arrow_forward.png')}
          onPress={() => {
            controller.toLogin().then(() => {});
          }}>
          Get Started
        </DButton>
      </View>
    </View>
  );
}

export default LandingView;
