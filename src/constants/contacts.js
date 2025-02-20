// Імпортуємо модуль path для роботи з шляхами до файлів
import path from 'node:path';

// Отримуємо абсолютний шлях до файлу з даними контактів
// process.cwd() - метод Node.js, який повертає поточну робочу директорію, з якої був запущений процес
export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');

// Еквівалентний варіант використання методу 'resolve' замість 'join' + process.cwd()
// export const PATH_DB = path.resolve('src', 'db', 'db.json');
