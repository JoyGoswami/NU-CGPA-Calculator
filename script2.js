const courseData = {
  English: [
    {
      year: "First Year",
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
      year: "Second Year",
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
    {
      year: "Third Year",
      subjects: [
        "Elizabethan and Jacobean Drama",
        "16th & 17th Century Poetry",
        "17th and 18th Century Non-Fictional Prose",
        "Restoration and Eighteenth Century Fiction",
        "Restoration and Eighteenth Century Poetry and Drama",
        "Victorian Poetry",
        "Introduction to Literary Criticism (Up to Romantic Period)",
        "Introduction to Linguistics",
      ],
      "Elizabethan and Jacobean Drama": "4",
      "16th & 17th Century Poetry": "4",
      "17th and 18th Century Non-Fictional Prose": "4",
      "Restoration and Eighteenth Century Fiction": "4",
      "Restoration and Eighteenth Century Poetry and Drama": "4",
      "Victorian Poetry": "4",
      "Introduction to Literary Criticism (Up to Romantic Period)": "4",
      "Introduction to Linguistics": "4",
    },
    {
      year: "Fourth Year",
      subjects: [
        "Nineteenth Century Novel",
        "Twentieth Century Poetry",
        "Modern Drama",
        "Twentieth Century Novel",
        "American Poetry",
        "American Literature: Fiction and Drama",
        "Classics in Translation",
        "Literary Criticism (From Victorian to Modern Age)",
        "Continental Literature Or Approaches and Methods of Language Teaching",
        "Viva-voce",
      ],
      "Nineteenth Century Novel": "4",
      "Twentieth Century Poetry": "4",
      "Modern Drama": "4",
      "Twentieth Century Novel": "4",
      "American Poetry": "4",
      "American Literature: Fiction and Drama": "4",
      "Classics in Translation": "4",
      "Literary Criticism (From Victorian to Modern Age)": "4",
      "Continental Literature Or Approaches and Methods of Language Teaching":
        "4",
      "Viva-voce": "4",
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
let creditArr = [];
let gradeArr = [];
let creditArr2 = [];
let gradeArr2 = [];
//
let creditArr1st = [];
let creditArr2nd = [];
let creditArr3rd = [];
let creditArr4th = [];
let gradeArr1st = [];
let gradeArr2nd = [];
let gradeArr3rd = [];
let gradeArr4th = [];

let gpaArr = [];
//
let gradeObj = {};
let trackSection = 0;

// Courses
const subjectOptions = ["Select Course", "English", "Bangla"];
// ================================
// ========populate options========
// ================================
const courseNameSeleceElement = document.getElementById("course_name");
populateOptions(courseNameSeleceElement, subjectOptions, "Select Course");
// ================================
// ========populate options========
// ================================

// ================================
// ==From Home page to second page=
// ================================
const nuGpaBtn = document.getElementById("nu-gpa-btn");

nuGpaBtn.addEventListener("click", () => {
  document.querySelector(".home-main").style.display = "none";
  document.querySelector(".nu-calculate-home").style.display = "block";
});
// ================================
// ==From Home page to second page=
// ================================

// ================================
// ========page 2form submit========
// ================================
const infoForm = document.getElementById("info-form");
infoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  trackSection += 1;
  console.log(trackSection);

  // Get course name and year values
  const courseName = document.getElementById("course_name").value;
  const courseYear = document.getElementById("course_year").value;

  //display year
  let currentYear = courseData[courseName][courseYear].year;
  document.querySelector(".year-1").textContent = currentYear;

  document.getElementById("table-form-1").setAttribute("name", currentYear);
  // selecting form body where child elements will be appened
  const tableBody = document.getElementById("table_body-1");

  //create elements a tr and 4 tds
  // const tr = document.createElement("tr");
  // const tdSerialNo = document.createElement("td");
  // const tdSubjectName = document.createElement("td");
  // const tdCredit = document.createElement("td");
  // const tdGrade = document.createElement("td");

  //append 4 tds to tr
  // tr.appendChild(tdSerialNo, tdSubjectName, tdCredit, tdGrade);

  // getting the data from courseData and displaying it
  courseData[courseName][courseYear].subjects.forEach((subject, index) => {
    createElements(
      tableBody,
      courseName,
      courseYear,
      subject,
      index,
      currentYear
    );
  });
  // remove nu-calculate-home
  document.querySelector(".nu-calculate-home").style.display = "none";
  document.querySelector(".nu-display-gpa-1").style.display = "block";
  // document.querySelector(".nu-display-gpa-0").classList.add("0");

  //display another year options based on selected year. disable the selected year
  const selectAnotherEl = document.getElementById("another-year");
  selectAnotherEl.style.display = "block";
  for (let i = 0; i < selectAnotherEl.options.length; i++) {
    if (selectAnotherEl.options[i].label === currentYear) {
      selectAnotherEl.options[i].disabled = true;
    }
  }
});
// ================================
// ========page 2form submit========
// ================================

// ================================
// ========page 3 form 1 submit========
// ================================
const tableForm = document.getElementById("table-form-1");
tableForm.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".result-1").style.display = "block";

  const get_year_name = document.getElementById("table-form-1");
  const get_year_attr = get_year_name.getAttribute("name");
  let split = get_year_attr.split(" ");
  let year = split[0];
  console.log(year);

  const selectElements = document.querySelectorAll(`.${year}`);
  console.log(selectElements);
  // gradeArr2 = [];
  gradeArr1st = [];
  gradeArr2nd = [];
  gradeArr3rd = [];
  gradeArr4th = [];
  const totalCreditEl = document.querySelector(".total-credit-1");
  const gpaEl = document.querySelector(".gpa-1");

  if (year === "First") {
    getGrade(selectElements, gradeArr1st, creditArr1st, totalCreditEl, gpaEl);
  } else if (year === "Second") {
    getGrade(selectElements, gradeArr2nd, creditArr2nd, totalCreditEl, gpaEl);
  } else if (year === "Third") {
    getGrade(selectElements, gradeArr3rd, creditArr3rd, totalCreditEl, gpaEl);
  } else if (year === "Fourth") {
    getGrade(selectElements, gradeArr4th, creditArr4th, totalCreditEl, gpaEl);
  }
});
// ================================
// ========page 3 form 1 submit========
// ================================

// ================================
// ========display another year on ui========
// ================================
const selectAnotherEl = document.getElementById("another-year");
selectAnotherEl.addEventListener("change", function () {
  trackSection += 1;
  console.log(trackSection);
  const courseName = document.getElementById("course_name").value;
  const courseYear = selectAnotherEl.value;
  // document.querySelector(".nu-display-gpa-1").classList.add("1");

  // console.log(document.querySelectorAll(".nu-display-gpa").classList);

  document.querySelector(`.nu-display-gpa-${trackSection}`).style.display =
    "block";

  //display year
  let currentYear = courseData[courseName][courseYear].year;
  document.querySelector(`.year-${trackSection}`).textContent = currentYear;

  //form
  document
    .getElementById(`table-form-${trackSection}`)
    .setAttribute("name", currentYear);

  // selecting form body where child elements will be appened
  const tableBody = document.getElementById(`table_body-${trackSection}`);

  // getting the data from courseData and displaying it
  courseData[courseName][courseYear].subjects.forEach((subject, index) => {
    createElements(
      tableBody,
      courseName,
      courseYear,
      subject,
      index,
      currentYear
    );
  });
  //display another year options based on selected year. disable the selected year

  for (let i = 0; i < selectAnotherEl.options.length; i++) {
    if (selectAnotherEl.options[i].label === currentYear) {
      selectAnotherEl.options[i].disabled = true;
    }
  }
});
// ================================
// ========display another year on ui========
// ================================

// ================================
// ========page 3 form 2 submit========
// ================================
const tableForm2 = document.getElementById("table-form-2");
tableForm2.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".result-2").style.display = "block";

  // const selectElements = document.querySelectorAll(".select2");
  //getting the year name
  const get_year_name = document.getElementById("table-form-2");
  const get_year_attr = get_year_name.getAttribute("name");
  let split = get_year_attr.split(" ");
  let year = split[0];
  console.log(year);

  const selectElements = document.querySelectorAll(`.${year}`);

  // gradeArr2 = [];
  if (year === "First") {
    gradeArr1st = [];
  } else if (year === "Second") {
    gradeArr2nd = [];
  } else if (year === "Third") {
    gradeArr3rd = [];
  } else if (year === "Fourth") {
    gradeArr4th = [];
  }
  // gradeArr1st = [];
  // gradeArr2nd = [];
  const totalCreditEl = document.querySelector(".total-credit-2");
  const gpaEl = document.querySelector(".gpa-2");

  if (year === "First") {
    getGrade(selectElements, gradeArr1st, creditArr1st, totalCreditEl, gpaEl);
  } else if (year === "Second") {
    getGrade(selectElements, gradeArr2nd, creditArr2nd, totalCreditEl, gpaEl);
  } else if (year === "Third") {
    getGrade(selectElements, gradeArr3rd, creditArr3rd, totalCreditEl, gpaEl);
  } else if (year === "Fourth") {
    getGrade(selectElements, gradeArr4th, creditArr4th, totalCreditEl, gpaEl);
  }
});
// ================================
// ========page 3 form 2 submit========
// ================================
// ================================
// ========page 3 form 3 submit========
// ================================
const tableForm3 = document.getElementById("table-form-3");
tableForm3.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".result-3").style.display = "block";

  // const selectElements = document.querySelectorAll(".select2");
  //getting the year name
  const get_year_name = document.getElementById("table-form-3");
  const get_year_attr = get_year_name.getAttribute("name");
  let split = get_year_attr.split(" ");
  let year = split[0];
  console.log(year);

  const selectElements = document.querySelectorAll(`.${year}`);

  // gradeArr2 = [];
  if (year === "First") {
    gradeArr1st = [];
  } else if (year === "Second") {
    gradeArr2nd = [];
  } else if (year === "Third") {
    gradeArr3rd = [];
  } else if (year === "Fourth") {
    gradeArr4th = [];
  }
  // gradeArr1st = [];
  // gradeArr2nd = [];
  const totalCreditEl = document.querySelector(".total-credit-3");
  const gpaEl = document.querySelector(".gpa-3");

  if (year === "First") {
    getGrade(selectElements, gradeArr1st, creditArr1st, totalCreditEl, gpaEl);
  } else if (year === "Second") {
    getGrade(selectElements, gradeArr2nd, creditArr2nd, totalCreditEl, gpaEl);
  } else if (year === "Third") {
    getGrade(selectElements, gradeArr3rd, creditArr3rd, totalCreditEl, gpaEl);
  } else if (year === "Fourth") {
    getGrade(selectElements, gradeArr4th, creditArr4th, totalCreditEl, gpaEl);
  }
});
// ================================
// ========page 3 form 3 submit========
// ================================
// ================================
// ========page 3 form 4 submit========
// ================================
const tableForm4 = document.getElementById("table-form-4");
tableForm4.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".result-4").style.display = "block";

  // const selectElements = document.querySelectorAll(".select2");
  //getting the year name
  const get_year_name = document.getElementById("table-form-4");
  const get_year_attr = get_year_name.getAttribute("name");
  let split = get_year_attr.split(" ");
  let year = split[0];
  console.log(year);

  const selectElements = document.querySelectorAll(`.${year}`);

  // gradeArr2 = [];
  if (year === "First") {
    gradeArr1st = [];
  } else if (year === "Second") {
    gradeArr2nd = [];
  } else if (year === "Third") {
    gradeArr3rd = [];
  } else if (year === "Fourth") {
    gradeArr4th = [];
  }
  // gradeArr1st = [];
  // gradeArr2nd = [];
  const totalCreditEl = document.querySelector(".total-credit-4");
  const gpaEl = document.querySelector(".gpa-4");

  if (year === "First") {
    getGrade(selectElements, gradeArr1st, creditArr1st, totalCreditEl, gpaEl);
  } else if (year === "Second") {
    getGrade(selectElements, gradeArr2nd, creditArr2nd, totalCreditEl, gpaEl);
  } else if (year === "Third") {
    getGrade(selectElements, gradeArr3rd, creditArr3rd, totalCreditEl, gpaEl);
  } else if (year === "Fourth") {
    getGrade(selectElements, gradeArr4th, creditArr4th, totalCreditEl, gpaEl);
  }
});
// ================================
// ========page 3 form 4 submit========
// ================================

// ================================
// ========functions========
// ================================
function displayResult(creditArr, gradeArr, totalCreditEl, gpaEl) {
  //calculate gpa

  // muliplying creditArr and gradeArr and storing into sgpa
  // sgpa = gpa(grade) * credit

  let sgpa = creditArr.map((value, index) => value * gradeArr[index]);
  // sgpa = gpa(grade) * credit
  // gpa = total sgpa / total credit
  let totalSgpa = sgpa.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let totalCredit = creditArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // gpa = Total SGPA / Total Credit
  let gpa = totalSgpa / totalCredit;
  // gpaArr.push(gpa);

  //display values
  totalCreditEl.textContent = totalCredit;
  gpaEl.textContent = gpa.toFixed(2);
  const cgpaEl = document.querySelector(".cgpa-1");
}

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

