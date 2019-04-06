# Random Vision

A password generator that uses a webcam to create "random" passwords

This is a small side project that [@liambyrnenz](https://liambyrne.nz/) and I came up with while talking about password managers and password generation.

## Install Instructions

**PREREQUISITES:** This application requires a webcam framework to be installed, you can check [this link](https://www.npmjs.com/package/node-webcam#install) to find out which one you need to install.

1. Clone the repository `git clone https://gitlab.com/GeordieR/random-vision.git`
2. Install the dependencies by running `npm install` from within `random-vision/`
3. Run the program by running `node index.js` from within `random-vision/`

## The Future

What I might do if I happen to have some free time on my hands:

- [ ] Increase usability
  - [ ] Create more password length options
  - [ ] Add the ability for it to be automatically copied to the clipboard
  - [ ] Make the program global / runnable from anywhere
  - [ ] Make the program an application with a hot key
  - [ ] Add a front end and host it as a website
- [ ] Reduce predictability
  - [ ] Use an initial image to manipulate the data in another image and then get the hash
  - [ ] Increase the weight of random noise in the string before hashing
  - [ ] Look at also using microphone snippets
