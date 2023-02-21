const puppeteer = require('puppeteer');

//Auto executed function (()=>{})()
(async () => {
  console.log('Launch browser');
  
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  await page.goto('https://es.wikipedia.org/wiki/Node.js')
  const header1 = await page.evaluate(()=>{
    const h1 = document.querySelector('h1')
    console.log(h1.innerHTML)
    return h1.innerHTML
  })

  console.log(header1)
  
  console.log('Closing browser...');
  browser.close();
  console.log('Closed browser');
})();