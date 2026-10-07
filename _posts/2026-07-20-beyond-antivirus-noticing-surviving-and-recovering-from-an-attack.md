---
layout:   post
title:    "Beyond Antivirus: Building a Business That Can Notice, Survive, and Recover From an Attack"
date:     2026-07-20
category: Cybersecurity Insights
excerpt:  "Prevention is only half the plan. Tripwires, backups that attackers cannot delete, and a one-page response plan decide how bad a bad day gets."
author:   aegispub
---

## Introduction

If you ask most small business owners what they've done about cybersecurity, the answer usually involves a list of things designed to prevent problems: antivirus software, a firewall, maybe some staff training about suspicious emails.

These are all sensible. But they share a common weak point: they're all about stopping problems from happening in the first place — and none of them have much to say about what happens if, despite all of that, something gets through anyway.

This article is about that second part. Not because prevention doesn't matter — it does — but because the businesses that come through a security incident with the least damage are usually the ones that planned for what happens after something goes wrong, not just what happens before.

## The Detection Gap

Here's a question worth sitting with for a moment: if someone unauthorized got into your business's computer systems tomorrow — not to do anything dramatic immediately, just to look around — how would you find out?

For a lot of small businesses, the honest answer is: “we probably wouldn't, not right away.” There's no one watching login activity. No alerts for unusual behavior. The only way most small businesses discover a problem is when something visibly breaks — files are locked, a customer calls about a strange email, or money goes missing from an account.

By the time any of those things happen, the person responsible may have already been inside the systems for days, weeks, or longer. This gap — between when something goes wrong and when anyone notices — is often where the real damage happens. The longer it lasts, the more there is to clean up, and the more options the person inside has had to do damage.

Closing this gap doesn't require expensive monitoring software. One of the cheapest and most effective tools is something called a canary token (sometimes called a tripwire).

## Tripwires: Cheap, Loud, and Almost Never Wrong

The idea behind a canary token is borrowed from old coal mining practices — miners would bring caged canaries underground because the birds reacted to dangerous gas before humans could detect it, giving an early warning.

The digital version: you place a fake set of login details — something that looks like a real password for, say, your accounting software — somewhere a normal employee would have no reason to ever look, but somewhere an unauthorized visitor poking through your files probably would.

Because no legitimate person ever has a reason to open that file, or try using those credentials, any attempt to do so is an almost certain sign that something is wrong. This is different from most security alerts, which tend to be noisy — lots of “maybe, maybe not” — because canary tokens have essentially no legitimate reason to ever trigger. When one does, it's not background noise. It's a clear signal.

Setting this up typically takes well under a day and costs very little. For a small business, a handful of these placed in shared folders — combined with a simple alert (an email or text message when one is triggered) — can be the difference between discovering a problem in minutes versus discovering it by accident, months later.

## Backups: The Difference Between an Inconvenience and a Catastrophe

Even with good detection, sometimes something gets through and causes damage before it's caught — most commonly, in the form of ransomware, which locks (encrypts) files and demands payment to unlock them.

A working backup turns this from a potential business-ending event into an inconvenience: restore the affected files or systems from backup, and the situation is resolved without paying anyone anything.

The catch is that “having a backup” and “having a backup that will actually help you” aren't always the same thing. Increasingly, ransomware doesn't just target your everyday files — it specifically searches for and destroys backups too, before locking everything else. If your backup system uses the same login credentials as your regular systems, an attacker with access to one often has access to the other.

A backup setup that holds up under this kind of attack needs three properties:

- **Immutability** — for a defined period (say, 30 days), nobody — not even someone with administrator access — can modify or delete the backup. This is similar to a time-locked safe: even the person with the combination can't open it early.
- **Separation** — the backup system uses credentials that exist nowhere else in your business's systems. Compromising your main admin account shouldn't automatically mean compromising your backups too.
- **Verified recoverability** — the backup is actually tested by restoring something from it on a regular schedule (quarterly is reasonable for most small businesses). A backup that has never been restored from is, at best, an assumption.

Most modern backup services — including many affordable cloud-based options — support immutability as a setting. It's often a matter of turning it on, not buying something new.

## Having a Plan, Even a Simple One

The last piece doesn't involve any technology at all. It's a short, written plan for what to do if something goes wrong — and it matters more than it might seem.

During an actual incident, the people involved are usually under stress, dealing with something unfamiliar, and trying to make decisions quickly. This is exactly the situation where having to figure things out from scratch costs the most time — time during which whatever is happening continues to happen.

A simple plan answers a few questions in advance:

- Who notices first, typically? (Often it's whoever is using the affected system, or an IT contractor monitoring alerts.)
- Who do they tell, and how? (A phone number, not just an email — incidents often happen outside business hours.)
- What gets disconnected or shut down immediately? (Often, the safest first step is disconnecting the affected device from the network — not turning it off, which can sometimes destroy useful information about what happened.)
- Where are the backups, and who has access to them?
- Who needs to be told, and in what order? (This might include staff, customers, insurers, or — depending on what's affected — regulators.)

This doesn't need to be a formal document with a logo on it. It can be a single page, kept somewhere accessible (and somewhere that doesn't depend on the very systems that might be affected). The value isn't in its formality — it's in the fact that, on a stressful day, the first few decisions are already made.

## Conclusion

Prevention will always be part of a sensible security approach — but it's only part of it. The businesses that handle security incidents well aren't always the ones with the most expensive tools. Often, they're the ones that asked a few uncomfortable questions in advance: how would we notice, how would we recover, and what do we do first.

A few inexpensive tripwires, a backup setup that's actually separated and tested, and a one-page plan written on a calm afternoon — together, these don't prevent every bad day. But they're often the entire difference between a bad day that stays a bad day, and one that becomes the story that defines a business for years afterward.
