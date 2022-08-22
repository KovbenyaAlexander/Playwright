import { test, expect } from "@playwright/test";

test("Tab number 7 should contain the text 'Текст 7'", async ({ page }) => {
  await page.goto("http://89.189.152.235:1337/?path=/story/eos-tabs--default");
  const frame = page.frameLocator("#storybook-preview-iframe");

  const tab = frame.locator(
    "//div[contains(@class, 'eos-tabs-nav-container')]//span[contains(text(), 'Вкладка 7')]"
  );
  await tab.click();

  const textContainer = frame.locator("//div[contains(@class, 'eos-tabs-tabpane-active')]");
  await expect(textContainer).toHaveText("Текст 7");
});

/*

Тест 1.
Шаги:
1. Перейти на страницу http://89.189.152.235:1337/?path=/story/eos-tabs--default
2. Перейти на "Вкладка 7"

Ожидаемый результат:
1. Проверить наличие "Текст 7"

*/
