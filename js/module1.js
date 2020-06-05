var module1 = (function () {
  var uname = 'zhangsan';
  var age = 18;
  console.log(age);
  function getAge() {
    return age;
  }
  return {
    myuname: uname,
    getmyAge: getAge
  }
})()