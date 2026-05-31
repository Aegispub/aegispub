---
layout: post
title: "Understanding the Digital World"
date: 2024-10-07
category: Technology & Society
excerpt: "An introduction to how the digital world is structured — and why that structure matters for security, privacy, and power."
author: aegispub
---

The digital world is not a neutral medium. It is built infrastructure, shaped by decisions made decades ago, governed by institutions most people have never heard of, and contested by interests that are rarely aligned with the individual user.

Understanding it begins with understanding its layers.

## The Physical Layer

At the foundation is hardware — the fibre cables under oceans, the data centres in industrial parks, the cell towers on rooftops. This layer is owned. Predominantly by a small number of telecommunications companies and, increasingly, by hyperscalers like Amazon, Google, and Microsoft who have built private backbone networks at scale.

The physical layer is where surveillance is easiest and most consequential. Intelligence agencies have long understood that tapping fibre is more efficient than compromising individual devices.

## The Protocol Layer

Above the physical sits the protocol layer — TCP/IP, DNS, BGP, TLS. These are the agreements that allow different networks to interoperate. They were designed for a smaller, more trusted internet and carry the assumptions of that era.

BGP hijacking — where a network announces false routing information to redirect traffic — is still possible because BGP was designed in a world where backbone operators were assumed to be trusted. RPKI is slowly addressing this, but adoption is incomplete.

DNS, the internet's address book, remains a centralised dependency. A small number of root servers and a handful of major resolvers handle a vast fraction of global DNS traffic. This is both an efficiency and a vulnerability.

## The Application Layer

This is where most people live — browsers, apps, social platforms, messaging services. It is also where the business models that fund the infrastructure are located, and where data collection is most intensive.

The application layer is where the tradeoffs between convenience, privacy, and security are most visible and most contested. End-to-end encryption sits here. So does dark pattern design. So does the attention economy.

## Why It Matters

Cybersecurity is not just a technical discipline. It is a practice that operates across all three layers simultaneously. A phishing attack operates at the application layer but succeeds because of human factors. A nation-state intrusion may traverse the protocol layer but pivot through application-layer credentials.

Literacy about these layers is not optional for anyone working in technology, policy, or any field that intersects with digital infrastructure — which, in 2024, is most fields.
