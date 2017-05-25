
// 	var p1 = document.createElement("p");
// 	p1.id = "p1_id";
// 	p1.innerHTML = "请输入第一个数字";
// 	window.body.appendChild(p1);

// 	// document.createElement("<input type="text" id="input_1">")
// 	// document.createElement("<p>请输入第二个数字：</p>")
// 	// document.createElement("<input type="text" id="input_2">")

// function plus(num1,num2) {
// 	var num1 = getfirs
//}
function test() {
	alert("Hello Wordl");
}
// var v1, v2;
// var v1 = document.getElementById("input_1").value;
// var v2 = document.getElementById("input_2").value;

function submit1() {
	v1 = document.getElementById("input_1").value;
	document.getElementById("p_1").innerHTML = v1;
	c1 = document.getElementById("p_3").innerHTML;
	//alert(v1);
	//alert(c1);
}
//submit1();
function submit2() {
	v2 = document.getElementById("input_2").value;
	document.getElementById("p_2").innerHTML = v2;
	//alert(v2);
}

//submit2();

// function plus(a,b) {
// 	var res = v1 + v2;
// 	res = document.getElementById("result").innerHTML;
// }
function my() {
	alert(100);
}
//my();

function p() {
	submit1();
	submit2();
	//alert("sucess!");
	t1 = document.getElementById("p_1").innerHTML;
	t2 = document.getElementById("p_2").innerHTML;
	t3 = document.getElementById("p_3").innerHTML;
	var vvv = Number(t1) + Number(t2);
	document.getElementById("result").innerHTML = Number(vvv);
	alert(vvv);
	// alert(t3);
}


function plus() {
	submit1();
	submit2();
	//alert("sucess!");
	t1 = document.getElementById("p_1").innerHTML;
	t2 = document.getElementById("p_2").innerHTML;
	t3 = document.getElementById("p_3").innerHTML;
	var vvv = Number(t1) + Number(t2);
	document.getElementById("result").innerHTML = Number(vvv);
	//alert(vvv);

}
function minus() {
	submit1();
	submit2();
	//alert("sucess!");
	t1 = document.getElementById("p_1").innerHTML;
	t2 = document.getElementById("p_2").innerHTML;
	t3 = document.getElementById("p_3").innerHTML;
	var vvv = Number(t1) - Number(t2);
	document.getElementById("result").innerHTML = Number(vvv);
	//alert(vvv);

}
function mutiply() {
	submit1();
	submit2();
	//alert("sucess!");
	t1 = document.getElementById("p_1").innerHTML;
	t2 = document.getElementById("p_2").innerHTML;
	t3 = document.getElementById("p_3").innerHTML;
	var vvv = Number(t1) * Number(t2);
	document.getElementById("result").innerHTML = Number(vvv);
	//alert(vvv);
}
function divide() {
	submit1();
	submit2();
	//alert("sucess!");
	t1 = document.getElementById("p_1").innerHTML;
	t2 = document.getElementById("p_2").innerHTML;
	t3 = document.getElementById("p_3").innerHTML;
	var vvv = Number(t1) / Number(t2);
	document.getElementById("result").innerHTML = Number(vvv);
	//alert(vvv);
}


function print() {
	var v = document.getElementById("i1").value;
	alert(v);
}
