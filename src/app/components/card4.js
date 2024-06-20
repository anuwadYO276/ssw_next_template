
import ChartCustom from './chart';

const Card4 = ({ title, description,Chart,data,width,height}) => {
  return (
    <div className="card-shadow">
      <div className="card-body">
      <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center gap-1">
          <h4 className="mb-2">{title}</h4>
          <small>{description}</small>
          </div>
          
      <div>
          <ChartCustom type={Chart} data={data} width={width} height={height}/>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Card4;

