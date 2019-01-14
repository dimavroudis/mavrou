export function AnimateOnView(elements, animation) {

	let observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				entry.target.classList.add(animation);
			} else {
				entry.target.classList.remove(animation);
			}
		});
	});

	elements.forEach(element => {
		observer.observe(element);
	});
}
