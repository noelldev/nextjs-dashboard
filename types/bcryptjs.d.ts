declare module 'bcryptjs' {
  export function genSaltSync(rounds?: number): string;
  export function genSalt(rounds?: number): Promise<string>;
  export function hashSync(data: string, saltOrRounds: string | number): string;
  export function hash(data: string, saltOrRounds: string | number): Promise<string>;
  export function compareSync(data: string, encrypted: string): boolean;
  export function compare(data: string, encrypted: string): Promise<boolean>;
  export const version: string;
  // Default export shape
  const bcryptjs: {
    genSaltSync: typeof genSaltSync;
    genSalt: typeof genSalt;
    hashSync: typeof hashSync;
    hash: typeof hash;
    compareSync: typeof compareSync;
    compare: typeof compare;
    version: typeof version;
  };
  export default bcryptjs;
}
