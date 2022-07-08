function setCardTime() {
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const day = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const hourP = document.querySelector('.hour');

    const currentTime = `${setZeroLeft(hours)}:${setZeroLeft(minutes)}`;
    hourP.innerHTML = currentTime;

    getDayTime(day, month, date, year, hours)
  }
  getCurrentDate()

  setInterval(() => {
    getCurrentDate();
  }, 1000 * 60);

  function setZeroLeft(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  function getNameDays(numberDays) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return days[numberDays]
  };

  function getNameMonths(numberMonths) {
    const months = ['January', 'February', 'March', 'April', 'Many', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[numberMonths]
  };

  function getDayTime(day, month, date, year, hours) {
    const card = document.querySelector('#card');
    const greeting = document.querySelector('.greeting');
    const dateP = document.querySelector('.date');

    dateP.innerHTML = `Today is ${getNameDays(day)}, ${getNameMonths(month)} ${date}, ${year}`;

    function setCircleImg(img) {
      const circleImg = document.querySelector('.circle-img');
      return circleImg.src = img;
    };

    if (hours < 12) {
      greeting.innerHTML = 'Good Morning';
      setCircleImg('/img/sun-morning.png');
      card.style.backgroundImage = "url('/img/bg-morning.jpg')";
    };

    if (hours >= 12 && hours < 18) {
      greeting.innerHTML = 'Good Afternoon';
      setCircleImg('/img/sun-afternoon.png');
      card.style.backgroundImage = "url('/img/bg-afternoon.jpg')";
    };

    if (hours >= 18) {
      greeting.innerHTML = 'Good Evening';
      setCircleImg('/img/moon-evening.png');
      card.style.backgroundImage = "url('/img/bg-evening.jpg')";
    };
  };
}
setCardTime();




