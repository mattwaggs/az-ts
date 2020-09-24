import { az_webapp } from "./gen/src/webapp";

const webapp = new az_webapp();

webapp
  .az_webapp_create("myapp", "plan", "resourcegroup")
  .assignIdentity("[system]")
  .multicontainerConfigType("COMPOSE")
  .execute();

