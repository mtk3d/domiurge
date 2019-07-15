export default {
  compilerOptions: {
    baseUrl: '.',
    paths: { '*': ['types/*'] },
    declaration: true,
    importHelpers: true,
    module: 'commonjs',
    outDir: 'lib',
    rootDir: 'src',
    strict: true,
    target: 'es2017',
    composite: true,
    resolveJsonModule: true,
    esModuleInterop: true
  },
  include: [
    'src/**/*',
    'src/**/*.json'
  ]
}
