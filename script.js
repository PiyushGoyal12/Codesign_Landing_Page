document.addEventListener("DOMContentLoaded", function () {
    const headline = document.querySelector(".headline");

    // Store the original text content in a data attribute
    headline.setAttribute("data-content", headline.textContent.trim());

    // Remove the original text content
    headline.textContent = "";

    // Add the "animate" class to trigger the animation
    headline.classList.add("animate");
});
