module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    description: 'A development portfolio by Graham Hemsley',
    author: 'Graham Hemsley',
    siteUrl: 'https://www.grahamhemsley.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png'
      }
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-embed-video-lite'
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: true,
              withWebp: true,
              tracedSVG: {
                color: '#153259',
                turnPolicy: 'TURNPOLICY_MAJORITY'
              }
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `files`,
              ignoreFileExtensions: [
                `png`,
                `jpg`,
                `jpeg`,
                'bmp',
                'tif',
                'tiff',
                'webp'
              ]
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '»',
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              prompt: {
                user: 'user',
                host: 'localhost',
                global: false
              },
              escapeEntities: {}
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `files`,
              ignoreFileExtensions: [
                `png`,
                `jpg`,
                `jpeg`,
                'bmp',
                'tif',
                'tiff',
                'webp'
              ]
            }
          },
          'gatsby-remark-external-links',
          'gatsby-remark-unwrap-images'
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        language: 'en',
        dangerouslySetAllPagesToNoIndex: false,
        dangerouslySetAllPagesToNoFollow: false,
        title: 'Portfolio',
        description: 'A development portfolio by Graham Hemsley',
        openGraph: {
          type: 'website',
          title: 'Blog',
          locale: 'en_US',
          site_name: 'Portfolio',
          url: 'https://www.grahamhemsley.com/',
          description: 'A development portfolio by Graham Hemsley',
          images: [
            {
              url: 'https://www.grahamhemsley.com/preview.jpg',
              width: 1280,
              height: 720,
              alt: 'Preview of a development portfolio by Graham Hemsley'
            }
          ]
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/posts/'
      },
      __key: 'posts'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './src/projects/'
      },
      __key: 'projects'
    }
  ]
}
