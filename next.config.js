const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer({
  reactStrictMode: true,
  basePath: "/port",
  images: {
    unoptimized: true,
  },
});
