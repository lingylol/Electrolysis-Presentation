function myFunction1() {
	if (document.getElementById("1").style.display === "none") {
		document.getElementById("3").style.display = "none";
		document.getElementById("1").style.display = "block";
    document.getElementById("0").style.display = "none";
		document.getElementById("2").style.display = "none";
		document.getElementById("4").style.display = "none";
		document.getElementById("subtitle").innerHTML = "Water being split";
	} else {
		document.getElementById("1").style.display = "none";
		document.getElementById("subtitle").innerHTML = "";
	}
}
function myFunction3() {
	if (document.getElementById("3").style.display === "none") {
		document.getElementById("3").style.display = "block";
		document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
		document.getElementById("0").style.display = "none";
		document.getElementById("4").style.display = "none";
		document.getElementById("subtitle").innerHTML = "Chemical Reactions";
	} else {
		document.getElementById("3").style.display = "none";
		document.getElementById("subtitle").innerHTML = "";
	}
}
function myFunction4() {
	if (document.getElementById("4").style.display === "none") {
		document.getElementById("4").style.display = "block";
		document.getElementById("3").style.display = "none";
		document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
		document.getElementById("0").style.display = "none";
		document.getElementById("subtitle").innerHTML = "Uses of Electrolysis";
	} else {
		document.getElementById("4").style.display = "none";
		document.getElementById("subtitle").innerHTML = "";
	}
}
function myFunction2() {
	if (document.getElementById("2").style.display === "none") {
		document.getElementById("3").style.display = "none";
		document.getElementById("2").style.display = "block";
		document.getElementById("1").style.display = "none";
		document.getElementById("0").style.display = "none";
		document.getElementById("4").style.display = "none";
		document.getElementById("subtitle").innerHTML =
			"Hydroxide Molucule being split";
	} else {
		document.getElementById("2").style.display = "none";
		document.getElementById("subtitle").innerHTML = "";
	}
}
function myFunction() {
	if (document.getElementById("0").style.display === "none") {
		document.getElementById("0").style.display = "block";
		document.getElementById("3").style.display = "none";
		document.getElementById("1").style.display = "none";
		document.getElementById("2").style.display = "none";
		document.getElementById("4").style.display = "none";
		document.getElementById("subtitle").innerHTML = "What is Electrolysis";
	} else {
		document.getElementById("0").style.display = "none";
		document.getElementById("subtitle").innerHTML = "";
	}
}
function setup() {
	document.getElementById("subtitle").innerHTML = "What is Electrolysis";
}

function draw() {
	document.documentElement.style.setProperty(
		`--test`,
		windowWidth / 2 - 450 + "px"
	);
	document.documentElement.style.setProperty(
		`--test2`,
		windowWidth / 2 - 300 + "px"
	);
	document.documentElement.style.setProperty(
		`--test3`,
		windowWidth / 2 - 170 + "px"
	);
	if (frameCount == 20) {
		document.getElementById("1").style.display = "none";
		document.getElementById("2").style.display = "none";
		document.getElementById("3").style.display = "none";
		document.getElementById("4").style.display = "none";
	}
}
