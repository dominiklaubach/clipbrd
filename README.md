# clipbrd

clipbrd is a plain javascript copy-to-clipboard widget. It uses the "document.execCommand('copy')" function.

## Browser Support
* Chrome v42
* Firefox v41
* Internet Explorer v9
* Opera v29

## Usage
```js
clipbrd.copy(
  'test1234', // String to be copied into the users' clipboard
  function( copiedValue ) { // Success callback (with copied string as parameter), optional
    alert('SUCCESSFULLY COPIED "' + copiedValue + '" TO CLIPBOARD');
  },
  function() { // error callback if copying to the users' clipboard failed, optional
    alert('ERROR');
  }
);
```

Note that in order to access a users' clipboard you will have to do it within a user-triggered event such as a click. So for example bind a button click and use the copy-feature within the event handler.
```js
document.getElementById('button').addEventListener('click', function() {
  clipbrd.copy('test1234');
});
```
