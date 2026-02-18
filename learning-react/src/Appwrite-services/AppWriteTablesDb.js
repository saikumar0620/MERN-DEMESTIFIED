import appwriteClient from ".";


import {  TablesDB } from "appwrite";
class AppWriteTablesDb {
    constructor() {
        this.tablesDb = new TablesDB(appwriteClient);
    }
    async getAllRecords(DbId,TableId) {
        const allRecords = await this.tablesDb.listRows({
              databaseId: DbId,
              tableId: TableId
        });
        return allRecords?.rows;
    }
  }

  export default AppWriteTablesDb;