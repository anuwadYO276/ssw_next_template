
import ChartCustom from './chart';

const Card4 = ({ title, description,Chart,data,width,height}) => {
  return (
    <div className="card-shadow">
      <div className="card-body">
      <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center gap-1">
          <h5 className="mb-2">{title}</h5>
          <small className="small-text">{description}</small>
          </div>
          
    <div className='Chart-height'>
          <ChartCustom type={Chart} data={data} width={width} height={height}/>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Card4;

