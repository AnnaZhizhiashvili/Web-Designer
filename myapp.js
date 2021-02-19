const sections = [...document.querySelectorAll('section')];
const links = [...document.querySelectorAll(".navigation a")];
const linkLis = [...document.querySelectorAll(".navigation a li")];

const header = document.querySelector('header');
const home = document.querySelector('#home');
let sectionOptions = {
	threshold: .75
};

// let headerOptions = {
// 	rootMargin: "0px 0px -1000px 0px",

// };

// const headerObserver = new IntersectionObserver(function(entries) {
// 	entries.forEach(entry => {
// 		console.log(entry);
// 		if (!entry.isIntersecting) {
// 			header.classList.add("header-scroll");
// 		} else {
// 			header.classList.remove("header-scroll");
// 		}
// 	}), headerOptions
// });
// headerObserver.observe(home);

document.addEventListener('scroll', function(e) {
	if (window.pageYOffset > 200) {
			header.classList.add("header-scroll");
	}	else {
		header.classList.remove("header-scroll");
	}
});

window.addEventListener('load', function(e) {
	if (window.pageYOffset > 200) {
			header.classList.add("header-scroll");
	}	else {
		header.classList.remove("header-scroll");
	}

 	

  });



const sectionObserver = new IntersectionObserver(function(entries) {
		 entries.forEach(entry => {
	 	 let sectionHref = `#${entry.target.getAttribute('id')}`;
	 	 let link = links.find(l => l.getAttribute('href') === sectionHref);
	 	const element = link.querySelector("li");
	 	if (entry.isIntersecting) {
			// entry.target.classList.add("active");
			
			element.style.fontWeight="bold";

			
			
		} else {
			// entry.target.classList.remove("active");
			element.style.fontWeight= "300";
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


// smooth unhiding

const scrolledSections = document.querySelectorAll("#on-scroll");
let firstProperties = {
	threshold: .5
};

scrolledSections.forEach(sec => {sec.classList.add("hide-sections");

});

const firstObserver =  new IntersectionObserver(function(entries) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) return;
		entry.target.classList.remove("hide-sections");
		// firstObserver.unobserve(entry.target);
	});
}, firstProperties)



scrolledSections.forEach(sec => {
	firstObserver.observe(sec);
});




//Porfolio, shuffling elements


var $grid = $("#grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows"
});

$("#filters").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});


//nav-bar

const hamburger = document.querySelector(".nav-hamburger");
const navigation = document.querySelector(".navigation");
const canvas = document.querySelector("#particles-js");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("open");
	navigation.classList.toggle("nav-open");
	canvas.classList.toggle("canvas");

});

links.forEach(link => link.addEventListener("click", ()=> {
	hamburger.classList.toggle("open");
	navigation.classList.toggle("nav-open");
	canvas.classList.toggle("canvas");

}));


// scroll text
// const name = document.querySelector(".name")
// document.addEventListener('scroll', function(e) {
// 	if (window.pageYOffset > 200) {
// 			const rect = name.getBoundingClientRect();
// 			console.log(rect.y);
// 			name.style.top = `${rect.y -1}px`
// 		}
		
// });









