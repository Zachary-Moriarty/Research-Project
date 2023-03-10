import matplotlib.pyplot as plt
import csv
linestyle = 'solid'
title = ''
with open('FealingValues.csv', 'r') as file:
    lines = csv.reader(file, delimiter=',')
    x = list(range(1,101))
    print(x)
    i = 0
    figs = -1
    for row in lines:
        if(row[2] == ''):
            figs += 1
            name = "figure_" + str(figs) + ".png"
            plt.savefig(name)
            fig, axs = plt.subplots(int(row[1]))
            fig.suptitle(row[0])
            j = -1
        else:
            if(i % 4 == 0):
                i = 0
                j +=1
                fig.legend()
                linestyle = 'solid'
            if(i == 1):
                linestyle = 'dashed'
            elif(i == 2):
                linestyle = 'dotted'
            elif(i ==3):
                linestyle = 'dashdot'
            vals = []
            for s in row[1:]:
                vals.append(int(s))
            axs[j].plot(x,vals,label = row[0], linestyle=linestyle)
            i += 1
    figs += 1
    name = "figure_" + str(figs) + ".png"
    plt.savefig(name)
