import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const photoData = await uploadPhoto();
  const userData = await createUser();
  const text = `${photoData.body} ${userData.firstName} ${userData.lastName}`;

  console.log(text);
}
