module.exports = {
  hooks: {
    'pre-commit': 'run-p test format lint',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
}
