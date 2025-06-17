import {defineConfig} from 'orval';

export default defineConfig({
  pet_store: {
    input: 'openapi.yaml',
    output: {
      mode: 'tags-split',
      target: 'services',
      workspace: 'src/app',
      namingConvention: 'kebab-case',
      tsconfig: './tsconfig.app.json',
      baseUrl: {
        getBaseUrlFromSpecification: true,
      },
      client: 'angular',
      schemas: 'models',
      mock: true,
    },
  },
  pet_store_schemas: {
    input: 'openapi.yaml',
    output: {
      mode: 'tags-split',
      target: 'services',
      workspace: 'src/app',
      namingConvention: 'kebab-case',
      tsconfig: './tsconfig.app.json',
      baseUrl: {
        getBaseUrlFromSpecification: true,
      },
      client: 'zod',
      fileExtension: '.schema.ts',
    },
  },
});
