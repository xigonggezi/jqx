var module3 = (function () {
  var uname = 'wanghong';
  var age = 20;
  console.log(age);
  function getAge() {
    return age;
  }
  return {
    myuname: uname,
    getmyAge: getAge
  }
})()