let student = ["html", "css", "bootstrap", "javascript", "react", "node"];

student.includes("html") && student.includes("css") && student.includes("bootstrap") && 
!student.includes("javascript") && !student.includes("react") && !student.includes("node")
  ? console.log("UI/UX DESIGNER")
  : student.includes("html") && student.includes("css") && student.includes("bootstrap") &&
    student.includes("javascript") && student.includes("react") && student.includes("node")
  ? console.log("Frontend Developer")
  : student.includes("html") && student.includes("css") && student.includes("bootstrap") &&
    student.includes("node") && !student.includes("react")
  ? console.log("Backend Developer")
  : student.includes("html") && student.includes("css") && student.includes("bootstrap") &&
    student.includes("javascript") && student.includes("react") && student.includes("node")
  ? console.log("Full Stack Developer")
  : console.log("Go to 10k coders");