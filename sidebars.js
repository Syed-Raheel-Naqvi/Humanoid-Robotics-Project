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
    {
      type: 'category',
      label: 'Physical AI & Humanoid Robotics',
      items: [
        'physical-ai/intro',
        'physical-ai/module1',
        'physical-ai/module2',
        'physical-ai/module3',
        'physical-ai/module4'
      ],
    },
  ],
};

module.exports = sidebars;