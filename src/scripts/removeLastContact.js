import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('📭 Список контактів порожній. Видалення неможливе.');
      return;
    }
    contacts.pop();
    await writeContacts(contacts);
    console.log('✅ Контакт успішно видалений');
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
