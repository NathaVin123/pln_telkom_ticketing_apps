import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {DTextField} from '../textfield/DTextField.tsx';
import {Portal, Text} from 'react-native-paper';
import {Raleway} from '../../core/font/font';
import {s1} from '../size/DSize.tsx';

export interface PropsListValue {
  title: string;
  value: string;
}

interface DDropDownProps {
  data: PropsListValue[];
  label: string;
  placeholder: string;
  initialValue?: string;
  zIndex?: number;
  value?: (value: PropsListValue) => void;
  autoComplete?: boolean;
  width?: number;
  loading?: boolean;
  multiline?: boolean;
  mandatory?: boolean;
  disabled?: boolean;
}

export const DDropdown = (props: DDropDownProps) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    props.initialValue,
  );

  const [data, setData] = useState({
    x: 0,
    y: 0,
    width: 0,
  });

  const dataEvent = (event: GestureResponderEvent) => {
    event.currentTarget.measure((x, y, width, height, pageX, pageY) => {
      setData({
        x: pageX,
        y: pageY,
        width: width,
      });
    });
  };

  return (
    <View style={{width: '100%'}}>
      <Pressable onPress={() => setOpen(!open)}>
        <View
          onTouchStart={dataEvent}
          needsOffscreenAlphaCompositing={true}
          style={{width: '100%'}}>
          <DTextField
            label={props.label}
            mandatory={props.mandatory}
            value={selectedValue}
            disabled={true}
            multiline={props.multiline}
            placeholder={props.placeholder}
            iconRight={require('../../assets/png/componentIcon/arrow-down.png')}
            onTapRightIcon={() => setOpen(!open)}
            onChangeText={() => {}}
          />
          {open && !props.disabled ? (
            <Portal>
              <Pressable
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
                onPress={() => setOpen(!open)}
              />
              {props.loading ? (
                // <ILoading />
                <></>
              ) : (
                <View
                  style={{
                    alignSelf: 'center',
                    top: data.y + 55,
                    width: data.width,
                    maxHeight: 200,
                    alignItems: 'flex-end',
                  }}>
                  <View
                    style={{
                      width: props.width ?? '45%',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      paddingTop: s1,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 5,
                      },
                      shadowOpacity: 0.34,
                      shadowRadius: 6.27,
                      elevation: 10,
                    }}>
                    <ScrollView
                      bounces={false}
                      disableScrollViewPanResponder={true}
                      nestedScrollEnabled={true}
                      overScrollMode={'auto'}>
                      {props.autoComplete ? (
                        <DTextField
                          label={'Cari'}
                          value={undefined}
                          onChangeText={() => {}}
                        />
                      ) : null}
                      {props.data.map((item, index) => {
                        return textValue(index, item);
                      })}
                    </ScrollView>
                  </View>
                </View>
              )}
            </Portal>
          ) : null}
        </View>
      </Pressable>
    </View>
  );

  function textValue(index: number, item: PropsListValue) {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          setOpen(false);
          setSelectedValue(item.title);
          if (props.value) {
            props.value(item);
          }
        }}>
        <View
          style={{
            paddingVertical: 6.5,
            paddingHorizontal: s1,
          }}>
          <Text style={Raleway.Overline1}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};
