document.addEventListener("DOMContentLoaded", function () {

    const favoriteButton = document.querySelector("#favoriteButton");

    favoriteButton.addEventListener("click", function () {

        // Switch between favorited and unfavorited
        favoriteButton.classList.toggle("is-favorite");

        // Check the heart's new state
        const isFavorite =
            favoriteButton.classList.contains("is-favorite");

        // Update accessibility information
        favoriteButton.setAttribute(
            "aria-pressed",
            isFavorite
        );

        favoriteButton.setAttribute(
            "aria-label",
            isFavorite
                ? "Remove from favorites"
                : "Add to favorites"
        );

        // Remove bounce so it can restart
        favoriteButton.classList.remove("bounce");

        // Force browser to recognize animation reset
        void favoriteButton.offsetWidth;

        // Play bounce again
        favoriteButton.classList.add("bounce");

    });


    favoriteButton.addEventListener("animationend", function () {

        favoriteButton.classList.remove("bounce");

    });

});