import {ConfigExternal} from '@orval/core';
import {defineConfig, OutputClient} from 'orval';

const config: ConfigExternal = {};
const clients: OutputClient[] = Object.values(OutputClient);

for (const c of clients) {
  config[c] = {
    input: 'openapi.yaml',
    output: {
      workspace: `generated/${c}`,
      target: 'api',
      // schemas: 'models',
      client: c,
      mode: 'tags-split',
      namingConvention: 'kebab-case',
      tsconfig: './tsconfig.app.json',
      baseUrl: {
        getBaseUrlFromSpecification: true,
      },
      indexFiles: true,
    },
  };
}

export default defineConfig(config);
