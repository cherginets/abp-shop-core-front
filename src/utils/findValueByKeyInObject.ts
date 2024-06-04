export function findValueByKeyInObject(obj: {[key: string]: any}, key: string): any {
  try {
    if (obj.hasOwnProperty(key)) return obj[key];

    const keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      const value = findValueByKeyInObject(obj[keys[i]]);
      if (value !== undefined) return value;
    }

  } catch (e) {
    console.error(`findValueByKey error on obj`, obj, key, e);
    return undefined;
  }
}