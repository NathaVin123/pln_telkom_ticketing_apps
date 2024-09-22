import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DImage} from '../image/DImage.tsx';

interface DBottomBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const DBottomBar: React.FC<DBottomBarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  // const [activeTab, setActiveTab] = useState('home');

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={() => setActiveTab('home')}>
        {activeTab !== 'home' ? (
          <DImage
            path={require('../../assets/png/componentIcon/home-noactive.png')}
            height={50}
            width={50}
          />
        ) : (
          <DImage
            path={require('../../assets/png/componentIcon/home-active.png')}
            height={50}
            width={50}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('ticket')}>
        {activeTab !== 'ticket' ? (
          <DImage
            path={require('../../assets/png/componentIcon/ticket-noactive.png')}
            height={50}
            width={50}
          />
        ) : (
          <DImage
            path={require('../../assets/png/componentIcon/ticket-active.png')}
            height={50}
            width={50}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('document')}>
        {activeTab !== 'document' ? (
          <DImage
            path={require('../../assets/png/componentIcon/approval-noactive.png')}
            height={50}
            width={50}
          />
        ) : (
          <DImage
            path={require('../../assets/png/componentIcon/approval-active.png')}
            height={50}
            width={50}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <DImage
          path={require('../../assets/png/componentIcon/calendar-noactive.png')}
          height={50}
          width={50}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  // activeButton: {
  //     backgroundColor: '#1E90FF',
  // },
  icon: {
    width: 50,
    height: 50,
  },
});
