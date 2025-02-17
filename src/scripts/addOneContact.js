// Імпортуємо функцію 'writeContacts' з модуля 'utils/writeContacts.js'
// для запису оновлених контактів у файл 'db.json'
import { writeContacts } from '../utils/writeContacts.js';
// Імпортуємо функцію 'createFakeContact' з модуля 'utils/createFakeContact.js'
// для створення фейкового контакту
import { createFakeContact } from '../utils/createFakeContact.js';
// Імпортуємо функцію 'readContacts' з модуля 'utils/readContacts.js'
// для читання контактів з файлу 'db.json'
import { readContacts } from '../utils/readContacts.js';

// Функція для додавання одного нового контакту
export const addOneContact = async () => {
  try {
    // Читаємо контакти з файлу 'db.json'
    const contacts = await readContacts();

    // Створюємо фейковий контакт
    const newContact = createFakeContact();

    // Додаємо новий контакт до масиву контактів
    contacts.push(newContact);

    // Записуємо оновлений масив контактів у файл 'db.json'
    await writeContacts(contacts);

    // Виводимо повідомлення про успішне додавання нового контакту
    console.log('✅ Новий контакт успішно створений');

    // Виводимо деталі нового контакту
    console.log(
      `✅ Деталі нового контакту: ${JSON.stringify(newContact, null, 2)}`,
    );
  } catch (error) {
    // Виводимо повідомлення про помилку при додаванні нового контакту
    console.error('❌ Сталася помилка при додаванні нового контакту:', error);
  }
};

// Викликаємо функцію 'addOneContact' для додавання одного нового контакту
addOneContact();
