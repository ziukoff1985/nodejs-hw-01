// Імпортуємо функцію 'readContacts' для читання контактів з файлу 'db.json'
import { readContacts } from '../utils/readContacts.js';

// Функція для підрахунку загальної кількості контактів
export const countContacts = async () => {
  try {
    // Читаємо контакти з файлу 'db.json'
    const contacts = await readContacts();
    // Повертаємо повідомлення про загальну кількість контактів
    return `✅ Загальна кількість контактів - ${contacts.length}`;
  } catch (error) {
    // Виводимо повідомлення про помилку при підрахунку контактів
    console.error('❌ Сталася помилка при підрахунку контактів:', error);
  }
};

// Викликаємо функцію 'countContacts' та виводимо результат у консоль
console.log(await countContacts());
