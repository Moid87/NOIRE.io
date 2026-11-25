let observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

});

let cards = document.querySelectorAll(".reveal");

cards.forEach(function(card) {
    observer.observe(card);
});