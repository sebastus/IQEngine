import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('#Siggen').click();

  const locator = page.getByText('Run');
  await expect(locator).toBeVisible({ timeout: 100000 });

  await locator.click();
  await expect(page.getByAltText('frequency domain tab image')).toHaveAttribute(
    'src',
    '/^data:image/png;base64[.,]+/',
    {
      timeout: 60000,
    }
  );
});
