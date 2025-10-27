document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
  {
    title: "StrokeSense — AI Stroke Detection",
    summary: "Detects ischemic & hemorrhagic strokes from CT/MRI (DWI, GRE, SWI).",
    tech: ["Python","TensorFlow","OpenCV"],
    github: "https://github.com/He1himself/stroke-sense-project"
  },
  {
    title: "Visitors Prediction System",
    summary: "Predicting number of visitors using ML models for better resource allocation.",
    tech: ["Python","Scikit-learn","Flask"],
    github: "https://github.com/He1himself/Visitors-prediction-System"
  }
];

const wrap = document.getElementById("projects");
wrap.innerHTML = projects.map(p => `
  <article class="card">
    <h3>${p.title}</h3>
    <p>${p.summary}</p>

