$(window).resize(function(){
setConsoleDimensions();
setHeaderDimensions();
setNameDimensions();
});
$(document).ready(function()
{
	setConsoleDimensions();
	setHeaderDimensions();
	setNameDimensions();
});

function getWindowDimensions()
{
	var height = window.innerHeight;
	//console.log('winodw height: '+ height);
	var width = window.innerWidth;
	//console.log('window width: '+ width);
	return [height,width];
}

function setConsoleDimensions()
{
	var output = getWindowDimensions();
	var height = output[0];
	var width = output[1];		
	
	if(width >= 900)
	{
		$('#console').width('60%');
	}
	else if(width <= 450)
	{
		$('#console').width('100%');
	}
	else
	{
		var console_new_width = 65 + ( ( (900 - width) / 450) * 40);
		var console_width_string = console_new_width + '%';
		$('#console').width(console_width_string);
	}
	
}
function setHeaderDimensions()
{
	
	var output = getWindowDimensions();
	var height = output[0];
	if(height >= 800) 
	{
		$('#console_header').height('300px');
		
	}
	else if(height < 500)
	{
		$('#cosnole_header').height('200px');
	}
	else
	{
		var header_height = 300 - (((800 - height) /300) * 100);
		var header_string = header_height + 'px';
		$('#console_header').height(header_height);
	}
}
function setNameDimensions()
{
	var width = getWindowDimensions()[1];
	if(width >= 1200)
	{
				
		$('#console_header_left').css("font-size","72px");
		
	}
	else if(width >=320 && width < 1200)
	{
		var font = 72 - ((( 1200 - width)/880) *40);
		$('#console_header_left').css("font-size",font +"px");
	}
	else
	{
		$('#console_header_left').css("font-size","32px")
	}
}

