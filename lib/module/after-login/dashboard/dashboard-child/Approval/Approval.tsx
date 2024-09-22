import {
  GestureHandlerRootView,
  ScrollView as GestureScrollView,
} from 'react-native-gesture-handler';
import {Dimensions, RefreshControl, View} from 'react-native';
import {theme} from '../../../../../core/theme/theme';
import {s1, s2, s5} from '../../../../../components/size/DSize.tsx';
import {DImage} from '../../../../../components/image/DImage.tsx';
import {DSizedBox} from '../../../../../components/sizedBox/DSizedBox.tsx';
import React from 'react';
import {DBottomSheet} from '../../../../../components/bottomSheet/DBottomSheet.tsx';
import {DDataTable} from '../../../../../components/dataTable/DDataTable.tsx';
import {DashboardViewModel} from '../../DashboardViewModel.ts';

export const Approval = () => {
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
          <GestureScrollView
            style={{flex: 1}}
            scrollEnabled={false}
            ref={controller.scrollRef}
            refreshControl={
              <RefreshControl
                refreshing={controller.refreshing}
                onRefresh={controller.onRefresh}
              />
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
                  path={require('../../../../../assets/png/Logo_PLN.png')}
                  resizeMode={'contain'}
                  width={150}
                  height={150}
                />
              </View>
              <DSizedBox height={Dimensions.get('window').height / 2} />
            </View>
          </GestureScrollView>
        </View>
        <DBottomSheet
          initialSize={'50%'}
          maxSize={'100%'}
          minSize={'50%'}
          body={
            <View style={{flex: 1, padding: s2}}>
              <DDataTable
                cell={controller.dataApproval.cell}
                items={controller.dataApproval.items}
                onPress={(item: any) => {
                  console.log(
                    'Go to approval details : ' + JSON.stringify(item.ticketNo),
                  );
                  // controller.navigation.navigate('ApprovalDetail');
                }}
              />
            </View>
          }
        />
      </GestureHandlerRootView>
    </>
  );
};
