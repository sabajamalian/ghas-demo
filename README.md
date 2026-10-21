# GHAS Demo

This intentionally vulnerable Node.js app demonstrates GitHub Advanced Security:

- **Code scanning:** CodeQL detects unsafe command execution and reflected HTML.
- **Dependency scanning:** Dependabot detects known vulnerabilities in pinned packages.
- **Secret scanning:** A fake Stripe-shaped test credential demonstrates secret detection.
- **Dependency review:** Pull requests are checked for newly introduced vulnerable dependencies.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Demo routes

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/hello?name=GHAS` | Reflected input for CodeQL |
| `/lookup?host=github.com` | Unsafe shell execution for CodeQL |

> [!CAUTION]
> This repository is deliberately insecure. Do not deploy it or copy these patterns into production code.
