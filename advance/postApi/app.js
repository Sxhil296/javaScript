const postText = document.querySelector(".post-text");
const fetchBtn = document.querySelector(".fetch-btn");

fetchBtn.addEventListener("click", () => {
  fetchRandomPost();
});

function fetchRandomPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // const randomPost = data[0].body
      // postText.innerHTML = randomPost

      const randomIndex = Math.floor(Math.random() * data.length);
      const randomPost = data[randomIndex];
      console.log(randomPost);
      postText.innerHTML = randomPost.body;
    })
    .catch((error) => {
      console.log(error);
    });
}
