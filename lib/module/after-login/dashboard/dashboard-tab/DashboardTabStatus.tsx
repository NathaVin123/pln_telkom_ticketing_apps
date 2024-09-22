import {DPieChartWithPercent} from '../../../../components/pieChart/DPieChart.tsx';

export const DashboardTabStatus = () => {
  const data = [
    {
      key: 1,
      value: 123,
      svg: {fill: '#fbd203'},
      arc: {outerRadius: '100%', cornerRadius: 10},
      label: 'A',
    },
    {
      key: 2,
      value: 321,
      svg: {fill: '#ffb300'},
      arc: {outerRadius: '100%', cornerRadius: 10},
      label: 'B',
    },
    {
      key: 3,
      value: 123,
      svg: {fill: '#ff9100'},
      arc: {outerRadius: '100%', cornerRadius: 10},
      label: 'C',
    },
    {
      key: 4,
      value: 789,
      svg: {fill: '#ff6c00'},
      arc: {outerRadius: '100%', cornerRadius: 10},
      label: 'D',
    },
    {
      key: 5,
      value: 537,
      svg: {fill: '#ff3c00'},
      arc: {outerRadius: '100%', cornerRadius: 10},
      label: 'E',
    },
  ];

  return (
    <>
      <DPieChartWithPercent data={data} />
    </>
  );
};
