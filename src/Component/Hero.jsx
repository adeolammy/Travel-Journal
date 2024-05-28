import PropTypes from 'prop-types';

export default function Hero(props) {
   
  return (
    <div className="hero_container">
        <div className="places_card">
            <h2>
                <span className="image_wrapper">
                    <img 
                        src={props.image}
                        alt="imgs" className="place_image"
                     />
                </span>
                {props.places}
            </h2>
            <p>{props.content}</p>
        </div>
</div>

  )
}

Hero.propTypes = {
  places: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};