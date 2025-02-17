// Імпортуємо функції з бібліотеки @faker-js/faker
// для створення фейкових даних контактів
import { faker } from '@faker-js/faker';

// Функція для створення фейкового контакту
export const createFakeContact = () => ({
  id: faker.string.uuid(), // унікальний ідентифікатор
  name: faker.person.fullName(), // повне ім я користувача
  phone: faker.phone.number(), // телефонний номер
  email: faker.internet.email(), // електронна пошта
  job: faker.person.jobTitle(), // посада
});
