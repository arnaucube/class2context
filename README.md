# class2context
javascript library, to add context menu functionallity to html page

Demo: http://arnaucode.com/demos/class2context

Referenced in: http://www.cssscript.com/lightweight-context-menu-library-class2context-js/

![Alt text](https://raw.githubusercontent.com/arnaucode/class2context/master/class2context_01.gif "downlad and open the demo to test it")

### Installation
```
    bower install class2context --save
```

### Usage
First, include the files
```html
<link rel='StyleSheet' type='text/css' href='class2context.css'>
<script src='class2context.js'></script>
```

Then, for each class, call the function
```js
class2context('className', "title for contextmenu", [["option 1", "function1()"], ["option 2","function2()"]]);
```
Another example:
```js
array=[
  ["<img src='1.png'> Menu 1", "function1()"],
  ["<img src='2.png'> Menu 2", "function2()"],
  ["<img src='3.png'> Menu 3", "function3()"],
];
class2context('demoClass', "Menu Title Here", array);
```
