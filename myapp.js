const sections = document.querySelectorAll('section');
const links = [...document.querySelectorAll(".navigation a")];

let sectionOptions = {
	threshold: 0.5
};

const sectionObserver = new IntersectionObserver(function(entries) {
		 entries.forEach(entry => {
	 	 let sectionHref = `#${entry.target.getAttribute('id')}`;
	 	 let link = links.find(l => l.getAttribute('href') === sectionHref);
	 	
	 	if (entry.isIntersecting) {
			// entry.target.classList.add("active");
			link.classList.add("link-active");
			// widths[0].classList.add("width1");
			// widths[1].classList.add("width2");
			// widths[2].classList.add("width3");
			// widths[3].classList.add("width4");
		} else {
			// entry.target.classList.remove("active");
			link.classList.remove("link-active");
		};

	})
}, sectionOptions
);

sections.forEach(section => sectionObserver.observe(section)
 );

//skill-box width increasing

const widths = [...document.querySelectorAll(".starting-width")];
const counters = document.querySelectorAll(".percentage");






let widthOptions = {
	threshold: 1
}
const skillsObserver = new IntersectionObserver(function(entries) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					widths[0].classList.add("width1");
					widths[1].classList.add("width2");
					widths[2].classList.add("width3");
					widths[3].classList.add("width4");
					counters.forEach(counter => {
					const updateCount = () => {
					const target = +counter.getAttribute("data-target");
					const percentage = +counter.innerText;

						if (percentage < target) {
							counter.innerText = percentage + 1;
							setTimeout(updateCount, 45)

					}	else {
						counter.innerText = target;
					}

					}
						updateCount();
					})
				}
			})
	}, widthOptions);

widths.forEach(w => skillsObserver.observe(w)
 );

//resume section, skewing boxes 
const skewedObjects = document.querySelectorAll("#swing");
skewedOptions = {
	threshold: .6
}
const skewObserver = new IntersectionObserver(function(entries){
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("swing");
		}
	}
)}, skewedOptions);

skewedObjects.forEach(object => skewObserver.observe(object))


 

