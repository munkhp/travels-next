// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    API_URL: "https://api.travelsinmongolia.com",
  },
  webpack: (config, { dev }) => {
    // Perform customizations to config
    // config.resolve = {
    //   fallback: {
    //     fs: false,
    //   },
    // };
    return config;
  },
};
// end config
