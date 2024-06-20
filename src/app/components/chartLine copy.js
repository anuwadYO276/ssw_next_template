import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  // labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
      data: [300, 50, 100],
    },
  ],
};


const chartLine = ({ title, description,Chart}) => {
  return (
    <div className="card-shadow">
      <div className="card-body">
      <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center gap-1">
          <h5 className="mb-2">{title}</h5>
          <small className="small-text">{description}</small>
          </div>
          <div className='Chart-height'>
          <Doughnut data={data} width={150} height={150}/>
          </div>
      </div>
    </div>
    </div>
  );
};

export default chartLine;

