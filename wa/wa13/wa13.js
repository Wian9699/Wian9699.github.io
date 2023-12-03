
// Problem 1
const employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];
console.log(employees);

//Problem 2
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};
console.log(company);


// Problem 3
company.employees.push({ firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false });
console.log(employees);

//Problem 4

let totalSalary = 0;
for (let i = 0; i < company.employees.length; i++) {
    totalSalary += company.employees[i].salary;
}
console.log("Total Salary = " + totalSalary);

//Problem 5
for (let i = 0; i < company.employees.length; i++) {
    if (company.employees[i].raiseEligible) {
        company.employees[i].salary *= 1.1;
        company.employees[i].raiseEligible = false;
    }
}
console.log(company.employees);

//Problem 6
const workingFromHome = ['Anna', 'Sam'];

for (let i = 0; i < company.employees.length; i++) {
    if (workingFromHome.includes(company.employees[i].firstName)) {
        company.employees[i].wfh = true;
    } else {
        company.employees[i].wfh = false;
    }
}

console.log(company.employees);
