import { describe, it, expect } from 'vitest';
import { Vault, Item, Field, Key, EventLogEntry } from '../src';

describe('shared types', () => {
  it('constructs sample structures', () => {
    const field: Field = { id: 'f1', name: 'username', value: 'alice', createdAt: 0, updatedAt: 0 };
    const item: Item = { id: 'i1', fields: [field], createdAt: 0, updatedAt: 0 };
    const vault: Vault = { id: 'v1', name: 'Personal', items: [item], createdAt: 0, updatedAt: 0 };
    const key: Key = { id: 'k1', type: 'master', material: new Uint8Array([1, 2, 3]) };
    const event: EventLogEntry = { id: 'e1', timestamp: 0, action: 'create', itemId: item.id };
    expect(vault.items[0].fields[0].name).toBe('username');
    expect(key.material.length).toBe(3);
    expect(event.action).toBe('create');
  });
});
