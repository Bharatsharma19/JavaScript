function show() {
  var roll = document.getElementById("rollno").value;
  var name = document.getElementById("name").value;
  var fn = document.getElementById("fname").value;
  var sn = document.getElementById("sname").value;

  var sub1 = parseInt(document.getElementById("pmarks").value);
  var sub2 = parseInt(document.getElementById("cmarks").value);
  var sub3 = parseInt(document.getElementById("mmarks").value);
  var sub4 = parseInt(document.getElementById("hmarks").value);
  var sub5 = parseInt(document.getElementById("emarks").value);
  var total = sub1 + sub2 + sub3 + sub4 + sub5;
  var per = total / 5;
  var grade;

  if (per >= 00 && per <= 32) {
    grade = "Failed";
  } else if (per >= 33 && per <= 48) {
    grade = "F";
  } else if (per >= 49 && per <= 60) {
    grade = "E";
  } else if (per >= 61 && per <= 70) {
    grade = "D";
  } else if (per >= 71 && per <= 80) {
    grade = "C";
  } else if (per >= 81 && per <= 90) {
    grade = "B";
  } else if (per >= 91 && per <= 100) {
    grade = "A";
  } else {
    grade = "Invalid";
  }

  var fnl =
    "<table color='blue' border='1' cellspacing='1' cellpadding='16' width='64%' ><caption><h1>Final Result</h1></caption>";
  fnl += `<tr><th>Board</th><th>Roll No.</th><th>Name</th><th>Gender</th><th>F. Name</th><th>S. Name</th><th>Total Marks</th><th>Percentage</th><th>Grade</th></tr>`;
  fnl += `<tr><td><img src='cbse.png' alt='CBSE LOGO' width='90'></td>
				<td><b>${roll}</b></td>
				<td><b>${name}</b></td>
				<td><b>${gen}</b></td>
				<td><b>${fn}</b></td>
				<td><b>${sn}</b></td>
				<td><b>${total}/500</b></td>
				<td><b>${per} %</b></td>
				<td><b>${grade}</b></td>
			</tr>`;

  document.getElementById("final").innerHTML = fnl;

  if (grade == "A" || grade == "B") {
    alert(`Congratulation, You Scored ${per} %`);
  }

  /*
	var gen = document.getElementsByName('gender')
	for(i = 0; i < gen.length; i++) {
		if(gen[i].checked)
		var gend = document.getElementById(gen[i].value);
    }
*/
  var gen = document.getElementsByName("gender");
  var selected = Array.from(radios).find((radio) => radio.checked);
  alert(selected.value);
}
