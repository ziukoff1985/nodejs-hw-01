// Імпортуємо функції для роботи з контактами
import { readContacts } from '../utils/readContacts.js'; // Читання контактів
import { writeContacts } from '../utils/writeContacts.js'; // Запис контактів

// Асинхронна функція для видалення всіх контактів
export const removeAllContacts = async () => {
  try {
    // Читаємо контакти з файлу 'db.json'
    const contacts = await readContacts();
    // Якщо список контактів порожній - виводимо відповідне повідомлення
    if (contacts.length === 0) {
      console.log('❌ Список контактів порожній. Видалення неможливе.');
      return; // припиняємо виконання функції
    }
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
