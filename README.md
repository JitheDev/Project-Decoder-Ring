# decoder-ring
This is a project I worked on while attending CodeCademys BootCamp. While working on this project, I was able to practice writing complex algorithms and unit tests with Mocha and Chai.

This application allows the user to encode and decode messages using either the polybius square, caesar shift, or substitution cipher. The caesar shift shifts all characters of a given message a specified number of characters to the right, if a positive shift value is given, or the the left, if a negative shift value is given. The polybius square translates characters into a number respresentative of a position in a two dimensional array known as a polybius square. Lastly, the substitution cipher exchanges letters in the English alphabet with a different alphabet provided by the user to create an encoded or decoded message.

# Technology & Tools
Built with:
* Test-driven Development
* Mocha
* Chai
* JavaScript
* Bootstrap 4
* HTML

# Installation
1) Clone this Repository by clicking the Code button and copy the URL
2) In a terminal utilize the command git clone + the copied URL
3) Navigate to your porject file
4) Install Dependencies using `npm install` in your terminal
5) To run the development server utilize the `npm start` command
6) Enjoy encrpyting some messages!

# Screenshots
Example of using the Caesar Shift to encode a message:
![Caesar Shift Encode](/src/caesarshift.jpg)

Example of using the Polybius Square to encode a message:
![Polybius Square Encode](/src/polybiussquare.jpg)

Example of using the Substitution Cipher to encode a message:
![Substitution Cipher Encode](/src/substitutioncipher.jpg)
