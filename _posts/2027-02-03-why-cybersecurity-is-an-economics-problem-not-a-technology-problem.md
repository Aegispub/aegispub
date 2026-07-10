---
layout:   post
title:    "Why Cybersecurity Is an Economics Problem, Not a Technology Problem"
date:     2027-02-03
category: Cybersecurity Insights
excerpt:  "Attackers run cost-benefit calculations like any rational actor. Understanding that changes what security investment should actually look like."
author:   aegispub
---

There is a version of cybersecurity thinking that imagines your organisation under siege by an unstoppable force — a highly skilled, infinitely patient adversary who will eventually get in no matter what you do. This picture is vivid. It is also, for most businesses, inaccurate.

The majority of cyberattacks targeting small and medium-sized businesses are not sophisticated, targeted operations. They are commodity campaigns — automated tools running against thousands of organisations simultaneously, looking for the targets where the standard attack playbook produces a return on investment. When the math stops working in the attacker's favour, they leave.

This is not a reason to be complacent. It is a reason to think about security differently — as an economics problem rather than a technology arms race. Your goal is not to build a perfect system. It is to make your organisation a bad financial investment for the attackers most likely to target you.

## Attackers Are Running a Business

Before targeting any organisation, an attacker runs a calculation. On one side of the ledger: what could they extract — customer data, financial credentials, business information, access to a payment system. On the other side: what it will cost them to extract it — the technical tools required, the time investment, the risk of detection, the opportunity cost of not targeting an easier mark instead.

When the cost of attacking you exceeds the expected return from doing so, the rational attacker moves on. This means security investment can be evaluated through a clear lens: does this measure raise the cost of attacking us past the point where we are a profitable target?

## The Four Concepts Worth Understanding

Before making good security decisions, it helps to get four terms straight. They are frequently conflated, and the confusion leads to real resources being spent in the wrong places.

A threat is an actor or event with the potential to cause harm. A vulnerability is a specific weakness in your systems. Risk is the combination of the two: the probability that a specific threat will successfully exploit a specific vulnerability, multiplied by the impact if that happens. Exposure is the state of being both vulnerable and reachable by an attacker.

Getting these distinctions right transforms security conversations. When a vulnerability is identified, the relevant questions are: who is the realistic threat actor, what would it cost them to exploit this specific weakness, is this system actually exposed to that attacker, and what is the genuine business impact if exploitation succeeds?

## What Raising Attacker Cost Looks Like in Practice

Consider credential phishing — the attack type responsible for a significant proportion of small business breaches. A phishing campaign costs an attacker almost nothing to run. A ready-made phishing kit can be purchased for a few hundred dollars. Even if only a fraction of a percent of recipients enter their credentials, the campaign produces valid logins to real systems.

Now consider what happens when the targeted organisation deploys hardware-based multi-factor authentication — specifically FIDO2 security keys. The attacker successfully phishes a set of credentials. They attempt to use those credentials to log in. The system requires a hardware key that is physically in the employee's possession and cryptographically tied to the legitimate website. The stolen password is worthless.

The attacker did not fail because the phishing email was blocked. They failed because the outcome of a successful phish — a stolen credential — no longer provides access. The return on investment from the campaign dropped to zero. This is the practical meaning of raising attacker cost.

## Why Your Threat Profile Matters

Security programmes that protect against the wrong threats waste both money and attention. Most small and medium businesses do not face nation-state actors with custom-built tools and multi-year patience. They face commodity criminal operations, opportunistic automated scanners, and financially motivated groups running volume operations.

Knowing this changes the investment profile substantially. The controls that protect against commodity attackers — current patching on internet-facing systems, hardware multi-factor authentication, login rate limiting, basic internal monitoring — are accessible and affordable.

## Conclusion

Cybersecurity is not a technology problem with a technology solution. It is an economics problem that happens to involve technology. Attackers are running a business, and the goal of your security programme is to make your organisation a business environment where their margins do not work.

Understanding your actual threat profile, designing defences that specifically raise attacker cost against that profile, and measuring success by whether the attacker's math still works — these are the habits that produce durable security outcomes.
