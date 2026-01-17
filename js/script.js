document.addEventListener ('DOMContentLoaded', () => {
    const form = document.getElementById ('contactform');

    if (form) {
        form.addEventListener ('submit', async (e) => {
            e.preventDefault ();
            alert('Thank you for your message! We will get back to you shortly.');
            form.reset ();
        });
    } else {
        console.log('Contact form not found on the page.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const clearBtn = document.getElementById("clearBtn");
  const searchInput = document.getElementById("searchInput");

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const searchTerm = searchInput.value.toLowerCase().trim();
      
      if (searchTerm === "") {
        showAllRecommendations();
        return;
      }

      // Hide all recommendation sections initially
      const allSections = document.querySelectorAll(".recommendation");
      allSections.forEach(section => section.style.display = "none");

      let found = false;

      // Check if search term matches "beach"
      if (searchTerm.includes("beach")) {
        const beachSection = Array.from(allSections).find(section =>
          section.querySelector("h2").textContent.includes("Beach")
        );
        if (beachSection) {
          beachSection.style.display = "block";
          found = true;
        }
      }

      // Check if search term matches "country"
      if (searchTerm.includes("country")) {
        const countrySection = Array.from(allSections).find(section =>
          section.querySelector("h2").textContent.includes("Country")
        );
        if (countrySection) {
          countrySection.style.display = "block";
          found = true;
        }
      }

      // Check if search term matches "temple"
      if (searchTerm.includes("temple")) {
        const templeSection = Array.from(allSections).find(section =>
          section.querySelector("h2").textContent.includes("Temple")
        );
        if (templeSection) {
          templeSection.style.display = "block";
          found = true;
        }
      }

      if (!found) {
        showAllRecommendations();
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      showAllRecommendations();
    });
  }

  // Function to show all recommendations
  function showAllRecommendations() {
    const allSections = document.querySelectorAll(".recommendation");
    allSections.forEach(section => section.style.display = "block");
  }
});
