---
title: Memo - Python
categories: [memo, boat]
date: 2017-04-30 21:02:21 +0800
redirect_from: 
- /memo/py/
- /memo/python/
---

This is one of my memos about Python language.

**Memos** are used for recording the problems I encountered during programming and its soulutions. I also write down something that is hard to remember for myself.

<!--shoreline-->
---

{% include toc %}

## Links

[Dive Into Python](http://www.diveintopython.net/toc/index.html)

## Basic strategies

```python
# Get all attributes of a object
dir(object_name)
# Show the type of a object
type(object_name)
# Check the type
isinstance(obj_name, class_name)
```

### Flow of Control

```python
# Loop with index
for index, itme in enumerate(itmes):
    print(index, item)
```

### List

```python
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

```python
# OrderedDict http://stackoverflow.com/questions/10844064
from collections import OrderedDict
json.dumps(OrderedDict([("a", 1), ("b", 2)]))   # '{"a": 1, "b": 2}'
# OrderedDict Since Python 3.6
json.dumps(OrderedDict(a=1, b=2))   # '{"a": 1, "b": 2}'
```

### Class

[Improve Your Python: Python Classes and Object Oriented Programming](https://jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/)

## File Reading and Writing
### Read Excel

[Python Excel Tutorial: The Definitive Guide](https://www.datacamp.com/community/tutorials/python-excel-tutorial#gs.G9sppfU)

[openpyxl](https://openpyxl.readthedocs.io/en/default/optimized.html) - A Python library to read/write Excel 2010 xlsx/xlsm files.

```python
from openpyxl import load_workbook
# Load xlsx file
wb = load_workbook(filename='tower.xlsx', read_only=True)
# Get the first sheet, ws:<ReadOnlyWorksheet>
ws = wb[wb.get_sheet_names()[0]]
```

## Format
### Basic Data Structure

```python
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

```python
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

[Python's strftime directives](http://strftime.org/)

```python
import datetime
object.strftime('%Y-%m-%d %H:%M:%S')    # 2017-05-01 08:18:05
```