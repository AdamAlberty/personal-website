---
title: Technical Details of This Website
description: If you were ever wondering how this site was built.
date: '2024-1-26'
categories:
  - personal website
  - sveltekit
  - mdx
published: true
---

Welcome to my website! I hope you like it. I have rebuilt this site at least _6 times_ in the past two years. I know that it sounds ridiculous, but I had too much time on my hands.

You can find the repository at [github.com/AdamAlberty/personal-website](https://github.com/AdamAlberty/personal-website) if you want to poke around the code.

## The philosophy

My previous attempts to create a personal website weren't so successful. I think it's mainly because I overengineered the website and added so many features to it that I just couldn't handle the complexity.

In this version of my website I decided to make it as simple as possible.

## The Framework

As a base of the website I used **SvelteKit**, and boy am I happy with the choice. It eased the development of this site quite a bit compared to when I was building it with Next.js.

It was easier to rebuild this website from Next.js to Sveltekit (took me 3 days) because I already knew how the website should and shoul not work from the previous attempts.

The entire site is statically generated, which is okay for now, as I won't be writing posts as frequently. It will also be faster than SSR and I can deploy it wherever I want.

## The Styles

For styling I used **Tailwind**. I have been using Tailwind for a long time and I can't imagine the pain of writing CSS without it. It simplifies styling of the website so much! I must say that it takes time to get used to it, but once you know the basics it is so much more enjoyable to write CSS the Tailwind way rather than writing your styles from scratch.

The other thing about styling with Tailwind it the consistency of the styles. It gives you sane building primitives to craft your website the way you like. Not too strict but not too loose either.

## The Content

For content I wanted to shift from CMSes (I tried Payload, Sanity, Strapi,...) to something simpler, so I chose **Markdown**, specifically MDX. It's a nice and simple plaintext format that I can write pretty much anywhere.

A big advantage is that I don't need fancy richtext WYSIWYG editor to create content. I first thought it will be limiting, but it isn't the case. If I need something more complex or interactive, I can just import and use the Svelte component inside the Markdown.

Other benefit of using Markdown is that the format will be here for years to come. It's the de facto standard for technical writing.

I hope I will write more blog posts. It's a nice exercise for writing skills.

## The Hosting

For now, the site is deployed on Vercel. Thanks to being statically generated, it is really fast and has the perfect lighthouse score.

![Perfect lighthouse score](/post-img/perfect-lighthouse-score.png)
