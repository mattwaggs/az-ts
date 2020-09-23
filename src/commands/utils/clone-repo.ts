import shelljs from "shelljs";

import path from "path";
import osTempDir from "temp-dir";
import { v4 as uuid } from "uuid";

/// returns the folder path of the temp dir, and a cleanup function
export const cloneRepoToTempDir = (): [string, () => void] => {
  const tempDir = path.join(osTempDir, uuid());

  // ensure git exists on system
  const hasGit = shelljs.which("git");
  if (!hasGit) {
    console.log("git does not exist");
    process.exit(1);
  }

  // create a temp directory
  shelljs.mkdir("-p", tempDir);

  // clone the git repo into our temp directory
  const gitCommand = `git clone https://github.com/MicrosoftDocs/azure-docs-cli ${tempDir}`;
  shelljs.exec(gitCommand, { silent: true });

  const cleanUpTask = () => {
    shelljs.rm("-rf", tempDir);
  };

  return [tempDir, cleanUpTask];
};
