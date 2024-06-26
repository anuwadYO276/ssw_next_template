import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardsStatistics1 = (props) => {
  return (
   <>
      <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="card-info">
            <p className="card-text">{props.title}</p>
            <div className="d-flex align-items-end mb-2">
              <h4 className="card-title mb-0 me-2">{props.text}</h4>
              <small className={props.status}>{props.percentage}</small>
            </div>
            <small>{props.small}</small>
          </div>
          <div className="card-icon">
            <span className={props.boxclass}>
              <FontAwesomeIcon icon={props.icon} size="2x" />
            </span>
          </div>
        </div>
      </div>
    </div>

   </>
  );
};

export default CardsStatistics1;
