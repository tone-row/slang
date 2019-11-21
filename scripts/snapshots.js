const PercyScript = require('@percy/script');

const options = { widths: [1200] }

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:3000/');
  await page.waitFor('#root');
  await percySnapshot('home', options);
  
  await page.goto('http://localhost:3000/layout');
  await page.waitFor('#root');
  await percySnapshot('components', options);
});
