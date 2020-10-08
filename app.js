let courses = [
    { id: 1, title: "Administratör" },
    { id: 2, title: "Målare" },
    { id: 3, title: "Undersköterska LSS" },
    { id: 4, title: "Golvläggare" },
    { id: 5, title: "Bygg-Träarbete" },
    { id: 6, title: "VVS montör" },
    { id: 7, title: "Nätverkstekniker" },
    { id: 8, title: "Automationselektriker" },
    { id: 9, title: "Vård och omsorgsutbildning" },
    { id: 10, title: "Murare" },
    { id: 11, title: "Bygg-Anläggning" },
  ];
  
  courses.forEach((course) => {
    createCourse(course.id, course.title);
  });
  
  function createCourse(id, title) {
    var li = document.createElement("LI");
    li.id = id;
  
    var h4 = document.createElement("h4");
    h4.innerHTML = title;
  
    var button = '<button onClick="checkId(this)">Välj</button>';
  
    li.appendChild(h4);
    li.insertAdjacentHTML("beforeend", button);
  
    document.getElementById("courseList").appendChild(li);
  }
  
  function checkId(clickedElement) {
    addSelectedCourse(clickedElement.parentNode.id);
  }
  
  function addSelectedCourse(id) {

    var selectedCourseAlreadySelected = document.getElementById(courses[id - 1].title);
  
    if (!selectedCourseAlreadySelected) {
      var li = document.createElement("LI");
  
      li.id = id;
      li.setAttribute("id", courses[id - 1].title);
  
      var h4 = document.createElement("h4");
      h4.innerHTML = courses[id - 1].title;
  
      li.appendChild(h4);
  
      var deleteButton = '<button onClick="removeCourse(this)">Ta bort</button>';
  
      li.insertAdjacentHTML("beforeend", deleteButton);
  
      document.getElementById("selectedCourses").appendChild(li);
    }
  }
  
  function removeCourse(course) {
    document.getElementById(course.parentNode.id).remove();
  }
  