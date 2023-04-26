$(document).on("pageinit", function(){
	
	$("#enterBtnME").hover(
		function(){
			
			$("#houseIco").css({"background-image": 'url("/images/home2.png")'});
		},
		
		function(){
			$("#houseIco").css({"background-image": 'url("/images/home.png")'});
		}
	);
	
	$("#enterBtnEN").hover(
		function(){
			
			$("#houseIco").css({"background-image": 'url("/images/home2.png")'});
		},
		
		function(){
			$("#houseIco").css({"background-image": 'url("/images/home.png")'});
		}
	);
});