/**
 * Created by miyashita_ak on 17/01/20.
 */
var addnumth=5;
$(document).ready(function(){
    addnew();
    setca();
	
	
});

function addnew(){
    $(".button1").click(function(){
	   
    	$(".addclass").append("<input type='text' class='text1'>");
        $(".addclass").append("<button class='button2'>Submit</button>");
        $(".button1").remove();

    $(".button2").click(function(){
        	var x=$('.text1').val();
        

        	
        $(".addclass").remove();



        if(x){
        if(addnumth%4==1)
            {$(".row2").append("<div class='col-md-2  squ'><h4 class='categoryset'>"+x+"</h4></div>");}
        else
        	{$(".row2").append("<div class='col-md-2 col-md-offset-1 squ'><h4 class='categoryset'>"+x+"</h4></div>");};
        addnumth++;
         if(addnumth%4!==0)
            {$(".row2").append("<div class='col-md-2 col-md-offset-1 addclass' style='padding: 0;margin-top: 2.5%'><button type='button' class='btn btn-default button1' ><span class='glyphicon glyphicon-plus' style='font-size: 400%;'></span></button></div>");}
        else
            {$(".row2").append("<div class='col-md-2  addclass' style='padding: 0;margin-top: 2.5%'><button type='button' class='btn btn-default button1' ><span class='glyphicon glyphicon-plus' style='font-size: 400%;'></span></button></div>");}; 
        
    }


      else{
        if((addnumth-1)%4!==0)
        	{$(".row2").append("<div class='col-md-2 addclass col-md-offset-1' style='padding: 0;margin-top: 2.5%'><button type='button' class='btn btn-default button1' ><span class='glyphicon glyphicon-plus' style='font-size: 400%;'></span></button></div>");}
    	else
    		{$(".row2").append("<div class='col-md-2  addclass ' style='padding: 0;margin-top: 2.5%'><button type='button' class='btn btn-default button1' ><span class='glyphicon glyphicon-plus' style='font-size: 400%;'></span></button></div>");}; 
    	}
        $(".button2").remove();
        $(".text1").remove();
        $(".categoryset:last").click(setca) 
    
    	addnew();

    }); 
        });
}
var pp;
function setca(){
        $(".categoryset").click(function(){
            if($('.textset')){
                 $(pp).text($('.textset').val());
            $(".buttonset").remove();
        $(".textset").remove();
            }
        pp=this;
        $(this).parent().append("<input type='text' class='textset'style='width:100%;margin:0;'>");
        $(this).parent().append("<button class='buttonset'>Submit</button>");
            $('.textset').val($(this).text());
            $(this).text(null);

    $(".buttonset").click(function(){
            $(pp).text(null);
            $(pp).text($('.textset').val());
            if(!$('.textset').val())
            {
                $(pp).text("...");
            }
            $(".buttonset").remove();
        $(".textset").remove();
    }); 
        });
}







var linum=3;
$(document).ready(function(){
    $(".addevent").click(adde);
    $(".cross").click(deleteli);
    $(".ul1").find(".star").click(priority);
    $(".edit").click(detail);
    $(".dash").click(setreminder);  
});
function deleteli(){
	 	linum--;
        $(this).parent().parent().remove();
}
function priority(){
	 if($(this).css("color")=="rgb(128, 128, 128)")
        {$(this).css( "color", "yellow" );        
         $(".ul1").find(".star").eq(0).parent().parent().before($(this).parent().parent());         
        }
     else
     	{$(this).css( "color", "grey" );
        
         $(".ul1").find(".star").eq(linum-1).parent().parent().after($(this).parent().parent());                 
        }
}
function adde(){	 	
        $(".addevent").remove();
        $(".ul1").append("<input type='text' class='litext1'>");
        $(".ul1").append("<button class='lisubmit1'>Submit</button>");
	    $(".lisubmit1").click(function(){
	 	var x=$('.litext1').val();
        	$(".litext1").remove();
    	$(".lisubmit1").remove();
        $(".ul1").append("<li class='list-group-item' style='padding:0px;'><p class='sav' style='display: block;'></p><h3 class='edit' data-toggle='modal' data-target='#myModal'>"+x+"</h3><h3><span class='glyphicon glyphicon-star star' style='color:grey;margin-right:3.5%;'></span><span data-toggle='modal' data-target='#myModal2' class='glyphicon glyphicon-dashboard dash' style='color:rgba(0,0,0,0.7);margin-right:3.5%;'></span><span class='glyphicon glyphicon-remove cross' style='color:red;'></span></h3></li>");
        $(".ul1").append("<li class='list-group-item addevent' style='padding:0px;'><h3><span class='glyphicon glyphicon-plus' style='color:black;'></span></h3></li>");
        linum++;
        $(".addevent").click(adde);
        $(".ul1").find(".cross").eq(linum-1).click(deleteli);
        $(".ul1").find(".star").eq(linum-1).click(priority);
        $(".dash:last").click(setreminder);
        $(".edit:last").click(detail); 
        });	 
}
function detail(){
 $(".modal-title").text($(this).text());
    p=this;
     $(".butcom").addClass("butcom1");
    $(".butcom1").removeClass("butcom");
    $(".butcom1").click(function(){
     de=$(".form-control").val();
     $(p).parent().find(".sav").text(de);
     p=null;
     de=null;
     $(".butcom1").addClass("butcom");
    $(".butcom").removeClass("butcom1");
  });
    $(".form-control").val($(p).parent().find(".sav").text());
}
var de=null;
var p=null; 

