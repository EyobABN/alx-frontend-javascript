import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;

  try {
    photo = await uploadPhoto();
  } catch (e) {
    photo = null;
  }

  try {
    user = await createUser();
  } catch (e) {
    user = null;
  }

  return { photo, user };
}
