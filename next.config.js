module.exports = {
	 async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: '/',
          destination: '/api/hello',
          has: [
            {
              type: 'header',
              key: 'accept',
              value: 'application\\/vnd\\.api\\+json'
            },
          ],
        },
        {
          source: '/:path*',
          destination: '/api/hello',
          has: [
            {
              type: 'header',
              key: 'accept',
              value: 'application\\/vnd\\.api\\+json'
            },
          ],
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: '/',
          destination: '/'
        },
        {
          source: '/:path*',
          destination: '/',
        },
      ],
    }
  },
}