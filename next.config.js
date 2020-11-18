const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      rewrites: async () => {
        return [
          {
            source: '/api/:route*',
            destination: 'http://localhost:3000/api/:route*',
          },
        ];
      },
    };
  }

  return {
    /* config options for all phases except development here */
  };
};
