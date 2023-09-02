document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const products = document.querySelectorAll(".product");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");
            
            products.forEach(product => {
                const productType = product.getAttribute("data-type");

                if (filterValue === "all" ||
                    (filterValue === "new" && productType === "new") ||
                    (filterValue === "best-seller" && productType === "best-seller")) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});

