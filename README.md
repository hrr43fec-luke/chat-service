# Welcome to chat-service!

![screenshot](https://github.com/hrr43fec-luke/chat-service/blob/master/chat-service.png?raw=true)

## Technical notes
- The style `height: 100%` must start at the top and make it's way down to the App component
- So in index.html, you'll see:
`<html style="height:100%">`,
`<body style="height:100%">`, and 
`<div style="height:100%" id="chat-service">`
- If you are putting this service inside a proxy and cannot update html and body because it would conflict with other components, consider doing a height: 100vh, perhaps like `<div style="height:100vh" id="chat-service">`
  
## Getting started

MongoDB is required.

### Set environment variables (or make a `.env` file in the root directory). Example `.env`:
    PORT=3002
    DB_HOST=localhost
    DB_PORT=27017
    DB_USER=
    DB_PWD=

### After installing node modules:
1. `npm run build`
2. `npm run seed` (this will put a bunch of data in the DB)
3. optionally `run npm test --coverage` (to see if everything is working)

### To run:

    npm run start

You can look at different sets of data for videos 1-10 like this:

    localhost:3002/?2

There are no clickable elements as they would lead out of the module or cause cross-module communication.

You can hover over timestamps, badges, and usernames and see tooltips.
