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
            isServer ? "ssr" : "chuncks"
          }/mainEntry.js`,
          shared: `shared@${
            process.env.MODULE_SHARED_ENTRYPOINT_URL
          }/_next/static/${isServer ? "ssr" : "chuncks"}/sharedEntry.js`,
        },
        filename: "static/chuncks/checkoutEntry.js",
        extraOptions: {
          automaticAsyncBoundary: true,
          exposePages: true,
        },
        remoteType: "module",
      })
    );
    return config;
  },
};

module.exports = nextConfig;
