Bankly project Readme

1. Familiarize yourself with the code first
2. BEFORE you run the seed command, make sure to create the appropriate databases
 - bankly
 - bankly_test
3. Be attentive to the <config.js> file. There you will find the connection strings to connect to the newly created <bankly> database and <bankly_test> database. The connection string are in default format. Depending on your local settings, you may have to input your Postgres credentials.
4. Node version and package versions change frequently. This has been tested to work with 18.0.0 up until 22.6.0  Be wary of "nightly" Node releases. They are meant for seasoned devs to test new feautures. Any LTS release beyond 18 should be fine
5. When running tests with Jest make sure you are running them within the <bankly> directory. Take care install all dependencies as well.
6. Good Luck!
