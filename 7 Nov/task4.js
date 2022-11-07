let obj = {
    firstName: "Nouran", 
    lastName: "Omar", 
    age: 24, 
    salary: 450,
}

function employeesInfo(obj){
    document.write("The First name is : "+ obj.firstName + "<br>");
    document.write( " The Age is : "+ obj.age + "<br>");
    document.write(" The Salary is : "+ obj.salary);
    
}

employeesInfo(obj);