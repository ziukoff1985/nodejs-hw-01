// Імпортуємо константу 'PATH_DB' (шлях до файлу 'db.json' з даними контактів)
import { PATH_DB } from '../constants/contacts.js';
// Імпортуємо модуль 'fs' для роботи з файловою системою
import * as fs from 'node:fs/promises';

// Асинхронна функція для читання контактів з файлу 'db.json'
// Функція повертає масив контактів або порожній масив
export const readContacts = async () => {
  try {
    // Читаємо дані з файлу db.json
    // encoding -> кодування даних (utf-8)
    // readFile -> метод для читання файлів
    // fs -> модуль для роботи з файловою системою
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    // Якщо дані існують --> парсимо їх з формату 'json'
    // Якщо 'db.json' порожній --> повертаємо порожній масив
    return data ? JSON.parse(data) : [];
  } catch (error) {
    // Виводимо повідомлення про помилку при читанні контактів
    console.error('❌ Сталася помилка при читанні контактів:', error);
  }
};
