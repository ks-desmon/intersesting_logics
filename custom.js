$(document).ready(function()
{	
	var timeBegan = null
    , timeStopped = null
    , stoppedDuration = 0
    , started = null;
function start() {
    if (timeBegan === null) {
        timeBegan = new Date();
    }

    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    }
    console.log(stoppedDuration);

    started = setInterval(clockRunning, 10);	
}
function stop() {
    timeStopped = new Date();
    clearInterval(started);
}
function reset() {
    clearInterval(started);
    stoppedDuration = 0;
    timeBegan = null;
    timeStopped = null;
    document.getElementById("display-area").innerHTML = "00:00:00.000";
}
function clockRunning(){
    var currentTime = new Date()
        , timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
        , hour = timeElapsed.getUTCHours()
        , min = timeElapsed.getUTCMinutes()
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();

    document.getElementById("display-area").innerHTML = 
        (hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};
	var val=[];
	$('#submit').click(function()
	{
		if($('#getnumber').val()=="")
		{
			alert("sry fill the value first");
		}
		else {
		$('.btn1').addClass("hidden");
		$('.btn2').removeClass("hidden");
		$('#getnumber').addClass("hidden");
		var i = $('#getnumber').val();
		for (j=0;j<i;j++)
		{
			my_div.innerHTML = my_div.innerHTML +"<div class='row'><input type='number' class='abc form-control mt-1 mb-1' id='getnumber"+j+"' placeholder='Enter Number"+j+"'></div>"
		}	
		}
		
	});
	$('#submit1').click(function()
	{
		var k = $('#getnumber').val();
		for (j=0;j<k;j++)
		{	
			if ($('#getnumber'+j).val()=="")
			{
				alert("plz enter values");
				break;
				
			}
			else {
				val.push($('#getnumber'+j).val());	
			}
		}
		var a=val
		console.log(a);
		var swapp;
		var x=a;
		var n = parseInt(a.length);
		start();
		do {
			swapp = false;
			for (var i=0; i < n; i++)
			{
				if (parseInt(x[i]) > parseInt(x[i+1]))
				{
					var temp = x[i];
					x[i] = x[i+1];
					x[i+1] = temp;
					swapp = true;
				}
			}
			n--;
			}
			while (swapp);
			stop();
			clockRunning();
			var l;
			for (l=0; l < k; l++)
			{
				console.log(x[l]);
				my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+x[l]+"' placeholder='Enter Number'></div>"
				$(".abc").addClass("hidden");
			}
			$('.btn2').addClass("hidden");
	});
});