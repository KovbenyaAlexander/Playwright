import { test, expect } from "@playwright/test";

test("Elements in the list should correctly add to the right list", async ({ page }) => {
  await page.goto("http://89.189.152.235:1337/?path=/story/eos-twincolumn--default");
  const frame = page.frameLocator("#storybook-preview-iframe");

  const header4 = frame.locator("li[title='{4} Заголовок']");
  await header4.click();

  const label = header4.locator("label.eos-checkbox-wrapper");
  await expect(label).toHaveClass(/eos-checkbox-wrapper-checked/);

  const arrowRightBtn = frame.locator("span.anticon.anticon-right");
  await arrowRightBtn.click();

  await expect(arrowRightBtn).not.toBeEnabled();

  const transferList = frame.locator("ul.eos-transfer-list-content");
  const header4InTransferList = transferList.locator("li[title='{4} Заголовок']");
  await expect(header4InTransferList).toBeVisible();
});

/*

Тест 3.
Шаги:
1. Перейти на страницу http://89.189.152.235:1337/?path=/story/eos-twincolumn--default
2. Нажать на элемент "{4} Заголовок" ==>  "{4} Заголовок" содержит "eos-checkbox-wrapper-checked"
3. Нажать кнопку "class="anticon anticon-right"

Ожидаемый результат:
1. Элемент "{4} Заголовок" перенесен в "ИТОГОВЫЙ СПИСОК"
2. Кнопка "class="anticon anticon-right" содержит disabled
*/
