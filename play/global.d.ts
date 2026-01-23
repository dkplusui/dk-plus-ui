/* eslint-disable @typescript-eslint/no-explicit-any */
interface ImportMeta {
  glob: (pattern: string, obj: any) => Promise<Record<string, () => Promise<any>>>
}
