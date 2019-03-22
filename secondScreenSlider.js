const templates = [
  `  <div class="video-link-image rope-jumping-img">
  <a class="video-link-icon" href="https://www.youtube.com/watch?v=tc0cxK4TUlI" target="_blank"><i
      class="far fa-play-circle"></i></a>
</div>
<div class="second-screen-container">
  <h2>Только с нами вы сможете знатно угореть!</h2>
    <div>
        <span class="second-screen-discription">
          Гляньте наше чумовое видео, если не верите. Если хотите и вам такое же по итогу снимем — будет что вспомнить.
        </span>
    </div>
    <div class="world-cont cards">
      <div class="image-center-align">
      <img src="./images/world@1X.png" alt="world"></img>
    </div>
    <span>
      Работаем в любой
      точке планеты
    </span>
  </div>
  <div class="space-cont cards">
  <div class="image-center-align">
  <img src="./images/space@1X.png" alt="space"></img>
</div>
    <span>
      Но если на Земле
      все видели, то no problem...
    </span>
  </div>
</div>`

,

  `  <div class="video-link-image fly-boarg-img">
  <a class="video-link-icon" href="https://www.youtube.com/watch?v=m4Bm3cs9TFo" target="_blank"><i
      class="far fa-play-circle"></i></a>
</div>
<div class="second-screen-container">
  <h2>С нами вы узнаете на что способны!</h2>
    <div>
      <span class="second-screen-discription">
        Гарантируем незабываемый отдых, и массу положительных впечатлений.
        Если вам не понравиться приключение мы вернём вам деньги! 
      </span>
    <div>  
    <div class="world-cont cards">
      <div class="image-center-align">
      <img src="./images/world@1X.png" alt="world"></img>
    </div>
    <span>
      Работаем в любой
      точке планеты
    </span>
  </div>
  <div class="space-cont cards">
  <div class="image-center-align">
  <img src="./images/space@1X.png" alt="space"></img>
</div>
    <span>
      Но если на Земле
      все видели, то no problem...
    </span>
  </div>
</div>`,
  ``
];


const sliderContainer = document.getElementById('secondScreen');
let counter = 0;

function changeSkreen() {
  if(counter === 0) {
    sliderContainer.innerHTML = templates[1];
    counter++;
  }else{
    sliderContainer.innerHTML = templates[0];
    counter--;
  }
}
let interval = setInterval(changeSkreen, 5000);