const baseUrl = "https://formulaire.unige.ch/outils/booking/mdl/test-login/api/courses.php";

const languageSelect = document.getElementById("language");
const levelSelect = document.getElementById("level");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");
const results = document.getElementById("results");

const levelLabels = {
  1: "A0",
  2: "A1",
  3: "A2",
  4: "B1",
  5: "B2",
  6: "C1",
  7: "C2"
};

function showLoading() {
  loading.classList.remove("hidden");
  errorBox.classList.add("hidden");
  results.innerHTML = "";
}

function hideLoading() {
  loading.classList.add("hidden");
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("hidden");
}

function renderCourses(courses) {
  results.innerHTML = "";

  if (!courses || courses.length === 0) {
    results.innerHTML = "<p>Aucun cours trouvé.</p>";
    return;
  }

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";

    card.innerHTML = `
      <div class="course-title">${course.title}</div>
      <div class="course-info"><strong>Langue :</strong> ${course.language}</div>
      <div class="course-info"><strong>Niveau :</strong> ${levelLabels[course.level] || course.level}</div>
    `;

    results.appendChild(card);
  });
}

async function fetchCourses() {
  showLoading();

  try {
    const params = new URLSearchParams();

    if (languageSelect.value) {
      params.append("lang", languageSelect.value);
    }

    if (levelSelect.value) {
      params.append("level", levelSelect.value);
    }

    const url = params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erreur lors de l'appel à l'API.");
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error("L'API a retourné une réponse invalide.");
    }

    renderCourses(data.data);
  } catch (error) {
    showError("Impossible de récupérer les cours. Veuillez réessayer plus tard.");
  } finally {
    hideLoading();
  }
}

searchBtn.addEventListener("click", fetchCourses);

// Chargement initial
fetchCourses();