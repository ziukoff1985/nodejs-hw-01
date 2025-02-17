import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = Array.from({ length: number }, createFakeContact);
    contacts.push(...newContacts);

    await writeContacts(contacts);

    console.log(`✅ Контакти успішно створені в кількості: ${number} шт.`);
  } catch (error) {
    console.error('❌ Сталася помилка при створенні контактів:', error);
  }
};

generateContacts(5);
