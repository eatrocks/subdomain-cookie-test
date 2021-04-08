# subdomain-cookie-test

This app checks if a cookie on one subdomain is visible on another.

## How to test

- Run the app with `node app`
- Put entries for 2 domains in your `/etc/hosts` file.
  - 127.0.0.1 sub1.gobruce.us
  - 127.0.0.1 sub2.gobruce.us
- Open your browser to http://sub1.gobruce.us:3000
  - You should see "I SET the bruce cookie"
- Navigate to http://sub2.gobruce.us:3000
  - You should see "I SEE the bruce cookie"

Note: you must change the sub-domain for the test to be valid. The app will not verify that you changed sub-domains. It simply sets the cookie if it doesn't see it; otherwise tells you that it sees the cookie.

This proves that cookies do cross sub-domains even with the recent browser security restrictions on cross-domain cookies.

If you extend this test a bit, you will find that cookies set on sub1.gobruce.us:3000 are not visible to a.sub1.gobruce.us:3000
