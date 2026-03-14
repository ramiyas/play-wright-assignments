import { chromium,firefox,test,webkit } from "@playwright/test";

test('Test to check CRM application',async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main");

await page.waitForTimeout(5000)

await page.locator('[id="username"]').fill("Democsr");

await page.locator('[id="password"]').fill("crmsfa");


await page.locator('[class="decorativeSubmit"]').click();

await page.waitForTimeout(5000)


await page.locator('[id="button"]').click();

await page.locator('[href="/crmsfa/control/leadsMain"]').click();

await page.locator('[href="/crmsfa/control/createLeadForm"]').click();

await page.waitForTimeout(5000)


await page.locator('[id="createLeadForm_companyName"]').fill("Wipro");


await page.locator('[id="createLeadForm_firstName"]').fill("Radha");

await page.locator('[id="createLeadForm_lastName"]').fill("Krishnan");

await page.locator('[id="createLeadForm_personalTitle"]').fill("Mr");

await page.locator('[id="createLeadForm_generalProfTitle"]').fill('Test Engineer');

await page.locator('[id="createLeadForm_annualRevenue"]').fill('100000000');

await page.locator('[id="createLeadForm_departmentName"]').fill("Computers");

await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill('9887654342');

await page.locator('[class="smallSubmit"]').click();

await page.waitForTimeout(5000)


var page_title = await page.title();

console.log("Final page title is ",page_title)

}

)
