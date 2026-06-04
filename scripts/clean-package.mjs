import { rmSync } from 'node:fs';
import { resolve } from 'node:path';

rmSync(resolve('dist/package'), { recursive: true, force: true });
