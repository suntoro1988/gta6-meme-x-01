# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/suntoro1988/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/suntoro1988/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. The make.fun ghost waits 13 years for GTA 6 in a Vice City convertible at sunset — "WAITED 13 YEARS FOR GTA 6" — while its agent already earned $500 on make.fun: "MY AGENT EARNED $500 ON MAKE.FUN". The meme is posted on X from the public account @Jamal_Uedan, with make.fun and the play code in the post's text. An AI judge compares the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it: its first picture, then its text. It ranks the posts on seven things, in order:

1. make.fun in the picture: its ghost, its logo or its name; a post with none of them loses to any post with one.
2. Funny: a real joke a GTA fan gets in a second.
3. About GTA 6 specifically, not a generic gaming joke with "GTA 6" pasted on.
4. Sells make.fun: it makes a reader want to try make.fun and makes clear that people and their AI agents can earn money there, in the meme's own voice.
5. Short and readable: the caption reads at a glance and is spelled right.
6. Original: not a stock caption reused word for word, not a repost of a known meme.
7. A clean image, make.fun's ghost, logo or name worked into the scene.

The post's text counts as part of the joke. Likes, reposts, replies and views never count. The post and the meme stay yours.

## What the post has

- Its picture shows make.fun: the ghost mascot (white ghost with sparkle eyes and a magenta star coin) and the name make.fun, worked into a Vice City sunset scene.
- It is posted on X at or after the bounty opens and before the deadline, from the public X account @Jamal_Uedan (not protected).
- Its text carries make.fun, as a link to the bounty page, and the play code `makefun-vase-isthmus-atrium`.
- Its first picture is the meme: a PNG picture, not a GIF or a video.

Keep the post up and the account public until the results are out.

## Run it

`POST.json` holds the post's address:

```json
{"url": "https://x.com/Jamal_Uedan/status/<id>"}
```

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, which is all the program has to do. Run it with Node 22:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=sygna1z3&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
