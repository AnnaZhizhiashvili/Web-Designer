const sections = document.querySelectorAll('section');
const links = [...document.querySelectorAll(".navigation a")];
const widths = [...document.querySelectorAll(".skills-box .width")]
let options = {
	threshold: 0.7
};

const sectionObserver = new IntersectionObserver(function(entries) {
	
	 entries.forEach(entry => {
	 	 let sectionHref = `#${entry.target.getAttribute('id')}`;
	 	 let link = links.find(l => l.getAttribute('href') === sectionHref);
	 	
	 	if (entry.isIntersecting) {
			entry.target.classList.add("active");
			link.classList.add("link-active");
			widths[0].classList.add("width1");
			widths[1].classList.add("width2");
			widths[2].classList.add("width3");
			widths[3].classList.add("width4");
			console.log(widths[0]);
				console.log(widths[1]);
					console.log(widths[2]);
						console.log(widths[3]);
		} else {
			entry.target.classList.remove("active");
			link.classList.remove("link-active");
		};

	})
}, options
);

sections.forEach(section => sectionObserver.observe(section)
 );



 

