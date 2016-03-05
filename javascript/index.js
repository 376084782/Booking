window.onload=function(){
	ini();
	}
	function ini(){
		var tar=document.getElementsByClassName("now");
	for(var i=0;i<tar.length;i++){
		tar[i].addEventListener("click", paging);
	}
	}
	function judge(t,j){
			var Id=t.className.split(" ")[0].slice(4,5);
			ID=parseInt(Id)+2*j;
			if(document.getElementsByClassName("page"+ID)[0]!=null){
				return 1;
		}
		else return 0;
	}
	function getPage(page){
		return document.getElementsByClassName("page"+page)[0];
	}
	function paging(){
		
		var t=this;
		var i=0;
		var j=-1;
		var i2=-90*j;
		var name=t.className.toString();
		if(name.indexOf('right')!=-1){
			j=1;
		}
		if(judge(t,j)==1){
			var Id=t.className.split(" ")[0].slice(4,5);
				ID=parseInt(Id);
				an=90*j;
			var time=null;	
			var time=setInterval(function(){
				
				getPage(ID+2*j).classList.add('next');
			if(i<90&&i>-90){
				i+=j;
			t.style.transform="rotateY("+i+"deg)";
			var ang=-i/6;
			t.style.transform+="skewY("+ang+"deg)";
			}

			else if(i<180&&i>=90||i<=-90&&i>-180){
					i+=j;
					i2-=1;
					getPage(ID+j).classList.add('now');
					getPage(ID+j).style.transform = 'rotateY('+an+'deg)';getPage(ID-j).classList.add('next');
					getPage(ID-j).classList.remove("now");
				getPage(ID+j).style.transform = "rotateY("+i2+"deg)";
				var ang=j*i2/6;
				getPage(ID+j).style.transform+="skewY("+ang+"deg)";
				}
				else{
				clearInterval(time);
				t.classList.remove("now");
				getPage(ID+j).style.transform = "rotateY(0deg)";
				getPage(ID-j).style.transform = 'rotateY(0deg)';
				getPage(ID+2*j).classList.remove('next');
				getPage(ID+2*j).classList.add('now');
				getPage(ID-j).classList.remove('next');ini();
				}
		},10);
			
		}
	}
	
