const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
                '@primary-color': '#c81d25',
                '@font-size-base': '16px',
                '@layout-header-background': '#242423',
                '@layout-footer-background': '#242423',
                '@card-radius': '6px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};