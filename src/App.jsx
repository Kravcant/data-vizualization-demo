import Consoles from './Consoles.jsx';
import PieCompanySales from './components/PieChart.jsx';
import LineYearSales from './components/LineChart.jsx';
import MulitLineCompanyTrends from './components/AreaChart.jsx'
import BarTypeSales from './components/HorizontalBarChart.jsx'
import './App.css'

function App() {
  return (
    <div className="page">
      <h1>Video Game Console Sales</h1>
      <p style={{ textAlign: "center", opacity: 0.7 }}>
        A quick visualization of console sales using Recharts
      </p>

      <div className="chart">
        <h2>Total Consoles Sales</h2>
        <Consoles />
      </div>

      <div className="chart">
        <h2>Sales by Company</h2>
        <PieCompanySales />
      </div>

      <div className="chart">
        <h2>Sales by Year</h2>
        <LineYearSales />
      </div>

      <div className="chart">
        <h2>Nintendo vs Sony vs Microsoft</h2>
        <MulitLineCompanyTrends />
      </div>

      <div className="chart">
        <h2>Sales by Console Type</h2>
        <BarTypeSales />
      </div>
    </div>
  );
}

export default App
