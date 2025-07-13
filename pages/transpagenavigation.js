exports.transcripts = class transcripts

{

    constructor (page)
    
    {
        this.page = page
        this.homepage= page.getByRole('link', { name: 'brand logo' })
        this.navigationpage= page.getByRole('button', { name: 'Company' })
        this.careertab= page.getByRole('link', { name: 'Careers icon Careers' })
        this.textvalue = page.getByText('We live by the same')
    }

    async gotohomepage() 
    {
     
         await this.page.goto('https://gotranscript.com/')

    }

    async homenavigations () 
    {
     
         await this.homepage.click()
         await this.navigationpage.click()
         await this.careertab.click()
         await this.textvalue.click()

    }
}