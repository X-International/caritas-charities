# Authentication and Authorization Review

## Overall rating: Strong for the current scope

This repository is a public-content website. It has no user accounts, sign-up, login, logout, password reset, OAuth, session cookies, JWTs, admin routes, database-backed records, or tenant-specific data. All page routes are intentionally public, and the contact endpoint accepts an unauthenticated, validated submission protected by origin checks and rate limiting.

## Findings

### No current critical authentication issues

There is no authentication boundary to bypass and no protected resource identifier to exploit. No passwords or bearer tokens are collected or stored. The browser does not persist identity state, so session fixation, stale sessions, token theft, and privilege escalation are not current attack paths.

### Existing unauthenticated boundary: contact API

`app/api/contact/route.ts` is intentionally public and currently controls abuse through:

- request shape and length validation in `lib/contact/contract.ts`;
- same-origin validation when an `Origin` header is present;
- a five-request-per-window limiter;
- an eight-second provider timeout;
- generic responses that do not expose provider details;
- request correlation without logging submitted personal data.

This is abuse protection, not authentication or authorization. It should remain separate from any future account system.

## Required design before adding protected features

1. Choose a maintained identity provider or mature auth library; do not hand-roll password hashing, sessions, reset tokens, or OAuth flows.
2. Store sessions in secure, `HttpOnly`, `Secure` production cookies with `SameSite=Lax` or stricter, server-side expiry, rotation after login, and revocation on logout/password change.
3. Enforce authorization in server components, route handlers, and data-access functions. Client-side hiding is only presentation.
4. Use deny-by-default role/permission policies and test every protected route for anonymous, ordinary-user, and privileged-user access.
5. Add MFA for administrator or donor-data access, recovery-code controls, and re-authentication for sensitive changes.
6. Rate-limit login, reset, verification, and MFA endpoints at the edge/shared store; never use a process-local limiter for a multi-instance auth service.
7. Return generic login/reset errors to prevent account enumeration and log security events using request IDs without passwords, tokens, or personal form contents.
8. Add CSRF protection for cookie-authenticated state-changing requests and strict redirect-URL allowlists for OAuth.

## Practical status

- Protected routes: none.
- Roles/permissions: none required.
- Session/token storage: none.
- User-data isolation: not applicable; the site serves public content.
- Future auth readiness: the current contact/API boundary and centralized request observability provide a clean starting point, but an identity provider and server-side policy layer must be introduced together when private features are scoped.
