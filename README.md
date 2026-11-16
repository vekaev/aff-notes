# AFF notes

Study app for AFF skydiving students: from the plane to the landing, emergencies, real footage, a test after each
chapter. English, Spanish, Russian.

    npm install
    npm run dev      # http://localhost:5173
    npm run check    # type-check + content tests
    npm run build    # dist/ (+ dist/artifact.html for the claude.ai artifact host)

Content lives in `src/content/part*.ts` as typed data with all three languages side by side; a missing translation
is a type error. Clips are in `public/media` (short excerpts from public tutorials, for personal use).
Plan and status: `docs/PLAN.md`. Research: `docs/research/`.
