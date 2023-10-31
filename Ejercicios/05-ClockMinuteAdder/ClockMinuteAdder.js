function clockMinuteAdder (time, minutesToAdd) {
  // Your code here:
  const [hourString, minuteString] = time.split(':')
  const hours = parseInt(hourString)
  const minutes = parseInt(minuteString)

  const hoursToMinutes = hours * 60
  const totalMinutes = hoursToMinutes + minutes + minutesToAdd
  const newMinute = totalMinutes % 60
  let newHour = Math.floor(totalMinutes / 60) % 12
  if(newHour === 0) newHour = 12

  //console.log(newHour);


  return `${newHour < 10 ? '0' + newHour : newHour}:${newMinute < 10 ? '0' + newMinute : newMinute}`;


   
  //console.log(newHours);

}

console.log(clockMinuteAdder('12:05', 1440));

module.exports = clockMinuteAdder
