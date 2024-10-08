import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PropsListValue} from '../../../components/dropdown/DDropdown.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DashboardViewModel = () => {
  const scrollRef = useRef<any>();

  async function getToken() {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token !== null) {
        console.log('Token retrieved on dashboard : ', token);
      } else {
        console.log('No token found on dashboard : ', token);
      }
    } catch (error) {
      console.error('Error retrieving token on dashboard : ', error);
    }
  }

  useEffect(() => {
    getToken().then(r => {});
  }, []);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  const navigation = useNavigation();

  const [monitoringViewState, setMonitoringState] = useState<boolean>(true);

  const handlemonitoringViewState = () => {
    setMonitoringState(!monitoringViewState);
  };

  // Form Work Order
  const [idTicket, setIdTicket] = useState<string>('');
  const [tanggalTicket, setTanggalTicket] = useState<string>('');
  const [lokasiTicket, setLokasiTicket] = useState<string>('');
  const [inputTicket, setInputTicket] = useState<string>('');

  const dataLokasiTicket: PropsListValue[] = [
    {
      title: 'Aceh',
      value: '1',
    },
    {
      title: 'Bantul',
      value: '2',
    },
    {
      title: 'Bandung',
      value: '3',
    },
    {
      title: 'Solo',
      value: '4',
    },
    {
      title: 'Palembang',
      value: '5',
    },
  ];

  const dataInputTicket: PropsListValue[] = [
    {
      title: 'Laporan Gangguan',
      value: '1',
    },
    {
      title: 'Pekerjaan',
      value: '2',
    },
  ];

  const dataApproval = {
    cell: [
      {displayName: 'Ticket No', key: 'ticketNo'},
      {displayName: 'Status', key: 'Status'},
      {displayName: 'Status Pekerjaan', key: 'jobStatus'},
      {displayName: 'Rev 1', key: 'Rev1'},
      {displayName: 'Rev 2', key: 'Rev2'},
      {displayName: 'Rev 3', key: 'Rev3'},
      {displayName: 'Rev 5', key: 'Rev5'},
    ],
    items: [
      {
        ticketNo: '0001',
        Status: 'SPK1',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0002',
        Status: 'SPK2',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0003',
        Status: 'SPK3',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0004',
        Status: 'SPK3',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0005',
        Status: 'SPK5',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0006',
        Status: 'SPK6',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0007',
        Status: 'SPK7',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0008',
        Status: 'SPK8',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0009',
        Status: 'SPK9',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00010',
        Status: 'SPK10',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00011',
        Status: 'SPK11',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00012',
        Status: 'SPK12',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00013',
        Status: 'SPK13',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '14',
        Status: 'SPK14',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00015',
        Status: 'SPK15',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00016',
        Status: 'SPK16',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00017',
        Status: 'SPK17',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00018',
        Status: 'SPK18',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00019',
        Status: 'SPK19',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00020',
        Status: 'SPK120',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00021',
        Status: 'SPK21',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00022',
        Status: 'SPK22',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00023',
        Status: 'SPK23',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00024',
        Status: 'SPK24',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00025',
        Status: 'SPK25',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00026',
        Status: 'SPK26',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00027',
        Status: 'SPK27',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00028',
        Status: 'SPK28',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00029',
        Status: 'SPK29',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00030',
        Status: 'SPK30',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00031',
        Status: 'SPK31',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00032',
        Status: 'SPK32',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00033',
        Status: 'SPK33',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00034',
        Status: 'SPK34',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00035',
        Status: 'Need Approve',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00036',
        Status: 'SPK36',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00037',
        Status: 'SPK37',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00038',
        Status: 'SPK38',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00039',
        Status: 'SPK39',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00040',
        Status: 'SPK40',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00041',
        Status: 'SPK41',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00042',
        Status: 'SPK42',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00043',
        Status: 'SPK43',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00044',
        Status: 'SPK44',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00045',
        Status: 'SPK44',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00047',
        Status: 'SPK47',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00048',
        Status: 'SPK48',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      // more items...
    ],
  };

  const dataMonitoringStatus = {
    cell: [
      {displayName: 'Ticket No', key: 'ticketNo'},
      {displayName: 'Status', key: 'Status'},
      {displayName: 'Status Pekerjaan', key: 'jobStatus'},
      {displayName: 'Rev 1', key: 'Rev1'},
      {displayName: 'Rev 2', key: 'Rev2'},
      {displayName: 'Rev 3', key: 'Rev3'},
      {displayName: 'Rev 5', key: 'Rev5'},
    ],
    items: [
      {
        ticketNo: '0001',
        Status: 'SPK1',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0002',
        Status: 'SPK2',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0003',
        Status: 'SPK3',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0004',
        Status: 'SPK3',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0005',
        Status: 'SPK5',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0006',
        Status: 'SPK6',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0007',
        Status: 'SPK7',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0008',
        Status: 'SPK8',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '0009',
        Status: 'SPK9',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00010',
        Status: 'SPK10',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00011',
        Status: 'SPK11',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00012',
        Status: 'SPK12',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00013',
        Status: 'SPK13',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '14',
        Status: 'SPK14',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00015',
        Status: 'SPK15',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00016',
        Status: 'SPK16',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00017',
        Status: 'SPK17',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00018',
        Status: 'SPK18',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00019',
        Status: 'SPK19',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00020',
        Status: 'SPK120',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00021',
        Status: 'SPK21',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00022',
        Status: 'SPK22',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00023',
        Status: 'SPK23',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00024',
        Status: 'SPK24',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00025',
        Status: 'SPK25',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00026',
        Status: 'SPK26',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00027',
        Status: 'SPK27',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00028',
        Status: 'SPK28',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00029',
        Status: 'SPK29',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00030',
        Status: 'SPK30',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00031',
        Status: 'SPK31',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00032',
        Status: 'SPK32',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00033',
        Status: 'SPK33',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00034',
        Status: 'SPK34',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00035',
        Status: 'Need Approve',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00036',
        Status: 'SPK36',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00037',
        Status: 'SPK37',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00038',
        Status: 'SPK38',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00039',
        Status: 'SPK39',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00040',
        Status: 'SPK40',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00041',
        Status: 'SPK41',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00042',
        Status: 'SPK42',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00043',
        Status: 'SPK43',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00044',
        Status: 'SPK44',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00045',
        Status: 'SPK44',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00047',
        Status: 'SPK47',
        jobStatus: 'Need Approve',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      {
        ticketNo: '00048',
        Status: 'SPK48',
        jobStatus: 'Approved',
        Rev1: '-',
        Rev2: '-',
        Rev3: '-',
        Rev4: '-',
        Rev5: '-',
      },
      // more items...
    ],
  };

  const handleSubmitWorkOrder = () => {
    console.log('ID Ticket : ' + idTicket);
    console.log('Tanggal Ticket : ' + tanggalTicket);
    console.log('Lokasi Ticket : ' + lokasiTicket);
    console.log('Input Ticket : ' + inputTicket);

    return !(
      idTicket.length > 0 &&
      tanggalTicket.length > 0 &&
      lokasiTicket.length > 0 &&
      inputTicket.length > 0 &&
      inputTicket.length > 0
    );
  };

  const submitTicket = async () => {
    console.log('ID Ticket : ' + idTicket);
    console.log('Tanggal Ticket : ' + tanggalTicket);
    console.log('Lokasi Ticket : ' + lokasiTicket);
    console.log('Input Ticket : ' + inputTicket);
  };

  return {
    scrollRef,
    refreshing,
    setRefreshing,
    onRefresh,
    monitoringViewState,
    setMonitoringState,
    navigation,
    handlemonitoringViewState,
    idTicket,
    setIdTicket,
    tanggalTicket,
    setTanggalTicket,
    lokasiTicket,
    setLokasiTicket,
    inputTicket,
    setInputTicket,
    handleSubmitWorkOrder,
    submitTicket,
    dataLokasiTicket,
    dataInputTicket,
    dataApproval,
    dataMonitoringStatus,
  };
};
