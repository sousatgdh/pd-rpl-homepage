/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const configs = withMDX({
  basePath: "/pd-rpl-homepage",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});

module.exports = configs;
