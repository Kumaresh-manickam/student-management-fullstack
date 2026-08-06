async function loadStudents(){

const response = await fetch("http://54.221.108.184:5000/students");

const students = await response.json();

const tbody = document.querySelector("#studentTable tbody");

tbody.innerHTML="";

students.forEach(student=>{

tbody.innerHTML += `
<tr>
<td>${student.id}</td>
<td>${student.name}</td>
<td>${student.course}</td>
</tr>
`;

});

}
