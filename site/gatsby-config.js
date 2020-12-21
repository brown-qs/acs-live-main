require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "10r6k1h7",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.REACT_APP_API_KEY,
          authDomain: process.env.REACT_APP_AUTH_DOMAIN,
          projectId: process.env.REACT_APP_PROJECT_ID,
          storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
          messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
          appId: process.env.REACT_APP_APP_ID,
          measurementId: process.env.REACT_APP_MEASUREMENT_ID,
        }
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries: require("@elegantstack/algolia-blog/src/queries"),
        chunkSize: 10000, // default: 1000
      },
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: "@elegantstack/gatsby-theme-flexiblog-agency",
      options: {
        services: {
          algolia: true,
        },
        sources: {
          sanity: true,
          local: false,
        },
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'ACS Update',
    name: 'ACS',
    description: 'En güncel kardiyoloji',
    address: 'Istanbul',
    email: 'acs@acslive.org',
    phone: '+90 (534) 402-5050',

    //Site Social Media Links
    social: [
      {
        name: 'Youtube',
        url: 'https://youtube.com/acsliveorg'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/acsliveorg'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/acsliveorg'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'ACS',
        slug: '/'
      },
      {
        name: 'Board',
        slug: '/authors'
      },
      {
        name: 'Live',
        slug: '/live'
      },
      {
        name: 'İletişim',
        slug: '/contact'
      },
      {
        name: 'Giriş',
        slug: '/login'
      },
      {
        name: 'Profil',
        slug: '/profile'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Kısayollar',
        items: [
          {
            name: 'Editör olun',
            slug: '/contact'
          },
          {
            name: 'Hakkımızda',
            slug: '/about'
          },
          {
            name: 'İletişim',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Diğer Konular',
        items: [
          {
            name: 'Gizlilik',
            slug: '/privacy'
          },
          {
            name: 'Çerez Politikası',
            slug: '/privacy'
          },
          {
            name: 'KVKK',
            slug: '/privacy'
          }
        ]
      }
    ]
  }
}
