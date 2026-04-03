export class Employee {
    empid!:number;
    empname!:string;
    emptech!:string;
    empphone!:string;

        constructor(empid?: number, empname?: string, emptech?: string, empphone?: string) {
    if (empid !== undefined) this.empid = empid;
    if (empname !== undefined) this.empname = empname;
    if (emptech !== undefined) this.emptech = emptech;
    if (empphone !== undefined) this.empphone = empphone;
  }

}
