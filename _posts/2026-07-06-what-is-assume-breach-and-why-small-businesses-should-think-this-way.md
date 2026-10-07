---
layout:   post
title:    "What Is “Assume Breach” — and Why Every Small Business Should Think This Way"
date:     2026-07-06
category: Cybersecurity Insights
excerpt:  "Firewalls and antivirus answer one question: can someone get in? “Assume breach” asks what happens next, and why even a five-person company should plan for it."
author:   aegispub
---

## Introduction

Most cybersecurity advice for small businesses sounds the same: get a firewall, install antivirus, use strong passwords, train your staff to spot phishing emails. All of that is good advice. None of it is wrong.

But it shares one quiet assumption: that if you do these things well enough, attackers will simply be kept out.

That assumption has a long history of being wrong — even for organizations with far bigger security budgets than a typical small business. And understanding why it's wrong is the first step toward a more realistic, more resilient approach to protecting your business. That approach has a name in the security world: “assume breach.”

This article explains what that means, why it matters even for a five-person company, and what it actually looks like in practice — without requiring a security team or an enterprise budget.

## The Castle That Wasn't Enough

For most of the history of computer security, the dominant idea was simple: build strong walls around your network, and what's inside is safe. Firewalls, the original digital “walls,” controlled what could get in. If the wall held, the thinking went, everything behind it was fine.

This is intuitive because it mirrors how we think about physical security. A locked front door keeps a house safe. A guarded entrance keeps a building safe. By extension, a well-configured firewall should keep a network safe.

The flaw in this thinking became impossible to ignore after a string of incidents at organizations that had excellent perimeter defenses — and almost nothing else. One of the most well-documented examples involved a major security company in 2011. Their firewalls were properly configured. Their perimeter defenses worked as designed. And yet attackers got in anyway — not by breaking the wall, but by sending a convincing email with an infected attachment to a handful of employees. One person opened it.

From that single point of entry, the attackers spent weeks moving quietly through the internal network. They weren't detected by the firewall, because they were never outside it again. They explored, gathered information, and eventually reached extremely sensitive data — all while the “wall” stood exactly where it was supposed to, doing exactly what it was supposed to do.

The lesson isn't that firewalls are useless. It's that a firewall answers only one question: “can this person get in?” It has nothing to say about what happens next if the answer turns out to be yes.

## What “Assume Breach” Actually Means

“Assume breach” is a way of designing security that takes a simple, slightly uncomfortable starting point: at some point, someone will get past your front-line defenses. Not because those defenses are bad, but because no defense is perfect, forever, against every possible method.

This doesn't mean giving up on prevention. Firewalls, antivirus, and strong passwords are still worth having — they reduce how often something gets through, and they stop the easy, automated attacks that make up the bulk of what small businesses actually face.

What changes is the next question. Instead of stopping at “how do we keep attackers out,” assume-breach thinking adds: “if someone got past all of that tomorrow, what would happen — and how would we know?”

This single shift in framing changes what gets built. Rather than investing everything in the front door, some attention goes to questions like:

- If one computer gets infected, what else can it reach?
- If one login gets stolen, what does it unlock?
- If something locks up our files, do we have a way to recover — and has anyone actually tested it?
- If something unusual happens on our network, would anyone notice — and how quickly?

None of these questions assume an attack is happening right now. They're the kind of questions you answer calmly, in advance, so that if something does happen, the answers are already known.

## Why This Matters More for Small Businesses, Not Less

It's tempting to think “assume breach” is a concern for large corporations with sensitive data and big targets on their backs. In practice, the opposite is often true for small businesses.

Larger organizations typically have IT staff who notice unusual activity, response plans that have been at least loosely discussed, and backup systems that someone is responsible for checking. Small businesses often have none of these — not because anyone is careless, but because there's been no time, no dedicated person, and no perceived need.

This creates a specific kind of risk: when something does go wrong, it can go unnoticed for a long time. A locked file might not be discovered until someone tries to open it weeks later. A suspicious login might never be reviewed, because nobody is looking at login records. A stolen customer list might not be noticed at all until customers start reporting strange emails.

The “assume breach” mindset doesn't require hiring anyone. It requires building a small number of habits and checks that mean, if something happens, it gets noticed sooner and contained faster — rather than discovered by accident, months later, after the damage is already done.

## What This Looks Like in Practice

Here are practical steps that reflect assume-breach thinking, roughly in order of effort versus impact:

1. **Separate your most important logins.** If the same username and password (or a closely related one) gets you into your email, your accounting software, and your backups, then compromising one of those things effectively compromises all of them. Use different credentials for your most sensitive systems, especially backups.
2. **Keep backups that nobody can delete on a bad day.** A backup that's accessible with the same login as your everyday systems can be deleted or encrypted right alongside everything else during an attack. Look for backup options that offer some form of “immutability” — a setting that prevents changes or deletion for a set period, even by an administrator.
3. **Separate your networks where it's easy to do so.** If your business uses point-of-sale systems, smart devices, or guest Wi-Fi, keep these on separate networks from the computers handling sensitive data. Most modern routers and Wi-Fi systems support this with minimal extra cost.
4. **Set up a few “tripwires.”** Simple, low-cost detection methods — like fake credential files placed in shared folders that no legitimate person would ever open — can alert you almost immediately if someone unauthorized is poking around your systems.
5. **Write down what happens if something goes wrong.** A one-page plan: who notices, who gets called, in what order, and where the backups are. This doesn't need to be formal. It needs to exist, and the right people need to know where to find it.
6. **Test your backups, not just your backup software.** Confirm, periodically, that you can actually restore a file or system from backup — not just that the backup process “completed successfully.”

## Conclusion

The castle metaphor isn't wrong because walls don't matter. It's wrong because it stops the thinking too early. A wall is valuable. A wall with nothing behind it — no plan for what happens if someone gets over it — is a business one phishing email away from discovering, the hard way, just how much was riding on that wall alone.

“Assume breach” isn't pessimism. It's the recognition that prevention and preparation aren't competitors — they're two halves of the same plan. A business that has both isn't unbreachable. No business is. But it's the kind of business that, on its worst day, has a contained incident instead of a catastrophe — and that difference is almost entirely decided before anything goes wrong.
