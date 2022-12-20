import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      values.forEach((value) => {
        if (value.status === 'rejected') {
          value.value = `Error: ${value.reason.message}`;
          delete value.reason;
        }
        delete value.status;
      });
      return values;
    });
}
