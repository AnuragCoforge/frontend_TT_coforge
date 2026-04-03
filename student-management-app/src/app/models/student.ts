export class Student {
    id!:number
    sname!:string
    course!:string

    constructor(id?: number, sname?: string, course?: string) {
    if (id !== undefined) this.id = id;
    if (sname !== undefined) this.sname = sname;
    if (course !== undefined) this.course = course;
  }

}
