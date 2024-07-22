export function apply_patch<D>(doc: D, patch: string | Array<any>): D;

export class InvalidPatch extends Error {
  new (message: string): InvalidPatch;
}

export class PatchApplyError extends Error {
  new (message: string): PatchApplyError;
}

export interface JSONPointer {
  new (pathStr: string): JSONPointer;
  add<D>(doc: D, value: any, mutate?: boolean): D;
  remove<D>(doc: D, mutate?: boolean): D;
  replace<D>(doc: D, value: any, mutate?: boolean): D;
  get<D>(doc: D): any;
  subsetOf(otherPointer: JSONPointer): boolean;
}

export interface JSONPatch {
  new (patch: string | Array<any>, mutate?: boolean): JSONPatch;
  apply<D>(doc: D): D;
}
