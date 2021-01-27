const path = require('path'); 

module.exports = {
  siteMetadata: {
    title: `CodicePlastico`,
    description: `CodicePlastico è un grande piccolo team di software engineer`,
    author: `@gatsbyjs`,
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
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    {
      resolve: 'gatsby-plugin-iubenda-cookie-footer',
      options: {
        iubendaOptions: {
          "whitelabel": false,
          "lang": "it", 
          "siteId": 2140395, 
          "cookiePolicyId": 39068350, 
          "banner": { 
              "brandBackgroundColor": "none", 
              "brandTextColor": "black", 
              "rejectButtonColor": "#ce0000", 
              "rejectButtonCaptionColor": "white", 
              "position": "float-top-center", 
              "textColor": "black", 
              "backgroundColor": "white", 
              "acceptButtonDisplay": true, 
              "acceptButtonColor": "#ce0000", 
              "acceptButtonCaptionColor": "white", 
              "customizeButtonDisplay": true,
              "customizeButtonColor": "#DADADA",
              "customizeButtonCaptionColor": "#4D4D4D" 
          },
          "callback": {
              onPreferenceExpressedOrNotNeeded: function(preference) {
                  dataLayer.push({
                      iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut()
                  });
                  if (!preference) {
                      dataLayer.push({
                          event: "iubenda_preference_not_needed"
                      });
                  } else {
                      if (preference.consent === true) {
                          dataLayer.push({
                              event: "iubenda_consent_given"
                          });
                      } else if (preference.consent === false) {
                          dataLayer.push({
                              event: "iubenda_consent_rejected"
                          });
                      } else if (preference.purposes) {
                          for (var purposeId in preference.purposes) {
                              if (preference.purposes[purposeId]) {
                                  dataLayer.push({
                                      event: "iubenda_consent_given_purpose_" + purposeId
                                  });
                              }
                          }
                      }
                  }
              }
          }
        },
        googleTagManagerOptions: true
      }
    }
  ],
}
