import { browserHistory } from 'react-router';
import { PENDING } from '../constants/eventAttendingStatus';
import { createApiAction, createAction, createErrorAction } from '../utils/reduxActions';
import { put } from '../utils/apiHelpers';
import { getUserId, getUser } from '../reducers/userReducer';
import {
  SIGNUP_FOR_EVENT_FAILURE,
  SIGNUP_FOR_EVENT_SUCCESS,
  SIGNUP_FOR_EVENT
} from '../constants/reduxConstants';
import { correctDatesForKeys } from '../utils/dateFormatting';
import { apiAction } from './modelActions';

export function createEvent(formData) {
  return apiAction('post', (state) => `users/${getUserId(state)}/events`, {
    body: correctDatesForKeys(formData, ['date', 'endDate']),

    onSuccess: (res, state) => {
      const organizations = getUser(state).organizations || [];
      if (organizations.length) {
        browserHistory.push('/events');
        return;
      }

      browserHistory.push('/organizerProfile');
    }
  });
}

const signUpForEventStart = createAction(SIGNUP_FOR_EVENT);
const signUpForEventSuccess = createAction(SIGNUP_FOR_EVENT_SUCCESS);
const signUpForEventFailure = createErrorAction(SIGNUP_FOR_EVENT_FAILURE);

export function signUpForEvent(event) {
  return createApiAction({
    callApi: (state) => put(`users/${getUserId(state)}/eventsAttending/rel/${event.id}`, {
      body: {
        status: PENDING
      }
    }),

    startAction: () => signUpForEventStart(),
    successAction: (res) => {
      browserHistory.push('/eventsAttending');
      return signUpForEventSuccess(res);
    },
    failAction: (error) => signUpForEventFailure(error)
  });
}