function setreminder(){
    p=this;
    $(".butset").click(function(){
     h=$(".hour").val();
     m=$(".minute").val();
     s=$(".second").val();
    var d = new Date();
    var geth = d.getHours();
    var getm = d.getMinutes();
    var gets = d.getSeconds();
    var subseconds=(h*3600+m*60+s*1)-(geth*3600+getm*60+gets*1)
    possubseconds;
    if(subseconds>=0){possubseconds=subseconds}
        else{possubseconds=subseconds+60*60*24}
     $(".timeremain").text("You set time:"+h+":"+m+":"+s);
     var x=$(p).parent().prev().text();
     setTimeout(function(){ alert(x); }, possubseconds*1000);
     $(".dash").hide();  
     $(".dash2").hide();
     $(".dash3").hide();  
     $(".dash6").hide();  
     $(p).show(); 
     $(p).css('color','green');
     p=null;
     h=null;
     m=null;
     s=null;
     possubseconds=null;
  }); 
}

var h3=null;
var m3=null;
var s3=null;





var linum2=3;
$(document).ready(function(){
    $(".addevent2").click(adde2);
    $(".cross2").click(deleteli2);
    $(".ul2").find(".star2").click(priority2);
    $(".edit2").click(detail2);
    $(".dash2").click(setreminder2);
});
function deleteli2(){
	 	linum2--;
        $(this).parent().parent().remove();
}
function priority2(){
	 if($(this).css("color")=="rgb(128, 128, 128)")
        {$(this).css( "color", "yellow" );        
         $(".ul2").find(".star2").eq(0).parent().parent().before($(this).parent().parent());         
        }
     else
     	{$(this).css( "color", "grey" );
        
         $(".ul2").find(".star2").eq(linum2-1).parent().parent().after($(this).parent().parent());                 
        }
}
function adde2(){	 	
        $(".addevent2").remove();
        $(".ul2").append("<input type='text' class='litext2'>");
        $(".ul2").append("<button class='lisubmit2'>Submit</button>");
	    $(".lisubmit2").click(function(){
	 	var x=$('.litext2').val();
        	$(".litext2").remove();
    	$(".lisubmit2").remove();
        $(".ul2").append("<li class='list-group-item' style='padding:0px;'><p class='sav2' style='display: block;'></p><h3 class='edit2' data-toggle='modal' data-target='#myModal'>"+x+"</h3><h3><span class='glyphicon glyphicon-star star2' style='color:grey;margin-right:3.5%;'></span><span data-toggle='modal' data-target='#myModal2' class='glyphicon glyphicon-dashboard dash2' style='color:rgba(0,0,0,0.7);margin-right:3.5%;'></span><span class='glyphicon glyphicon-remove cross2' style='color:red;'></span></h3></li>");
        $(".ul2").append("<li class='list-group-item addevent2' style='padding:0px;'><h3><span class='glyphicon glyphicon-plus' style='color:black;'></span></h3></li>");
        linum2++;
        $(".addevent2").click(adde2);
        $(".ul2").find(".cross2").eq(linum2-1).click(deleteli2);
        $(".ul2").find(".star2").eq(linum2-1).click(priority2);
        $(".dash2:last").click(setreminder2);
        $(".edit2:last").click(detail2);  
        });	 
}
function detail2(){
 $(".modal-title").text($(this).text());
    p2=this;
    $(".butcom").addClass("butcom2");
    $(".butcom2").removeClass("butcom");
    $(".butcom2").click(function(){
     de2=$(".form-control").val();
     $(p2).parent().find(".sav2").text(de2);
     p2=null;
     de2=null;
     $(".butcom2").addClass("butcom");
    $(".butcom").removeClass("butcom2");
  });
    $(".form-control").val($(p2).parent().find(".sav2").text());
}
var de2=null;
var p2=null; 

