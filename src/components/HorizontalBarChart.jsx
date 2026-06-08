import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { salesByType } from "./Functions.jsx";

export default function BarTypeSales() {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={salesByType}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="type" />

        <YAxis
          label={{
            value: "Units Sold (Millions)",
            angle: -90,
            position: "insideLeft"
          }}
        />

        <Tooltip />

        <Bar
          dataKey="sales"
          fill="#8884d8"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}