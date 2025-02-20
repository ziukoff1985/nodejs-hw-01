// Імпортуємо функцію 'readContacts' для читання контактів з файлу 'db.json'
import { readContacts } from '../utils/readContacts.js';

// Функція для отримання всіх контактів
export const getAllContacts = async () => {
  try {
    // Читаємо контакти з файлу 'db.json'
    const contacts = await readContacts();
    // Якщо список контактів порожній - виводимо відповідне повідомлення
    if (contacts.length === 0) {
      console.log('❌ Список контактів порожній');
      return []; // Повертаємо порожній масив
    } else {
      // Якщо список контактів не порожній - виводимо загальну кількість і список контактів
      console.log(`✅ Загальна кількість контактів: ${contacts.length}`);
      console.log('✅ Список контактів:');
    }
    // Повертаємо масив контактів
    return contacts;
  } catch (error) {
    // Виводимо повідомлення про помилку при отриманні контактів
    console.error('❌ Сталася помилка при отриманні контактів:', error);
  }
};

// Викликаємо функцію 'getAllContacts' та виводимо результат у консоль
console.log(await getAllContacts());
