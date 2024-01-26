---
title: Technical details of this website
description: If you were ever wondering how this site was built.
date: '2024-1-26'
categories:
  - personal website
  - sveltekit
  - mdx
published: true
---

Welcome to my site, I hope you like it. I have rebuilt my personal website at least _6 times_ in the past two years. I know that it sounds ridiculous, but I had too much time on my hands.
You can find the repository on [github.com/AdamAlberty/personal-website](https://github.com/AdamAlberty/personal-website)

## The Framework

As a base of it all i used **SvelteKit**, and boy am I happy with the choice. It eased the development of this site quite a bit compared to when I was building it with Next.js.

It was easier to rebuild this website (took me 3 days) in SvelteKit from Nextjs because I already knew how the website should work from the previous attempts.

The entire site is statically generated, which is okay for now, as I won't be writing posts as frequently. It will also be faster than SSR and I can deploy it wherever I want.

## The Styles

For styling I used **Tailwind**. I have been using Tailwind for a long time and I can't imagine the pain of writing CSS without it. It simplifies styling of the website so much! I must say
that it takes time to get used to it, but once you know the basics it is so much more enjoyable to write CSS the Tailwind way rather than writing your styles from scratch.

The other thing about styling with Tailwind it the consistency of the styles. It gives you sane building primitives to craft your website the way you like. Not too strict but not too loose either.

## The Content

For content I wanted to shift from CMSes to something simpler, so I chose **Markdown**, specifically MDX. Markdown is a nice and simple plaintext format that I can write pretty much anywhere.
I think it is a standard for tech blogging.

Before that I tried many Content Management Systems (Payload, Strapi, Sanity,...) but I could never force myself to write anything. I don't know why, maybe because there was too much traction
involved in writing a post.

## The Hosting

For now, the site is deployed on Vercel. It should be really fast.
