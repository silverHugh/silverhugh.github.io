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

## Basic strategies

```python
# Get all attributes of a object
dir(object_name)
# Show the type of a object
type(object_name)
# Check the type
isinstance(class_name, object_name)
```

### Flow of Control
```python
# Loop with index
for index, itme in enumerate(itmes):
    print(index, item)
```

### Object， Array
``` python
# 
```

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
# Extract number from string
import re
re.findall("[-+]?\d+[\.]?\d*[eE]?[-+]?\d*", '15.1米')
# ['15.1']

# Decimal points
round(num, 2)
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
extract_height(lag)
# 116.3992
```

### Datetime

[Python's strftime directives](http://strftime.org/)
```python
import datetime
object.strftime('%Y-%m-%d %H:%M:%S')
# 2017-05-01 08:18:05
```