import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const AreaChartCustom = ({ data, dataKeyX, dataKeyY, stroke, fill }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 50,
          left: 0,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey={dataKeyX} />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey={dataKeyY} stroke={stroke} fill={fill} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
