export interface IEnvironment {
  dataApiUrl: string;
  mongoDbConnectionString: string;
  neo4j: {
      scheme: string;
      host: string;
      password: string;
      username: string;
      database: string;
      port: number;
  }
}
