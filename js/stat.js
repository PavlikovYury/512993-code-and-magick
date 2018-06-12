var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 25;
var FONT_UP_GAP = 30;
var FONT_DOWN_GAP = 5;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT=16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barHeigt = 150;
var DISPLACEMENT = 10;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + DISPLACEMENT, CLOUD_Y + DISPLACEMENT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  ctx.fillText('Ура вы победили!',CLOUD_X + GAP, CLOUD_Y + FONT_UP_GAP);
  ctx.fillText('Список результатов:',CLOUD_X + GAP, CLOUD_Y + FONT_UP_GAP+TEXT_HEIGHT);

  for (var i = 0; i < players.length; i++) {
    if(players[i]==='Вы'){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + BAR_GAP+(BAR_GAP+BAR_WIDTH)*i, CLOUD_Y + CLOUD_HEIGHT -  TEXT_HEIGHT - (barHeigt * times[i]) / maxTime - FONT_DOWN_GAP, BAR_WIDTH, (barHeigt * times[i]) / maxTime);
    }
    else{
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(2) + ')';
      ctx.fillRect(CLOUD_X + BAR_GAP+(BAR_GAP+BAR_WIDTH)*i, CLOUD_Y + CLOUD_HEIGHT -  TEXT_HEIGHT - (barHeigt * times[i]) / maxTime - FONT_DOWN_GAP, BAR_WIDTH, (barHeigt * times[i]) / maxTime);
    }
    ctx.fillStyle ='black';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP+(BAR_GAP+BAR_WIDTH)*i, CLOUD_Y + CLOUD_HEIGHT - FONT_DOWN_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP+(BAR_GAP+BAR_WIDTH)*i, CLOUD_Y + CLOUD_HEIGHT  - (barHeigt * times[i]) / maxTime - FONT_UP_GAP);
  }
};
