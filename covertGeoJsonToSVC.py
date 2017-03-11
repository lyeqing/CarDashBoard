twitterData8 = open('gps.geojson', 'r')
file = twitterData8.read()
twitterData8.close()
arrays = file.split('],')

saveFile = open("csv.csv", "a")
for x in range(0, len(arrays)):
 lines = arrays[x].split('\n')
 saveFile.write(lines[2] + lines[3]  + lines[4] + '\n')
 

saveFile.close()