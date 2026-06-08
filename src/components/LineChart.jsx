import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { yearlySales } from "./Functions.jsx";

const LineYearSales = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <LineChart data={yearlySales}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="year"
          tick={{ fontSize: 12 }}
        />

        <YAxis
          label={{
            value: "Units Sold (Millions)",
            angle: -90,
            position: "insideLeft"
          }}
        />

        <Tooltip
          formatter={(value) => [`${value.toFixed(2)}M`, "Units Sold"]}
        />

        <Line
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineYearSales;