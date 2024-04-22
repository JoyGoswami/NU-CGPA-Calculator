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
let gradeArr1st = [];
let gradeArr2nd = [];

//
let gradeObj = {};

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
// ========page 2form submit========
// ================================
const infoForm = document.getElementById("info-form");
infoForm.addEventListener("submit", (e) => {
  e.preventDefault();

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
    // const tr = document.createElement("tr");
    // tableBody.appendChild(tr);
    // const tdSerialNo = document.createElement("td");
    // tdSerialNo.textContent = index + 1;
    // const tdSubjectName = document.createElement("td");
    // tdSubjectName.textContent = subject;
    // const tdCredit = document.createElement("td");
    // tdCredit.className = "credit";

    // // Storing credits into an array
    // // let creditArr = [];
    // let creditNum = Number(courseData[courseName][courseYear][subject]);
    // creditArr.push(creditNum);
    // //
    // tdCredit.textContent = courseData[courseName][courseYear][subject];

    // const tdGrade = document.createElement("td");

    // const select = document.createElement("select");
    // select.name = "grade";
    // select.id = "grade";
    // select.className = "select";

    // populateOptions(select, grades, "Select");

    // tdGrade.appendChild(select);

    // //append 4 tds to tr
    // tr.append(tdSerialNo, tdSubjectName, tdCredit, tdGrade);
  });
  // remove nu-calculate-home
  document.querySelector(".nu-calculate-home").style.display = "none";
  document.querySelector(".nu-display-gpa-1").style.display = "block";

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

  // const selectElements = document.querySelectorAll(".select");

  // gradeArr1st = []
  // gradeArr2nd = []

  // let year = selectElements[0].classList[0]
  // // gradeArr = [];
  // selectElements.forEach((select) => {
  //   // store the grade values in gradeStr as string
  //   let gradeStr = select.value;
  //   // find the index of the first space to delete the first letter
  //   let firstSpaceIndex = gradeStr.indexOf(" ");
  //   let grades = gradeStr.slice(firstSpaceIndex + 1);
  //   if (grades === "Select") {
  //     grades = "0";
  //   }
  //   gradeArr.push(Number(grades));
  // });
  // //   console.log(creditArr);
  // //   console.log(gradeArr);
  // // const totalCreditEl1 = document.querySelector(".total-credit-1");
  // // const gpaEl = document.querySelector(".gpa-1");
  // displayResult(creditArr, gradeArr, totalCreditEl1, gpaEl);
  //getting the year name
  // const input = document.querySelectorAll(".getYear");
  // let year = input[0].classList[0];
  // console.log(year);

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
  const totalCreditEl = document.querySelector(".total-credit-1");
  const gpaEl = document.querySelector(".gpa-1");

  if (year === "First") {
    getGrade(selectElements, gradeArr1st, creditArr1st, totalCreditEl, gpaEl);
  } else if (year === "Second") {
    getGrade(selectElements, gradeArr2nd, creditArr2nd, totalCreditEl, gpaEl);
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
  const courseName = document.getElementById("course_name").value;
  const courseYear = selectAnotherEl.value;
  document.querySelector(".nu-display-gpa-2").style.display = "block";

  //display year
  let currentYear = courseData[courseName][courseYear].year;
  document.querySelector(".year-2").textContent = currentYear;

  //form
  document.getElementById("table-form-2").setAttribute("name", currentYear);

  // selecting form body where child elements will be appened
  const tableBody = document.getElementById("table_body-2");

  //create elements a tr and 4 tds
  // const tr = document.createElement("tr");
  // const tdSerialNo = document.createElement("td");
  // const tdSubjectName = document.createElement("td");
  // const tdCredit = document.createElement("td");
  // const tdGrade = document.createElement("td");

  // //append 4 tds to tr
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
    // const tr = document.createElement("tr");
    // tableBody.appendChild(tr);
    // const tdSerialNo = document.createElement("td");
    // tdSerialNo.textContent = index + 1;
    // const tdSubjectName = document.createElement("td");
    // tdSubjectName.textContent = subject;
    // const tdCredit = document.createElement("td");
    // tdCredit.className = "credit";

    // // Storing credits into an array
    // // let creditArr = [];
    // let creditNum = Number(courseData[courseName][courseYear][subject]);
    // creditArr2.push(creditNum);
    // //
    // tdCredit.textContent = courseData[courseName][courseYear][subject];

    // const tdGrade = document.createElement("td");

    // const select = document.createElement("select");
    // select.name = "grade";
    // select.id = "grade";
    // select.className = "select2";

    // populateOptions(select, grades, "Select");

    // tdGrade.appendChild(select);

    // //append 4 tds to tr
    // tr.append(tdSerialNo, tdSubjectName, tdCredit, tdGrade);
  });
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
  console.log(selectElements);
  // gradeArr2 = [];
  gradeArr1st = [];
  gradeArr2nd = [];
  const totalCreditEl = document.querySelector(".total-credit-2");
  const gpaEl = document.querySelector(".gpa-2");
  // selectElements.forEach((select) => {
  //   // store the grade values in gradeStr as string
  //   let gradeStr = select.value;
  //   // find the index of the first space to delete the first letter
  //   let firstSpaceIndex = gradeStr.indexOf(" ");
  //   let grades = gradeStr.slice(firstSpaceIndex + 1);
  //   if (grades === "Select") {
  //     grades = "0";
  //   }
  //   gradeArr2.push(Number(grades));
  //   gradeArr2nd.push(Number(grades));
  //   // console.log(document.querySelectorAll("year"));
  // });
  // console.log(gradeArr2nd);
  // console.log(gradeArr2);

  // const totalCreditEl2 = document.querySelector(".total-credit-2");
  // const gpaEl2 = document.querySelector(".gpa-2");
  // displayResult(creditArr2nd, gradeArr2nd, totalCreditEl2, gpaEl2);
  // getGrade(selectElements, gradeArr2nd, creditArr2nd, totalCreditEl, gpaEl);

  if (year === "First") {
    getGrade(selectElements, gradeArr1st, creditArr1st, totalCreditEl, gpaEl);
  } else if (year === "Second") {
    getGrade(selectElements, gradeArr2nd, creditArr2nd, totalCreditEl, gpaEl);
  }
});
// ================================
// ========page 3 form 2 submit========
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
  // const input = document.createElement("input");
  // input.id = "getYear";
  // input.className = `${currentYear} getYear`;
  // input.hidden = true;

  // storing credits to an array depending on year
  let creditNum = Number(courseData[courseName][courseYear][subject]);
  if (currentYear === "First Year") {
    creditArr1st.push(creditNum);
  } else if (currentYear === "Second Year") {
    creditArr2nd.push(creditNum);
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
  displayResult(creditArr, gradeArr, totalCreditEl, gpaEl);
}
// ================================
// ========functions========
// ================================
