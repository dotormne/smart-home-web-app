$(document).on("pageinit", function(){
	
	//VARIABLES
	var socket = io.connect('http://localhost:3000');
	var tmpData; //temp data variable
	
	//ON DATA RECEIVE (Set the GUI)
	socket.on('recData', function(data){
		tmpData = data.split('');
						//LIGHT1
						if(tmpData[2]=="1"){
								//Destop version Light1 turns on
								$("#deskLight-1").css({"background-image": 'url("/images/light_on.png")'});
								//Mobile version Light1 turns on
								$('#flip-select-1').val('on').flipswitch('refresh');
								$("#lightImg-1").attr("src", "/images/light_on.png");
						}
						else if(tmpData[2]=="0"){
								//Destop version Light1 turns off
								$("#deskLight-1").css({"background-image": 'url("/images/light_off.png")'});
								//Mobile version Light1 turns off
								$('#flip-select-1').val('off').flipswitch('refresh');
								$("#lightImg-1").attr("src", "/images/light_off.png");
						}
						
						//LIGHT2
						if(tmpData[3]=="1"){
								//Destop version Light2 turns on
								$("#deskLight-2").css({"background-image": 'url("/images/light_on.png")'});
								//Mobile version Light2 turns on
								$('#flip-select-2').val('on').flipswitch('refresh');
								$("#lightImg-2").attr("src", "/images/light_on.png");
						}
						else if(tmpData[3]=="0"){
								//Destop version Light2 turns off
								$("#deskLight-2").css({"background-image": 'url("/images/light_off.png")'});
								//Mobile version Light2 turns off
								$('#flip-select-2').val('off').flipswitch('refresh');
								$("#lightImg-2").attr("src", "/images/light_off.png");
						}
						
						//LIGHT3
						if(tmpData[4]=="1"){
								//Destop version Light3 turns on
								$("#deskLight-3").css({"background-image": 'url("/images/light_on.png")'});
								//Mobile version Light3 turns on
								$('#flip-select-3').val('on').flipswitch('refresh');
								$("#lightImg-3").attr("src", "/images/light_on.png");
						}
						else if(tmpData[4]=="0"){
								//Destop version Light3 turns off
								$("#deskLight-3").css({"background-image": 'url("/images/light_off.png")'});
								//Mobile version Light3 turns off
								$('#flip-select-3').val('off').flipswitch('refresh');
								$("#lightImg-3").attr("src", "/images/light_off.png");
						}
						
						//LIGHT4
						if(tmpData[5]=="1"){
								//Destop version Light4 turns on
								$("#deskLight-4").css({"background-image": 'url("/images/light_on.png")'});
								//Mobile version Light4 turns on
								$('#flip-select-4').val('on').flipswitch('refresh');
								$("#lightImg-4").attr("src", "/images/light_on.png");
						}
						else if(tmpData[5]=="0"){
								//Destop version Light4 turns off
								$("#deskLight-4").css({"background-image": 'url("/images/light_off.png")'});
								//Mobile version Light4 turns off
								$('#flip-select-4').val('off').flipswitch('refresh');
								$("#lightImg-4").attr("src", "/images/light_off.png");
						}
						
						//ALARM
						if(tmpData[0]=="1"){
							//Desktop Alarm on
							$("#deskAlarm").css({'background-color': 'red'}); 
							$("#deskAlarm p").text("Alarm ON");
							//Mobile Alarm on
							$("#mobAlarm").css({'background-color': 'red'}); 
							$("#mobAlarm p").text("Alarm ON");
						}
						else if(tmpData[0]=="0"){
							//Desktop Alarm off
							$("#deskAlarm").css({'background-color': 'LightGray'}); 
							$("#deskAlarm p").text("Alarm OFF");
							//Mobile Alarm off
							$("#mobAlarm").css({'background-color': 'LightGray'}); 
							$("#mobAlarm p").text("Alarm OFF");
						}
						
						//AC
						if(tmpData[6]== "0"){
							//Desktop AC off
							$("#deskAC-0").prop('checked',true).checkboxradio('refresh');
							$("#deskAC-1").prop('checked',false).checkboxradio('refresh');
							$("#deskAC-2").prop('checked',false).checkboxradio('refresh');
							$("#deskAC-3").prop('checked',false).checkboxradio('refresh');
							//Mobile AC off
							$("#mobAC-0").prop('checked',true).checkboxradio('refresh');
							$("#mobAC-1").prop('checked',false).checkboxradio('refresh');
							$("#mobAC-2").prop('checked',false).checkboxradio('refresh');
							$("#mobAC-3").prop('checked',false).checkboxradio('refresh');
						}
						else if(tmpData[6]=="1"){
							//Desktop AC Low
							$("#deskAC-0").prop('checked',false).checkboxradio('refresh');
							$("#deskAC-1").prop('checked',true).checkboxradio('refresh');
							$("#deskAC-2").prop('checked',false).checkboxradio('refresh');
							$("#deskAC-3").prop('checked',false).checkboxradio('refresh');
							//Mobile AC low
							$("#mobAC-0").prop('checked',false).checkboxradio('refresh');
							$("#mobAC-1").prop('checked',true).checkboxradio('refresh');
							$("#mobAC-2").prop('checked',false).checkboxradio('refresh');
							$("#mobAC-3").prop('checked',false).checkboxradio('refresh');
						}
						else if(tmpData[6]=="2"){
							//Desktop AC Medium
							$("#deskAC-0").prop('checked',false).checkboxradio('refresh');
							$("#deskAC-1").prop('checked',false).checkboxradio('refresh');
							$("#deskAC-2").prop('checked',true).checkboxradio('refresh');
							$("#deskAC-3").prop('checked',false).checkboxradio('refresh');
							//Mobile AC Medium
							$("#mobAC-0").prop('checked',false).checkboxradio('refresh');
							$("#mobAC-1").prop('checked',false).checkboxradio('refresh');
							$("#mobAC-2").prop('checked',true).checkboxradio('refresh');
							$("#mobAC-3").prop('checked',false).checkboxradio('refresh');
						}
						else if(tmpData[6]=="3"){
							//Desktop AC High
							$("#deskAC-0").prop('checked',false).checkboxradio('refresh');
							$("#deskAC-1").prop('checked',false).checkboxradio('refresh');
							$("#deskAC-2").prop('checked',false).checkboxradio('refresh');
							$("#deskAC-3").prop('checked',true).checkboxradio('refresh');
							//Mobile AC High
							$("#mobAC-0").prop('checked',false).checkboxradio('refresh');
							$("#mobAC-1").prop('checked',false).checkboxradio('refresh');
							$("#mobAC-2").prop('checked',false).checkboxradio('refresh');
							$("#mobAC-3").prop('checked',true).checkboxradio('refresh');
						}
						
						//Door 1 open/closed
						if(tmpData[7]==1){
							//Desktop Door1 closed
							$("#deskDoor1").css({
								"transform": "rotate(0deg)",
								"bottom": "55%",
								"left": "27%",
								"background-color": "red"
							});
							//Mobile Door1 closed
							$("#mobDoor1div").text("closed");
							$("#mobDoor1div").css({"color": "red"});
						}
						else if(tmpData[7]==0){
							//Desktop Door1 open
							$("#deskDoor1").css({
								"transform": "rotate(80deg)",
								"bottom": "50%",
								"left": "25.5%",
								"background-color": "green"
							});
							//Mobile Door1 open
							$("#mobDoor1div").text("open");
							$("#mobDoor1div").css({"color": "green"});
						}
						
						//Door 2 open/closed
						if(tmpData[8]==1){
							//Desktop Door2 closed
							$("#deskDoor2").css({
								"transform": "rotate(0deg)",
								"bottom": "21%",
								"left": "31%",
								"background-color": "red"
							});
							//Mobile Door1 closed
							$("#mobDoor2div").text("closed");
							$("#mobDoor2div").css({"color": "red"});
						}
						else if(tmpData[8]==0){
							//Desktop Door2 open
							$("#deskDoor2").css({
								"transform": "rotate(80deg)",
								"bottom": "17%",
								"left": "29.5%",
								"background-color": "green"
							});
							//Mobile Door2 open
							$("#mobDoor2div").text("open");
							$("#mobDoor2div").css({"color": "green"});
						}
	});
	
	/*---------------------------------------------------- CODE FOR MOBILE VERSION -----------------------------------------------------------*/
	
	//Light1
	$('#mobLight1').on('vclick', function() {
		if(tmpData[2] == '1'){
			socket.emit('wrData', 'LA0\n');
			$('#flip-select-1').val('off').flipswitch('refresh');
			$("#lightImg-1").attr("src", "/images/light_off.png");
		}	
		else if(tmpData[2] == '0'){
			socket.emit('wrData', 'LA1\n');
			$('#flip-select-1').val('on').flipswitch('refresh');
			$("#lightImg-1").attr("src", "/images/light_on.png");
		}	
	});
	
	//Light2
	$('#mobLight2').on('vclick', function() {
		if(tmpData[3] == '1'){
			socket.emit('wrData', 'LB0\n');
			$('#flip-select-2').val('off').flipswitch('refresh');
			$("#lightImg-2").attr("src", "/images/light_off.png");
		}	
		else if(tmpData[3] == '0'){
			socket.emit('wrData', 'LB1\n');
			$('#flip-select-2').val('on').flipswitch('refresh');
			$("#lightImg-2").attr("src", "/images/light_on.png");
		}
	});
	
	//Light3
	$('#mobLight3').on('vclick', function() {
		if(tmpData[4] == '1'){
			socket.emit('wrData', 'LC0\n');
			$('#flip-select-3').val('off').flipswitch('refresh');
			$("#lightImg-3").attr("src", "/images/light_off.png");
		}	
		else if(tmpData[4] == '0'){
			socket.emit('wrData', 'LC1\n');
			$('#flip-select-3').val('on').flipswitch('refresh');
			$("#lightImg-3").attr("src", "/images/light_on.png");
		}
	});
	
	//Light4
	$('#mobLight4').on('vclick', function() {
		if(tmpData[5] == '1'){
			socket.emit('wrData', 'LD0\n');
			$('#flip-select-4').val('off').flipswitch('refresh');
			$("#lightImg-4").attr("src", "/images/light_off.png");
		}	
		else if(tmpData[5] == '0'){
			socket.emit('wrData', 'LD1\n');
			$('#flip-select-4').val('on').flipswitch('refresh');
			$("#lightImg-4").attr("src", "/images/light_on.png");
		}
	});
	
	//AC control
	$("#mobAC-0").on('click', function(){ //AC OFF
		socket.emit('wrData', 'PK0\n');
		$("#mobAC-0").prop('checked',true).checkboxradio('refresh');
		$("#mobAC-1").prop('checked',false).checkboxradio('refresh');
		$("#mobAC-2").prop('checked',false).checkboxradio('refresh');
		$("#mobAC-3").prop('checked',false).checkboxradio('refresh');
	});
	
	$("#mobAC-1").on('click', function(){ //AC LOW
		socket.emit('wrData', 'PK1\n');
		$("#mobAC-0").prop('checked',false).checkboxradio('refresh');
		$("#mobAC-1").prop('checked',true).checkboxradio('refresh');
		$("#mobAC-2").prop('checked',false).checkboxradio('refresh');
		$("#mobAC-3").prop('checked',false).checkboxradio('refresh');
	});
	
	$("#mobAC-2").on('click', function(){ //AC MEDIUM
		socket.emit('wrData', 'PK2\n');
		$("#mobAC-0").prop('checked',false).checkboxradio('refresh');
		$("#mobAC-1").prop('checked',false).checkboxradio('refresh');
		$("#mobAC-2").prop('checked',true).checkboxradio('refresh');
		$("#mobAC-3").prop('checked',false).checkboxradio('refresh');
	});
	
	$("#mobAC-3").on('click', function(){ //AC HIGH
		socket.emit('wrData', 'PK3\n');
		$("#mobAC-0").prop('checked',false).checkboxradio('refresh');
		$("#mobAC-1").prop('checked',false).checkboxradio('refresh');
		$("#mobAC-2").prop('checked',false).checkboxradio('refresh');
		$("#mobAC-3").prop('checked',true).checkboxradio('refresh');
	});
	
	/*-------------------------------------------------------- CODE FOR DESKTOP VERSION -----------------------------------------------------*/
	
	//Light1
	$("#deskLight-1").on("vclick", function(){
		if(tmpData[2] == '1'){
			socket.emit('wrData', 'LA0\n');
			$("#deskLight-1").css({"background-image": 'url("/images/light_off.png")'});
		}	
		else if(tmpData[2] == '0'){
			socket.emit('wrData', 'LA1\n');
			$("#deskLight-1").css({"background-image": 'url("/images/light_on.png")'});
		}	
	});
	
	//Light2
	$("#deskLight-2").on("vclick", function(){
		if(tmpData[3] == '1'){
			socket.emit('wrData', 'LB0\n');
			$("#deskLight-2").css({"background-image": 'url("/images/light_off.png")'});
		}	
		else if(tmpData[3] == '0'){
			socket.emit('wrData', 'LB1\n');
			$("#deskLight-2").css({"background-image": 'url("/images/light_on.png")'});
		}	
	});
	
	//Light3
	$("#deskLight-3").on("vclick", function(){
		if(tmpData[4] == '1'){
			socket.emit('wrData', 'LC0\n');
			$("#deskLight-3").css({"background-image": 'url("/images/light_off.png")'});
		}	
		else if(tmpData[4] == '0'){
			socket.emit('wrData', 'LC1\n');
			$("#deskLight-3").css({"background-image": 'url("/images/light_on.png")'});
		}	
	});
	
	//Light4
	$("#deskLight-4").on("vclick", function(){
		if(tmpData[5] == '1'){
			socket.emit('wrData', 'LD0\n');
			$("#deskLight-4").css({"background-image": 'url("/images/light_off.png")'});
		}	
		else if(tmpData[5] == '0'){
			socket.emit('wrData', 'LD1\n');
			$("#deskLight-4").css({"background-image": 'url("/images/light_on.png")'});
		}	
	});
	
	//AC control
	$("#deskAC-0").on('click', function(){ //AC OFF
		socket.emit('wrData', 'PK0\n');
		$("#deskAC-0").prop('checked',true).checkboxradio('refresh');
		$("#deskAC-1").prop('checked',false).checkboxradio('refresh');
		$("#deskAC-2").prop('checked',false).checkboxradio('refresh');
		$("#deskAC-3").prop('checked',false).checkboxradio('refresh');
	});
	
	$("#deskAC-1").on('click', function(){ //AC LOW
		socket.emit('wrData', 'PK1\n');
		$("#deskAC-0").prop('checked',false).checkboxradio('refresh');
		$("#deskAC-1").prop('checked',true).checkboxradio('refresh');
		$("#deskAC-2").prop('checked',false).checkboxradio('refresh');
		$("#deskAC-3").prop('checked',false).checkboxradio('refresh');
	});
	
	$("#deskAC-2").on('click', function(){ //AC MEDIUM
		socket.emit('wrData', 'PK2\n');
		$("#deskAC-0").prop('checked',false).checkboxradio('refresh');
		$("#deskAC-1").prop('checked',false).checkboxradio('refresh');
		$("#deskAC-2").prop('checked',true).checkboxradio('refresh');
		$("#deskAC-3").prop('checked',false).checkboxradio('refresh');
	});
	
	$("#deskAC-3").on('click', function(){ //AC HIGH
		socket.emit('wrData', 'PK3\n');
		$("#deskAC-0").prop('checked',false).checkboxradio('refresh');
		$("#deskAC-1").prop('checked',false).checkboxradio('refresh');
		$("#deskAC-2").prop('checked',false).checkboxradio('refresh');
		$("#deskAC-3").prop('checked',true).checkboxradio('refresh');
	});
});