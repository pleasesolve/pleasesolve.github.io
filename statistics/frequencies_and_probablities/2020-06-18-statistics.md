---
title: Mean, Standard deviation
grand_parent: Statistics
parent: Frequencies and Probabilities
has_children: false
nav_order: 1
---
# Mean, Standard deviation and Frequency diagram
{: .no_toc }
## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

# Python implementation
```python
import numpy as np
from matplotlib import pyplot as plt 
from matplotlib import markers as marks
%matplotlib inline
```


```python
#Data
heights = np.array([150,153,156,159,162,165,168,171,174])
freq = np.array([2,0,15,29,25,12,10,4,3])
```


```python
# Function to plot histogram/frequency diagram
def plot_freq_poly(x,y,font,show_mean=False, show_sd = False):
    plt.grid(linewidth=0.2)
    plt.bar(x,y,width=3,fill=False,linewidth=1)
    plt.xlabel('Height in cm',size=20,fontdict=font)
    plt.ylabel('Frequencies',size=20,fontdict=font)     
    plt.plot(x,y,'o-')
    plt.xticks(range(x[0],x[-1]+1,3),fontsize=14)
    plt.yticks(fontsize=15)    
    mean_val = np.sum(x*y)/np.sum(y)
    #To get an idea of the mean
    if show_mean:        
        print('Mean value:', mean_val)
        plt.ylim((-10,max(y)+1))
        plt.plot(mean_val,0,marker=marks.CARETUP,markersize=15)
    #To get an idea of the standard deviation
    if show_sd:
        variance = np.sum((x-mean_val)**2*y)/np.sum(y)
        sd_val = np.sqrt(variance)
        print('Standard deviation:', sd_val)
        plt.axvline(x=mean_val,color='black',linestyle='-.',linewidth=4)
        plt.axvline(x=mean_val+sd_val,color='black',linestyle='-.',linewidth=2)
        plt.axvline(x=mean_val-sd_val,color='black',linestyle='-.',linewidth=2)
        plt.axvline(x=mean_val+2*sd_val,color='black',linestyle='-.',linewidth=1)
        plt.axvline(x=mean_val-2*sd_val,color='black',linestyle='-.',linewidth=1)
```


```python
#Frequency diagram
font = {'family': 'serif',
        'color':  'darkblue',
        'weight': 'normal',
        'size': 16,
        }
plot_freq_poly(heights,freq,font)
```


![png](/assets/images/2020-07-01-1python-freq-diag-mean-std_files/2020-07-01-1python-freq-diag-mean-std_3_0.png)


## How to balance the histogram at a single point?


```python
plot_freq_poly(heights,freq,font,show_mean=True)
plt.text(x=160,y=-5,s='mean',fontdict=font)
```

    Mean value: 161.67

![png](/assets/images/2020-07-01-1python-freq-diag-mean-std_files/2020-07-01-1python-freq-diag-mean-std_5_2.png)

```python
plot_freq_poly(heights,freq,font,show_mean=True,show_sd=True)
plt.text(x=160,y=-5,s='mean',fontdict=font)
```

    Mean value: 161.67
    Standard deviation: 4.798030846086757

![png](/assets/images/2020-07-01-1python-freq-diag-mean-std_files/2020-07-01-1python-freq-diag-mean-std_6_2.png)

# R implementation
