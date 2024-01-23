export function formattime(createdStr) {
    const date = new Date(createdStr);
    const dateToday = new Date();
    let seconds = (dateToday - date) / 1000;
    const time = {
      seconds: Math.floor(seconds),
      minutes: Math.floor(seconds / 60),
      hours: Math.floor(seconds / 60 / 60),
      days: Math.floor(seconds / 60 / 60 / 24),
      months: Math.floor(seconds / 60 / 60 / 24 / 30),
      years: Math.floor(seconds / 60 / 60 / 24 / 30 / 12),
    };
    if(time.seconds < 60){
      return Math.abs(time.seconds) + " seconds ago"
    }
    else if(time.minutes < 60){
      return Math.abs(time.minutes) + " minutes ago"
    }
    else if(time.hours<24){
      return Math.abs(time.hours) + " hours ago"
    }
    else if(time.days<30){
      return Math.abs(time.days) + " days ago"
    }
    else if(time.months<12){
      return Math.abs(time.months) + " months ago"
    }
    else{
      return Math.abs(time.years) + " years ago"
    }
   
  }