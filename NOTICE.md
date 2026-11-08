# Notice

## Code
The source code (HTML structure, CSS, JavaScript) is licensed under the MIT License. See [LICENSE](LICENSE).

## Fonts
Merriweather is licensed under the SIL Open Font License 1.1. See the [Open Font License](assets/fonts/OFL.txt).

## Personal content (not licensed for reuse)
The following belong to Md. Jahidul Islam Sujan and are NOT covered by the MIT License. All rights reserved. Forking this repository on GitHub is fine, but do not publish, redistribute or present this content as your own:

- Name, bio, job titles and descriptions
- Photos and images (`assets/img/Jahid.png`, `assets/img/cover.png`, `assets/img/JIS-favicon.png`, etc.)
- Email address, phone number and all social/contact links
- Structured data and metadata describing me (JSON-LD, Open Graph, sitemap URLs)

If you reuse the code, replace all of the above with your own content.

## What to edit when reusing the code

Replace all personal content with your own:

- `index.html`
  - `<title>`, `description`, `author`, `canonical`, `og:*` and `twitter:*` tags
  - JSON-LD block (name, alternate names, job title, image, `sameAs` links)
  - Card text: name, typing titles (`.titles` list), bio
  - Social/contact links in the `.social` nav
- `assets/img/`: `Jahid.png`, `cover.png`, `JIS-favicon.png`, `404.png`
- `assets/js/analytics.js`: your own Google Analytics ID and hostname, or delete the file and its `<script>` tags in `index.html` and `404.html`
- `robots.txt` and `sitemap.xml`: your own domain
- `404.html`: redirect target and image
- `README.md` and `NOTICE.md`: your own name and details

Keep these in sync: `<title>`, meta tags, JSON-LD and the visible card text should all describe the same person.