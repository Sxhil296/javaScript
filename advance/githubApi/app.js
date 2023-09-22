const requestUrl = "https://api.github.com/users/sxhil296";
const img = document.getElementById("pfp");
const name = document.getElementById("name");
const username = document.getElementById('username')
const followers = document.getElementById('followers')
const following = document.getElementById('following')
const repos = document.getElementById('repos')


const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = () => {
 // console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.responseText);
    //console.log(typeof data);
    //console.log(data.followers);
    img.src = `${data.avatar_url}`;
    name.innerHTML = data.name;
    username.innerHTML = data.login
    followers.innerHTML = data.followers
    following.innerHTML = data.following
    repos.innerHTML = data.public_repos
  }
};
xhr.send();