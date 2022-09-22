/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  referenceSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Introduction'
    },
    {
      type: 'category',
      label: 'Data modeling',
      link: {
        type: 'doc',
        id: 'data-modeling/index',
      },
      items: [
        'data-modeling/entity-basics',
        'data-modeling/relationships',
        'data-modeling/uniqueness',
        'data-modeling/migration',
      ]
    },
    {
      type: 'category',
      label: 'Entity CRUD API',
      link: {
        type: 'doc',
        id: 'entity-crud-api/index',
      },
      items: [
        'entity-crud-api/supported-http-methods',
        'entity-crud-api/optionals-defaults-required',
        'entity-crud-api/filter-order-limit-query',
        'entity-crud-api/relationships',
      ]
    },
    'endpoints',
    'data-access',
    'streaming',
    'debugging',
    'cursors',
    'pol',
    'secrets',
    'versions',
    'login',
    'routing',
    'chisel-cli',
  ],
};

module.exports = sidebars;
