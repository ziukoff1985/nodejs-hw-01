// Імпортуємо функції для роботи з контактами
import { readContacts } from '../utils/readContacts.js'; // Читання контактів
import { createFakeContact } from '../utils/createFakeContact.js'; // Створення фейкових контактів
import { writeContacts } from '../utils/writeContacts.js'; // Запис контактів

// Асинхронна функція для створення нових контактів
// 'number' --> кількість контактів які потрібно згенерувати
const generateContacts = async (number) => {
  try {
    // Читаємо контакти з файлу 'db.json'
    const contacts = await readContacts();

    // Створюємо масив з новими контактами
    // 'number' - довжина масиву з новими контактами
    // 'createFakeContact' - функція для створення фейкових контактів
    const newContacts = Array.from({ length: number }, createFakeContact);

    // Додаємо нові контакти до вже існуючих
    contacts.push(...newContacts);

    // Записуємо оновлений масив контактів --> у файл 'db.json'
    await writeContacts(contacts);

    // Виводимо повідомлення про успішну генерацію контактів
    console.log(`✅ Контакти успішно створені в кількості: ${number} шт.`);
  } catch (error) {
    // Виводимо повідомлення про помилку при генерації контактів
    console.error('❌ Сталася помилка при створенні контактів:', error);
  }
};

// Викликаємо функцію 'generateContacts' для створення 5 нових контактів
generateContacts(5);