function setreminder2(){
    p2=this;
    $(".butset").addClass("butset2");
    $(".butset2").removeClass("butset");
    $(".butset2").click(function(){
     h2=$(".hour").val();
     m2=$(".minute").val();
     s2=$(".second").val();
    var d = new Date();
    var geth2 = d.getHours();
    var getm2 = d.getMinutes();
    var gets2 = d.getSeconds();
    var subseconds=(h2*3600+m2*60+s2*1)-(geth2*3600+getm2*60+gets2*1)
    possubseconds;
    if(subseconds>=0){possubseconds=subseconds}
        else{possubseconds=subseconds+60*60*24}
     $(".timeremain").text("You set time:"+h2+":"+m2+":"+s2);
     var x=$(p2).parent().prev().text();
     setTimeout(function(){ alert(x); }, possubseconds*1000);
      $(".dash").hide();  
     $(".dash2").hide();
     $(".dash3").hide();  
     $(".dash6").hide(); 
     $(p2).show(); 
     $(p2).css('color','green');
     p2=null;
     h2=null;
     m2=null;
     s2=null;
     possubseconds=null;
    $(".butset2").addClass("butset");
    $(".butset").removeClass("butset2");
  }); 
}

var h3=null;
var m3=null;
var s3=null;




var linum3=3;
$(document).ready(function(){
    $(".addevent3").click(adde3);
    $(".cross3").click(deleteli3);
    $(".ul3").find(".star3").click(priority3);
    $(".edit3").click(detail3);
    $(".dash3").click(setreminder3);
});
function deleteli3(){
	 	linum3--;
        $(this).parent().parent().remove();
}
function priority3(){
	 if($(this).css("color")=="rgb(128, 128, 128)")
        {$(this).css( "color", "yellow" );        
         $(".ul3").find(".star3").eq(0).parent().parent().before($(this).parent().parent());         
        }
     else
     	{$(this).css( "color", "grey" );
        
         $(".ul3").find(".star3").eq(linum3-1).parent().parent().after($(this).parent().parent());                 
        }
}
function adde3(){	 	
        $(".addevent3").remove();
        $(".ul3").append("<input type='text' class='litext3'>");
        $(".ul3").append("<button class='lisubmit3'>Submit</button>");
	    $(".lisubmit3").click(function(){
	 	var x=$('.litext3').val();
        	$(".litext3").remove();
    	$(".lisubmit3").remove();
        $(".ul3").append("<li class='list-group-item' style='padding:0px;'><p class='sav3' style='display: block;'></p><h3 class='edit3' data-toggle='modal' data-target='#myModal'>"+x+"</h3><h3><span class='glyphicon glyphicon-star star3' style='color:grey;margin-right:3.5%;'></span><span data-toggle='modal' data-target='#myModal2' class='glyphicon glyphicon-dashboard dash3' style='color:rgba(0,0,0,0.7);margin-right:3.5%;'></span><span class='glyphicon glyphicon-remove cross3' style='color:red;'></span></h3></li>");
        $(".ul3").append("<li class='list-group-item addevent3' style='padding:0px;'><h3><span class='glyphicon glyphicon-plus' style='color:black;'></span></h3></li>");
        linum3++;
        $(".addevent3").click(adde3);
        $(".ul3").find(".cross3").eq(linum3-1).click(deleteli3);
        $(".ul3").find(".star3").eq(linum3-1).click(priority3);
        $(".dash3:last").click(setreminder3);
        $(".edit3:last").click(detail3);  
        });	 
}
function detail3(){
 $(".modal-title").text($(this).text());
    p3=this;
    $(".butcom").addClass("butcom3");
    $(".butcom3").removeClass("butcom");
    $(".butcom3").click(function(){
     de3=$(".form-control").val();
     $(p3).parent().find(".sav3").text(de3);
     p3=null;
     de3=null;
     $(".butcom3").addClass("butcom");
    $(".butcom").removeClass("butcom3");
  });
    $(".form-control").val($(p3).parent().find(".sav3").text());
}
var de3=null;
var p3=null; 

