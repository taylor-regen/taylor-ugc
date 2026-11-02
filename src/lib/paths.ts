/** Must match `basePath` in next.config.ts */
export const BASE_PATH = "/UGC";

/** Prefix a public asset path for the /UGC deploy. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith(BASE_PATH + "/") || path === BASE_PATH) {
    return path;
  }
  return `${BASE_PATH}${path}`;
}
