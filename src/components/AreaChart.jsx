import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { companyTrendData } from "./Functions.jsx";

export default function CompanyAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <AreaChart data={companyTrendData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="year" />

        <YAxis
          label={{
            value: "Units Sold (Millions)",
            angle: -90,
            position: "insideLeft"
          }}
        />

        <Tooltip />
        <Legend />

        <Area
          type="monotone"
          dataKey="Microsoft"
          stackId="1"
          stroke="#107C10"
          fill="#107C10"
        />

        <Area
          type="monotone"
          dataKey="Sony"
          stackId="1"
          stroke="#003791"
          fill="#003791"
        />

        <Area
          type="monotone"
          dataKey="Nintendo"
          stackId="1"
          stroke="#E60012"
          fill="#E60012"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}