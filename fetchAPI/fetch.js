function askHello() {
  fetch("https://mockbin.com/request?greetings=salut")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      document.getElementById("hello-result").innerText =
        value.queryString.greetings;
    })
    .catch(function (err) {});
}

document.getElementById("ask-hello").addEventListener("click", askHello);
