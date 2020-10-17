const express = require("express");
const cors = require("cors")
const { readFileSync } = require("fs");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const axios = require("axios");

const app = express();

app.use(cors());

const port = 8080 || process.env.PORT;

const schemaString: string = readFileSync("./schema.graphql", { encoding:  "utf8"});

const schema = buildSchema(schemaString)


// Games API : https://rawg.io/apidocs
// Movie API : https://developers.themoviedb.org/3/getting-started/authentication
// Anime API : https://shikimori.org/api/doc/1.0/animes/index


const movieApiKey: string = "bc7caa8f01391755051c0c1d0b0afef9";

const root = {
    getMovie: async () => {

        const data = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${movieApiKey}`)

        return data.data.results
    },
    getIdMovie:  async ( params ) => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${movieApiKey}`)

        return data.data
    },
    getGames: async () => {
        const data = await axios.get("https://api.rawg.io/api/games");

        return data.data.results;
    },
    getIdGames: async ( params ) => {
        const data = await axios.get(`https://api.rawg.io/api/games/${params.id}`)
        
        return data.data
    },
    getAnime: async () => {
        const data = await axios.get("https://shikimori.one/api/animes?limit=12&order=ranked");

        return data.data;
    },
    getIdAnime: async ( params ) => {
        const data = await axios.get(`https://shikimori.one/api/animes/${params.id}`);

        return data.data
    }
}

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
)

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});