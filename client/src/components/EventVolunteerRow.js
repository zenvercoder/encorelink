import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getFormattedDayAndTime } from '../utils/dateFormatting';

const EventVolunteerRow = ({ event, isCurrentlyPending, approveEventMusician, rejectEventMusician }) => {
  const { day, time } = getFormattedDayAndTime(event.date, event.endDate);
  const [volunteer] = event.volunteers;

  return (
    <tr>
      <td>
        {volunteer.email}
        <br />
        <Link to={`/musician/${volunteer.id}`}>View Profile</Link>
      </td>
      <td>{day} {time}</td>
      {isCurrentlyPending &&
      <td>
        <div className="button-group">
          <a
            className="button secondary"
            href={`mailto:${volunteer.email}`}
          >Contact
          </a>
          <button
            className="button success"
            onClick={() => approveEventMusician(volunteer)}
          >Approve
          </button>
          <button
            className="button alert"
            onClick={() => rejectEventMusician(volunteer)}
          >Pass
          </button>
        </div>
      </td>}
    </tr>
  );
};

EventVolunteerRow.propTypes = {
  event: PropTypes.shape({
    date: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    volunteers: PropTypes.arrayOf(PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }))
  }),
  approveEventMusician: PropTypes.func.isRequired,
  rejectEventMusician: PropTypes.func.isRequired,
  isCurrentlyPending: PropTypes.bool.isRequired
};

export default EventVolunteerRow;
