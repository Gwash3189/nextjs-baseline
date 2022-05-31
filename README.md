# Next.js + Tailwind + nextjs-backend-helpers

## How to use

1. Use this repository as a template repository either through Github's template feature, or clone it and it push it somewhere else
2. Follow the Configuration section

### Configuration

1. Update `.env` to point towards your `postgres` database
2. Run `npm run setup`
4. Setup a new workspace via Supabase
5. Ensure to setup OAuth redirection according to Supabase and platform documentation
    - This baseline uses Github
6. Configure the following secrets at a repo level via Github
    - `DIGITAL_OCEAN_ACCESS_TOKEN`
    - `DIGITAL_OCEAN_APP_ID`
    - `PRODUCTION_DATABASE_URL`
