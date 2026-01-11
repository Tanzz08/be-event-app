import { customAlphabet } from "nanoid";

export const getId = (): string => {
  const nanoid = customAlphabet("ABCEFGHIJKLMNOPQRSTUVWXYZ0123456789", );
  return nanoid(5);
};
