import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { companySales } from "./Functions.jsx";

const COLORS = [
  "#E60012", // Nintendo
  "#003791", // Sony
  "#107C10", // Microsoft
  "#0084FF",
  "#FF9800",
  "#9C27B0",
  "#795548",
  "#607D8B"
];

const PieCompanySales = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <PieChart>
        <Pie
          data={companySales}
          dataKey="sales"
          nameKey="company"
          cx="50%"
          cy="50%"
          outerRadius={160}
          label={({ company, percent }) =>
            `${company} ${(percent * 100).toFixed(1)}%`
          }
        >
          {companySales.map((entry, index) => (
            <Cell
              key={entry.company}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip
          formatter={(value) => [`${value.toFixed(2)}M`, "Units Sold"]}
        />

        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieCompanySales;