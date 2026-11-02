/* FIND BOTH HEART BUTTONS */

const favoriteButton =
    document.querySelector("#favoriteButton");

const navFavoriteButton =
    document.querySelector("#navFavoriteButton");



/* MAIN HEART STATE */

let isFavorite = false;

let isAnimating = false;



/* MAIN HEART CLICK */

favoriteButton.addEventListener("click", function () {

    // Don't allow another click while
    // the breaking animation is happening
    if (isAnimating) {
        return;
    }



    /* FAVORITE */

    if (!isFavorite) {

        isFavorite = true;


        // Fill main heart blue
        favoriteButton.classList.add(
            "is-favorite"
        );


        // Update accessibility
        favoriteButton.setAttribute(
            "aria-pressed",
            "true"
        );

        favoriteButton.setAttribute(
            "aria-label",
            "Remove from favorites"
        );



        /* TRIGGER NAV HEART POP */

        navFavoriteButton.classList.remove(
            "nav-pop"
        );


        // Forces browser to reset animation
        void navFavoriteButton.offsetWidth;


        navFavoriteButton.classList.add(
            "nav-pop"
        );


        // Remove animation class when finished
        setTimeout(function () {

            navFavoriteButton.classList.remove(
                "nav-pop"
            );

        }, 600);

    }



    /* UNFAVORITE */

    else {

        isAnimating = true;


        // Remove blue filled state
        favoriteButton.classList.remove(
            "is-favorite"
        );


        // Start broken-heart animation
        favoriteButton.classList.add(
            "is-breaking"
        );


        // Wait for 1 second animation
        setTimeout(function () {

            favoriteButton.classList.remove(
                "is-breaking"
            );


            isFavorite = false;

            isAnimating = false;


            favoriteButton.setAttribute(
                "aria-pressed",
                "false"
            );


            favoriteButton.setAttribute(
                "aria-label",
                "Add to favorites"
            );

        }, 1000);

    }

});



/* OPENS FAVORITES PAGE WHEN NAV HEART IS CLICKED */

navFavoriteButton.addEventListener("click", function () {
    window.location.href = "favorites.html";
});