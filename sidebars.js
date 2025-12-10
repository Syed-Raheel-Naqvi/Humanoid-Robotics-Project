// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Chapter 1',
      items: ['chapter-1'],
    },
    {
      type: 'category',
      label: 'Chapter 2',
      items: ['chapter-2'],
    },
  ],
};

module.exports = sidebars;