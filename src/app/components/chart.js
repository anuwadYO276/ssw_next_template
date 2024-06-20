import { Line, Bar, Doughnut, Radar, Pie, PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, BarElement, CategoryScale, LinearScale, PointElement, RadialLinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, LineElement, BarElement, CategoryScale, LinearScale, PointElement, RadialLinearScale, Tooltip, Legend);

const ChartCustom = ({ type, data,width,height}) => {

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data} width={width} height={height} />;
      case 'bar':
        return <Bar data={data} width={width} height={height} />;
      case 'doughnut':
        return <Doughnut data={data} width={width} height={height} />;
      case 'radar':
        return <Radar data={data} width={width} height={height} />;
      case 'pie':
        return <Pie data={data} width={width} height={height} />;
      case 'polarArea':
        return <PolarArea data={data} width={width} height={height} />;
      default:
        return <p>Invalid chart type.</p>;
    }
  };

  return (
   <>
      {renderChart()}
   </>
  );
};

export default ChartCustom;

