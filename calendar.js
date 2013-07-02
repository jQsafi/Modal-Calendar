var dateformat,lowerlimit,upperlimit;function calendar(obj,format,limit){$this=$(obj);if(!format){dateformat="dd-mm-yy"}else{dateformat=format}if(!limit){limit="1900-2050"}lowerlimit=limit.split("-")[0];upperlimit=limit.split("-")[1];if($(".calendarholder").length<=0){$("body").append("<div class='calendarholder'></div>");$(".calendarholder").append("<div class='calendarcontainer'></div>");calendarcontainerheight=$(".calendarcontainer").height();$(".calendarcontainer").css("margin-top",-calendarcontainerheight/2);calendarcontainerwidth=$(".calendarcontainer").width();$(".calendarcontainer").css("margin-left",-calendarcontainerwidth/2);$(".calendarcontainer").append("<span class='closebtn' title='Close' onclick='closecalendar()'>X</span>");$(".calendarcontainer").append("<div class='inputcontainer'></div>");$(".inputcontainer").append("<div class='column'><b>Year:</b><select class='calendarcontaineryear calendarinput' onchange='createcalendar()'></select></div>");$(".inputcontainer").append("<div class='column'><b>Month:</b><select class='calendarcontainermonth  calendarinput' onchange='createcalendar()'></select></div>");var dayname=[];dayname=["SUN","MON","TUE","WED","THU","FRI","SAT"];$(".calendarcontainer").append("<div class='daynamecontainer'></div>");for(var dl=0;dl<7;dl++){classes="weekday";if(dl==0)classes+=" firstdayofweek";$(".daynamecontainer").append("<div class='"+classes+"'>"+dayname[dl]+"</div>")}$(".calendarcontainer").append("<div class='calendar'></div>")}var currentdate=new Date();var currentyear=currentdate.getFullYear();var currentmonth=currentdate.getMonth();var optionstr="";for(var yl=upperlimit;yl>=lowerlimit;yl--){if(yl==currentyear)optionstr+="<option value='"+yl+"' selected='selected'>"+yl+"</option>";else optionstr+="<option value='"+yl+"'>"+yl+"</option>"}$(".calendarcontaineryear").html(optionstr);var optionstr="";var monthname=[];monthname=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];for(var ml=0;ml<12;ml++){if(ml==currentmonth)optionstr+="<option value='"+ml+"' selected='selected'>"+monthname[ml]+"</option>";else optionstr+="<option value='"+ml+"'>"+monthname[ml]+"</option>"}$(".calendarcontainermonth").html(optionstr);createcalendar()}function createcalendar(){var getyear=$(".calendarcontaineryear").val();var getmonth=$(".calendarcontainermonth").val();getyear=parseInt(getyear,10);getmonth=parseInt(getmonth,10);var counteday;var thisdate=new Date(getyear,getmonth+1,0);counteday=thisdate.getDate();var thisdate=new Date(getyear,getmonth,1);var firstday=thisdate.getDay();var currentdate=new Date();var currentyear=currentdate.getFullYear();var currentmonth=currentdate.getMonth();var currentday=currentdate.getDate();var daystr="";for(var fl=0;fl<firstday;fl++){classes="singleday blankday";daystr+="<div class='"+classes+"'></div>"}for(var dl=1;dl<=counteday;dl++){classes="singleday";diff=8-firstday;if(dl%7==diff)classes+=" firstdayofweek";if(getyear==currentyear&&getmonth==currentmonth&&currentday==dl){classes+=" today"}daystr+="<div class='"+classes+"' onclick='getthedate("+dl+","+getyear+","+getmonth+")'>"+dl+"</div>"}scrollheight=$("body").scrollTop();$(".calendar").html(daystr);$(".calendarholder").show();$("body").css("overflow","hidden")}function getthedate(day,year,month){month+=1;if(day<10){day="0"+day}if(month<10){month="0"+month}var newdate;newdate=str_replace("dd",day,dateformat);newdate=str_replace("mm",month,newdate);newdate=str_replace("yy",year,newdate);if($this.is("input"))$this.val(newdate);else $this.html(newdate);$(".calendarholder").toggle()}function closecalendar(){$(".calendarholder").hide();$("body").css("overflow","auto")}function str_replace(search,replace,subject){return subject.split(search).join(replace)}
