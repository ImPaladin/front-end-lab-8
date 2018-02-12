var n = parseFloat(prompt("Enter natural number N. 0<N<=20"));
	if (n <= 0 || n > 20 || isNaN(n)) {
		console.error("Incorrect");
	}else{
	var str = "";
	for(var i = 1; i <= n; i++){
			var a = "";
			for(var z = 1; z <= n-i; z++){
				a += "   ";
			}
			for (var x = 1 ; x <= (2*i)-1; x++){
				a +="[~]";
			}
			str += a + "\n";
	}
	console.log(str);	
}

