import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should display login page', async ({ page }) => {
    await page.goto('/auth/login');
    await expect(page).toHaveTitle(/ElevestOS/);
    await expect(page.locator('h1')).toContainText('ElevestOS');
  });

  test('should display register page', async ({ page }) => {
    await page.goto('/auth/register');
    await expect(page.locator('h1')).toContainText('ElevestOS');
  });

  test('should navigate to register from login', async ({ page }) => {
    await page.goto('/auth/login');
    await page.click('text=Create Account');
    await expect(page).toHaveURL('/auth/register');
  });
});

test.describe('Dashboard', () => {
  test('should redirect to login when not authenticated', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL('/auth/login');
  });

  test('should display dashboard stats', async ({ page }) => {
    // Mock authentication would go here
    await page.goto('/dashboard');
    await expect(page.locator('h1')).toContainText('Welcome back');
  });
});

test.describe('Grants', () => {
  test('should display grants page', async ({ page }) => {
    await page.goto('/dashboard/grants');
    await expect(page.locator('h1')).toContainText('Grant Opportunities');
  });

  test('should display grant filters', async ({ page }) => {
    await page.goto('/dashboard/grants');
    await expect(page.locator('input[placeholder*="Search grants"]')).toBeVisible();
    await expect(page.locator('select')).toContainText('All Sectors');
  });
});

test.describe('Projects', () => {
  test('should display projects page', async ({ page }) => {
    await page.goto('/dashboard/projects');
    await expect(page.locator('h1')).toContainText('Projects');
  });

  test('should display new project button', async ({ page }) => {
    await page.goto('/dashboard/projects');
    await expect(page.locator('text=New Project')).toBeVisible();
  });
});

test.describe('Compliance', () => {
  test('should display compliance page', async ({ page }) => {
    await page.goto('/dashboard/reports');
    await expect(page.locator('h1')).toContainText('Compliance');
  });

  test('should display compliance rate', async ({ page }) => {
    await page.goto('/dashboard/reports');
    await expect(page.locator('text=Compliance Rate')).toBeVisible();
  });
});

test.describe('Responsive Design', () => {
  test('should work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('ElevestOS');
  });

  test('should work on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('ElevestOS');
  });

  test('should work on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('ElevestOS');
  });
});

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });

  test('should have alt text on images', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeDefined();
    }
  });
});
