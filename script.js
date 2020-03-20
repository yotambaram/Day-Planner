
var dailyArr = [];

// Current Date + time
var currentMoment = moment();
var currentDay = (currentMoment.format('dddd, MMMM Do'));
$("#currentDay").text(currentDay);


// delete storage
function DeleteStorage() {
  localStorage.removeItem('calendarY');
}


// get data from storage
function getDataFromStorge() {
  currentLocalStorage = JSON.parse(localStorage.getItem('calendarY') );
  if (currentLocalStorage){
    dailyArr = currentLocalStorage;
    savedEventUI(dailyArr)
  } //else {}
}

// Puts the text from local storge at the html
function savedEventUI(dailyArr) {
  for(var i = 0; i < dailyArr.length; i++) {
    var savedText = dailyArr[i].text
    console.log(savedText)
    var savedID = dailyArr[i].id
    $('#text-' + savedID).text(savedText)    
  }
}


// build objet (after click)
function setObj(j){
  var textLocation = $("#text-" + j)
  var textContent =textLocation.val().trim();
  //buliding object from html
  if(textContent !== '') {
    console.log( dailyArr)
    var hourlyObj = {};
    hourlyObj.date = currentDay;
    hourlyObj.text = textContent;
    hourlyObj.id = j;
    dailyArr.push(hourlyObj);
    console.log( dailyArr)
    saveToLocalStorage(dailyArr);
}

// Save the new content to local storage
function saveToLocalStorage(obj){
    //localStorage.removeItem('calendarY');
    localStorage.setItem('calendarY', JSON.stringify(obj));
  }
}

// Set the time on the html
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

// Saving when you click
$('.saveBtn').click(function() {
  var btnId = this.id
  setObj(btnId)
});


getDataFromStorge()

currntTimeUI()


