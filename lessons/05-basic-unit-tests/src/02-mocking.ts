export interface KeyValueStore {
  put(k: number, v: number): void;
  get(k: number): number | undefined;
}

export const keyValueStore = (): KeyValueStore => {
  const store = new Map<number, number>()

  return {
    get: (k) => store.get(k),
    put: (k, v) => {
      store.set(k, v);
    },
  }
}

export const useKV = (kv: KeyValueStore) => {
  kv.put(0, 1)
  kv.put(1, 2)
  kv.put(2, 3)

  return kv.get(2)
}
