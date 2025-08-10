# Threat Model

## Assets
- Master key
- Device keys
- Vault contents (items and fields)
- Audit log

## STRIDE
| Threat | Mitigation |
| --- | --- |
| Spoofing | Rely on TLS and key pinning for server connections. |
| Tampering | AEAD tags on all encrypted data detect modification. |
| Repudiation | Merklized event log records user actions. |
| Information Disclosure | End-to-end encryption ensures server sees only ciphertext. |
| Denial of Service | Local caching and rate limiting reduce impact. |
| Elevation of Privilege | Role-based access control and device trust requirements. |
