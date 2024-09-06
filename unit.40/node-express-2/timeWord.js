// your timeword solutio goes here

function timeToWords(time) {
    // Define arrays to map numbers to words for hours and minutes
    const hourWords = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
    const minuteWords = ["oh", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
                         "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one",
                         "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", 
                         "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", 
                         "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", 
                         "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", 
                         "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", 
                         "fifty-seven", "fifty-eight", "fifty-nine"];
  
    // Split the input time into hour and minute components
    let [hour, minute] = time.split(":").map(Number);
  
    // Determine if the time is AM or PM
    let period;

    if (hour < 12) {
      period = "am";
    } else {
      period = "pm";
    }
  
    // Convert hour to 12-hour format
    hour = hour % 12;
    if (hour === 0) hour = 12;
  
    // Convert hour and minute to words
    let hourWord = hourWords[hour % 12];
    let minuteWord;
  
    if (minute === 0) {
      // If minute is 00, say "o'clock"
      minuteWord = "o'clock";
    } else if (minute < 10) {
      // If minute is a single digit, prepend "oh"
      minuteWord = `${minuteWords[minute]}`;
    } else {
      // Otherwise, just use the corresponding word
      minuteWord = `${minuteWords[minute]}`;
    }
  
    // Return the final result
    return `${hourWord} ${minuteWord} ${period}`;
  }



