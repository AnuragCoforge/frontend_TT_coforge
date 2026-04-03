export class Student {
    sid!:number
    sname!:string
    course!:string

    constructor(sid?: number, sname?: string, course?: string) {
    if (sid !== undefined) this.sid = sid;
    if (sname !== undefined) this.sname = sname;
    if (course !== undefined) this.course = course;
  }

}
