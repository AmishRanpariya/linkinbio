// const container = document.querySelector(".container");

// fetch("./asset/db.json")
// 	.then((res) => {
// 		return res.json();
// 	})
// 	.then((data) => {
// 		data.posts.sort((a, b) => b.createdAt - a.createdAt);
// 		data.posts.forEach((post) => {
// 			container.innerHTML += `
// 			<a class="post-div" href=${post.link}  target="_blank">
// 				<img src=${post.url} loading="lazy" alt="project image" />
// 			</a>
// 			`;
// 		});
// 	});

const container = document.querySelector(".container");
db.collection("posts")
	.orderBy("createdAt", "desc")
	.onSnapshot((snap) => {
		container.innerHTML = "";
		snap.forEach((doc) => {
			let post = doc.data();
			container.innerHTML += `
			<a class="post-div" href=${post.link}  target="_blank">
				<img src=${post.url} loading="lazy" alt="project image" />
			</a>
			`;
		});
	});
