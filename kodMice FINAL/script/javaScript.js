function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
      x.className = "topNav responsive";
    } else {
      x.className = "topNav";
    }
  }