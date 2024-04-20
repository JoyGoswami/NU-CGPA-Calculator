// from page one to page two
// const nuGpaBtn = document.getElementById("nu-gpa-btn");

// nuGpaBtn.addEventListener("click", () => {
//   document.querySelector(".home-main").style.display = "none";
//   document.querySelector(".nu-calculate-home").style.display = "block";
// });

const courseData = {
  English: [
    {
      year: "1st",
      subjects: [
        "English Reading Skills",
        "English Writing Skills",
        "Introduction to Poetry",
        "Introduction to Prose: Fiction and Non- Fiction",
        "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction",
        "History of the Emergence of Independent Bangladesh",
      ],
      "English Reading Skills": "4",
      "English Writing Skills": "4",
      "Introduction to Poetry": "4",
      "Introduction to Prose: Fiction and Non- Fiction": "4",
      "Introducing Sociology or Introduction to Social Work or Introduction to Political Theory : Fiction and Non- Fiction":
        "4",
      "History of the Emergence of Independent Bangladesh": "4",
    },
    {
      year: "2st",
      subjects: [
        "Introduction to Drama",
        "Romantic Poetry",
        "Advanced Reading and Writing",
        "Sociology of Bangladesh  Or  Bangladesh Society and Culture",
        "Political Organisation and The Political System of UK and USA",
        "Viva-Voce",
      ],
      "Introduction to Drama": "4",
      "Romantic Poetry": "4",
      "Advanced Reading and Writing": "4",
      "Sociology of Bangladesh  Or  Bangladesh Society and Culture": "4",
      "Political Organisation and The Political System of UK and USA": "4",
      "Viva-Voce": "2",
    },
  ],
};

const grades = [
  "Select",
  "A+ 4.00",
  "A 3.75",
  "A- 3.50",
  "B+ 3.25",
  "B 3.00",
  "B- 2.75",
  "C+ 2.50",
  "C 2.25",
  "D 2.00",
  "F 0.00",
];
// ================================
// ========populate options========
// ================================
const subjectOptions = ["Select Course", "English", "Bangla"];

const courseNameSeleceElement = document.getElementById("course_name");

// subjectOptions.forEach((subjectOption) => {
//   const optionElement = document.createElement("option");
//   if (subjectOption === "Select Course") {
//     optionElement.selected = true;
//     optionElement.disabled = true;
//   }
//   optionElement.textContent = subjectOption;
//   optionElement.value = subjectOption;
//   document.getElementById("course_name").appendChild(optionElement);
// });

populateOptions(courseNameSeleceElement, subjectOptions, "Select Course");

// ================================
// ========populate options========
// ================================

const infoForm = document.getElementById("info-form");
infoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const courseName = document.getElementById("course_name").value;
  const courseYear = document.getElementById("course_year").value;

  // remove nu-calculate-home
  document.querySelector(".nu-calculate-home").style.display = "none";
  document.querySelector(".nu-display-gpa").style.display = "block";

  //form el to append child
  const formEl = document.getElementById("table_form");
  //display data
  //create elements
  const tr = document.createElement("tr");
  const tdSerialNo = document.createElement("td");
  const tdSubjectName = document.createElement("td");
  const tdCredit = document.createElement("td");
  const tdGrade = document.createElement("td");

  //append 4 tds to tr
  tr.appendChild(tdSerialNo, tdSubjectName, tdCredit, tdGrade);
  console.log(courseData[courseName][courseYear].subjects);
  courseData[courseName][courseYear].subjects.forEach((subject, index) => {
    const tr = document.createElement("tr");
    formEl.appendChild(tr);
    const tdSerialNo = document.createElement("td");
    tdSerialNo.textContent = index + 1;
    const tdSubjectName = document.createElement("td");
    tdSubjectName.textContent = subject;
    const tdCredit = document.createElement("td");

    tdCredit.textContent = courseData[courseName][courseYear][subject];

    const tdGrade = document.createElement("td");

    const select = document.createElement("select");
    select.name = "grade";
    select.id = "grade";
    select.className = "select";

    populateOptions(select, grades, "Select");

    tdGrade.appendChild(select);

    //append 4 tds to tr
    tr.append(tdSerialNo, tdSubjectName, tdCredit, tdGrade);
  });
});

// ================================
// ========course subject========
// ================================

// ================================
// ========functions========
// ================================
function populateOptions(parentEl, options, text) {
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    if (option === text) {
      optionElement.selected = true;
      optionElement.disabled = true;
    }
    optionElement.textContent = option;
    optionElement.value = option;
    parentEl.appendChild(optionElement);
  });
}
// ================================
// ========functions========
// ================================
