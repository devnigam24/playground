class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public lastName: string,
    public isMale: Boolean
  ) {
    if (isMale) {
      this.fullName = "Mr. " + firstName + " " + lastName;
    } else {
      this.fullName = "Ms. " + firstName + " " + lastName;
    }
  }
}

document.getElementById("play-sec-1").innerHTML = new Student(
  "devvrat",
  "nigam",
  false
).fullName;
