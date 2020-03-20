
var hourlyObj = {}
var dailyArr = []

// Current Date + time
var currentMoment = moment();
var currentDay = (currentMoment.format('dddd, MMMM Do'));
$("#currentDay").text(currentDay);




currentLocalStorage = (localStorage.getItem('calendarY'))
console.log(currentLocalStorage)


if (localStorage.getItem('calendarY') ){
var dailyArr = currentLocalStorage;
}



// time for ui
function currntTimeUI(){
var changeHourObj = moment();
for (var i = 9; i < 18; i++) {
  // Change the hour
  var changeHour = changeHourObj.hours(i)//(`${i}:00`)
  //     
  // Get the new hour and display it on the calender
  var newHour = (`${changeHourObj.hours()}:00`)
  //console.log(newHour)
  $(`#time-${i}`).text(newHour)
  // check the objectt to change colors
  laterTime = (moment.max(currentMoment, changeHourObj)); // compare and takes the bigger
  ;
  if (currentMoment.hour() > changeHourObj.hour()){
    $(`#text-${i}`).attr('class', 'past col-sm-8 past')

  } else if (changeHourObj.hour() === currentMoment.hour()){
    $(`#text-${i}`).attr('class', 'present col-sm-8 past')

    } else {$(`#text-${i}`).attr('class', 'future col-sm-8 past')}
}
}











//alert($(this).attr('id'))





function saveToLocalStorage(j){
    var num = $("#text-" + j)
    console.log(num)
    var textContent =num.val().trim();
   console.log(textContent)
   //buliding object from html
      if(textContent !== '') {
     //   for (var i = 0; i < dailyArr.length; i++) {
          //var date = array[i]; 
         // console.log(dailyArr[0].hourlyObj.date)
        //  if(dailyArr[i].hourlyObj.date === currentDay && hourlyObj.id === j){

}
          hourlyObj.date = currentDay;
          hourlyObj.text = textContent;
          hourlyObj.id = j;
          //dailyArr.push(hourlyObj)
          //console.log(dailyArr)
          localStorage.setItem('calendarY', JSON.stringify(hourlyObj));
     //   }
        

   //   }
  }


 







  
  





//hourlyArr.time = hourlyText;
//console.log(hourlyText)


//get the text by click
$('.saveBtn').click(function() {
  //console.log(event.target)  // ---------------good targeting
  
  var btnId = this.id
  //console.log(btnId)
  saveToLocalStorage(btnId)
 // $(saveBtn).(event.target.test);
});
//storge the t

//   $('#test').html("Test");
//localStorage.content = $('#test').html();
//$('#test').html(localStorage.content);


//console.log(momentObj.hour())




//console.log(momentObj.toString())

//console.log

//getFromLocalStorage()
currntTimeUI()
