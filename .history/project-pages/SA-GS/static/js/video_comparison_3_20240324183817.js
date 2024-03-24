// Written by Dor Verbin, October 2021
// This is based on: http://thenewcode.com/364/Interactive-Before-and-After-Video-Comparison-in-HTML5-Canvas
// With additional modifications based on: https://jsfiddle.net/7sk5k4gp/13/

function playVids(videoId) {
    var videoMerge = document.getElementById(videoId + "Merge3");
    var vid = document.getElementById(videoId);
    console.log(videoId + "Merge3");

    var pos_array = new Array();
    pos_array[0] = 0.333;
    pos_array[1] = 0.666;
    var flag = false;
    var vidWidth = vid.videoWidth/3;
    var vidHeight = vid.videoHeight;

    var mergeContext = videoMerge.getContext("2d");

    
    if (vid.readyState > 3) {
        vid.play();

        function trackLocation(e) {
            // Normalize to [0, 1]
            bcr = videoMerge.getBoundingClientRect();
            position = ((e.pageX - bcr.x) / bcr.width);
        }
        function trackLocationTouch(e) {
            // Normalize to [0, 1]
            console.log(e)
            bcr = videoMerge.getBoundingClientRect();
            tmp = ((e.pageX - bcr.x) / bcr.width)
            if(Math.abs(tmp - pos_array[0])<= 0.005 && Math.abs(tmp - pos_array[1])<= 0.005) pos_array[0] = tmp;
            else if(Math.abs(tmp - pos_array[0])<= 0.005) pos_array[0] = tmp;
            else if(Math.abs(tmp - pos_array[1])<= 0.005) pos_array[1] = tmp;
        }
        function setflag(e){

        }

        videoMerge.addEventListener("mousemove",  trackLocation, false); 
        videoMerge.addEventListener("mousedown", setflag, false);
        videoMerge.addEventListener("mouseup", setflag, false);


        function drawLoop() {
            mergeContext.drawImage(vid, 0, 0, vidWidth, vidHeight, 0, 0, vidWidth, vidHeight);
            var colStart = (vidWidth * pos_array[0]).clamp(0.0, vidWidth);
            var colWidth = (vidWidth - (vidWidth * pos_array[0])).clamp(0.0, vidWidth);
            mergeContext.drawImage(vid, colStart+vidWidth, 0, colWidth, vidHeight, colStart, 0, colWidth, vidHeight);
            colStart = (vidWidth * pos_array[1]).clamp(0.0, vidWidth);
            colWidth = (vidWidth - (vidWidth * pos_array[1])).clamp(0.0, vidWidth);
            mergeContext.drawImage(vid, colStart+vidWidth, 0, colWidth, vidHeight, colStart, 0, colWidth, vidHeight);
            requestAnimationFrame(drawLoop);

            
            var arrowLength = 0.09 * vidHeight;
            var arrowheadWidth = 0.025 * vidHeight;
            var arrowheadLength = 0.04 * vidHeight;
            var arrowPosY = vidHeight / 10;
            var arrowWidth = 0.007 * vidHeight;
            var currX_array = new Array();
            currX_array[0] = vidWidth * pos_array[0];
            currX_array[1] = vidWidth * pos_array[1];

            for (i=0; i<currX_array.length; ++i){
                // Draw circle
                mergeContext.arc(currX_array[i], arrowPosY, arrowLength*0.7, 0, Math.PI * 2, false);
                mergeContext.fillStyle = "#FFD79340";
                mergeContext.fill()
                //mergeContext.strokeStyle = "#444444";
                //mergeContext.stroke()
                
                // Draw border
                mergeContext.beginPath();
                mergeContext.moveTo(vidWidth*pos_array[i], 0);
                mergeContext.lineTo(vidWidth*pos_array[i], vidHeight);
                mergeContext.closePath()
                mergeContext.strokeStyle = "#AAAAAA";
                mergeContext.lineWidth = 5;            
                mergeContext.stroke();
                
                // Draw arrow
                mergeContext.beginPath();
                mergeContext.moveTo(currX_array[i], arrowPosY - arrowWidth/2);
                
                // Move right until meeting arrow head
                mergeContext.lineTo(currX_array[i] + arrowLength/2 - arrowheadLength/2, arrowPosY - arrowWidth/2);
                
                // Draw right arrow head
                mergeContext.lineTo(currX_array[i] + arrowLength/2 - arrowheadLength/2, arrowPosY - arrowheadWidth/2);
                mergeContext.lineTo(currX_array[i] + arrowLength/2, arrowPosY);
                mergeContext.lineTo(currX_array[i] + arrowLength/2 - arrowheadLength/2, arrowPosY + arrowheadWidth/2);
                mergeContext.lineTo(currX_array[i] + arrowLength/2 - arrowheadLength/2, arrowPosY + arrowWidth/2);
                
                // Go back to the left until meeting left arrow head
                mergeContext.lineTo(currX_array[i] - arrowLength/2 + arrowheadLength/2, arrowPosY + arrowWidth/2);
                
                // Draw left arrow head
                mergeContext.lineTo(currX_array[i] - arrowLength/2 + arrowheadLength/2, arrowPosY + arrowheadWidth/2);
                mergeContext.lineTo(currX_array[i] - arrowLength/2, arrowPosY);
                mergeContext.lineTo(currX_array[i] - arrowLength/2 + arrowheadLength/2, arrowPosY  - arrowheadWidth/2);
                mergeContext.lineTo(currX_array[i] - arrowLength/2 + arrowheadLength/2, arrowPosY);
                
                mergeContext.lineTo(currX_array[i] - arrowLength/2 + arrowheadLength/2, arrowPosY - arrowWidth/2);
                mergeContext.lineTo(currX_array[i], arrowPosY - arrowWidth/2);
                
                mergeContext.closePath();
                
                mergeContext.fillStyle = "#AAAAAA";
                mergeContext.fill();
            }
        }
        requestAnimationFrame(drawLoop);
    } 
}

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};
    
    
function resizeAndPlay(element)
{
  var cv = document.getElementById(element.id + "Merge3");
  cv.width = element.videoWidth/3;
  cv.height = element.videoHeight;
  element.play();
  element.style.height = "0px";  // Hide video without stopping it
    
  playVids(element.id);
}
