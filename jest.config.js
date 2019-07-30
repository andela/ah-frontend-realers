const { defaults } = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, '.js', '.json', '.jsx', '.ts', '.tsx'],
  setupFiles: ['./src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
  },
};

