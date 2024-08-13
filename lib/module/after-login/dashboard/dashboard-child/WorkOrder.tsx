import {DashboardViewModel} from '../DashboardViewModel.ts';
import {Dimensions, RefreshControl, View} from 'react-native';
import {theme} from '../../../../core/theme/theme';
import {s1, s2, s3, s5} from '../../../../components/size/DSize.tsx';
import {DImage} from '../../../../components/image/DImage.tsx';
import {DSizedBox} from '../../../../components/sizedBox/DSizedBox.tsx';
import {DBottomSheet} from '../../../../components/bottomSheet/DBottomSheet.tsx';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native-paper';
import {Raleway} from '../../../../core/font/font';
import {DTextField} from '../../../../components/textfield/DTextField.tsx';
import {DButton} from '../../../../components/button/DButton.tsx';
import {DDropdown} from '../../../../components/dropdown/DDropdown.tsx';
import {DDatePicker} from '../../../../components/datePicker/DDatePicker.tsx';

export const WorkOrder = () => {
  const controller = DashboardViewModel();

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            position: 'absolute',
            top: 0,
            height: '80%',
            width: '100%',
          }}>
          <ScrollView
            style={{flex: 1}}
            scrollEnabled={false}
            ref={controller.scrollRef}
            refreshControl={
              <RefreshControl
                refreshing={controller.refreshing}
                onRefresh={controller.onRefresh}></RefreshControl>
            }>
            <View
              style={{
                flex: 1,
                height: Dimensions.get('window').height,
                justifyContent: 'center',
                alignItems: 'center',
                padding: s2,
              }}>
              <View
                style={{
                  backgroundColor: theme.colors.surface,
                  paddingVertical: s1,
                  paddingHorizontal: s5,
                  overflow: 'hidden',
                  borderRadius: 10,
                }}>
                <DImage
                  path={require('../../../../assets/png/Logo_PLN.png')}
                  resizeMode={'contain'}
                  width={150}
                  height={150}
                />
              </View>
              <DSizedBox
                height={Dimensions.get('window').height / 2}></DSizedBox>
            </View>
          </ScrollView>
        </View>
        <DBottomSheet
          initialSize={'50%'}
          maxSize={'100%'}
          minSize={'50%'}
          body={
            <View style={{flex: 1, padding: s2}}>
              <Text style={Raleway.H2}>Open Ticketing</Text>
              <DSizedBox height={s2}></DSizedBox>
              <Text style={Raleway.Body4}>Ticketing Details</Text>
              <DSizedBox height={s3}></DSizedBox>
              <DTextField
                label={'ID Ticket'}
                onChangeText={(e: string) => {
                  controller.setIdTicket(e);
                }}></DTextField>
              <DSizedBox height={s2}></DSizedBox>
              <DDatePicker
                disabled={true}
                isDate={true}
                iconRight={require('../../../../assets/png/componentIcon/date.png')}
                touchable={true}
                // isDate={true}
                label={'Tanggal'}
                mode={'date'}
                value={controller.tanggalTicket}
                onChangeText={(e: string) =>
                  controller.setTanggalTicket(e)
                }></DDatePicker>
              <DDropdown
                data={controller.dataLokasiTicket}
                label={'Lokasi'}
                placeholder={'Lokasi'}
                value={item =>
                  controller.setLokasiTicket(item.title)
                }></DDropdown>
              <DSizedBox height={s2}></DSizedBox>
              <DDropdown
                data={controller.dataInputTicket}
                label={'Input Ticket'}
                placeholder={'Input Ticket'}
                value={item =>
                  controller.setInputTicket(item.title)
                }></DDropdown>
              <DSizedBox height={s2}></DSizedBox>
              <View
                style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end'}}>
                <View style={{width: Dimensions.get('window').width / 2}}>
                  <DButton
                    disabled={controller.handleSubmitWorkOrder()}
                    onPress={() => {
                      controller.submitTicket().then(() => {});
                    }}
                    size={'medium'}>
                    Submit
                  </DButton>
                </View>
              </View>
            </View>
          }></DBottomSheet>
      </GestureHandlerRootView>
    </>
  );
};