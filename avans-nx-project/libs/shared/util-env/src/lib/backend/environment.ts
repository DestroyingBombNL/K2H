import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
    dataApiUrl: "http://localhost:3000/api/",
    mongoDbConnectionString: "mongodb://localhost:27017/K2H",
    neo4j: {
        scheme: 'neo4j',
        host: 'localhost',
        password: 'larslego',
        username: 'neo4j',
        database: 'neo4j',
        port: 7687
    }
}