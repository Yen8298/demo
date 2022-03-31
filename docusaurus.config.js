module.exports = {
  "title": "Katalon Docs",
  "tagline": "Dinosaurs are cool",
  "url": "https://will-nguyenpham.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/logo.svg",
  "organizationName": "will-nguyenpham",
  "projectName": "docusaurus-demo",
  "trailingSlash": false,
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": require.resolve('./sidebars.js'),
          "editUrl": "https://github.com/will-nguyenpham/docusaurus-demo/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/will-nguyenpham/docusaurus-demo/"
        },
        "theme": {
          "customCss": require.resolve('./src/css/custom.scss')
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Katalon Docs",
      "hideOnScroll": true,
      "logo": {
        "alt": "Katalon Docs",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "search",
          "position": "left"
        },
        {
          "href": "/docs",
          "position": "right",
          "label": "Docs",
          "className": "bar-items-text"
        },
        {
          "to": "https://forum.katalon.com/",
          "label": "Community",
          "position": "right",
          "className": "bar-items-text"
        },
        {
          "to": "https://academy.katalon.com/",
          "label": "Academy",
          "position": "right",
          "className": "bar-items-text"
        },
        {
          "to": "https://www.katalon.com/download/",
          "label": "Download now",
          "position": "right",
          "className": "bar-items-download"
        }
      ]
    },
    "algolia": {
      "appId": "UQL9BM5A25",
      "indexName": "docs",
      "apiKey": "143af23005cba6484bb0f68b4509db5f",
      "contextualSearch": false,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "footer": {
      "style": "light",
      "links": [
        {
          "title": "PRODUCTS",
          "items": [
            {
              "label": "Katalon Studio",
              "to": "https://katalon.com/katalon-studio"
            },
            {
              "label": "Katalon Recorder",
              "to": "https://katalon.com/katalon-recorder-ide"
            },
            {
              "label": "Katalon TestOps",
              "to": "https://katalon.com/testops/"
            },
            {
              "label": "Katalon TestCloud",
              "to": "https://katalon.com/testcloud"
            },
            {
              "label": "Katalon Store",
              "to": "https://store.katalon.com/"
            },
            {
              "label": "Pricing",
              "to": "https://katalon.com/pricing/"
            }
          ]
        },
        {
          "title": "SOLUTIONS",
          "items": [
            {
              "label": "Web Testing",
              "to": "https://katalon.com/web-testing"
            },
            {
              "label": "API Testing",
              "to": "https://katalon.com/api-testing"
            },
            {
              "label": "Mobile Testing",
              "to": "https://katalon.com/mobile-testing"
            },
            {
              "label": "Desktop Testing",
              "to": "https://katalon.com/desktop-testing/"
            },
            {
              "label": "Integrations",
              "to": "https://katalon.com/integrations"
            },
            {
              "label": "Methodologies",
              "to": "https://katalon.com/methodologies"
            }
          ]
        },
        {
          "title": "SUPPORT",
          "items": [
            {
              "label": "Help Center",
              "to": "https://support.katalon.com/hc/en-us"
            },
            {
              "label": "Docs",
              "to": "/docs"
            },
            {
              "label": "Community",
              "to": "https://forum.katalon.com/"
            },
            {
              "label": "Repository",
              "to": "https://github.com/katalon-studio/katalon-studio"
            },
            {
              "label": "Webinars",
              "to": "https://katalon.com/webinars"
            },
            {
              "label": "Training",
              "to": "https://academy.katalon.com/"
            }
          ]
        },
        {
          "title": "COMPANY",
          "items": [
            {
              "label": "About Katalon",
              "to": "https://katalon.com/about-us/"
            },
            {
              "label": "Blog",
              "to": "https://katalon.com/resources-center/blog"
            },
            {
              "label": "Partners",
              "to": "https://katalon.com/partners/"
            },
            {
              "label": "Customer Stories",
              "to": "https://katalon.com/case-studies/"
            },
            {
              "label": "Careers",
              "to": "https://apply.workable.com/katalon/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Katalon LLC. All rights reserved."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      }
    },
    "zoom": {
      "selector": ".markdown :not(em) > img",
      "config": {
        "background": {
          "light": "rgb(255, 255, 255)",
          "dark": "rgb(50, 50, 50)"
        }
      }
    },
    "autoCollapseSidebarCategories": true,
    "hideableSidebar": true
  },
  "plugins": [
    "docusaurus-plugin-sass",
    "docusaurus-plugin-image-zoom",
    [
      "@docusaurus/plugin-client-redirects",
      {
          redirects: [
          // Redirect from multiple old paths to the new path
          {
            to: '/docs/newDoc2',
            from: ['/docs/katalon-studio-enterprise/release-notes/version-8.x', '/katalon-studio/new/version-8x.html'],
          },
        ],
        
        "fromExtensions": [
          "html",
          "htm"
        ]
      }
    ]
  ]
};