// Імпортуємо модуль path для роботи з шляхами до файлів
import path from 'node:path';

// Отримуємо абсолютний шлях до файлу з даними контактів
// process.cwd() - глобальна змінна, яка повертає поточну робочу директорію
export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');
