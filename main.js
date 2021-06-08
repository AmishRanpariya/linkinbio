const container = document.querySelector(".container");

fetch("./asset/db.json")
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		data.posts.sort((a, b) => b.createdAt - a.createdAt);
		data.posts.forEach((post) => {
			container.innerHTML += `
			<a class="post-div" href=${post.link}  target="_blank">
				<img src=${post.url} loading="lazy" alt="project image" />
			</a>
			`;
		});
	});
