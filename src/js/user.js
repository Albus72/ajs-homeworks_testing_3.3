import httpGet from "./http.js";

async function loadUser(userId) {
  console.log("eeeeeeeeeeeeeeee");
  const response = await httpGet(`https://jsonplaceholder.typicode.com/todos/${userId}`);
  console.log(response)
  if (response && response.ok) {
    console.log('ok')
    const data = response.json();
    return data;
  }
  console.log('not ok')
  return 0;
}

console.log(loadUser(1));

export default loadUser;
