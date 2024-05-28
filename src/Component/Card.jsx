import PropTypes from 'prop-types';

export default function Card(props) {
  return (
    <div className='card_container'>
        <div className="card">
        <img src={props.imageCover} alt={props.title} className="card--image" />
        <div className="card--content">
            <h2 className="card--title">{props.title}</h2>
            <div className="card--location">
            <span>{props.location}</span>
            <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
            <div className="card--dates">
            <span>{props.startDate}</span> - <span>{props.endDate}</span>
        </div>
            <p className="card--description">{props.description}</p>
      </div>
    </div>


    </div>
  )
}

 Card.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageCover: PropTypes.string.isRequired,
  googleMapsUrl: PropTypes.string.isRequired,
};
