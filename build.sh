npm install -g firebase-tools
npm install --no-package-lock

npm run build
npm run test

if [ $TRAVIS_BRANCH == 'master' ]; then
  npm run deploy
fi