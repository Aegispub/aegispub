---
layout:   post
title:    "Severity Scores Are Not Risk Scores"
date:     2027-02-17
category: Cybersecurity Insights
excerpt:  "A high CVSS score tells you about worst-case severity, not actual risk. Here's what to check before you decide what to patch first."
author:   aegispub
---

When a vulnerability is discovered in software your organisation uses, it comes with a number attached. That number — its CVSS score, ranging from zero to ten — is supposed to help you understand how serious the problem is. A score of 9.8 is labelled critical. The instinct is to treat that label as an emergency and fix it immediately.

This instinct, while understandable, can lead you to fix the wrong things first. CVSS scores measure potential severity under idealised worst-case conditions. They do not measure how likely a vulnerability is to be exploited in your specific environment, whether the right tools to exploit it are freely available, or whether your organisation is even being targeted by the kind of attacker who would attempt it.

## What CVSS Scores Actually Measure

The Common Vulnerability Scoring System calculates its base score from a set of factors: how the vulnerability can be exploited, whether it requires user interaction, what level of privilege is needed, and what the impact would be on data confidentiality, system integrity, and availability.

These factors are evaluated in isolation — without knowing anything about your organisation's specific environment, your existing compensating controls, or the realistic capability and interest level of attackers targeting your sector. The result is a number that tells you about theoretical worst-case severity.

## The Questions That Reveal Actual Risk

A better prioritisation approach starts with CVSS as context and adds three additional questions that reflect how attackers actually make decisions.

First: is this system directly reachable from the internet? Internet-facing systems are accessible to any attacker at essentially zero cost. Internal systems require an attacker to first achieve a foothold — a significantly more expensive prerequisite.

Second: does a working exploit exist, or is exploitation known to be active? The CISA Known Exploited Vulnerabilities catalog maintains a running list of CVEs observed in real attacks. A finding on that list deserves greater urgency than theoretical findings of similar severity.

Third: what does successful exploitation actually give an attacker? A vulnerability that gives access to a quarantined segment with no sensitive data nearby is a different risk than one that provides direct access to customer payment information.

## Vulnerability Management as a Living Process

A vulnerability management programme is not a scan-and-fix cycle. It is a continuous process of discovering what exists in your environment, understanding where the attacker opportunity is concentrated, and steadily reducing that opportunity in order of actual impact.

The programme requires continuous asset discovery — networks change, new services get deployed. It requires authenticated scanning that logs into systems to read their actual configuration. And it requires remediation tracking that follows each finding from discovery through verified remediation.

The metric that matters is not how many vulnerabilities exist. It is whether the rate of remediation is keeping pace with the rate of new discovery — whether the overall attack surface is growing or shrinking.

## Conclusion

Severity scores are a starting point, not a strategy. They capture how bad a vulnerability could be in a worst-case scenario. They do not capture how likely that scenario is, what it would cost someone to execute it, or whether your organisation represents a worthwhile target.

Prioritising vulnerabilities through the lens of attacker economics — exposure, exploitation availability, and access value — produces a remediation order that reflects the actual risk to your organisation. Fix the things that make you a profitable target. Start with the ones where the attacker's math works best.
