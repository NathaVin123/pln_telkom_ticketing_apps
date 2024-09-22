import {DataTable} from 'react-native-paper';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ScrollView} from 'react-native-gesture-handler';

interface DDataTableInterface {
  cell: {displayName: string; key: string}[];
  items: Array<{[key: string]: any}>;
  onPress?: (item: {[key: string]: any}) => void;
}

export const DDataTable: React.FC<DDataTableInterface> = ({
  cell,
  items,
  onPress,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const from = page * rowsPerPage;
  const to = Math.min((page + 1) * rowsPerPage, items.length);

  return (
    <>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <ScrollView horizontal>
          <DataTable>
            <DataTable.Header>
              {cell.map((header, index) => (
                <DataTable.Title style={[{width: 100}]} key={index}>
                  {header.displayName}
                </DataTable.Title>
              ))}
            </DataTable.Header>

            {items.slice(from, to).map((item, rowIndex) => (
              <TouchableOpacity
                key={rowIndex}
                onPress={() => onPress && onPress(item)}>
                <View>
                  <DataTable.Row>
                    {cell.map((header, cellIndex) => (
                      <DataTable.Cell style={[{width: 100}]} key={cellIndex}>
                        {item[header.key]}
                      </DataTable.Cell>
                    ))}
                  </DataTable.Row>
                </View>
              </TouchableOpacity>
            ))}
          </DataTable>
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Picker
          selectedValue={rowsPerPage}
          style={{height: 50, width: 150}}
          onValueChange={itemValue => {
            setRowsPerPage(itemValue);
            setPage(0); // Reset to first page when page size changes
          }}>
          <Picker.Item label="10 rows" value={10} />
          <Picker.Item label="20 rows" value={20} />
          <Picker.Item label="30 rows" value={30} />
          <Picker.Item label="50 rows" value={50} />
        </Picker>
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / rowsPerPage)}
          onPageChange={page => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          showFastPaginationControls
        />
      </View>
    </>
  );
};
