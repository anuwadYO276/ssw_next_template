import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardsStatistics2 = (props) => {
  return (
   <>
      <div className={props.shadow}>
      <div className="card-body">
        <div className="d-flex align-items-center mb-2 pb-1">
          <div className="avatar me-2">
            <span className={props.span}><FontAwesomeIcon icon={props.icon} /></span>
          </div>
          <h4 className="ms-1 mb-0">{props.text}</h4>
        </div>
        <p className="mb-1">{props.title}</p>
        <p className="mb-0">
          <span className="fw-medium me-1">{props.percentage}</span>
          <small className="text-muted">{props.small}</small>
        </p>
      </div>
    </div>

   </>
  );
};

export default CardsStatistics2;
