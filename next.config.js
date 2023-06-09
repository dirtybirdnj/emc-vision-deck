const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  images: {
    deviceSizes: [3840],
    domains: ['emc-vision-deck.vercel.app']
  }
});
