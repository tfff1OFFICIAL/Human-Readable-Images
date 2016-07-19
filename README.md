# Human-Readable-Images
A project aimed at creating images that anyone can read or change using only a basic text editor.

## How it works

Images are just rows and rows of pixels, each pixel with their own specified colour.
*.TIMG files are lines of text with each new line being a new row of pixels and each pixel in a row being either a hex or rgba colour seperated by semicolons. A completely transparent pixel is simply a 0.
For example, a diamon sword from Minecraft would go from:

![Diamond Sword](http://www.minecraftinfo.com/images/360.png)

to:
```
0;0;0;0;0;0;0;0;0;0;0;0;0;rgba(14, 63, 54, 255);rgba(14, 63, 54, 255);rgba(14, 63, 54, 255);
0;0;0;0;0;0;0;0;0;0;0;0;rgba(14, 63, 54, 255);rgba(51, 235, 203, 255);rgba(43, 199, 172, 255);rgba(14, 63, 54, 255);
0;0;0;0;0;0;0;0;0;0;0;rgba(14, 63, 54, 255);rgba(51, 235, 203, 255);rgba(43, 199, 172, 255);rgba(51, 235, 203, 255);rgba(14, 63, 54, 255);
0;0;0;0;0;0;0;0;0;0;rgba(14, 63, 54, 255);rgba(51, 235, 203, 255);rgba(43, 199, 172, 255);rgba(51, 235, 203, 255);rgba(14, 63, 54, 255);0;
0;0;0;0;0;0;0;0;0;rgba(14, 63, 54, 255);rgba(51, 235, 203, 255);rgba(43, 199, 172, 255);rgba(51, 235, 203, 255);rgba(14, 63, 54, 255);0;0;
0;0;0;0;0;0;0;0;rgba(14, 63, 54, 255);rgba(51, 235, 203, 255);rgba(43, 199, 172, 255);rgba(51, 235, 203, 255);rgba(14, 63, 54, 255);0;0;0;
0;0;rgba(8, 37, 32, 255);rgba(8, 37, 32, 255);0;0;0;rgba(14, 63, 54, 255);rgba(51, 235, 203, 255);rgba(43, 199, 172, 255);rgba(51, 235, 203, 255);rgba(14, 63, 54, 255);0;0;0;0;
0;0;rgba(8, 37, 32, 255);rgba(21, 99, 85, 255);rgba(8, 37, 32, 255);0;rgba(14, 63, 54, 255);rgba(51, 235, 203, 255);rgba(43, 199, 172, 255);rgba(51, 235, 203, 255);rgba(14, 63, 54, 255);0;0;0;0;0;
0;0;0;rgba(8, 37, 32, 255);rgba(30, 138, 119, 255);rgba(8, 37, 32, 255);rgba(51, 235, 203, 255);rgba(43, 199, 172, 255);rgba(51, 235, 203, 255);rgba(14, 63, 54, 255);0;0;0;0;0;0;
0;0;0;rgba(8, 37, 32, 255);rgba(30, 138, 119, 255);rgba(8, 37, 32, 255);rgba(43, 199, 172, 255);rgba(51, 235, 203, 255);rgba(14, 63, 54, 255);0;0;0;0;0;0;0;
0;0;0;0;rgba(8, 37, 32, 255);rgba(30, 138, 119, 255);rgba(8, 37, 32, 255);rgba(8, 37, 32, 255);0;0;0;0;0;0;0;0;
0;0;0;rgba(73, 54, 21, 255);rgba(104, 78, 30, 255);rgba(8, 37, 32, 255);rgba(30, 138, 119, 255);rgba(21, 99, 85, 255);rgba(8, 37, 32, 255);0;0;0;0;0;0;0;
0;0;rgba(73, 54, 21, 255);rgba(137, 103, 39, 255);rgba(40, 30, 11, 255);0;rgba(8, 37, 32, 255);rgba(8, 37, 32, 255);rgba(21, 99, 85, 255);rgba(8, 37, 32, 255);0;0;0;0;0;0;
rgba(8, 37, 32, 255);rgba(8, 37, 32, 255);rgba(104, 78, 30, 255);rgba(40, 30, 11, 255);0;0;0;0;rgba(8, 37, 32, 255);rgba(8, 37, 32, 255);0;0;0;0;0;0;
rgba(8, 37, 32, 255);rgba(30, 138, 119, 255);rgba(8, 37, 32, 255);0;0;0;0;0;0;0;0;0;0;0;0;0;
rgba(8, 37, 32, 255);rgba(8, 37, 32, 255);rgba(8, 37, 32, 255);0;0;0;0;0;0;0;0;0;0;0;0;0;
```
This image is 16x16 pixels. You can tell because there are 16 lines and 16 'pixels' defined in each line.
