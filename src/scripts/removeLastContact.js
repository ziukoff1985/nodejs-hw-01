// Імпортуємо функцію 'readContacts' для читання контактів з файлу 'db.json'
import { readContacts } from '../utils/readContacts.js';
// Імпортуємо функцію 'writeContacts' для запису контактів у файл 'db.json'
import { writeContacts } from '../utils/writeContacts.js';

// Функція для видалення останнього контакту
export const removeLastContact = async () => {
  try {
    // Читаємо контакти з файлу 'db.json'
    const contacts = await readContacts();

    // Якщо список контактів порожній - виводимо відповідне повідомлення
    if (contacts.length === 0) {
      console.log('❌ Список контактів порожній. Видалення неможливе.');
      return;
    }
    // Видаляємо останній контакт зі списку
    contacts.pop();
    // Записуємо оновлений список контактів у файл 'db.json'
    await writeContacts(contacts);
    // Виводимо повідомлення про успішне видалення контакту
    console.log('✅ Контакт успішно видалений');
  } catch (error) {
    // Виводимо повідомлення про помилку при видаленні контакту
    console.error('❌ Сталася помилка при видаленні контакту:', error);
  }
};

// Викликаємо функцію 'removeLastContact' для видалення останнього контакту
removeLastContact();
