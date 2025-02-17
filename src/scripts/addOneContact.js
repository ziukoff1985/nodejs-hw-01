import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    const newContact = createFakeContact();

    contacts.push(newContact);

    await writeContacts(contacts);

    console.log('✅ Новий контакт успішно створений');
    console.log(
      `✅ Деталі нового контакту: ${JSON.stringify(newContact, null, 2)}`,
    );
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
