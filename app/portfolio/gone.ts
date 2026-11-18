/**
 * The old portfolio showed the founder's previous-employer projects as YourForce work. Those pages are gone for good:
 * answer 410 so search engines drop them, with a link to the honestly labelled founder section.
 */
export function gone() {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Page removed | YourForce</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0f1215;color:#f4f1ea;font-family:system-ui,sans-serif;text-align:center;padding:24px}a{color:#f5b83d;font-weight:700}</style></head><body><main><h1>This page has been removed</h1><p>It is no longer part of our website.</p><p><a href="https://www.yourforce.io/#founder">About the founder</a> · <a href="https://www.yourforce.io/">Home</a></p></main></body></html>`;
  return new Response(html, { status: 410, headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex" } });
}
