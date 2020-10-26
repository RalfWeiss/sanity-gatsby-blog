export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f96abf4b259c8b4890581ba',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-r94ocrak',
                  apiId: '8cd9b1f9-340e-4d1a-ac6d-dd88f71f1a68'
                },
                {
                  buildHookId: '5f96abf585b289292ee525e3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1o5megys',
                  apiId: '10de5970-416e-4b8f-8152-90f92df487d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RalfWeiss/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1o5megys.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
