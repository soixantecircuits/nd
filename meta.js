module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Neodymium project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    electron: {
      type: 'confirm',
      message: 'Setup Electron support (might break browser support)?'
    }
  },
  filters: {
    'electron/**/*': 'electron'
  },
  helpers: {
    chandeDirectory: () => {
      return (process.argv[3] === undefined || process.argv[3] === '.')
        ? ''
        : `  cd ${process.argv[3]}\n`
    }
  },
  completeMessage: 'To get started:\n\n{{chandeDirectory}}  npm install\n  npm start\n\nDocumentation can be found at https://soixantecircuits.github.io/nd'
}
