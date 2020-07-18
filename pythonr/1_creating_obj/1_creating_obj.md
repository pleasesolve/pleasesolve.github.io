---
title: How to create objects?
parent: Python and R
has_children: false
nav_order: 1
mathjax: true
---

Almost everything in Python and R are *objects*. Let us create learn how to create *objects* and we will learn their inner workings as we do so:

1. TOC <a name="top"></a>
{:toc}

## Python
Let us build an *object* using `class`, which is used to create a blueprint for an *object*.
```python
class name:
    def __init__(self,name):
        self.name = name
    def showname(self):
        print(self.name)
```
An *object* may be regarded as a factory that takes in inputs and, with a few functions or methods built in it, gives out an output. In this factory, all the inputs, functions and methods are labelled *self*. *self* points to the `class` object `name`. `name` object takes a name as input, its function `showname` acts on the input and prints out the name as an ouput. 

Now that we have constructed a `name` object. Let us see how to use them.

```python
example = name('Please Solve')
```
Now example is a `name` object, which has the function `showname` built in it.

```python
example.showname()
```

    Please Solve

Let us examine its type with Python's `type` object which takes an input and prints out input's type.
```python
type(example)
```

    __main__.name

`example` is a `name` object in the `__main__` Python module.

###### [Back to top](#top)
{: .no_toc}
## R
There are many ways to build objects in R. We will use `setRefClass` which resembles Python's way of contructing objects, to build our object. There is no need for labels such as `self`.

```R
Name <- setRefClass("name",fields = list(name="character"),
                   methods = list(
                   showname=function(){
                       print(name)
                   }))
```


    Error in setClass(Class, contains = superClasses, where = where, ...): “name” has a sealed class definition and cannot be redefined
    Traceback:


    1. setRefClass("name", fields = list(name = "character"), methods = list(showname = function() {
     .     print(name)
     . }))

    2. setClass(Class, contains = superClasses, where = where, ...)

    3. stop(gettextf("%s has a sealed class definition and cannot be redefined", 
     .     dQuote(Class)), domain = NA)

`name` is reserved by R for some other purposes. So, let us call our object `newname` instead of `name`. But refer to it as "Name".

```R
Name <- setRefClass("newname",fields = list(name="character"),
                   methods = list(
                   showname=function(){
                       print(name)
                   }))
```
The `field` parameter is set as a list of inputs and data types. In this case, the input is a *name* which is of *character* type in R (we'll see about various data types soon). `methods` parameter is a list of functions that act on the input. In this case, the function is `showname` that acts on `name`. Let's use this object in program.
```R
example <- Name(name="Please Solve")
```
Now example is a `newname` object, which has the function `showname` built in it.

```R
example$showname()
```
	[1] "Please Solve"

Let us examine `example` by using `str` object in R. `str` gives us the internal structure of `example`.
```R
str(example)
```

    Reference class 'newname' [package ".GlobalEnv"] with 1 field
     $ name: chr "Please Solve"
     and 15 methods, of which 1 is  possibly relevant:
       showname

###### [Back to top](#top)
{: .no_toc}
