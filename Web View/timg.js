var log = true;
function loadImages() {
        $('timg').each(function(i, obj) {
            var currentElement = "";
            var toAppendTo = $(this);
            var src = $(this).attr("src");
            var xhttp;
            if (window.XMLHttpRequest) {
                xhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.open("GET", src, true);
            xhttp.send();
            
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var returned = xhttp.responseText;
                    var returnedLines = returned.split("\n");
                    //console.log("Creating new pixel line...");
                    currentElement += "<div>";
                    
                    //console.log("Split return by line, now it looks like: " + returnedLines)
                    
                    var arrayLength = returnedLines.length;
                    for (var i = 0; i < arrayLength; i++) {                    
                        var line = returnedLines[i]
                        //console.info("Reading line: " + line);
                        line = line.slice(0, -1);
                        var pixels = line.split(";");
                        //console.log("Pixel array look like: " + pixels);
                        
                        var lineLength = pixels.length;
                        calc:
                        if (toAppendTo.attr("width") != undefined) { 
                            var setWidth = toAppendTo.attr("width");
                            //var pixelWidth = Math.round(setWidth / lineLength);
                            var pixelWidth = setWidth / lineLength;
                            if (!(pixelWidth > 0)) {
                                pixelWidth = 1;
                            }
                        }
                        else {
                            var pixelWidth = "1";
                        }
                        
                        if (toAppendTo.attr("height") != undefined) {
                            var setHeight = toAppendTo.attr("height");
                            //var pixelHeight = Math.round(setHeight / arrayLength);
                            var pixelHeight = setHeight / arrayLength;
                            if (!(pixelHeight > 0)) {
                                pixelHeight = 1;
                            }
                        }
                        else {
                            var pixelHeight = "1";
                        }
                        
                        currentElement += ('<div style="width: ' + Math.round(pixelWidth * lineLength).toString() + 'px; height: ' + pixelHeight.toString() + 'px;">');
                        //console.log("Just appended: \n " + '<div style="width: ' + Math.round(pixelWidth * lineLength).toString() + 'px; height: ' + pixelHeight.toString() + 'px;">')
                        //console.log("Pixel height is: " + pixelHeight.toString() + "\nPixel Width is: " + pixelWidth.toString());
                        //console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
                        for (var p = 0; p < lineLength; p++) {
                            var currentPixel = pixels[p]
                            //console.log("Reading pixel with data: " + currentPixel);
                            
                            var backgroundStyle;
                            if (currentPixel == "0") {
                                backgroundStyle = "background: none;";
                            }
                            else {
                                if (currentPixel.indexOf("#") == 0) {
                                    if (currentPixel.indexOf(",") > -1) {
                                        var splitHex = currentPixel.split(",");
                                        backgroundStyle = "background: " + splitHex[0] + "; opacity: " + splitHex[1] + ";";
                                    }
                                    else {
                                        backgroundStyle = "background: " + currentPixel + ";";
                                    }
                                }
                                else {
                                    backgroundStyle = "background: " + currentPixel + ";"
                                }
                            }
                            
                            var toAppend = '<div style="' + backgroundStyle + 'height: ' + pixelHeight.toString() + 'px; width: ' + pixelWidth.toString() + 'px;float: left;"></div>';
                            //console.log("To Append: " + toAppend);
                            
                            currentElement += toAppend;
                        }
                        currentElement += "</div>";
                        //console.info("should have closed div");
                        //console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                    }
                    currentElement += "</div>";
                    toAppendTo.html(currentElement);
                }
            };
        });
    }

$(document).ready(function() {
   loadImages();
});