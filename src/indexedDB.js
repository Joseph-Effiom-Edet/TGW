import { Dexie } from "dexie";

const db = new Dexie("userLoginDetails");
db.version(1).stores({
  userData: "++id, username, name, password, picture",
});

export const { userData } = db;
