import commandLineArgs, { OptionDefinition } from "command-line-args";
import commandLineUsage from "command-line-usage";

var packageJson = require("../../package.json");
var appVersion = packageJson.version;

export interface OptionsResult {
  build: boolean;
  ["build-meta"]: boolean;
  help: boolean;
}

export interface Command {
  execute: (options: OptionsResult) => void;
}

const optionDefinitions: OptionDefinition[] = [
  { name: "build", type: Boolean },
  { name: "build-meta", type: Boolean },
  { name: "help", type: Boolean },
];

export const options = commandLineArgs(optionDefinitions) as OptionsResult;

const sections = [
  {
    header: "AZ-TS",
    content:
      "Build and deploy azure resources with a typescript version of the cli",
  },
  {
    header: "Usage",
    content: ["$ az-ts [options]"],
  },
  {
    header: "Options",
    optionList: [
      {
        name: "build-meta",
        type: Boolean,
        description: "Build the type interfaces used for building this program",
      },
      {
        name: "build",
        type: Boolean,
        description:
          "Build the cli core code from the type definitions of the azure cli",
      },
      {
        name: "help",
        type: Boolean,
        description: "Print this usage guide.",
      },
    ],
  },
];

export const usage = commandLineUsage(sections);

export const displayLogo = () => {
  console.log("    _   ____        _____ ___ ");
  console.log("   /_\\ |_  /  ___  |_   _/ __|");
  console.log("  / _ \\ / /  |___|   | | \\__ \\");
  console.log(" /_/ \\_/___|         |_| |___/");
  console.log("                              ");
  console.log("");
  console.log(` version: ${appVersion}`);
  console.log("");
};
