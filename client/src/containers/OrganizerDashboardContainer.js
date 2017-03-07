import OrganizerDashboard from '../components/OrganizerDashboard';
import { getUserId } from '../reducers/userReducer';
import gimmeData from '../utils/gimmeData';
import { approveEventMusician, rejectEventMusician } from '../actions/eventActions';

const getEventsAttendingUrl = (state) => {
  return `users/${getUserId(state)}/events?filter=${JSON.stringify({
    include: ['volunteers'],
  })}`;
};

const mapDispatchToProps = {
  approveEventMusician,
  rejectEventMusician
};

export default gimmeData(getEventsAttendingUrl, null, mapDispatchToProps)(OrganizerDashboard);
