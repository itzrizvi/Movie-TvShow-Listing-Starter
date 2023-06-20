// ALL REQUIRES
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;
const { db, checkMongoDBConnection } = require("./src/db");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./src/graphql/typeDefs/schema");
const resolvers = require("./src/graphql/resolvers");
const {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageDisabled,
} = require("apollo-server-core"); // FOR DISABLING APOLLO STUDIO ONLY
const rateLimit = require('express-rate-limit')

// CREATE SERVER APP
const app = express();

// Middlewares Require
const onReqTokenGenerate = require("./src/middlewares/onReqTokenGenerator");

// MIDDLWARES ARRAY
const middlewares = [
    express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 100000 }),
    express.json({ limit: "50mb" }),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(),
    cookieParser(),
];
const apiLimiter = rateLimit({
  windowMs: 1000 * 60 * 1, // 1 minute
  max: 60, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(middlewares); // Middlewares Using
// Apply the rate limiting middleware to API calls only
app.use('/graphql', apiLimiter)
app.use(onReqTokenGenerate);
app.set("trust proxy", true);


// APOLLO SERVER STARTS
async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
        csrfPrevention: false,
        uploads: true,
        playground: true,
        introspection: true,
        tracing: true,
        context: ({ req, res }) => {
        let { isAuth,user, ip, headers } = req;
        return {
            req,
            res,
            isAuth,
            user,
            db,
            ip,
            headers,
        };
        },
        cache: "bounded",
        plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(), // FOR DISABLE Apollo STUDIO
        ApolloServerPluginLandingPageDisabled(), // FOR DISABLE Apollo STUDIO
        ],
    });
        await server.start();
        server.applyMiddleware({ app });
        app.use((req, res) => {
        res.status(200);
        res.send("HELLO SAYBURGH!!!🚀🚀");
        res.end();
    });

    await new Promise((resolve) => app.listen({ port }, resolve));

    // LISTEN APP
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
    // MONGODB CONNECT SYNC
    await checkMongoDBConnection();
    return { server, app };
}
startApolloServer();


