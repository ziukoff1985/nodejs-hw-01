import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('❌ Список контактів порожній');
      return [];
    } else {
      console.log('✅ Список контактів:');
    }

    return contacts;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());
