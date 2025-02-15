import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    // for (let i = 0; i < number; i++) {
    //   contacts.push(createFakeContact());
    // }
    const newContacts = Array.from({ length: number }, createFakeContact);
    contacts.push(...newContacts);

    await writeContacts(contacts);
    console.log(`✅ Контакти успішно створені в кількості: ${number} шт.`);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
