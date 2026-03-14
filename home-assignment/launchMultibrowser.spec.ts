import { chromium,firefox,test,webkit } from "@playwright/test";

test('Test to launch multi browser',async({page})=>{
   
    const edgeBrowser = await chromium.launch({channel:"msedge",headless:false})
    const context = await edgeBrowser.newContext()
    const page1 =await context.newPage()
    
    await page1.goto('https://www.redbus.in')
    await page1.waitForTimeout(6000)
    
    var title = await page1.title()
    var url = await page1.url()
    
    console.log('Page title of redbus:- ' + title)
    console.log('Page url of redbus:- ' + url)

    const firefoxBrowser = await firefox.launch({headless:false})
    const ffcontext = await firefoxBrowser.newContext()
    const page2 =await context.newPage()
    
    await page2.goto('https://www.flipkart.com')
    await page2.waitForTimeout(6000)
    
    var title = await page2.title()
    var url = await page2.url()
    
    console.log('Page title of flipcart:- ' + title)
    console.log('Page url of flipcart:- ' + url)

    edgeBrowser.close()
    firefoxBrowser.close()

})