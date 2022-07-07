function setCardTime() {
  const currentDate = new Date();
  const getYear = currentDate.getFullYear();
  const getHours = currentDate.getHours();
  const getMinutes = currentDate.getMinutes();
  const getDay = currentDate.getDay();
  const getDate = currentDate.getDate();
  const getMonth = currentDate.getMonth();
  const currentTime = `${getHours}:${getMinutes}`;

  function getNameDays (numberDays) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return days[numberDays]
  };

  function getNameMonths(numberMonths) {
    const months = ['January', 'February', 'March', 'April', 'Many', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[numberMonths]
  };

  function getDayTime() {
    const card = document.querySelector('#card');
    const greeting = document.querySelector('.greeting');
    const circleDiv = document.querySelector('.circle');
    const hour = document.querySelector('.hour');
    const date = document.querySelector('.date');

    hour.innerHTML = currentTime;
    date.innerHTML = `Today is ${getNameDays(getDay)}, ${getNameMonths(getMonth)} ${getDate}, ${getYear}`;

    function setCircleImg(img) {
      const circleImg = document.createElement('img');
      circleDiv.appendChild(circleImg);
      return circleImg.src = img;
    };

    if (getHours < 12) {
      greeting.innerHTML = 'Good Morning';
      setCircleImg('/img/sun-morning.png');
      card.style.backgroundImage = "url('/img/bg-morning.jpg')";
    };

    if (getHours >= 12 && getHours < 18) {
      greeting.innerHTML = 'Good Afternoon';
      setCircleImg('/img/sun-afternoon.png');
      card.style.backgroundImage = "url('/img/bg-afternoon.jpg')";
    };

    if (getHours >= 18) {
      greeting.innerHTML = 'Good Morning';
      setCircleImg('/img/moon-evening.png');
      card.style.backgroundImage = "url('/img/bg-evening.jpg')";
    };
  };
  getDayTime()

  console.log(currentTime)

  console.log(`Today is ${getNameDays(getDay)}, ${getNameMonths(getMonth)} ${getDate}, ${getYear}`)
}
setCardTime();



