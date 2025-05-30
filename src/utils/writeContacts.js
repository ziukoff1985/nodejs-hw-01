// Імпортуємо константу 'PATH_DB' (шлях до файлу 'db.json' з даними контактів)
import { PATH_DB } from '../constants/contacts.js';
// Імпортуємо модуль 'fs' для роботи з файловою системою
import * as fs from 'node:fs/promises';

// Функція для запису оновлених контактів у файл 'db.json'
// 'updatedContacts' - масив контактів
export const writeContacts = async (updatedContacts) => {
  try {
    // Перетворюємо масив контактів у рядок формату JSON
    const jsonData = JSON.stringify(updatedContacts, null, 2);
    // Записуємо рядок 'jsonData' у файл
    // "null, 2" -> для красивого відображення даних у файлі
    // encoding -> кодування даних (utf-8)
    await fs.writeFile(PATH_DB, jsonData, { encoding: 'utf-8' });
  } catch (err) {
    // Виводимо повідомлення про помилку при записі контактів
    console.error('❌ Сталася помилка при записі контактів:', err);
  }
};
