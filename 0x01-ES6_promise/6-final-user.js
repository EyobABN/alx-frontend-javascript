function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise
    .allSettled(promises)
    .then((data) => ([data[0], { status: data[1].status, value: data[1].reason.toString() }]));
}

export default handleProfileSignup;
