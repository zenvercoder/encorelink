import React, { PropTypes } from 'react';
import { PENDING, APPROVED } from '../constants/eventAttendingStatus';
import EventVolunteerRow from '../components/EventVolunteerRow';
import EventRow from '../components/EventRow';

const pendingFilter = (event = {}) => event.volunteers && event.volunteers[0] && event.volunteers.status === PENDING;
const upcomingFilter = (event = {}) => event.volunteers && event.volunteers[0] && event.volunteers.status === APPROVED;
const unassignedFilter = (event = {}) => !pendingFilter(event) && !upcomingFilter(event);

const OrganizerDashboard = ({ data, approveEventMusician, rejectEventMusician }) => {
  const pendingEventVolunteers = data
    .filter(pendingFilter)
    .map(event =>
      <EventVolunteerRow
        event={event}
        isCurrentlyPending
        key={event.volunteers[0].id}
        approveEventMusician={approveEventMusician}
        rejectEventMusician={rejectEventMusician}
      />
    );

  const approvedEventVolunteers = data
    .filter(upcomingFilter)
    .map(event =>
      <EventVolunteerRow
        event={event}
        key={event.volunteers[0].id}
      />
    );

  const unassignedEvents = data
    .filter(unassignedFilter)
    .map(event =>
      <EventRow key={event.id} event={event} />
    );

  return (
    <div className="row">
      <div className="small-10">
        <h3>Dashboard</h3>
        <br />
        <div className="card">
          <div className="card-divider">
            <h5>Pending Request</h5>
          </div>
          <div className="card-section">
            <table>
              <tbody>
                {pendingEventVolunteers}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-divider">
            <h5>Upcoming Performances</h5>
          </div>
          <div className="card-section">
            <table>
              <tbody>
                {approvedEventVolunteers}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-divider">
            <h5>Open slots</h5>
          </div>
          <div className="card-section">
            {unassignedEvents}
          </div>
        </div>
      </div>
    </div>
  );
};

OrganizerDashboard.propTypes = {
  data: PropTypes.array.isRequired,
  approveEventMusician: PropTypes.func.isRequired,
  rejectEventMusician: PropTypes.func.isRequired
};

OrganizerDashboard.defaultProps = {
  data: []
};


export default OrganizerDashboard;
