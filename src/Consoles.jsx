import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import rawData from './game-consoles.json';

const data = rawData.map(item => ({
  name: item.Platform,
  unitsSold: item["Units sold (mil)"],
})).sort((a, b) => b.unitsSold - a.unitsSold);

const getColor = (value) => {
  if (value >= 100) return '#1a9641';  // green  - blockbuster
  if (value >= 50)  return '#a6d96a';  // lime   - great
  if (value >= 20)  return '#ffffbf';  // yellow - solid
  if (value >= 5)   return '#fdae61';  // orange - modest
  return '#d7191c';                    // red    - low
};

const SimpleBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '1000px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
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
      <Bar dataKey="unitsSold" name="units sold (in millions)">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={getColor(entry.unitsSold)} />
        ))}
      </Bar>
      <RechartsDevtools />
    </BarChart>
  );
};

export default SimpleBarChart;