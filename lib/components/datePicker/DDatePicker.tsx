import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {useState} from 'react';
import {Dimensions, Platform, TouchableHighlight} from 'react-native';
import {DTextField} from '../textfield/DTextField.tsx';
import DatePicker from 'react-native-date-picker';

interface InterfaceDTextFieldDateTimePicker {
  label: string;
  value: string | undefined;
  placeholder?: string;
  onChangeText: (text: string) => void;
  iconRight?: IconSource | string;
  isTime?: boolean;
  timeZone?: boolean;
  isDate?: boolean;
  valueDate?: Date;
  onFocused?: () => void;
  minDate?: Date;
  maxDate?: Date;
  mode?: 'date' | 'time' | 'datetime';
  disabled?: boolean;
  touchable?: boolean;
  tapRightIcon?: boolean;
}

export const DDatePicker = (props: InterfaceDTextFieldDateTimePicker) => {
  const [date, setDate] = useState(props.valueDate ?? new Date());
  const [open, setOpen] = useState(false);
  const width = Dimensions.get('window').width;

  return (
    <>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={'transparent'}
        onPress={() => {
          if (props.touchable === true) {
            setOpen(true);
          }
        }}>
        <DTextField
          fontSize={width > 500 ? undefined : 15}
          multiline={Platform.OS === 'ios'}
          label={props.label}
          disabled={props.disabled}
          onChangeText={() => {}}
          placeholder={props.placeholder}
          value={props.value}
          onFocused={props.onFocused}
          iconRight={props.iconRight}
          onTapRightIcon={() => {
            if (props.tapRightIcon === true) {
              return;
            }
            setOpen(true);
          }}
        />
      </TouchableHighlight>

      <DatePicker
        minimumDate={props.minDate}
        maximumDate={props.maxDate}
        mode={props.mode}
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);

          const timeZone = props.timeZone
            ? date.getTimezoneOffset() / -60 === 7
              ? ' WIB'
              : date.getTimezoneOffset() / -60 === 8
              ? ' WITA'
              : ' WIT'
            : '';

          if (props.isTime) {
            const time = date
              .toTimeString()
              .split(' ')[0]
              .replace(/:/g, '.')
              .split('.');

            return props.onChangeText(`${time[0]}.${time[1]}${timeZone}`);
          } else if (props.isDate) {
            const day = date.getDate().toString();
            const month = (date.getMonth() + 1).toString();

            return props.onChangeText(
              `${day.length === 1 ? `0${day}` : day}-${
                month.length === 1 ? `0${month}` : month
              }-${date.getFullYear().toString()}`,
            );
          } else {
            const time = date
              .toTimeString()
              .split(' ')[0]
              .replace(/:/g, '.')
              .split('.');
            const day = date.getDate().toString();
            const month = (date.getMonth() + 1).toString();
            const year = date.getFullYear().toString();

            return props.onChangeText(
              `${day.length === 1 ? `0${day}` : day}-${
                month.length === 1 ? `0${month}` : month
              }-${year} ${time[0]}.${time[1]}${timeZone}`,
            );
          }

          // setValue(date.toString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
