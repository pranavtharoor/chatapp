module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^Src[/](.+)': '<rootDir>/src/$1',
    '^Config[/](.+)': '<rootDir>/config/$1'
  },
  setupFiles: ['./jest-setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
