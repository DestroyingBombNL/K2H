import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
    dataApiUrl: "http://localhost:3000/api/",
    mongoDbConnectionString: "mongodb+srv://DestroyingBombNL:ORKnUZxXSnj1G3nA@cluster0.utfpggp.mongodb.net/",
    neo4j: {//mongodb+srv:DestroyingBombNL:<password>@cluster0.utfpggp.mongodb.net/
        scheme: 'neo4j+s',
        host: '4d184a31.databases.neo4j.io',
        password: 'pKsTBuQIjTy2F8kT8RsBiizx0oBsiMc33AHSAVYiILw',
        username: 'neo4j',
        database: 'neo4j',
        port: 7687
    }
}