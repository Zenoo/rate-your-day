module.exports = {
  bumpFiles: [
    {
      filename: 'package.json',
    },
    {
      filename: 'package-lock.json',
    },
    {
      filename: 'src/components/Version.jsx',
      updater: {
        readVersion: (contents) => contents.match(/{'v([^']+)'}/)[1],
        writeVersion: (contents, version) => contents.replace(/{'v[^']+'}/, `{'v${version}'}`),
      },
    },
  ],
  types: [
    {
      type: "feat",
      section: "Feature"
    },
    {
      type: "fix",
      section: "Bug fix"
    },
    {
      type: "chore",
      hidden: true
    },
    {
      type: "docs",
      section: "Documentation"
    },
    {
      type: "style",
      section: "Visual update"
    },
    {
      type: "refactor",
      section: "Refactoring"
    },
    {
      type: "perf",
      section: "Performance"
    },
    {
      type: "progress",
      section: "Progression"
    },
    {
      type: "admin",
      section: "Administration"
    },
    {
      type: "test",
      section: "Test"
    }
  ]
};