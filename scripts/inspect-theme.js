const pkg = require('@docusaurus/theme-classic');
console.log('keys:', Object.keys(pkg));
console.log('default type:', typeof pkg.default);
console.log('default:', pkg.default && pkg.default.name ? pkg.default.name : String(pkg.default));
if (pkg.prism) {
  console.log('prism keys:', Object.keys(pkg.prism));
}
try{
  const pr = require('prism-react-renderer/themes/github');
  console.log('prism-react-renderer github loaded, type:', typeof pr);
} catch (e) {
  console.error('prism-react-renderer github load error:', e.message);
}
