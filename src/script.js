document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".gallery");
    const categoryButtons = document.querySelectorAll(".category-button");
  
    function showGallery(categoryId) {
      categories.forEach(function (category) {
        category.style.display = "none";
      });
  
      const selectedCategory = document.getElementById(categoryId);
      if (selectedCategory) {
        selectedCategory.style.display = "flex";
      }
    }
  
    categoryButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const categoryId = button.getAttribute("data-category");
  
        // Remover a classe 'active' de todos os botões
        categoryButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });
  
        // Adicionar a classe 'active' ao botão clicado
        button.classList.add("active");
  
        // Exibir a galeria correspondente
        showGallery(categoryId);
      });
    });
  
    // Exibir a galeria "Todas" por padrão
    showGallery("all");
  });