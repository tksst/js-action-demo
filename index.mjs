import fs from "node:fs/promises";
import path from "node:path";
import { execSync } from "node:child_process";

const yml = `
name: Setup pnpm project

description: checkout a source, setup pnpm and Node.js and install dependencies

runs:
  using: composite
  steps:
    - name: Setup pnpm
      uses: pnpm/action-setup@d882d12c64e032187b2edb46d3a0d003b7a43598 # v2.4.0
      with:
        standalone: true
`;

const p = "./setup-pnpm/";

await fs.mkdir(p, { recursive: true });
const x = await fs.writeFile(path.join(p, "action.yml"), yml, "utf-8");

console.log(execSync("pwd", { encoding: "utf-8" }));
console.log(execSync("ls -l", { encoding: "utf-8" }));
