export const MOMENT_FOR_FILENAME = 'YYYYMMDDHHmmss'

export const MOMENT_DATE_MYSQL = 'YYYY-MM-DD HH:mm:ss'

export const formatError = (error: any):string => {
  if(typeof error === 'string') return error;
  else if (!error) {}
  else if (typeof error.response?.data?.message === 'string' && error.response?.data?.message) return error.response?.data?.message;
  else if (Array.isArray(error.response?.data?.error)) return error.response?.data?.error.map(formatError).join("\n ");
  else if (Array.isArray(error.response?.data?.result) && (
    !Array.isArray(error.response?.data?.result[0]) && typeof error.response?.data?.result[0] === 'object'
  )) return error.response?.data?.result.map((r: any) => formatError(r.message)).join("\n ");
  else if (error.message) return error.message;
  else if (error.response?.status && error.response?.statusText) return `[${error.response?.status}] ${error.response?.statusText}`;
  else if (error.response?.status) return `Error ${error.response?.status}`;

  console.info('Unknown error', error)

  return "Error";
}