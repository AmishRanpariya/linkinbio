const page_url = window.location.href;
console.log(window.location.href);

const container = document.querySelector(".container");

fetch("./data/db.json")
	.then((res) => {
		return res.json();
	})
	.then((mydata) => {
		mydata.posts.sort((a, b) => b.id - a.id);

		mydata.posts.forEach((post) => {
			container.innerHTML += `<a class="post-div" href=${
				post.preview_link
			} target="_blank">
				<img src=${page_url + post.image_link} />
				</a>`;
		});
	});
