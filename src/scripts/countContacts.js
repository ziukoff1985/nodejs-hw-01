import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return `✅ Загальна кількість контактів - ${contacts.length}`;
  } catch (error) {
    console.error('❌ Сталася помилка при підрахунку контактів:', error);
  }
};

console.log(await countContacts());
