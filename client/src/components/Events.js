import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import EventRow from './EventRow';

function Events({ data, isMusician }) {
  const events = data.map(event =>
    <EventRow key={event.id} event={event} />
  );

  return (
    <div className="volunteer-view-events">
      <div className="row">
        <div className="small-10">
          <h3>Events</h3>
        </div>
      </div>
      { !isMusician && (
        <Link to="/createEvent">Create Event</Link>
      ) }
      { events }
    </div>
  );
}

Events.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.numbers.isRequired
  })).isRequired,
  isMusician: PropTypes.bool.isRequired
};

Events.defaultProps = {
  data: []
};

export default Events;
