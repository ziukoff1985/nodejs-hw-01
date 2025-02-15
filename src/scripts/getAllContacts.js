import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error(error);
  }
};

console.log('📭 Список контактів');
console.log(await getAllContacts());
