//function to fetch and display posts
const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    // console.log(posts)

    const postContainer = document.getElementById("posts");
    postContainer.innerHTML = ""; //clear the div

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
            <ul>
            <li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <a href="#" data-post-id="${post.id}">Read more...</a>
            </li>
            </ul>
            `;
      postContainer.appendChild(postElement);

      const readMoreLink = postElement.querySelector("a");
      readMoreLink.addEventListener("click", function (event) {
        event.preventDefault();
        const postId = this.getAttribute("data-post-id");
        fetchPostDetails(postId);
      });
    });
  } catch (error) {
    console.log(`Error while fetching posts : ${error}`);
  }
};

//function to fetch post details
const fetchPostDetails = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await response.json();
    alert(`Post Title: ${post.title}\n\nPost Body:\n${post.body}`);
  } catch (error) {
    console.error("Error fetching post details:", error);
  }
};

fetchPosts();
