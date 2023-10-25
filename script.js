const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1;

const getPosts = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

const showPosts = async () => {
    const posts = await getPosts();

    posts.forEach(post => {
        const element = document.createElement("div");
        element.classList.add("post");
        element.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
        </div>
        `
        postsContainer.appendChild(element);
    });
}

showPosts();
