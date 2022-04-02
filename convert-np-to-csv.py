import numpy
import matplotlib.pyplot as plt
import sys

data = numpy.load(sys.argv[1], allow_pickle=True)
i = 0
name = sys.argv[1].split("/")[2].split(".")[0]
print("loaded {}".format(name))
for d in data:
    img = plt.imshow(d, cmap='bwr')
    plt.axis('off')
    plt.savefig("./public/images/{}-{}.png".format(name, i), pad_inches=0, bbox_inches='tight')
    numpy.savetxt("./files-csv/{}-{}.csv".format(name, i), d, delimiter=",")
    i = i+1
    print("completed {}/{}".format(i,len(data)))