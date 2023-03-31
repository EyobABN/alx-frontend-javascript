function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName);
  const photo = await uploadPhoto(fileName);

  return [
    { status: user.status, value: user.value },
    { status: photo.status, value: photo.value },
  ];
}

export default handleProfileSignup;
