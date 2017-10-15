---
title: Memo - Python
categories: [memo, boat]
date: 2017-04-30 21:02:21 +0800
redirect_from: 
- /memo/py/
- /memo/python/
gist: true
modified: 2017-10-15 14:20:05 +0800
---


This is one of my memos about Python language.

**Memos** are used for recording the problems I encountered during programming and its solutions. I also write down something that is hard to remember for myself.

<!--shoreline-->
---

{% include toc %}

## Links

- [Overview - CS228 Python Tutorial](http://nbviewer.jupyter.org/github/kuleshov/cs228-material/blob/master/tutorials/python/cs228-python-tutorial.ipynb)
- [Dive Into Python](http://www.diveintopython.net/toc/index.html)

## Basic

``` py
# Get all attributes of a object
dir(object_name)
# Show the type of a object
type(object_name)
# Check the type
isinstance(obj_name, class_name)
# Main
if __name__ == "__main__":
    pass
```

### Flow of Control

``` py
# Loop with index
for index, itme in enumerate(itmes):
    print(index, item)
```

### List

``` py
# Flatten list
[item for sublist in target for item in sublist]

# Another delicate flatten way: http://stackoverflow.com/a/40857703/6243174
from collections import Iterable

def flatten(items):
    """Yield items from any nested iterable; see REF."""
    for x in items:
        if isinstance(x, Iterable):
            yield from flatten(x)
        else:
            yield x

list(flatten(l))                               # list of lists
#[1, 2, 3, 4, 5, 6, 7, 8, 9]

items = [[1, [2]], (3, 4, {5, 6}, 7), 8, 9]    # numbers & mixed containers
list(flatten(items))
#[1, 2, 3, 4, 5, 6, 7, 8, 9]

# Filter empty strings: http://stackoverflow.com/a/3845453
str_list = filter(None, str_list) # fastest
str_list = filter(bool, str_list) # fastest
str_list = filter(len, str_list)  # a bit of slower
str_list = filter(lambda item: item, str_list) # slower than list comprehension
```

### Dict

``` py
# OrderedDict http://stackoverflow.com/questions/10844064
from collections import OrderedDict
json.dumps(OrderedDict([("a", 1), ("b", 2)]))   # '{"a": 1, "b": 2}'
# OrderedDict Since Python 3.6
json.dumps(OrderedDict(a=1, b=2))   # '{"a": 1, "b": 2}'
```

### String
#### Regular expression

[Regular expression operations](https://docs.python.org/3.5/library/re.html)

``` py
re.findall(r'\d+\.?\d+', "116°23'56.97\"E") # ['116', '23', '56.97']
```

### Class

[Improve Your Python: Python Classes and Object Oriented Programming](https://jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/)

## File operations

### Basic

``` py
with open(path, 'w') as f:
    pass
```

``` py
# https://docs.python.org/2/library/shutil.html#shutil.move
import shutil
shutil.move(src, dst)
```

### Read Excel

[Python Excel Tutorial: The Definitive Guide](https://www.datacamp.com/community/tutorials/python-excel-tutorial#gs.G9sppfU)

[openpyxl](https://openpyxl.readthedocs.io/en/default/optimized.html) - A Python library to read/write Excel 2010 xlsx/xlsm files.

``` py
from openpyxl import load_workbook
# Load xlsx file
wb = load_workbook(filename='tower.xlsx', read_only=True)
# Get the first sheet, ws:<ReadOnlyWorksheet>
ws = wb[wb.get_sheet_names()[0]]
```

### Write csv & xlsx

<code data-gist-id="3e5dad25a49ab7cd966caae65a9f9ef4" data-gist-line="5-10,55-79"></code>

## Format
### Basic Data Structure

``` py
# Trim whitespace
s.strip()
# Extract number from string
import re
re.findall("[-+]?\d+[\.]?\d*[eE]?[-+]?\d*", '15.1米')    # ['15.1']
# Decimal points
round(num, 2)
# JSON, dict or array to JSON string, 
# ensure_ascii=False make JSON string encoding in UTF-8 rather than ASCII
json.dumps(obj, indent=4, ensure_ascii=False)
```

### Geographic coordinates

``` py
import re

def dms2dd(degrees, minutes, seconds, direction):
    dd = float(degrees) + float(minutes)/60 + float(seconds)/(60*60);
    if direction == 'S' or direction == 'W':
        dd *= -1
    return dd;

def parse_dms(dms):
    try:
        return float(dms)
    except:
        parts = re.split('[^\d\w]+', dms)
        lat_or_lng = dms2dd(parts[0], parts[1], parts[2], parts[3])
        return lat_or_lng

lag = '116°23\'56.97"E'
parse_dms(lag)  # 116.3992
```

### Datetime

[Python's strftime directives]( http://strftime.org/ )

``` py
import datetime
object.strftime('%Y-%m-%d %H:%M:%S')    # 2017-05-01 08:18:05
```

## Numpy

``` py
import numpy as np
# ReLU fastest way
np.maximum(x, 0, x)
# won't modify x, the fastest way
x * (x > 0)
# dReLU, set 0 for x = 0
1. * (x > 0)
```

## Forward learning

> I figure out that group these memos by event is more efficient. So we can remember the story behind the code and remember them faster. I'm writing memo rather than tutorial.<br>
> 2017.10

### Array slice

- Array slice ( when see sample of filename ).

``` py
a[start:end] # items start through end-1
a[start:]    # items start through the rest of the array
a[:end]      # items from the beginning through end-1
a[:]         # a copy of the whole array
a[start:end:step] # start through not past end, by step
a[-1]    # last item in the array
a[-2:]   # last two items in the array
a[:-2]   # everything except the last two items
```

### Image processing

- [Image processing with scipy (scipy.misc, numpy Pillow)](http://www.scipy-lectures.org/advanced/image_processing/)

``` py
import matplotlib.pyplot as plt
from scipy import misc
img = misc.imread(file_path)
plt.imshow(img)
print(tpye(img), img.shape, img.dtype)
```

- [Apply functions to list item](https://chrisalbon.com/python/applying_functions_to_list_items.html)

``` py
result = [item.operation() for item in items]
```

### Exceptions and assert

> Asserts should be used to test conditions that should never happen. The purpose is to crash early in the case of a corrupt program state.<br>
> Exceptions should be used for errors that can conceivably happen, and you should almost always create your own Exception classes.
>
> [Best practice for Python assert - Deestan's answer](https://stackoverflow.com/a/945135)

[Exceptions](https://www.joelonsoftware.com/2003/10/13/13/)


## Jupyter Notebook

- [Jupyter (IPython) notebooks features](http://arogozhnikov.github.io/2016/09/10/jupyter-features.html)
- [28 Jupyter Notebook tips, tricks and shortcuts](https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/)
- [Node kernel - IJavascript](https://github.com/n-riesco/ijavascript)

``` sh
npm install -g ijavascript
ijinstall
jupyter notebook
```

``` py
# Get the content of *.py into jupyter notebook
load *.py
# Get the content of a function
function_name??
```
