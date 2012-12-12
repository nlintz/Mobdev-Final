function Timings(){
    dataString = $('#data').html();
    return dataArray = dataString.split(',');
}

function Pictures(){
    dataString = $('#imageData').html();
    return dataArray = dataString.split(',');
}

function changePictures(imageIndex, images){
    $('#images').attr("src", '../Images/'+images[imageIndex]);
}

window.setVariableInterval = function(callbackFunc, timing, ImageIndex) {
  var variableInterval = {
    interval: timing,
    imageIndex: 0,
    callback: callbackFunc,
    stopped: false,
    runLoop: function() {
      if (variableInterval.stopped) return;
      var result = variableInterval.callback.call(variableInterval);
      if (typeof result == 'number')
      {
        if (result === 0) return;
        variableInterval.interval = result;
      }
      variableInterval.loop();
    },
    stop: function() {
      this.stopped = true;
      window.clearTimeout(this.timeout);
    },
    start: function() {
      this.stopped = false;
      return this.loop();
    },
    loop: function() {
      this.timeout = window.setTimeout(this.runLoop, this.interval);
      return this;
    }
  };

  return variableInterval.start();
};

$(document).ready( function() {
    var timings = Timings();
    timings.unshift(0)
	  var images = Pictures();
    var timeIndex=0;
	
	var Index = 0;
	var flickPics = setVariableInterval(function() {

	var interval = this.interval;
	changePictures(Index,images);
	if (timeIndex>timeIndex.length){
		timeIndex=0;
		}

	newTimeOut = (timings[timeIndex+1]-timings[timeIndex])*1000
  console.log(newTimeOut)
  Index=(Index+1)%images.length;
  timeIndex=(timeIndex+1)%timings.length;



	return newTimeOut;
	},0);
});

