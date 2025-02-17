// Імпортуємо функцію 'writeContacts' для запису контактів у файл 'db.json'
import { writeContacts } from '../utils/writeContacts.js';

// Функція для видалення всіх контактів
export const removeAllContacts = async () => {
  try {
    // Записуємо порожній масив у файл 'db.json', тим самим видаляючи всі контакти
    await writeContacts([]);
    // Виводимо повідомлення про успішне видалення контактів
    console.log('✅ Контакти успішно видалені');
  } catch (error) {
    // Виводимо повідомлення про помилку при видаленні контактів
    console.error('❌ Сталася помилка при видаленні контактів:', error);
  }
};

// Викликаємо функцію 'removeAllContacts' для видалення всіх контактів
removeAllContacts();
