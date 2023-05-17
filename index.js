//-------------------------------------//
//-------------------------------------//
//----------ECAP---BOT-----------------//
//---------------------------oriole----//
//-------------------------------------//





// import puppeteerExtra from "puppeteer-extra";
// import path from "path";
// import userPrefs from "puppeteer-extra-plugin-user-preferences";





const puppeteer = require("puppeteer");

(async () => {

    const browser = await puppeteer.launch({headless: false});
    
    // puppeteerExtra.use(
    //     userPrefs({
    //         userPrefs: {
    //             download: {
    //                 prompt_for_download: false,
    //                 open_pdf_in_system_reader: true,
    //             },
    //     plugins: {
    //         always_open_pdf_externally: true,
    //     },
    //         },
    //     })
    // );
    
    
    
    
    
    
    const page = await browser.newPage()
    await page.goto("https://www.ncecap.net/CAPCProd/main.aspx", {waitUntil: 'networkidle2'});
    const mainFrame = await page.frames().find(f => f.name() === 'main');
    // Username and Password
        console.log('entering username and password')

 await mainFrame.type('#txtUser', 'SembraEcap')
 await mainFrame.type('#txtPwd', 'cOAJ!8$THvfq')
 await mainFrame.click('#btnLogon')
     
        console.log('login complete');

         await Promise.all([
            page.waitForNavigation(), 
            
          ]);

const menuFrame = await page.frames().find(f => f.name() === 'menu');
if (!menuFrame) {
    throw Error('Could not find frame with name: menu');
}
const downloadLinkElement = await menuFrame.$('#mainmenu > a:nth-child(2)'); 
await downloadLinkElement.click();

        console.log('checking for authorizations...');

       

        const homerightFrame = await page.frames().find(f => f.name() === 'homeright');
        if (!homerightFrame) {
            throw Error('Could not find frame with name: homeright');
        }
        const firstpdfLink = await homerightFrame.$('#tbl1 > tr:nth-child(2) > td:nth-child(9)'); 
        await firstpdfLink.click();
        
        console.log('downloading authorizations...')

})(); 