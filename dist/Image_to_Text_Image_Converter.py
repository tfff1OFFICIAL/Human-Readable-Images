#encoding: utf-8
from PIL import Image
import os, sys, tkFileDialog
import Tkinter as tk

#!!!NOTE!!!
#This uses Python 2.7 and Python Imaging Library (PIL).
# Download the Python Imaging Library installer from: http://www.pythonware.com/products/pil/

# Print iterations progress
def printProgress (iteration, total, prefix = '', suffix = '', decimals = 2, barLength = 100):
    """
    Call in a loop to create terminal progress bar
    @params:
        iteration   - Required  : current iteration (Int)
        total       - Required  : total iterations (Int)
        prefix      - Optional  : prefix string (Str)
        suffix      - Optional  : suffix string (Str)
        decimals    - Optional  : number of decimals in percent complete (Int)
        barLength   - Optional  : character length of bar (Int)
    """
    filledLength    = int(round(barLength * iteration / float(total)))
    percents        = round(100.00 * (iteration / float(total)), decimals)
    bar             = '|' * filledLength + '-' * (barLength - filledLength)
    sys.stdout.write('\r%s |%s| %s%s %s' % (prefix, bar, percents, '%', suffix)),
    sys.stdout.flush()
    if iteration == total:
        sys.stdout.write('\n')
        sys.stdout.flush()
# Set up File Dialog, see: http://stackoverflow.com/questions/9319317/quick-and-easy-file-dialog-in-python
root = tk.Tk()
root.withdraw()

imgloc = tkFileDialog.askopenfilename(title = (("Select an image file to convert")))
#imgloc = raw_input("Please enter the location of the image you would like to convert:")
#imgloc = "C:\Users\Thomas Finlay\Pictures\100%pureNZ.png"
#outloc = raw_input("Where would you like the Text Image file to be saved? ")
outloc = tkFileDialog.asksaveasfilename(title = (("Where would you like the converted image to be saved?")))

checkedimgloc = imgloc.replace('"', "")

image = Image.open(checkedimgloc)
pix = image.load()
#print image.size
#print pix [0,0]

imageHeight = image.size[1]
imageWidth = image.size[0]
#print "Height: " + str(imageHeight) + " width: " + str(imageWidth)

#Set up loopspace:
workingHeight = 0
text_file = open(outloc, "w")

os.system('cls' if os.name == 'nt' else 'clear')

#Progress Bar:
i = 0
l = int(imageHeight * imageWidth)
printProgress(i, l, prefix = 'Progress:', suffix = 'Complete', barLength = 50)

while workingHeight < imageHeight:
    workingWidth = 0
    while workingWidth < imageWidth:
        #print "Currently at: " + str(workingWidth) + ", " + str(workingHeight)
        if pix[workingWidth, workingHeight] == (0, 0, 0, 0):
            text_file.write("0;")
        else:
            text_file.write("rgba" + str(pix[workingWidth, workingHeight]) + ";")
        #print "rgba" + str(pix[workingWidth, workingHeight]) + ";"
        workingWidth += 1
        i += 1
        printProgress(i, l, prefix = 'Progress:', suffix = 'Complete', barLength = 50)
    text_file.write("\n")
    workingHeight += 1
text_file.close()

print "\nConversion Complete"
raw_input("Press Return to exit...")