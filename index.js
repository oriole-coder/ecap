//-------------------------------------//
//-------------------------------------//
//----------ECAP---BOT-----------------//
//---------------------------oriole----//
//-------------------------------------//




const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.goto("https://www.ncecap.net/CAPCProd/main.aspx");

    await new Promise(r => setTimeout(r, 2000));
    
    

        await page.type('#txtUser', 'SembraEcap')
        
        await page.type('#txtPwd', 'cOAJ!8$THvfq')
       
        await page.click('#btnLogon')
     








})(); 