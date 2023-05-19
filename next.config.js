/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true, layers: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: "checkout",
        remotes: {
          main: `main@${process.env.MODULE_MAIN_ENTRYPOINT_URL}/_next/static/${
            isServer ? "ssr" : "chunks"
          }/mainEntry.js`,
          shared: `shared@${
            process.env.MODULE_SHARED_ENTRYPOINT_URL
          }/_next/static/${isServer ? "ssr" : "chunks"}/sharedEntry.js`,
        },
        filename: "static/chunks/checkoutEntry.js",
        extraOptions: {
          automaticAsyncBoundary: true,
          exposePages: true,
        },
        remoteType: "module",
        runtime: false,
      })
    );
    return config;
  },
};

module.exports = nextConfig;
