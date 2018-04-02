module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "@app/(.+)": "<rootDir>/src/$1",
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/.jest/file-transformer.js"
  },
  testMatch: ["**/*.test.+(ts|tsx|js)"]
};
