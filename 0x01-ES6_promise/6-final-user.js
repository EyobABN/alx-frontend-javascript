import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser();
  const photo = await uploadPhoto();

  return [user, photo];
}

export default handleProfileSignup;
