export function handleResponseFromAPI(promise) {
  return promise.then((response) => {
    console.log('Got a response from the API');
    return response;
  }).catch((error) => {
    console.log('Got a response from the API');
    console.log(error);
  });
}
