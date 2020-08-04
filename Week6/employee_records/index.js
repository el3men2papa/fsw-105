function employees (Name, JobTitle, Salary){
    this.Name = Name
    this.JobTitle = JobTitle
    this.Salary = Salary
    this.Status = "Full Time"
    this.printEmployeeForm = function (){
  console.log(`
    Name: ${this.Name}
    Jobtitle: ${this.JobTitle}
    Salary: ${this.Salary}
    Status: ${this.Status}
  `)
    }
  }
  
  let bob = new employees ("bob", "V School Instructor","3000/hr")
  bob.printEmployeeForm()
  
  let andrew = new employees ("Andrew", "Sales", "10000/hr")
  andrew.printEmployeeForm()
  
  let luis = new employees ("Luis", "Representetive", "2000/hr")
  luis.Status = "Contract"
  luis.printEmployeeForm()
  
  