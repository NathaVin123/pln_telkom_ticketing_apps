import {StatusBar, View} from 'react-native';
import {DAppBar} from '../../../../../components/appBar/DAppBar.tsx';
import {Text} from 'react-native-paper';
import {Raleway} from '../../../../../core/font/font';
import {s2} from '../../../../../components/size/DSize.tsx';
import {DSizedBox} from '../../../../../components/sizedBox/DSizedBox.tsx';
import {DashboardViewModel} from '../../DashboardViewModel.ts';
import {theme} from '../../../../../core/theme/theme';
import {DImage} from '../../../../../components/image/DImage.tsx';
import {DTextField} from '../../../../../components/textfield/DTextField.tsx';

export const ApprovalDetail = () => {
  const controller = DashboardViewModel();

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />

      <DAppBar
        onBackPress={() => {
          controller.navigation.goBack();
        }}
        title={'PLN TELKOM Ticketing Apps'}
      />

      <View
        style={{flex: 1, padding: s2, backgroundColor: theme.colors.onPrimary}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={Raleway.H3}>Approval</Text>
            <DSizedBox height={s2} />
            <Text style={Raleway.Overline1}>Approval Detail</Text>
          </View>
          <DImage
            path={require('../../../../../assets/png/Logo_PLN.png')}
            width={100}
            height={100}
          />
        </View>
        {/*Form Detail Approval*/}
        <View>
          <DTextField
            disabled
            label={'Ticket ID'}
            onChangeText={() => {}}
            value={''}
          />
          <DTextField
            disabled
            label={'Tanggal Pelaporan'}
            onChangeText={() => {}}
            value={''}
          />
          {/*<DDatePicker*/}
          {/*  disabled={true}*/}
          {/*  isDate={true}*/}
          {/*  touchable={true}*/}
          {/*  mode={'date'}*/}
          {/*  iconRight={require('../../../../../ssets/png/componentIcon/date.png')}*/}
          {/*  label={'Tanggal Pelaporan'}*/}
          {/*  onChangeText={() => {}}*/}
          {/*  value={''}></DDatePicker>*/}
          <DTextField
            disabled
            label={'Lokasi'}
            onChangeText={() => {}}
            value={''}
          />
          <DTextField
            disabled
            label={'Input Ticket'}
            onChangeText={() => {}}
            value={''}
          />
          <DTextField label={'Bidang'} onChangeText={() => {}} />
          <DTextField
            disabled
            label={'Jenis Pekerjaan'}
            onChangeText={() => {}}
            value={''}
          />
          <DTextField
            disabled
            label={'Jenis Peralatan'}
            onChangeText={() => {}}
            value={''}
          />
          <DTextField
            disabled
            label={'Jenis Gangguan'}
            onChangeText={() => {}}
            value={''}
          />
        </View>
      </View>
    </>
  );
};
