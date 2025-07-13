import { test, expect } from '@playwright/test';
import {transcripts} from '../pages/transpagenavigation'

test('test', async ({ page }) => {

  const newhomepage = new transcripts (page)
  await newhomepage.gotohomepage()
  await newhomepage.homenavigations()
  
});
