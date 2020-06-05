var module2 = (function () {
  var uname = 'lisi';
  var age = 19;
  console.log(age);
  function getAge() {
    return age;
  }
  return {
    myuname: uname,
    getmyAge: getAge
  }
})();