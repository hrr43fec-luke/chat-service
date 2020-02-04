# Welcome to chat-service!

## Getting started

MongoDB is required. Default port (27017.) If your database has a username and password, you can set it in the ".env" file in the root of the project.

After installing node modules,
1. npm run build
2. npm run seed (this will put a bunch of data in the DB)
3. optionally run npm test --coverage (to see if everything is working)

npm run start will run nodemon on port 3002 (i.e. localhost:3002 will bring up the module)

You can look at different sets of data for videos 1-10 like this:
localhost:3002/?2

There are no clickable elements as they would lead out of the module or cause cross-module communication.

You can hover over timestamps, badges, and usernames and see tooltips.
