import {defineConfig} from 'orval';

export default defineConfig({
  pet_store: {
    input: 'openapi.yaml',
    output: {
      mode: 'tags-split',
      target: 'services',
      workspace: 'src/app/pet-store',
      namingConvention: 'kebab-case',
      tsconfig: './tsconfig.app.json',
      baseUrl: {
        getBaseUrlFromSpecification: true,
      },
      client: 'zod',
      fileExtension: '.schema.ts',
      indexFiles: true,
    },
    hooks: {
      afterAllFilesWrite: {
        command: 'npm run format',
        injectGeneratedDirsAndFiles: false,
      },
    },
  },
});
