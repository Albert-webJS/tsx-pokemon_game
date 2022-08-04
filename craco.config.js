const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    // ...
    webpack: {
        alias: {
            '@assets': resolvePath('./src/assets'),
            "@interfaces": resolvePath('./src/interfaces'),
            "@": resolvePath("./src")
        }
    },
  // ...
}