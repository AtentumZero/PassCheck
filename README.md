# PassCheck

![Alt text](/images/screenshot1.png)

A basic, very lightweight Javascript web application that tests the strength of a password and classifies it as Weak, Good, Strong or Very Strong. This is currently based on password length only, although I do plan to add further parameters in the future.

To use this on your web server, drop all the files into your web root directory and amend as you see fit (display, embed content into an existing webpage etc.) The default index.html files is set to display a logo from an image hosted at images/passcheck.png - add an image to that location if a photo is required.

PassCheck doesn't log or store passwords that have been entered into it, nor does it transmit them elsewhere. 

It is highly recommend that, if you use this application on an Internet-facing web server, that you use HTTPS to ensure that passwords entered into it are not passed from the user to your web server in plain text.

![Alt text](/images/screenshot2.png)
