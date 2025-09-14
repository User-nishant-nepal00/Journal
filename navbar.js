// navbar.js

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  if (!navbarContainer) return;

  navbarContainer.innerHTML = `
    <nav class="navigation">
      <div class="nav-container">
        <ul class="nav-menu">
          <li><a href="index.html" class="nav-link">HOME</a></li>
          <li><a href="focus.html" class="nav-link">FOCUS</a></li>
          <li><a href="author-guidelines.html" class="nav-link">AUTHOR GUIDELINES</a></li>
          <li><a href="current.html" class="nav-link">CURRENT</a></li>
          <li><a href="archive.html" class="nav-link">ARCHIVE</a></li>
          <li><a href="publication-ethics.html" class="nav-link">PUBLICATION ETHICS</a></li>
          <li><a href="search.html" class="nav-link">SEARCH</a></li>
        </ul>
      </div>
    </nav>
  `;

  const links = navbarContainer.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
