// Імпортуємо константу 'PATH_DB' (шлях до файлу 'db.json' з даними контактів)
import { PATH_DB } from '../constants/contacts.js';
// Імпортуємо модуль 'fs' для роботи з файловою системою
import * as fs from 'node:fs/promises';

// Функція для читання контактів з файлу 'db.json'
export const readContacts = async () => {
  try {
    // Читаємо дані з файлу db.json
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    // Якщо дані існують - парсимо їх з формату 'json'
    // Якщо 'db.json' порожній - повертаємо порожній масив
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('❌ Сталася помилка при читанні контактів:', error);
  }
};
