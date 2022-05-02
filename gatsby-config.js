const path = require('path'); 

module.exports = {
  siteMetadata: {
    title: `CodicePlastico - Software House`,
    siteUrl: `https://www.codiceplastico.com`,
    description: `CodicePlastico - Software House. Creiamo sinergie tra Aziende e Tecnologia.`,
    author: `CodicePlastico`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `venues`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   /* {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },*/
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KZ49XNH",

        includeInDevelopment: false,

        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: 'gatsby-plugin-iubenda-cookie-footer',
      options: {
        iubendaOptions: { 
          "invalidateConsentWithoutLog": true,
          "whitelabel": false,
          "lang": "it",
          "siteId": 2140395,
          "enableTcf": true,
          "googleAdditionalConsentMode": true,
          "perPurposeConsent": true,
          "countryDetection": true,
          "reloadOnConsent": true,
          "consentOnContinuedBrowsing": false,
          "cookiePolicyId": 39068350,
          "banner": { 
            "brandBackgroundColor": "none",
            "brandTextColor": "black",
            "acceptButtonDisplay": true,
            "customizeButtonDisplay": true,
            "acceptButtonColor": "#ce0000",
            "acceptButtonCaptionColor": "white",
            "customizeButtonColor": "#DADADA",
            "customizeButtonCaptionColor": "#4D4D4D",
            "rejectButtonColor": "#ce0000",
            "rejectButtonCaptionColor": "white",
            "position": "float-top-center",
            "textColor": "black",
            "backgroundColor": "white",
            "rejectButtonDisplay": true,
            "explicitWithdrawal": true,
            "listPurposes": true,
            "closeButtonRejects": true 
          } 
        },
        googleTagManagerOptions: true
      }
    },
    `gatsby-plugin-sitemap`
  ],
}
