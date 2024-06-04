let fname = prompt('Enter your name');
let departm = Number(prompt('Enter Your department')); 
let salary = Number(prompt('Enter your gross salary'));
let department;
let departmentStandard = 500;
let department7 = 550;
let percent = 0.2;


if (departm === 7) {
    department = department7;
} else {
    department = departmentStandard;
}