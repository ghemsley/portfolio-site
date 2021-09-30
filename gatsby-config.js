module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    description: 'A development portfolio by Graham Hemsley',
    author: 'Graham Hemsley',
    siteUrl: 'https://grahamhemsley.com'
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          // 'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1600,
              showCaptions: true
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
              classPrefix: 'code-',
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
          'gatsby-remark-external-links',
          'gatsby-remark-unwrap-images'
        ]
      }
    },
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
          title: 'Portfolio',
          locale: 'en_US',
          site_name: 'Portfolio',
          url: 'https://grahamhemsley.com',
          description: 'A development portfolio by Graham Hemsley',
          images: [
            {
              url: 'https://grahamhemsley.com/preview.jpg',
              width: 1280,
              height: 800,
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
