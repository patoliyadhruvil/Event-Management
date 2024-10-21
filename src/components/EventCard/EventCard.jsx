import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ id, heading, date, location, img }) => {
  const { year, month } = date;

  return (
    <>
      <Link to={`/events/${id}`} className="event-card">
        <div className="full-screen-card">
          <div className="card-img-wrapper">
            <img src={img} alt={`Event: ${heading}`} className="card-img" />
          </div>
          <div className="card-content">
            <h3 className="card-heading">{heading}</h3>
            <p className="card-date">
              <span>Year: {year}</span>
              <span>Month: {month}</span>
            </p>
            <p className="card-location">{location}</p>
            <div className="card-footer">
              <Link to={`/events/${id}`} className="read-more">Read More</Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EventCard;
