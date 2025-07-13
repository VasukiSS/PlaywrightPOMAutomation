import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/pagelogin';

test ("Logintothepage", async({page})=>{

  const login = new loginPage(page)

   await login.gotologinpage()
   await login.actiononloginpage("demo1987","fly2moon*")

})