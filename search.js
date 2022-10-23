//guideline
//Go to '02 Enter Previous Courses' and check the course you took.
//Then, checked courses will be stored ini localStorage as the key "cseCourses"

//Next go to '03 Select Courses' and search some courses based on words then click them to apply
//Applied courses will be stored in localStorage "personalCourses" and it will go through the process of scrutinizing already taken course, prerequisite
//During the process, prerequisite course will be sotred in localstorage "requisiteCourses" and show in alert
//After the process, localStorgae will be cleared
//So if you want to go through the entire process one more, go back to '02 Enter Previous Courses' and do the same procedure

//I put some console.log method of localStorage to see the changes clearly


function arrayAddtoLocalStorage() {
    var checkboxes = document.querySelectorAll('.checkbox');

    window.localStorage.setItem('cseCourses', '');

    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            window.localStorage.cseCourses += String(checkbox.value);
            window.localStorage.cseCourses += ' ';
        } 
    }
    console.log(window.localStorage);
}

let courses = [
    { courseNumber: "CSE101", courseName: "Algorithmic Thinking", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE114", courseName: "Introduction to Object Oriented Programming", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE214", courseName: "Data Structures", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE215", courseName: "Foundations of Computer Science", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE216", courseName: "Programing Abstractions", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE220", courseName: "System Fundamentals I", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE303", courseName: "Introduction to the Theory of Computation", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE304", courseName: "Compiler Design", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE305", courseName: "Database Systems", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE306", courseName: "Operating Systems", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE310", courseName: "Computer Networks", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE316", courseName: "Software Development", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE320", courseName: "System Fundamentals II", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE331", courseName: "Computer Security Basics", seatsRemaining: 40, capacity: 40 },
    { courseNumber: "CSE416", courseName: "Software Engineering", seatsRemaining: 40, capacity: 40 },

];

function courseOrganize() {
    for (courseNum of courses) {
        courseKey = String(courseNum.courseNumber.slice(3, 6));
        totSentence = courseNum.courseNumber + ' : ' + courseNum.courseName + " - " + courseNum.seatsRemaining + " of " + courseNum.capacity;
        window.localStorage.setItem(courseKey, totSentence);
    }
}

function search_word(text, word) {

    var x = 0, y = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }

    if (x > 0) {
        return true;
    }
    else {
        return false;
    }
}

const courseList = document.getElementById('courseList');

//make form of checkbox and label and return to html page
function addNewTodo(text) {
    const textCourseName = String(text.slice(0, 6));
    const textCourseNum = String(text.slice(3, 6));
    

    const workDiv = document.createElement('div');
    workDiv.setAttribute('class', 'alignBox');

    const workInput = document.createElement('input');
    workInput.setAttribute('type', 'checkbox');
    workInput.setAttribute('value', textCourseNum);
    workInput.setAttribute('class', 'checkbox');

    workDiv.append(workInput);

    const workLabel = document.createElement('label');
    workLabel.setAttribute('for', textCourseName);
    workLabel.textContent = text;
    workDiv.append(workLabel);

    const registerButton = document.getElementById('random2 ');
    courseList.append(workDiv);
}


function searchCsecourse() {
    const word = document.getElementById('searchFor').value;

    courseOrganize();

    //reset list in courseList id
    courseList.innerHTML = "";

    if (word.length === 0) {
        //when input is nothing, show all cse courses
        for (let j = 0; j < window.localStorage.length; j++) {

            const tarKey = window.localStorage.key(j);

            if (tarKey == 'cseCourses') {
                continue;
            }

            let tarVal = window.localStorage.getItem(tarKey);
            tarVal = String(tarVal);

            addNewTodo(tarVal);
        }
    }
    else {
        for (let j = 0; j < window.localStorage.length; j++) {

            const tarKey = window.localStorage.key(j);

            //To ignore cseCourses
            if (tarKey == 'cseCourses') {
                continue;
            }

            let tarVal = window.localStorage.getItem(tarKey);
            tarVal = String(tarVal);

            //convert lowercase
            tarValLower = tarVal.toLowerCase();
            wordLower = word.toLowerCase();


            if (search_word(tarValLower, wordLower)) {
                addNewTodo(tarVal);
            }


        }
    }
    const displayBack = document.getElementById('innerBorder');
    displayBack.removeAttribute('style');

    // returning the input name into sentence
    var userReturn = document.getElementById('username')
    var userReturnName = userReturn.value;
    const nameTitle = document.createElement('h1');
    nameTitle.textContent = userReturnName + ' here are the courses you may select.';
    courseList.children[0].before(nameTitle);
    
    console.log(window.localStorage);
    
}

