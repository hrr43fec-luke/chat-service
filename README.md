# Welcome to chat-service!

## Getting started

MongoDB is required.

### A .env is required in the root directory. Example:
- SERVER_PORT=3002   // this is where node will serve the website
- DB_HOST=localhost  // the rest is for MongoDB
- DB_PORT=27017
- DB_USER=              // this may be left blank
- DB_PWD=              // this may be left blank

### After installing node modules,
1. npm run build
2. npm run seed (this will put a bunch of data in the DB)
3. optionally run npm test --coverage (to see if everything is working)

npm run start    // will run nodemon on port 3002 (i.e. localhost:3002 will bring up the module)

You can look at different sets of data for videos 1-10 like this:
localhost:3002/?2

There are no clickable elements as they would lead out of the module or cause cross-module communication.

You can hover over timestamps, badges, and usernames and see tooltips.
