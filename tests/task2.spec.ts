import { test, expect } from "@playwright/test";

test("The page should display the current time after submit", async ({ page }) => {
  await page.goto("http://89.189.152.235:1337/?path=/story/eos-timepicker--in-form");
  const frame = page.frameLocator("#storybook-preview-iframe");

  const showTimePickerBtn = frame.locator(".eos-field-suffix-icon");
  await showTimePickerBtn.click();

  const pickCurrentTimeBtn = frame.locator(".eos-picker-now-btn");
  const date = new Date();
  await pickCurrentTimeBtn.click();

  const timeInput = frame.locator(".eos-picker-input #basic_timepicker");
  const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const currentTime = `${hours}:${minutes}`;
  await expect(timeInput).toHaveValue(currentTime);

  const submitButton = frame.locator("button", { hasText: "SUBMIT" });
  await submitButton.click();

  const messageContainer = frame.locator(".eos-message-notice");
  await expect(messageContainer).toBeVisible();
});

/*

Тест 2.
Шаги:
1. Перейти на страницу http://89.189.152.235:1337/?path=/story/eos-timepicker--in-form
2. Раскрыть список
3. Нажать кнопку "Сейчас"
4. Нажать кнопку "Submit"

Ожидаемый результат:
1. Отобразилось сообщение с текущим временем
2. Поле class="eos-picker-input" содержит текущее время

*/
