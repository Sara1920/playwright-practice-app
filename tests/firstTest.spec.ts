import {test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator syntax rules', async({page}) => {
    // By Tag Name
    page.locator('input')

    //By ID
    await page.locator('#inputEmail1').click()

    //By Class Valu
    page.locator('.shape-rectangle')

    //By Attributes
    page.locator('[placeholder="Email"]')

    //By Class(Full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine deffirent selector
    page.locator('input[placeholder="Email"]')

    //By Xpath (Not Recommanded)
    page.locator('//*[@id="inputEmail1"')

    //By Partial text
    page.locator(':text("Using")')

    //By exact text match
    page.locator(':text-is("Using the Grid")')

})

test('User Facing Locators',async ({page}) => {
    await page.getByRole('textbox',{name:"Email"}).first().click()
    await page.getByRole('button', {name:"Sign in"}).first().click()
    await page.getByLabel('Email').first().click()
    await page.getByLabel('password').first().click()
    await page.getByPlaceholder('Jane Doe').click()
    await page.getByText('Basic form').click()
    await page.getByText('Block form').click()
    await page.getByText('Form without labels').click()
    // make your own identifer element by testId
    await page.getByTestId("SignIn").click()

   //await page.getByTitle('IoT Dashboard').click()
  
})

test('Navigate to ChildElements', async({page})=> {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card nb-radio :text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button', {name:"Sign in"}).first().click()
    await page.locator('nb-card').nth(4).getByRole('button').click()



})