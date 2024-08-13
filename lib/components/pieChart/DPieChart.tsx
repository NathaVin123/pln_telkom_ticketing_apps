import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';

interface PieChartData {
  key: number;
  value: number;
  svg: {fill: string};
  arc: {outerRadius: string; cornerRadius: number};
  label: string;
}

interface PieChartWithPercentProps {
    data: Array<PieChartData>;
}

export const DPieChartWithPercent: React.FC<PieChartWithPercentProps> = ({ data }) => {
    const widthAndHeight = 250;
    const series = data.map(item => item.value);
    const sliceColor = data.map(item => item.svg.fill);

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor} />
                <View style={styles.legendContainer}>
                    {data.map((item) => (
                        <View key={item.key} style={styles.legendItem}>
                            <View style={[styles.legendColorBox, { backgroundColor: item.svg.fill }]} />
                            <Text style={styles.legendLabel}>{item.label}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    legendContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    legendColorBox: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    legendLabel: {
        fontSize: 14,
    },
});