var Student = /** @class */ (function() {
  function Student(firstName, lastName, isMale) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isMale = isMale;
    if (isMale) {
      this.fullName = "Mr. " + firstName + " " + lastName;
    } else {
      this.fullName = "Ms. " + firstName + " " + lastName;
    }
  }
  return Student;
})();
window.setTimeout(() => {
  const devv = new Student("devvrat", "nigam", false);
  console.log(devv);
  document.getElementById("play-sec-1").innerHTML = devv.fullName;
}, 1);
