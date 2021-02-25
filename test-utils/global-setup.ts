/* eslint-disable @typescript-eslint/ban-ts-comment */
import { setup } from "jest-dev-server";

// @ts-ignore
global.__render__ = 16;

module.exports = async function globalSetup() {
  await setup({
    command: `ts-node ./test-utils/server.ts`,
    launchTimeout: 50000,
    port: 4321,
  });
};
