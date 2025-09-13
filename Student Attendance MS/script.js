const dateInput = document.getElementById("attendanceDate")
const nameInput = document.getElementById("studentName")
const tableBody = document.querySelector("#attendanceTable tbody")

const students = []
rollno = 1
window.onload() = function(){
    const savedData = localStorage.getItem("student")
    if(savedData){
        students = JSON.parse(savedData)
        rollno = students[students-1].roll+1;
    }
    displayStudents()
    setTodayDate()
}


function savedData(){
    localStorage.setItem("students",JSON.stringify)
} 

function setTodayDate(){
    const today = new Date().toISOString().split("T")[0]
    dateInput.value = today
    dateInput.addEventListener("change",displayStudents)
}

function addStudent(){
    const name = nameInput.value.trim();

    if(name === ""){
        alert("Enter Student Name")
        return
    }
 const student={
    roll : rollno,
    name : name,
    attendance : {}
 }
 students.push(student)
 rollno++
 nameInput.value = ""
 savedData()
 displayStudents()
}