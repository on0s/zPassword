export interface Field {
  id: string;
  name: string;
  value: string;
  createdAt: number;
  updatedAt: number;
}

export interface Item {
  id: string;
  fields: Field[];
  createdAt: number;
  updatedAt: number;
}

export interface Vault {
  id: string;
  name: string;
  items: Item[];
  createdAt: number;
  updatedAt: number;
}

export type KeyType = 'master' | 'device' | 'vault' | 'item';

export interface Key {
  id: string;
  type: KeyType;
  material: Uint8Array;
}

export interface EventLogEntry {
  id: string;
  timestamp: number;
  action: string;
  itemId?: string;
}
