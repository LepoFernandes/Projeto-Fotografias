document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".gallery");
    const categoryButtons = document.querySelectorAll(".category-button");
  
    function showGallery(categoryId) {
      categories.forEach(function (category) {
        if (categoryId === "all" || category.id === categoryId) {
          category.style.display = "flex";
        } else {
          category.style.display = "none";
        }
      });
    }
  
    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const categoryId = button.dataset.category;
  
        
        categoryButtons.forEach((btn) => {
          btn.classList.remove("active");
        });
  
       
        button.classList.add("active");
  
       
        showGallery(categoryId);
      });
    });
  
    
    showGallery("all");
  });
  