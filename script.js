document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
  {
    title: "StrokeSense — AI Stroke Detection",
    summary: "Detects ischemic & hemorrhagic strokes from CT/MRI (DWI, GRE, SWI).",
    tech: ["Python","TensorFlow","OpenCV"],
    github: "https://github.com/hishammolawi/strokesense"
  },
  {
    title: "Tourism Recommender — Jeddah",
    summary: "Content/hybrid recommendations for activities & events in Jeddah.",
    tech: ["Python","Pandas","Scikit-learn","Flask"],
    github: "https://github.com/hishammolawi/jeddah-recommender"
  },
  {
    title: "Bone Fracture Classifier",
    summary: "X-ray classifier with explainability overlays.",
    tech: ["PyTorch","Grad-CAM","Albumentations"],
    github: "https://github.com/hishammolawi/bone-fracture"
  }
];

const wrap = document.getElementById("projects");
wrap.innerHTML = projects.map(p => `
  <article class="card">
    <h3>${p.title}</h3>
    <p>${p.summary}</p>
    <p>${p.tech.map(t=>`<span style="opacity:.8">${t}</span>`).join(" · ")}</p>
    <a class="btn" href="${p.github}" target="_blank" rel="noopener">View on GitHub</a>
  </article>
`).join("");
