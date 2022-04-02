import numpy
import matplotlib.pyplot as plt
import sys

data = numpy.load(sys.argv[1], allow_pickle=True)
label = numpy.load(sys.argv[2], allow_pickle=True)
print(sys.argv)
name = sys.argv[1].split("/")[1].split(".")[0]
print("loaded {}".format(name))
for i in range(len(data)):
    if label[i] == 1:
        d = data[i]
        img = plt.imshow(d, cmap='bwr')
        plt.axis('off')
        plt.savefig("./public/images/{}-{}.png".format(name, i), pad_inches=0, bbox_inches='tight')
        plt.clf()
        numpy.savetxt("./files-csv/{}-{}.csv".format(name, i), d, delimiter=",")
    print("completed {}/{}".format(i,len(data)))
