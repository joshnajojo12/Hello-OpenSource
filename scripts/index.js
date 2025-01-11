tailwind.config = {
  theme: {
    extend: {
      colors: {
        dark: "#030712",
        darker: "#000000",
        primary: "#22D3EE",
        secondary: "#818CF8",
        accent: "#F472B6",
        highlight: "#F8FAFC",
        tertiary: "#FFA500",
        card: "#111827",
        muted: "#a6a4a4",
        surface: "#1F2937",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        instrument: ["Instrument Sans", "sans-serif"],
        general: ["General Sans", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
    },
  },
};

function createContributorCard(contributor) {
  return `
                <div class="bg-surface rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                    <div class="relative aspect-square overflow-hidden">
                        <img src="${
                          contributor.image ||
                          "../images/johndoe.png"
                        }"
                             alt="${contributor.name}'s profile picture"
                             class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div class="p-6">
                        <h2 class="font-unbounded text-lg font-light text-highlight mb-2">
                            ${contributor.name}
                        </h2>
                        
                        <p class="font-instrument text text-primary mb-1">${
                          contributor.department || ""
                        }</p>
                        <p class="font-general text text-muted mb-3">${
                          contributor.college || ""
                        }</p>
                        
                        <p class="font-instrument text text-secondary/90 mb-4 line-clamp-2">
                            ${contributor.description || ""}
                        </p>
                        
                        <div class="flex justify-between text-sm pt-3 border-t border-white/5">
                            <a href="${contributor.github}" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="font-general text-muted hover:text-tertiary transition-colors duration-300">
                                <i class="fab fa-github"></i> GitHub
                            </a>
                            <a href="${contributor.linkedin}" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="font-general text-muted hover:text-accent transition-colors duration-300">
                                <i class="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            `;
}

function renderContributors(contributors) {
  const grid = document.getElementById("contributors-grid");
  grid.innerHTML = contributors
    .map((contributor) => createContributorCard(contributor))
    .join("");
}

function updateTotalContributors(count) {
  document.getElementById(
    "total-contributors"
  ).textContent = `Total Contributors: ${count}`;
}

function filterContributors(contributors, searchTerm) {
  return contributors.filter(
    (contributor) =>
      (contributor.name || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (contributor.department || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (contributor.college || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (contributor.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );
}

document.addEventListener("DOMContentLoaded", async () => {
  let contributorsData = [];

  try {
    const response = await fetch("contributors.json");
    contributorsData = await response.json();
    document.getElementById("loader").style.display = "none";
    renderContributors(contributorsData);
    updateTotalContributors(contributorsData.length);
  } catch (error) {
    console.error("Error fetching contributors:", error);
    document.getElementById("loader").innerHTML = `
                    <div class="text-red-500">Error loading contributors. Please try again later.</div>
                `;
  }

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value;
    const filteredContributors = filterContributors(
      contributorsData,
      searchTerm
    );
    renderContributors(filteredContributors);
    updateTotalContributors(filteredContributors.length);
  });
  document.getElementById("view-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("view-bottom").addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});
