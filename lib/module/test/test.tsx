import {DBottomSheet} from '../../components/bottomSheet/DBottomSheet.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  Animated,
  Dimensions,
  RefreshControl,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {Raleway} from '../../core/font/font';
import {theme} from '../../core/theme/theme';
import React, {useEffect, useRef, useState} from 'react';
import {DImage} from '../../components/image/DImage.tsx';
import {DSizedBox} from '../../components/sizedBox/DSizedBox.tsx';
import {s1, s2, s5} from '../../components/size/DSize.tsx';
import {DAppBar} from '../../components/appBar/DAppBar.tsx';
import ScrollView = Animated.ScrollView;

export default function TestView() {
  const scrollRef = useRef<any>();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent"></StatusBar>
      <DAppBar title={'PLN Ticketing'}></DAppBar>
      <GestureHandlerRootView style={{flex: 1}}>
        {/*<SafeAreaView style={{flex: 1}}>*/}
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
            ref={scrollRef}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}></RefreshControl>
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
                  path={require('../../assets/png/Logo_PLN.png')}
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
              <Text style={Raleway.Caption1}>Test</Text>
            </View>
          }></DBottomSheet>
        {/*</SafeAreaView>*/}
      </GestureHandlerRootView>
    </>
  );
}