import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
    dataApiUrl: "http://localhost:3000/api/",
    mongoDbConnectionString: "mongodb://127.0.0.1:27017/",
    neo4j: {
        scheme: 'neo4j',
        host: 'localhost',
        password: 'larslego',
        username: 'neo4j',
        database: 'neo4j',
        port: 7687
    }
}