import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import rawData from './game-consoles.json';

const data = rawData.map(item => ({
  name: item.Platform,
  unitsSold: item["Units sold (mil)"],
}));

// #endregion
const SimpleBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '1000px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <XAxis
        dataKey="name"
        angle={-60}
        textAnchor="end"
        interval={0}
        tick={{ fontSize: 10 }}
        height={120}
      />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="unitsSold" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} name="units sold (in millions)"/>
      <RechartsDevtools />
    </BarChart>
  );
};

export default SimpleBarChart;