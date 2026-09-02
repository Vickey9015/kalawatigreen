import { execSync } from "child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "fs";
import { join } from "path";

const root = process.cwd();
const outDir = join(root, "out");
const uploadDir = join(root, "hostinger-upload");
const zipPath = join(uploadDir, "kalawati-greens-site.zip");

const htaccess = `# Kalawati Greens — Hostinger Apache config
Options -MultiViews
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteCond %{HTTPS} !=on
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  RewriteRule ^gallery/?$ /moments/ [R=301,L]

  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  RewriteRule ^(.+)/$ $1/index.html [L]
  RewriteRule ^(.+)$ $1/index.html [L]
</IfModule>

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
</IfModule>
`;

function countFiles(dir) {
  let count = 0;
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      count += countFiles(fullPath);
    } else {
      count += 1;
    }
  }
  return count;
}

if (!existsSync(outDir)) {
  console.error("Build output not found. Run `npm run build` first.");
  process.exit(1);
}

writeFileSync(join(outDir, ".htaccess"), htaccess, "utf8");

mkdirSync(uploadDir, { recursive: true });

const readme = `KALAWATI GREENS — HOSTINGER DEPLOY
=================================

Site URL: https://kalawatigreens.vickeybuilds.com

OPTION A — Upload ZIP (recommended)
-----------------------------------
1. In Hostinger hPanel, open: Websites → Manage → File Manager
2. Open the document root for kalawatigreens.vickeybuilds.com
   (subdomain folder — not kalawatigreens.in / public_html)
3. Delete any default index.html / placeholder files
4. Upload: kalawati-greens-site.zip (from this folder)
5. Extract the ZIP in the document root
6. Confirm .htaccess is present (enable "Show hidden files" in File Manager)
7. Visit https://kalawatigreens.vickeybuilds.com/

OPTION B — Upload folder contents
---------------------------------
1. Run locally: npm run export:hostinger
2. Upload everything inside the "out" folder to the kalawatigreens.vickeybuilds.com document root
3. Include .htaccess and all subfolders (_next, images, about, etc.)

After deploy — quick checks
---------------------------
[ ] Homepage loads
[ ] /about/ /services/ /moments/ /contact/ work
[ ] /gallery/ redirects to /moments/
[ ] Favicon shows in browser tab
[ ] Images load on all pages

Rebuild before each update
--------------------------
npm run export:hostinger
`;

writeFileSync(join(uploadDir, "UPLOAD-INSTRUCTIONS.txt"), readme, "utf8");

if (existsSync(zipPath)) {
  execSync(`rm -f "${zipPath}"`);
}

execSync(`cd "${outDir}" && zip -rq "${zipPath}" . -x "*.DS_Store"`);

const fileCount = countFiles(outDir);
const zipSizeMb = (statSync(zipPath).size / (1024 * 1024)).toFixed(1);

console.log("Hostinger deploy package ready.");
console.log(`- Static files: out/ (${fileCount} files)`);
console.log(`- ZIP upload:   hostinger-upload/kalawati-greens-site.zip (${zipSizeMb} MB)`);
console.log("- Instructions: hostinger-upload/UPLOAD-INSTRUCTIONS.txt");
