const countdown = () => {
  const countDate = new Date("Feb 4, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // How does the time work?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculate time
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // update html
  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
  document.querySelector(".second").innerHTML = textSecond;

  // if you want to launch something in the end of countdown
  // if (gap === 0) {
  //   launchSomething();
  // }
};

setInterval(countdown, 1000);
