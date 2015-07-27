# clipbrd

clipbrd is a plain javascript copy-to-clipboard widget. It uses the "document.execCommand('copy')" function. This is supported by the following browsers:

- Chrome v42
- Firefox v41
- Internet Explorer v9
- Opera v29

Note that in order to access a users' clipboard you will have to do it within a user-triggered event such as a click. So for example bind a button click and use the copy-feature within the event handler. This is how I do it in the demo (test.html).