function courseApplyAvaliableCheck(k) {

    var eventStorage = window.localStorage.getItem('personalCourses');

    var searchWord = '';
    for (var i = 0; i< 3; i++) {
        searchWord += eventStorage[k + i];
    }

    var targetText = window.localStorage.getItem('cseCourses');
        
    if (search_word(targetText, searchWord)) {
        window.alert('Courses Already Completed:' + ' CSE' + searchWord);
    }
    else {
        window.alert('Courses Selected:' + ' CSE' + searchWord);
        
    }
}

let coursePre = {
    'CSE101': [],
    'CSE114': [],
    'CSE214': ['CSE114'],
    'CSE215': [],
    'CSE216': ['CSE214'],
    'CSE220': ['CSE214'],
    'CSE300': [],
    'CSE303': ['CSE214', 'CSE215'],
    'CSE304': ['CSE216', 'CSE220'],
    'CSE305': ['CSE216'],
    'CSE306': ['CSE216', 'CSE320'],
    'CSE310': ['CSE214', 'CSE220'],
    'CSE312': [],
    'CSE316': ['CSE216'],
    'CSE320': ['CSE220'],
    'CSE416': ['CSE316']
}



//check for the prerequisite and save prereq courses into localstorage requisiteCourses 
function checkRequisite(sw) {
    var swCse = 'CSE' + sw;
    var cnt = 0
    var targetText = window.localStorage.getItem('cseCourses');

    var targetValue = coursePre[swCse];

    if (targetValue.length == 0) {
        return false;
    }
    else {
        for (var i of targetValue) {
            var cseNum = String(i.slice(3, 6));
            if (search_word(targetText, cseNum) == false) {
                window.localStorage.requisiteCourses += i;
                cnt = 1
            }
        }
        if (cnt == 1) {
            return true;
        } else {
            return false;
        }
        
    }
}

function arrayAddtoLocalStorage2() {
    //window.localStorage.personalCourses = ' ';

    var checkboxes = document.querySelectorAll('.checkbox');
    var cnt = 0

    window.localStorage.setItem('personalCourses', '');

    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            window.localStorage.personalCourses += ' ';
            window.localStorage.personalCourses += String(checkbox.value);
            cnt += 1
        }
    }

    console.log(window.localStorage);

    var eventStorage = window.localStorage.getItem('personalCourses');
    var eventRange = eventStorage.length;

    

    for (var k = 0; k < cnt; k++) {
        window.localStorage.setItem('requisiteCourses', '');

        var searchWord = '';
        for (var i = 1; i <= 3; i++) {
            searchWord += eventStorage[i + 4 * k];
        }

        var newPersonalCourses = window.localStorage.getItem('personalCourses').slice(4);

        var targetText = window.localStorage.getItem('cseCourses');

        // filter when you already took the course
        if (search_word(targetText, searchWord) == true) {
            window.alert('Courses Already Completed:' + ' CSE' + searchWord);
        }
  
        // filter when there is prerequisite
        else if(checkRequisite(searchWord) == true) {

            window.alert('CSE' + searchWord + ' requires ' + window.localStorage.getItem('requisiteCourses'));
        }
        
        // successful for enrolling
        else {
            window.alert('Courses Selected:' + ' CSE' + searchWord);
            
        }

        window.localStorage.setItem('personalCourses', newPersonalCourses);
    }
    window.localStorage.clear();
    console.log(window.localStorage);

}



