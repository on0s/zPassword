# Security Principles

- Zero-knowledge: user secrets never leave the device unencrypted.
- Use proven cryptography: Argon2id for key derivation, XChaCha20-Poly1305 for authenticated encryption, and RFC 6238 for TOTP.
- Defense in depth: each component includes unit, property, and fuzz tests.
- No secrets are committed to the repository; use `.env` for local configuration.
