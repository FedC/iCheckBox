iCheckBox
=========

## what is it?

This is a jQuery plugin which essentially takes on the idea of the iOS checkbox slider seen on the settings screen on 
Apple's mobile devices. It is a very simple and robust open-source plugin meant for anyone to use in a personal or commercial 
setting.

Feel free to modify this code, branch, pull, push any changes that you think might benefit the plugin and help it grow.

## Working example:

* http://creatrixelit.com/icheckbox/


## Simple use-case: $(container).iCheckBox()

Write some markup like:

```html
<div id="myCheckbox"></div>
```

Then call the plugin with the default settings:

```js
$('#myCheckbox').iCheckBox();
```

Will default to an 'ON' or 'OFF' state button with no callbacks. (Kinda boring!)

## $(container).iCheckBox( options )

Ofcourse, you might want to customize this a little (giving callback functions, etc). Here are some parameters
that can help you do this:


* `Yay`            - The String to be displayed as the happy action of the button. Default = 'ON'. 
                     Keep in mind these strings should be short (3-4 chars).
* `Nay`            - The String to be displayed as the not-happy action of the button. Default = 'OFF'.
                     Keep in mind these strings should be short (3-4 chars).
* `Default`        - Either of the above parameters as strings will default the button to appear selected to either
                     one of those options. Default = 'Nay' (Alt. = 'Yay')
* `ON`             - Pass a function that will get called when the button is selected to the 'Yay' state.
* `OFF`            - Pass a function that will get called when the button is selected to the 'Nay' state.

Using the above markup, these parameters could be used in this way:

```js
$('#myCheckbox').iCheckBox( {
  Yay: 'Yay',
  Nay: 'Nay',
  Default: 'Yay',
  ON: function() { alert('It is ON!'); },
  OFF: function() { alert('It is OFF! :('); }
});
```



