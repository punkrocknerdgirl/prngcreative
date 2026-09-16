/* Scrolling build log.
   1. Each <article data-src> fetches its post and drops in the head, hero
      image and body, with relative links/images re-pointed at the post's
      own folder.
   2. Once everything is in, jump to the post named in the URL hash.
   3. As you scroll, the sticky bar shows which post you're in and the
      URL hash follows along, so a copied link lands on the right post. */
(() => {
  const posts = [...document.querySelectorAll('article[data-src]')];
  const bar = document.querySelector('.reading-bar');
  const header = document.querySelector('header');
  if (!posts.length || !bar) return;

  // keep the bar tucked under the sticky header whatever its height is
  const setHeaderVar = () =>
    document.documentElement.style.setProperty('--hdr', header.offsetHeight + 'px');
  setHeaderVar();
  new ResizeObserver(setHeaderVar).observe(header);

  const absolutize = (root, base) => {
    root.querySelectorAll('[src]').forEach(el => el.setAttribute('src', new URL(el.getAttribute('src'), base).href));
    root.querySelectorAll('[href]').forEach(el => el.setAttribute('href', new URL(el.getAttribute('href'), base).href));
  };

  const load = async (article) => {
    const src = new URL(article.dataset.src, location.href);
    try {
      const html = await (await fetch(src)).text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const head = doc.querySelector('.post-head');
      const hero = doc.querySelector('.hero-img');
      const body = doc.querySelector('.post-body');
      if (!head || !body) throw new Error('post markup not found');
      absolutize(hero || doc.body, src);
      absolutize(body, src);
      // permalink next to the date
      const meta = head.querySelector('.post-meta');
      if (meta) {
        const a = document.createElement('a');
        a.className = 'permalink';
        a.href = src.href;
        a.textContent = 'permalink ↗';
        meta.append(a);
      }
      article.replaceChildren(head, ...(hero ? [hero] : []), body);
      article.dataset.title = head.querySelector('h1')?.textContent.trim() || '';
    } catch (err) {
      // leave the fallback link in place; the post is still one click away
      console.warn('build log: could not load', src.href, err);
    }
  };

  const update = () => {
    const line = header.offsetHeight + bar.offsetHeight + 24;
    let current = posts[0];
    for (const p of posts) if (p.getBoundingClientRect().top <= line) current = p;
    const title = current.dataset.title;
    if (!title) return;
    bar.hidden = false;
    bar.querySelector('.rb-title').textContent = title;
    bar.querySelector('.rb-count').textContent = `${posts.indexOf(current) + 1} / ${posts.length}`;
    if (location.hash !== '#' + current.id) history.replaceState(null, '', '#' + current.id);
  };

  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  }, { passive: true });

  Promise.all(posts.map(load)).then(() => {
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ block: 'start' });
    update();
  });
})();
