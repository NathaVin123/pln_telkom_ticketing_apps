import {
  Animated,
  Dimensions,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../../core/theme/theme';
import {s1, s2, s5} from '../../../../components/size/DSize.tsx';
import {DImage} from '../../../../components/image/DImage.tsx';
import {DSizedBox} from '../../../../components/sizedBox/DSizedBox.tsx';
import {DBottomSheet} from '../../../../components/bottomSheet/DBottomSheet.tsx';
import {Raleway} from '../../../../core/font/font';
import {DashboardTabView} from '../DashboardTabView.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {DashboardViewModel} from '../DashboardViewModel.ts';
import {DDataTable} from '../../../../components/dataTable/DDataTable.tsx';
import ScrollView = Animated.ScrollView;

export const HomeDashboard = () => {
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
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignSelf: 'flex-end',
                  paddingBottom: s2,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    controller.handlemonitoringViewState();
                  }}>
                  <View
                    style={{
                      position: 'relative',
                      width: 50,
                      height: 50,
                    }}>
                    <DImage
                      path={require('../../../../assets/png/componentIcon/pie.png')}
                      resizeMode={'contain'}
                      width={50}
                      height={50}
                    />
                    {controller.monitoringViewState ? (
                      <></>
                    ) : (
                      <View
                        style={{
                          borderRadius: 250,
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'grey',
                          opacity: 0.5,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              {controller.monitoringViewState ? (
                <View>
                  <Text style={Raleway.Body1}>Monitoring Status</Text>
                  <DDataTable
                    cell={controller.dataMonitoringStatus.cell}
                    items={controller.dataMonitoringStatus.items}
                    onPress={() => {
                      console.log('Monitoring Status Clicked');
                    }}></DDataTable>
                </View>
              ) : (
                <DashboardTabView></DashboardTabView>
              )}
            </View>
          }></DBottomSheet>
      </GestureHandlerRootView>
    </>
  );
};