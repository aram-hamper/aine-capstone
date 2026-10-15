```
        ^__^
        (oo)\_______
        (__)\       )\/\
            ||----w |
            ||     ||
```

## Building Todoist from Scratch Using React (Custom Hooks, Context), Firebase & React Testing Library (http://bit.ly/CognitiveSurge)

This application (a Todoist clone) was built using create-react-app as a base, and the technologies used were React (Custom Hooks, Context), Firebase & React Testing Library. I'm hoping this gives people a better understanding of React, and I've also included SCSS in this tutorial, but the main focus is to build a real application using React! If you clone this application, click the Pizza icon on the top right, it enables dark mode!

Subscribe to my YouTube channel here: http://bit.ly/CognitiveSurge where I build projects like this! And don't forget, you can contribute to this project (highly encouraged!). One thing I didn't get time to do was incorporate accessibility into this application, so I'd love to see that added!

![Preview](todoist-preview.png?raw=true)

## Running tests

To run the test suite, first install dependencies:

```bash
npm install
```

To run tests in watch mode (useful during development):

```bash
npm test
```

To run tests in a single run (useful for CI/CD pipelines):

```bash
CI=true npm test -- --watchAll=false
```

**Note:** This is an older project that uses node-sass 4, which requires a compatible Node version. If you encounter issues during installation, ensure you're using a Node version that supports node-sass 4 (typically Node 12.x or earlier).
