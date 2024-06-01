fetch("https://jsonplaceholder.typicode.com/users/-1")
  .then((res) => {
    if (res.ok) return res.json();
    return Promise.reject(res);
  })
  .then((data) => console.log(data))
  .catch((res) => console.log(res.status));

