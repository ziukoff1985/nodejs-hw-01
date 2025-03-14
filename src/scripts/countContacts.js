// Імпортуємо функцію 'readContacts' для читання контактів з файлу 'db.json'
import { readContacts } from '../utils/readContacts.js';

// Імпортуємо модуль 'path' для роботи з шляхами
import path from 'node:path';

// Асинхронна функція для підрахунку загальної кількості контактів
export const countContacts = async () => {
  try {
    // Читаємо контакти з файлу 'db.json'
    const contacts = await readContacts();

    // Методи встановлення шляху до файлу 'db.json' - еквівалентні
    // D:\GoIT FSON-110\Node_js\nodejs-hw-01\src\db\db.json
    console.log(path.resolve('src', 'db', 'db.json'));
    console.log(path.join(process.cwd(), 'src', 'db', 'db.json'));

    // Повертаємо повідомлення про загальну кількість контактів
    return `✅ Загальна кількість контактів - ${contacts.length}`;
  } catch (error) {
    // Виводимо повідомлення про помилку при підрахунку контактів
    console.error('❌ Сталася помилка при підрахунку контактів:', error);
  }
};

// Викликаємо функцію 'countContacts' та виводимо результат у консоль
console.log(await countContacts());
