# Jordan Wrapped

A Spotify Wrapped-inspired personal portfolio for **Jordan Jerkins** — software engineer building AI-powered systems for audio, automation, and real-time applications.

Instead of a static portfolio page, this is an animated, slide-based "year in review": top technologies, featured projects (MusicDecoded), internships (ADP, NICE), most improved skills, leadership, build stats, and an engineering timeline.

Built with **Next.js 15, TypeScript, Tailwind CSS, and GSAP**.

> Adapted from the open-source [Spotiwrap](https://github.com/lumi-work/spotiwrap) project (MIT). All Spotify auth, API calls, and branding were removed — this project uses only local data and is not affiliated with Spotify.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit portfolio content

All content lives in **`src/data/portfolio.ts`** — components just map over it. Update:

- `personal.links` — GitHub, LinkedIn, email, resume URL (drop `resume.pdf` into `/public`)
- `topTech`, `mostPlayed`, `catalog`, `skillJump`, `internships`, `debugStats`, `listening`, `finalRecap`

Placeholder links are marked with `// <-- update` comments.

## Spotify "Now Playing" (optional)

The Listening section shows what I'm actually playing on Spotify. It's **my** account read server-side — visitors never log in. Without env vars the section gracefully shows an "off air" state, so this is fully optional.

One-time setup:

1. Create an app at [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard) and add `http://127.0.0.1:3000/callback` as a redirect URI.
2. Visit (with your client ID filled in):
   `https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=code&redirect_uri=http://127.0.0.1:3000/callback&scope=user-read-currently-playing%20user-read-recently-played`
   and copy the `code` from the redirect URL.
3. Exchange it for a refresh token:
   ```bash
   curl -X POST https://accounts.spotify.com/api/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -u "CLIENT_ID:CLIENT_SECRET" \
     -d "grant_type=authorization_code&code=CODE&redirect_uri=http://127.0.0.1:3000/callback"
   ```
4. Copy `.env.example` to `.env.local` and fill in `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and the `refresh_token` from step 3. Add the same three vars in Vercel for production.

## Structure

```
src/
  data/portfolio.ts          # all content (edit this)
  app/page.tsx               # section order
  app/api/now-playing/       # Spotify now-playing route (optional env vars)
  components/story/
    StoryScroller.tsx        # GSAP ScrollTrigger orchestration, swipe/arrow nav
    IntroLoader.tsx          # startup split-text loading animation
    NowPlayingCard.tsx       # live Spotify player card
    Section.tsx              # full-screen color-blocked snap section
    KineticText.tsx          # word-split headline reveals
    Sticker.tsx / StickerLink.tsx  # sticker chips and CTA buttons
    Waveform.tsx             # animated equalizer bars
    sections/                # one component per story section
```

Scroll (or swipe left/right, or use ←/→ arrow keys) to move through the story — sections snap, animations trigger on entry, and everything respects `prefers-reduced-motion`.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — environment variables are only needed for the optional Spotify widget. `npm run build` must pass (it does).

## License

MIT — see [LICENSE](./LICENSE). Original Spotiwrap copyright (c) 2024 lumi.
