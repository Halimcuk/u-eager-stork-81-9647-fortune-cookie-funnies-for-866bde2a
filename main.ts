// Fortune Cookie Funnies for Engineers
// SPDX-License-Identifier: MIT
// Writes exactly one original fortune-cookie line for an engineer to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "You will deploy on Friday at 4:59 p.m. The bug will only appear in production, while your manager watches.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
