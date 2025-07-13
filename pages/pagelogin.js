exports.loginPage= class loginPage {

    constructor (page) {

        this.page = page
        this.loginlink= page.getByRole('link', { name: 'Log in' })
        this.loginpagetext= page.locator('#loginusername')
        this.passwordpagetext =page.locator('#loginusername')
        this.loginbutton= page.getByRole('button', { name: 'Log in' })

    }

     async gotologinpage () 
     {
     await this.page.goto('https://demoblaze.com/');

     }
     
     async actiononloginpage (username,password) 
     {
         await this.loginlink.click()
         await this.loginpagetext.fill("username")
         await this.passwordpagetext.fill("password")
         await this.loginbutton.click()

     }

    }
