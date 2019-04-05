$(document).ready(function(){
	$("#pass").keyup(function(){
  		strength();
	});
});

function strength(){
	var val = document.getElementById("pass").value;
	var status=document.getElementById("length");

	var counter = 0;

	if (val!="")
	{
		if(val.length<=8)
			counter=1;
		if(val.length>8 && val.length<=12)
			counter=2;
		if(val.length>12 && val.length<=16)
			counter=3;
		if(val.length>16 && val.length<=50)
                        counter=4;

		if (counter==1)
		{
			status.innerHTML="WEAK";
			status.style.background="#ff0000";
			status.style.color="#ffffff";
		}
		if (counter==2)
		{
			status.innerHTML="GOOD";
			status.style.background="#ffa500";
			status.style.color="#000000";
		}
		if (counter==3)
		{
			status.innerHTML="STRONG";
			status.style.background="#00ff00";
		}
	        if (counter==4)
                {
                        status.innerHTML="VERY STRONG";
                        status.style.background="#00ff00";
                }

	}
}
