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
  
        // Remover a classe 'active' de todos os botões
        categoryButtons.forEach((btn) => {
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
  