const posts = [
    { title: 'Post 1', content: 'Post 1 içeriği' },
    { title: 'Post 2', content: 'Post 2 içeriği' },
    { title: 'Post 3', content: 'Post 3 içeriği' }
];

const listPosts = () => {
    posts.map(post => {
        console.log(post.title, post.content);
    });
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
    });
    return promise1;
};

console.log("Postlar:");
listPosts();

console.log("Yeni post ekleniyor...");
addPost({ title: 'Post 4', content: 'Post 4 içeriği' })
    .then(() => {
        console.log("\nYeni post listesi:");
        listPosts();
    });
