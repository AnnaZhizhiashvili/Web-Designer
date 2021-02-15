const sections = [...document.querySelectorAll('section')];
const links = [...document.querySelectorAll(".navigation a")];
const header = document.querySelector('header');
const home = document.querySelector('#home');
let sectionOptions = {
	threshold: 0.7
};

let headerOptions = {};

const headerObserver = new IntersectionObserver(function(entries) {
	entries.forEach(entry => {
		console.log(entry);
		if (!entry.isIntersecting) {
			header.classList.add("header-scroll");
			console.log("shevedi");
			
		} else {
			header.classList.remove("header-scroll");
			console.log("else");
		}
	}), headerOptions
});
headerObserver.observe(home);



const sectionObserver = new IntersectionObserver(function(entries) {
		 entries.forEach(entry => {
	 	 let sectionHref = `#${entry.target.getAttribute('id')}`;
	 	 let link = links.find(l => l.getAttribute('href') === sectionHref);
	 	
	 	if (entry.isIntersecting) {
			// entry.target.classList.add("active");
			link.classList.add("link-active");
			
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

const skewedObject1 = document.querySelectorAll("#swing");
const skewedObject2 = document.querySelector("#swinging");
const skewedObjects = [...skewedObject1, skewedObject2]

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

skewedObjects.forEach(object => skewObserver.observe(object));
//Porfolio, shuffling elements


var $grid = $("#grid").isotope({
  itemSelector: "img",
  layoutMode: "fitRows"
});

$("#filters").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});

// observe for rotating, blog sections, and 


const fadeObject1 = document.querySelectorAll(".blog__container");
const fadeObject2 = document.querySelector(".blog__main h2");
const blogScroll = document.querySelector(".blog-scroll");

let fadeOptions = {};

const fadeObserver = new IntersectionObserver(function(entries){
			entries.forEach(entry => {
				if (entry.isIntersecting) {

					fadeObject1.forEach(object => object.classList.add("scroll-blog"));
					fadeObject2.classList.add("scroll-blog-text");

		}
	}
)}, fadeOptions);

fadeObserver.observe(blogScroll);




				