function setreminder3(){
    p3=this;
    $(".butset").addClass("butset3");
    $(".butset3").removeClass("butset");
    $(".butset3").click(function(){
     h3=$(".hour").val();
     m3=$(".minute").val();
     s3=$(".second").val();
    var d = new Date();
    var geth3 = d.getHours();
    var getm3 = d.getMinutes();
    var gets3 = d.getSeconds();
    var subseconds=(h3*3600+m3*60+s3*1)-(geth3*3600+getm3*60+gets3*1)
    possubseconds;
    if(subseconds>=0){possubseconds=subseconds}
        else{possubseconds=subseconds+60*60*24}
     $(".timeremain").text("You set time:"+h3+":"+m3+":"+s3);
     var x=$(p3).parent().prev().text();
     setTimeout(function(){ alert(x); }, possubseconds*1000);
      $(".dash").hide();  
     $(".dash2").hide();
     $(".dash3").hide();  
     $(".dash6").hide();
     $(p3).show(); 
     $(p3).css('color','green');
     p3=null;
     h3=null;
     m3=null;
     s3=null;
     possubseconds=null;
    $(".butset3").addClass("butset");
    $(".butset").removeClass("butset3");
  }); 
}

var h3=null;
var m3=null;
var s3=null;







var linum6=3;
$(document).ready(function(){
    $(".addevent6").click(adde6);
    $(".cross6").click(deleteli6);
    $(".ul6").find(".star6").click(priority6);
    $(".edit6").click(detail6);
    $(".dash6").click(setreminder6);
});
function deleteli6(){
	 	linum6--;
        $(this).parent().parent().remove();
}
function priority6(){
	 if($(this).css("color")=="rgb(128, 128, 128)")
        {$(this).css( "color", "yellow" );        
         $(".ul6").find(".star6").eq(0).parent().parent().before($(this).parent().parent());         
        }
     else
     	{$(this).css( "color", "grey" );
        
         $(".ul6").find(".star6").eq(linum6-1).parent().parent().after($(this).parent().parent());                 
        }
}
function adde6(){	 	
        $(".addevent6").remove();
        $(".ul6").append("<input type='text' class='litext6'>");
        $(".ul6").append("<button class='lisubmit6'>Submit</button>");
	    $(".lisubmit6").click(function(){
	 	var x=$('.litext6').val();
        	$(".litext6").remove();
    	$(".lisubmit6").remove();
        $(".ul6").append("<li class='list-group-item' style='padding:0px;'><p class='sav6' style='display: block;'></p><h3 class='edit6' data-toggle='modal' data-target='#myModal'>"+x+"</h3><h3><span class='glyphicon glyphicon-star star6' style='color:grey;margin-right:3.5%;'></span><span data-toggle='modal' data-target='#myModal2' class='glyphicon glyphicon-dashboard dash6' style='color:rgba(0,0,0,0.7);margin-right:3.5%;'></span><span class='glyphicon glyphicon-remove cross6' style='color:red;'></span></h3></li>");
        $(".ul6").append("<li class='list-group-item addevent6' style='padding:0px;'><h3><span class='glyphicon glyphicon-plus' style='color:black;'></span></h3></li>");
        linum6++;
        $(".addevent6").click(adde6);
        $(".star6:last").click(priority6);
        $(".cross6:last").click(deleteli6);
        $(".dash6:last").click(setreminder6);
        $(".edit6:last").click(detail6);  
        });	 
}
function detail6(){
 $(".modal-title").text($(this).text());
    p6=this;
    $(".butcom").addClass("butcom6");
    $(".butcom6").removeClass("butcom");
    $(".butcom6").click(function(){
     de6=$(".form-control").val();
     $(p6).parent().find(".sav6").text(de6);
     p6=null;
     de6=null;
     $(".butcom6").addClass("butcom");
    $(".butcom").removeClass("butcom6");
  });
    $(".form-control").val($(p6).parent().find(".sav6").text());
}
var de6=null;
var p6=null; 

