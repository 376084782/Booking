window.onload=function(){
	ini();
	}
	function ini(){
		var tar=document.getElementsByClassName("now");
		var tagN=new Array();
		for(var i=0;i<tar.length;i++){
			tar[i].addEventListener("click",flipP);
			tagN.push(tar[i].classList[0]);
		}
		var tags=document.getElementsByClassName('tags')[0].getElementsByTagName('li');
		for(var i=0;i<tags.length;i++){
			tags[i].addEventListener("click", flipT);
			tags[i].classList.remove("focus");
		}
		var tag=document.getElementById(tagN[0])||document.getElementById(tagN[1]);
		tag.classList.add("focus");
		
	}
	function getPage(page){
		return document.getElementsByClassName("page"+page)[0];
	}
	function flipP(){
		var t=this;
		var Id=t.className.split(" ")[0].slice(4,5);
		ID=parseInt(Id);
		paging(ID);
	} 
	function flipT(){
		var nows=document.getElementsByClassName('now');
		var Id=nows[0].className.split(" ")[0].slice(4,5);
		ID=parseInt(Id);
		var tar=this.id.slice(4,5);
		tarP=Math.floor((tar-ID)/2);
		if(tarP<0){
			ID=ID;
		}
		else{
			ID+=1;
		}
		if(tarP!=0){
			paging(ID,tarP);
		}
	}
	function paging(ID,tarP){
		var i=0;
		var j=1;

		if(tarP==null){
			tarP=1;
		}
		var name=getPage(ID).className.toString();
		if(tarP<0||name.indexOf('left')!=-1){
			j=-1;
		}
		tarP=Math.abs(tarP);
		var i2=Math.abs(90*j);
		if(getPage(ID+(2*tarP-1)*j)){
			an=90*j;
			var time=null;	
			var time=setInterval(function(){
				
				getPage(ID+(2*tarP)*j).classList.add('next');
			if(i<90&&i>-90){
				i+=j;
			getPage(ID).style.transform="rotateY("+i+"deg)";
			var ang=-i/6;
			getPage(ID).style.transform+="skewY("+ang+"deg)";
			}

			else if(i<180&&i>=90||i<=-90&&i>-180){
					i+=j;
					i2-=1;
					getPage(ID+(2*tarP-1)*j).classList.add('now');
					getPage(ID-j).classList.add("next");
					getPage(ID+(2*tarP-1)*j).style.transform = 'rotateY('+an+'deg)';
					
				getPage(ID+(2*tarP-1)*j).style.transform = "rotateY("+i2+"deg)";
				var ang=j*i2/6;
				getPage(ID+(2*tarP-1)*j).style.transform+="skewY("+ang+"deg)";
				}
				else{
				clearInterval(time);
				getPage(ID).classList.remove("now");
				getPage(ID).style.transform="rotateY(0deg)";
				getPage(ID).style.transform+="skewY(0deg)";
				getPage(ID+(2*tarP-1)*j).style.transform = "rotateY(0deg)";
				getPage(ID+(2*tarP-1)*j).style.transform = 'rotateY(0deg)';
				getPage(ID+(2*tarP)*j).classList.add('now');
				getPage(ID-j).classList.remove("now");
				getPage(ID+(2*tarP)*j).classList.remove('next');
				getPage(ID-j).classList.remove("next");
				}
				ini();
		},1);
			
		}
		ini();
	}
	
