export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 200, body: 'Success' })).catch((error) => {
    console.log(error);
  }).finally(() => {
    console.log('Got a response from the API');
  });
}
