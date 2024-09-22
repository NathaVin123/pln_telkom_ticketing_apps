import {StatusBar, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DAppBar} from '../../../components/appBar/DAppBar.tsx';
import {DashboardViewModel} from './DashboardViewModel.ts';
import {DBottomBar} from '../../../components/bottomBar/DBottomBar.tsx';
import {HomeDashboard} from './dashboard-child/Home.tsx';
import {WorkOrder} from './dashboard-child/WorkOrder.tsx';
import {Approval} from './dashboard-child/Approval/Approval.tsx';

export const DashboardView = () => {
  const controller = DashboardViewModel();

  const [activeTab, setActiveTab] = useState('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeDashboard />;
      case 'ticket':
        return <WorkOrder />;
      case 'document':
        return <Approval />;
      default:
        return <Text>Home</Text>;
    }
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <DAppBar
        // onBackPress={() => {
        //   controller.navigation.goBack();
        // }}
        title={'PLN TELKOM Ticketing Apps'}
      />
      <View style={{flex: 1}}>{renderActiveTab()}</View>
      <DBottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
};