function setreminder6(){
    p6=this;
    $(".butset").addClass("butset6");
    $(".butset6").removeClass("butset");
    $(".butset6").click(function(){
     h6=$(".hour").val();
     m6=$(".minute").val();
     s6=$(".second").val();
    var d = new Date();
    var geth6 = d.getHours();
    var getm6 = d.getMinutes();
    var gets6 = d.getSeconds();
    var subseconds=(h6*3600+m6*60+s6*1)-(geth6*3600+getm6*60+gets6*1)
    possubseconds;
    if(subseconds>=0){possubseconds=subseconds}
        else{possubseconds=subseconds+60*60*24}
     $(".timeremain").text("You set time:"+h6+":"+m6+":"+s6);
     var x=$(p6).parent().prev().text();
     setTimeout(function(){ alert(x); }, possubseconds*1000);
      $(".dash").hide();  
     $(".dash2").hide();
     $(".dash3").hide();  
     $(".dash6").hide();
     $(p6).show(); 
     $(p6).css('color','green');
     p6=null;
     h6=null;
     m6=null;
     s6=null;
     possubseconds=null;
    $(".butset6").addClass("butset");
    $(".butset").removeClass("butset6");
  }); 
}
var possubseconds=null;
var h6=null;
var m6=null;
var s6=null;






$(document).ready(function(){
    $(".addevent4").click(adde4);
    $(".cross4").click(deleteli4);
    $(".ul4").find(".star4").click(priority4);
    $(".edit4").click(detail4);
    $(".dash4").click(setreminder4);
});
function deleteli4(){
	 	
        $(this).parent().parent().remove();
}
function priority4(){
	      
     	$(this).css( "color", "grey" );
     	$(this).addClass("star5");
        $(this).removeClass("star4");
        $(this).parent().find(".cross4").addClass("cross5");
        $(this).parent().find(".cross5").removeClass("cross4");
        
        $(this).click(priority5); 
         $(".ul5").find(".addevent5").before($(this).parent().parent());                 
        
}
function adde4(){	 	
        $(".addevent4").remove();
        $(".ul4").append("<input type='text' class='litext4'>");
        $(".ul4").append("<button class='lisubmit4'>Submit</button>");
	    $(".lisubmit4").click(function(){
	 	var x=$('.litext4').val();
        	$(".litext4").remove();
    	$(".lisubmit4").remove();
        $(".ul4").append("<li class='list-group-item' style='padding:0px;'><p class='sav4' style='display: block;'></p><h3 class='edit4' data-toggle='modal' data-target='#myModal'>"+x+"</h3><h3><span class='glyphicon glyphicon-star star4' style='color:yellow;margin-right:3.5%;'></span><span data-toggle='modal' data-target='#myModal2'  class='glyphicon glyphicon-dashboard dash4' style='color:rgba(0,0,0,0.7);margin-right:3.5%;'></span><span class='glyphicon glyphicon-remove cross4' style='color:red;'></span></h3></li>");
        $(".ul4").append("<li class='list-group-item addevent4' style='padding:0px;'><h3><span class='glyphicon glyphicon-plus' style='color:black;'></span></h3></li>");
     
        $(".addevent4").click(adde4);
        $(".star4:last").click(priority4);
        $(".cross4:last").click(deleteli4);
        $(".dash4:last").click(setreminder4);
        $(".edit4:last").click(detail4); 
        });	 
}
function detail4(){
 $(".modal-title").text($(this).text());
    p4=this;
    $(".butcom").addClass("butcom4");
    $(".butcom4").removeClass("butcom");
    $(".butcom4").click(function(){
     de4=$(".form-control").val();
     $(p4).parent().find(".sav4").text(de4);
     p4=null;
     de4=null;
    $(".butcom4").addClass("butcom");
    $(".butcom").removeClass("butcom4");
  });
    $(".form-control").val($(p4).parent().find(".sav4").text());
}
var de4=null;
var p4=null; 


function setreminder4(){
    p4=this;
    $(".butset").addClass("butset4");
    $(".butset4").removeClass("butset");
    $(".butset4").click(function(){
     h4=$(".hour").val();
     m4=$(".minute").val();
     s4=$(".second").val();
    var d = new Date();
    var geth4 = d.getHours();
    var getm4 = d.getMinutes();
    var gets4 = d.getSeconds();
    var subseconds=(h4*3600+m4*60+s4*1)-(geth4*3600+getm4*60+gets4*1)
    possubseconds;
    if(subseconds>=0){possubseconds=subseconds}
        else{possubseconds=subseconds+60*60*24}
     $(".timeremain").text("You set time:"+h4+":"+m4+":"+s4);
     var x=$(p4).parent().prev().text();
     setTimeout(function(){ alert(x); }, possubseconds*1000);
     $(".dash5").hide();  
     $(".dash4").hide(); 
     $(p4).show(); 
     $(p4).css('color','green');
     p4=null;
     h4=null;
     m4=null;
     s4=null;
     possubseconds=null;
    $(".butset4").addClass("butset");
    $(".butset").removeClass("butset4");
  }); 
}

