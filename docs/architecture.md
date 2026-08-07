# Site Architecture

This site is now designed as an Astro content site.

## Content model

- `blog`: technical posts and longer essays.
- `notes`: categorized learning notes. Current categories are `cs`, `math`, `physics`, and `void`.
- `projects`: project display pages with optional repository and demo links.
- `moments`: short text, image, or video updates.

## Publishing options

The static-only option is still Git-based: write Markdown, commit, push, and let GitHub Pages or Actions deploy.

For browser-based publishing there are three realistic paths:

1. GitHub API editor: the owner logs in with GitHub OAuth, the page commits Markdown files into this repository, and the static site rebuilds.
2. Headless CMS: use a CMS such as Decap CMS or another Git-backed editor. This keeps the content as files.
3. Spring Boot backend: store posts, moments, likes, comments, and media metadata in MySQL. Astro can either fetch at build time or run as a server-rendered frontend.

Recommended long-term split:

- Astro: public site, rendering, routing, static assets.
- Spring Boot: owner auth, content API, comment API, like API, media upload API.
- MySQL: users, sessions, posts, comments, reactions, media records.
- Object storage or server disk: uploaded images and videos.

## Suggested backend modules

- `auth`: owner login, JWT/session, password rotation.
- `content`: create/update/delete blog, notes, projects, moments.
- `interaction`: likes and comments.
- `media`: image/video upload, validation, public URL generation.
- `sync`: optional job to export database content back to Markdown.
