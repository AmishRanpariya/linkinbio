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
