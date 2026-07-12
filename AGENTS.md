<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

# Workplace Management Platform

## Project Overview

This project is a multi-tenant Workplace Management Platform built with Next.js.

The platform enables organizations to:

- Manage organizations
- Manage employees
- Upload interactive floor plans
- Locate employees
- Book meeting rooms
- Manage office facilities
- Manage buildings and floors
- Search office resources
- View office maps

This is production-quality software and should prioritize maintainability, scalability, and security over quick implementations.

---

# Tech Stack

- Next.js (App Router)
- TypeScript
- PostgreSQL
- Prisma ORM
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- Better Auth
- TanStack Query

---

# Architecture Rules

Always follow:

Feature-based architecture

Example

/app
/features
/components
/server
/lib
/mysql2

Business logic must never exist inside React components.

Server actions or Route Handlers should contain orchestration only.

Business rules belong inside services.

Database access belongs inside repositories.

---

# Coding Rules

Always

- Use TypeScript strict mode.
- Prefer Server Components.
- Use Client Components only when necessary.
- Validate every input using Zod.
- Use Prisma transactions where required.
- Write reusable components.
- Keep components under 300 lines.
- Prefer composition over inheritance.
- Avoid duplicate logic.
- Handle loading, empty, and error states.
- Follow accessibility best practices.
- Never hardcode IDs or organization data.

---

# Security

Every database query must verify:

organizationId

Never expose another organization's data.

All APIs require authentication.

All APIs require authorization.

Never trust client input.

Validate everything.

---

# Multi-Tenant Rules

Every business entity belongs to an organization.

Example

Organization
├── Users
├── Employees
├── Buildings
├── Floors
├── Meeting Rooms
├── Floor Plans
└── Bookings

Every query must be scoped by organizationId.

---

# Documentation

Every new feature must include

- README update
- API documentation
- Database notes
- Permission updates
