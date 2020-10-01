import { az } from "./src/gen/az";

const accounts = az.storage.account.list().execute();
