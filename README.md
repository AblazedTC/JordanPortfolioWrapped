# Jordan Wrapped

A Spotify Wrapped-style portfolio for **Jordan Jerkins**: software engineer building AI-powered systems for audio, automation, and real-time applications.

Instead of a static portfolio page, this is an animated, slide-based "year in review": top technologies, featured project (MusicDecoded), project catalog, internships (ADP, NICE), skill growth, leadership, build stats, and a live "now playing" feed from my actual Spotify account.

Built with **Next.js 15, TypeScript, Tailwind CSS, and GSAP**.

> Adapted from the open-source [Spotiwrap](https://github.com/lumi-work/spotiwrap) project (MIT). Not affiliated with Spotify.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All content lives in **`src/data/portfolio.ts`**; components just map over it:

- `personal` and `links`: name, GitHub, LinkedIn, email, resume (PDF in `public/Resume/`)
- `topTech`, `mostPlayed`, `catalog`, `skillJump`, `internships`, `debugStats`, `listening`, `finalRecap`

## Spotify integration (optional)

The Listening section shows what I'm actually playing plus my top tracks. It reads **my** account server-side; visitors never log in. Without env vars the section shows an "off air" state, so this is fully optional.

One-time setup:

1. Create an app at [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard) and add `http://127.0.0.1:3000/callback` as a redirect URI.
2. Visit (with your client ID filled in):
   `https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=code&redirect_uri=http://127.0.0.1:3000/callback&scope=user-read-currently-playing%20user-read-recently-played%20user-top-read`
   and copy the `code` from the redirect URL.
3. Exchange it for a refresh token:
   ```bash
   curl -X POST https://accounts.spotify.com/api/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -u "CLIENT_ID:CLIENT_SECRET" \
     -d "grant_type=authorization_code&code=CODE&redirect_uri=http://127.0.0.1:3000/callback"
   ```
4. Copy `.env.example` to `.env.local` and fill in `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and the `refresh_token` from step 3. Add the same three vars in your production host.

## Structure

```
src/
  data/portfolio.ts          # all content (edit this)
  app/page.tsx               # section order
  app/api/now-playing/       # live Spotify player (optional env vars)
  app/api/top-tracks/        # Spotify top tracks (optional env vars)
  components/story/
    StoryScroller.tsx        # GSAP ScrollTrigger orchestration, swipe/arrow nav
    IntroLoader.tsx          # startup loading animation
    NowPlayingCard.tsx       # live Spotify player card
    Section.tsx              # full-screen color-blocked snap section
    KineticText.tsx          # word-split headline reveals
    Sticker.tsx / StickerLink.tsx  # sticker chips and CTA buttons
    sections/                # one component per story section
```

Scroll (or swipe, or use arrow keys) to move through the story. Sections snap, animations trigger on entry, and everything respects `prefers-reduced-motion`.

## Deploy

Cloudflare Workers (recommended for this repo):

- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Add `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` as Production secrets

Vercel also works with the default Next.js settings.

## License

MIT, see [LICENSE](./LICENSE). Original Spotiwrap copyright (c) 2024 lumi.