var set4=null;
var h4=null;
var m4=null;
var s4=null;








$(document).ready(function(){
    $(".addevent5").click(adde5);
    $(".cross5").click(deleteli5);
    $(".ul5").find(".star5").click(priority5);
    $(".edit5").click(detail5);
    $(".dash5").click(setreminder5);
});
function deleteli5(){
	 	
        $(this).parent().parent().remove();
}
function priority5(){
	
        $(this).css( "color", "yellow" );      
        $(this).addClass("star4");
        $(this).removeClass("star5");
        $(this).parent().find(".cross5").addClass("cross4");
        $(this).parent().find(".cross4").removeClass("cross5");
        $(this).parent().find(".dash5").addClass("dash4");
        $(this).parent().find(".dash4").removeClass("dash5");
       
        $(this).click(priority4);  
         $(".ul4").prepend($(this).parent().parent());             
}
function adde5(){	 	
        $(".addevent5").remove();
        $(".ul5").append("<input type='text' class='litext5'>");
        $(".ul5").append("<button class='lisubmit5'>Submit</button>");
	    $(".lisubmit5").click(function(){
	 	var x=$('.litext5').val();
        	$(".litext5").remove();
    	$(".lisubmit5").remove();
        $(".ul5").append("<li class='list-group-item' style='padding:0px;'><p class='sav5' style='display: block;'></p><h3 class='edit5' data-toggle='modal' data-target='#myModal'>"+x+"</h3><h3><span class='glyphicon glyphicon-star star5' style='color:grey;margin-right:3.5%;'></span><span data-toggle='modal' data-target='#myModal2' class='glyphicon glyphicon-dashboard dash5' style='color:rgba(0,0,0,0.7);margin-right:3.5%;'></span><span class='glyphicon glyphicon-remove cross5' style='color:red;'></span></h3></li>");
        $(".ul5").append("<li class='list-group-item addevent5' style='padding:0px;'><h3><span class='glyphicon glyphicon-plus' style='color:black;'></span></h3></li>");
        
        $(".addevent5").click(adde5);
        $(".star5:last").click(priority5);
        $(".cross5:last").click(deleteli5);
        $(".dash5:last").click(setreminder4);
        $(".edit5:last").click(detail5); 
        });	 
}
function detail5(){
 $(".modal-title").text($(this).text());
    p5=this;
    $(".butcom").addClass("butcom5");
    $(".butcom5").removeClass("butcom");
    $(".butcom5").click(function(){
     de5=$(".form-control").val();
     $(p5).parent().find(".sav5").text(de5);
     p5=null;
     de5=null;
    $(".butcom5").addClass("butcom");
    $(".butcom").removeClass("butcom5");
  });
    $(".form-control").val($(p5).parent().find(".sav5").text());
    
}
var de5=null;
var p5=null; 

function setreminder5(){
    p5=this;
    $(".butset").addClass("butset5");
    $(".butset5").removeClass("butset");
    $(".butset5").click(function(){
     h5=$(".hour").val();
     m5=$(".minute").val();
     s5=$(".second").val();
    var d = new Date();
    var geth5 = d.getHours();
    var getm5 = d.getMinutes();
    var gets5 = d.getSeconds();
    var subseconds=(h5*3600+m5*60+s5*1)-(geth5*3600+getm5*60+gets5*1)
    possubseconds;
    if(subseconds>=0){possubseconds=subseconds}
        else{possubseconds=subseconds+60*60*24}
     $(".timeremain").text("You set time:"+h5+":"+m5+":"+s5);
     var x=$(p5).parent().prev().text();
     setTimeout(function(){ alert(x); }, possubseconds*1000);
     $(".dash5").hide();  
     $(".dash4").hide(); 
     $(p5).show(); 
     $(p5).css('color','green');
     p5=null;
     h5=null;
     m5=null;
     s5=null;
     possubseconds=null;
    $(".butset5").addClass("butset");
    $(".butset").removeClass("butset5");
  }); 
}

var set5=null;
var h5=null;
var m5=null;
var s5=null;



