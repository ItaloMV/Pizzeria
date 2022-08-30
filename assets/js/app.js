const img = document.querySelectorAll("img");

function intersection(entries, observer) {
  entries.forEach((entry) => {
    console.log("intersection", entry.target);
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};
const observer = new IntersectionObserver(intersection, options);

img.forEach((i) => {
  observer.observe(i);
});
