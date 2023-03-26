function story(){
	// Initial declarations
	var num1 = Math.ceil(Math.random()*20);
	var num2 = Math.ceil(Math.random()*20);
	var num3 = Math.ceil(Math.random()*20);
	var alphabet=" abcdefghijklmnopqrstuvwxyz";

	// Initial outputs
	document.getElementById("num1").innerHTML = num1;
	document.getElementById("num2").innerHTML = num2;
	document.getElementById("num3").innerHTML = num3;
	document.getElementById("total").innerHTML = num1+num2+num3;

	// Requirement 1 - largest number/s
	if(Math.max(num1,num2,num3)==num1&&num1!=num2&&num1!=num3){
		document.getElementById("big").innerHTML="were accepted ("+num1+")";
	}
	else if(Math.max(num1,num2,num3)==num2&&num2!=num1&&num2!=num3){
		document.getElementById("big").innerHTML="were waitlisted ("+num2+")";
	}
	else if(Math.max(num1,num2,num3)==num3&&num3!=num1&&num3!=num2){
		document.getElementById("big").innerHTML="were rejected ("+num3+")";
	}
	else{
		if(num1==num2&&num1>num3){
			document.getElementById("big").innerHTML="were accepted, waitlisted ("+num1+")";
		}
		else if(num1==num3&&num1>num2){
			document.getElementById("big").innerHTML="were accepted, rejected ("+num1+")";
		}
		else if(num2==num3&&num2>num1){
			document.getElementById("big").innerHTML="were waitlisted, rejected ("+num2+")";
		}
		else if(num1==num2==num3){
			document.getElementById("big").innerHTML="were accepted, waitlisted, rejected ("+num1+")";
		}
	}
		
	// Requirement 2 - num1th letter
	if (num1!=0){
		var initials = alphabet[num1];
		document.getElementById("letter").innerHTML = initials+"."+initials;
	}
	
	// Requirement 3 - num2*num3 time
	var minutes = num2*num3;
	var hours = parseInt((num2*num3)/60);
	var remMinutes = (num2*num3)%60;
	document.getElementById("time").innerHTML=hours+"hr "+remMinutes+"min ("+minutes+"min)";
}