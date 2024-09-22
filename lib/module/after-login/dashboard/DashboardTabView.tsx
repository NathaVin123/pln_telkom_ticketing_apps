import {DTabBar} from '../../../components/tabBar/DTabBar.tsx';
import {s2, s4} from '../../../components/size/DSize.tsx';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {Raleway} from '../../../core/font/font';
import {theme} from '../../../core/theme/theme';
import {DashboardTabStatus} from './dashboard-tab/DashboardTabStatus.tsx';
import {DashboardTabInput} from './dashboard-tab/DashboardTabInput.tsx';
import {DashboardTabGangguan} from './dashboard-tab/DashboardTabGangguan.tsx';
import {DashboardTabPekerjaan} from './dashboard-tab/DashboardTabPekerjaan.tsx';
import {DashboardTabPeralatan} from './dashboard-tab/DashboardTabPeralatan.tsx';

export const DashboardTabView = (props: any) => {
  const DashboardStatus = () => {
    return (
      <View style={{paddingHorizontal: s2, paddingVertical: s4}}>
        <Text style={Raleway.Body2}>Dashboard Status</Text>
        <DashboardTabStatus />
      </View>
    );
  };

  const DashboardInput = () => {
    return (
      <View style={{paddingHorizontal: s2, paddingVertical: s4}}>
        <Text style={Raleway.Body2}>Dashboard Input</Text>
        <DashboardTabInput />
      </View>
    );
  };

  const DashboardGangguan = () => {
    return (
      <View style={{paddingHorizontal: s2, paddingVertical: s4}}>
        <Text style={Raleway.Body2}>Dashboard Gangguan</Text>
        <DashboardTabGangguan />
      </View>
    );
  };

  const DashboardPekerjaan = () => {
    return (
      <View style={{paddingHorizontal: s2, paddingVertical: s4}}>
        <Text style={Raleway.Body2}>Dashboard Pekerjaan</Text>
        <DashboardTabPekerjaan />
      </View>
    );
  };

  const DashboardPeralatan = () => {
    return (
      <View style={{paddingHorizontal: s2, paddingVertical: s4}}>
        <Text style={Raleway.Body2}>Dashboard Peralatan</Text>
        <DashboardTabPeralatan />
      </View>
    );
  };

  return (
    <DTabBar
      style={{
        position: 'top',
        text: {
          fontSize: s4,
          color: theme.colors.scrim,
        },
      }}
      screen={{
        dashboardStatus: DashboardStatus,
        dashboardInput: DashboardInput,
        dashboardGangguan: DashboardGangguan,
        dashboardPekerjaan: DashboardPekerjaan,
        dashboardPeralatan: DashboardPeralatan,
      }}
      route={[
        {
          key: 'dashboardStatus',
          title: 'Dashboard Status',
        },
        {
          key: 'dashboardInput',
          title: 'Dashboard Input',
        },
        {
          key: 'dashboardGangguan',
          title: 'Dashboard Gangguan',
        },
        {
          key: 'dashboardPekerjaan',
          title: 'Dashboard Pekerjaan',
        },
        {
          key: 'dashboardPeralatan',
          title: 'Dashboard Peralatan',
        },
      ]}
    />
  );
};
