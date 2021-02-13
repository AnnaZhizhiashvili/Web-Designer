const sections = document.querySelectorAll('section');
const links = [...document.querySelectorAll(".navigation a")];
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
			console.log(link);
		} else {
			entry.target.classList.remove("active");
			link.classList.remove("link-active");
		};

	})
}, options
);

sections.forEach(section => sectionObserver.observe(section)
 );



 

