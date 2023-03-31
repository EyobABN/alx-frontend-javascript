import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photoData = await uploadPhoto().catch();
    const userData = await createUser();
    const text = `${photoData.body} ${userData.firstName} ${userData.lastName}`;
    console.log(text);
  } catch {
    console.log('Signup system offline');
  }

}
