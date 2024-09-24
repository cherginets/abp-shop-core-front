const fs = require("fs");
/**
 * Проверяет существование файла по указанному пути.
 *
 * @param {string} path - Путь к файлу, который нужно проверить.
 * @returns {Promise<boolean>} - Обещание, которое разрешается в true, если файл существует, и в false в противном случае.
 */
export function fileExists(path: string) {
  return new Promise((resolve) => {
    fs.access(path, fs.constants.F_OK, (err: any) => {
      resolve(!err); // Если нет ошибки, файл существует
    });
  });
}