//credit = Number(courseData[courseName][courseYear][subject])
//currentYear = courseData[courseName][courseYear].year
function createElements(
  parentEl,
  courseName,
  courseYear,
  subject,
  index,
  currentYear
) {
  const tr = document.createElement("tr");
  parentEl.appendChild(tr);
  const tdSerialNo = document.createElement("td");
  tdSerialNo.textContent = index + 1;
  const tdSubjectName = document.createElement("td");
  tdSubjectName.textContent = subject;
  const tdCredit = document.createElement("td");

  // storing credits to an array depending on year
  let creditNum = Number(courseData[courseName][courseYear][subject]);
  if (currentYear === "First Year") {
    creditArr1st.push(creditNum);
  } else if (currentYear === "Second Year") {
    creditArr2nd.push(creditNum);
  } else if (currentYear === "Third Year") {
    creditArr3rd.push(creditNum);
  } else if (currentYear === "Fourth Year") {
    creditArr4th.push(creditNum);
  }
  // creditArr2.push(creditNum);
  //display credits in credit tdele
  tdCredit.textContent = courseData[courseName][courseYear][subject];

  //create td and and append select
  const tdGrade = document.createElement("td");
  const select = document.createElement("select");
  select.className = currentYear;

  populateOptions(select, grades, "Select");

  tdGrade.appendChild(select);

  //append 4 tds to tr
  tr.append(tdSerialNo, tdSubjectName, tdCredit, tdGrade);
}
function getGrade(selectElements, gradeArr, creditArr, totalCreditEl, gpaEl) {
  selectElements.forEach((select) => {
    // store the grade values in gradeStr as string
    let gradeStr = select.value;
    console.log(gradeStr);
    // find the index of the first space to delete the first letter
    let firstSpaceIndex = gradeStr.indexOf(" ");
    let grades = gradeStr.slice(firstSpaceIndex + 1);
    if (grades === "Select") {
      grades = "0";
    }
    gradeArr.push(Number(grades));
  });
  console.log("1st credit" + creditArr1st);
  console.log("2nd credit" + creditArr2nd);
  console.log("1st grade" + gradeArr1st);
  console.log("2nd grade" + gradeArr2nd);
  console.log("gpaArr" + gpaArr);

  gpaArr = [];
  let firstYearGpa = calculateGpa(creditArr1st, gradeArr1st);
  let secondYearGpa = calculateGpa(creditArr2nd, gradeArr2nd);
  let thirdYearGpa = calculateGpa(creditArr3rd, gradeArr3rd);
  let fourthYearGpa = calculateGpa(creditArr4th, gradeArr4th);
  gpaArr.push(firstYearGpa);
  gpaArr.push(secondYearGpa);
  gpaArr.push(thirdYearGpa);
  gpaArr.push(fourthYearGpa);
  console.log(gpaArr);
  // let g = gpaArr.filter((value) => {
  //   !isNaN(value);
  // });
  // console.log(g);
  console.log();
  calculateCgpa(gpaArr);

  displayResult(creditArr, gradeArr, totalCreditEl, gpaEl);
}
function calculateGpa(creditArr, gradeArr) {
  //calculate gpa

  // muliplying creditArr and gradeArr and storing into sgpa
  // sgpa = gpa(grade) * credit

  let sgpa = creditArr.map((value, index) => value * gradeArr[index]);
  // sgpa = gpa(grade) * credit
  // gpa = total sgpa / total credit
  let totalSgpa = sgpa.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let totalCredit = creditArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // gpa = Total SGPA / Total Credit
  let gpa = totalSgpa / totalCredit;

  return gpa;
}
function calculateCgpa(gpaArr) {
  for (let i = gpaArr.length - 1; i >= 0; i--) {
    if (isNaN(gpaArr[i])) {
      gpaArr.splice(i, 1);
    }
  }
  console.log(gpaArr);

  let totalGpa = gpaArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let cgpa = totalGpa / gpaArr.length;

  const cgpaEl1 = document.querySelector(".cgpa-1");
  const cgpaEl2 = document.querySelector(".cgpa-2");
  const cgpaEl3 = document.querySelector(".cgpa-3");
  const cgpaEl4 = document.querySelector(".cgpa-4");

  if (gpaArr.length === 1) {
    cgpaEl1.textContent = cgpa.toFixed(2);
  }
  if (gpaArr.length === 2) {
    cgpaEl2.textContent = cgpa.toFixed(2);
  }
  if (gpaArr.length === 3) {
    cgpaEl3.textContent = cgpa.toFixed(2);
  }
  if (gpaArr.length === 4) {
    cgpaEl4.textContent = cgpa.toFixed(2);
  }
  console.log(cgpa);
}
// ================================
// ========functions========
// ================================
