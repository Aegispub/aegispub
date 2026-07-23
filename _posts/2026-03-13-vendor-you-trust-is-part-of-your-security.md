---
layout:   post
title:    "The Vendor You Trust Is Part of Your Security"
date:     2026-03-13
category: Cybersecurity Insights
excerpt:  "Give a vendor access to your systems and their security becomes part of yours. Here's how inherited risk actually works."
author:   aegispub
---

## Introduction

Most people think about security as something that applies to the systems they control directly — their computers, their accounts, their network. The idea that a breach could come through a third party they trust, through software they did not write, through a vendor relationship they signed off on without a security review, is less intuitive.

It is also one of the most common ways organizations of every size get compromised.

When you give a supplier, software provider, or service partner access to your systems — or when you use their tools to handle your data — you extend your security boundary beyond your own walls. Their security becomes part of yours. Their weaknesses become your exposure.

Understanding why this happens, and what to do about it, is increasingly important for any business that uses outside services — which, in practice, means every business.

## How Inherited Risk Works

The mechanism is straightforward once you see it. Your payroll software provider has access to your employee records. They also use a third-party timekeeping tool. That tool is built on an open-source library that has a known vulnerability. An attacker who discovers that vulnerability has a potential path that runs from the library, through the timekeeping tool, through the payroll software, into your data.

You have a direct relationship with only one of those organizations. You have inherited the risk of all of them.

This is what security professionals mean when they describe third-party risk as transitive. Trust does not stop at the boundary of the vendor you chose. It propagates through every relationship that vendor has trusted in turn.

The attackers who exploit this are not necessarily targeting you. They are looking for the most accessible path into organizations like yours, and smaller suppliers with weaker security controls and trusted access to larger customers are a well-established route.

## The Procurement Moment Is the Leverage Moment

Here is the most practically important thing to understand about third-party risk: your ability to demand security improvements from a vendor drops sharply once the relationship is operational.

Once the contract is signed, the software is integrated, and the relationship is running, asking a vendor to improve their security practices means either accepting a "we're working on it" response or threatening to end the relationship — which carries real cost and disruption. Neither is a comfortable position.

Before the contract is signed, the dynamic is entirely different. Security requirements at this stage are negotiable conditions, not retroactive demands. The vendor wants the business. A security term in a contract can simply be a condition of doing business. A vendor who cannot meet reasonable security requirements — or who treats them as unreasonable — is giving you useful information before you commit rather than after.

For businesses without legal teams, this does not need to be complex. A few clear questions asked before signing can establish a baseline. Does the vendor have a security certification of any kind? How would they notify you if they discovered a breach affecting your data, and within what timeframe? When did they last have an independent security review? Who is your contact if something goes wrong?

The answers, and whether the vendor treats these as normal business questions or unexpected obstacles, will tell you a great deal.

## What Good Vendor Security Practice Looks Like

For businesses that work with vendors regularly — which includes almost every small business that uses any cloud software, accounting tools, payment processing, or customer management systems — a few practices make a meaningful difference.

Review vendor access periodically. It is easy to add a software integration or grant access and then forget about it. A regular check — even annually — of what services have access to your data or systems, and whether each one still needs that access, catches relationships that have outlived their purpose.

Set a security question as standard for renewals. When a vendor contract comes up for renewal, make it a practice to ask whether anything has changed about their security posture since the last contract period. Has there been a breach? Have their certifications lapsed? Have they had a security assessment recently?

Scale scrutiny to access level. Not all vendors carry equal risk. A supplier who has no access to your systems presents a different risk profile than a software provider whose tool processes your customer data or connects to your financial accounts. Apply more thorough review to vendors with more access.

Put breach notification in writing. One of the most important terms to have in any vendor relationship is an agreement that the vendor will notify you within a defined timeframe — 24 or 48 hours is reasonable — if they discover a security incident that may affect your data. Without this term, you may not find out about a breach until well after the fact.

## The Coffee Machine Problem

A hospital security team discovered this principle in concrete form when they found twelve unknown devices on their network during a routine scan. The devices turned out to be smart coffee machines — procured by the facilities team, connected to the main corporate network, running outdated software with two documented vulnerabilities, managed remotely by the vendor over an unencrypted connection.

The problem was not the coffee machines. The problem was a procurement process that never asked a security question. The facilities team had made a reasonable business decision — convenient coffee service for staff — without any mechanism to flag that the decision involved connecting internet-capable devices to the hospital's corporate network.

Every business has a version of this story. The specific device or service varies. The underlying mechanism is the same: a purchasing decision that did not include a security consideration, followed by an asset sitting on the network for months without review.

## Conclusion

Your security chain extends to every vendor you trust, every tool you use, and every third-party relationship where someone outside your organization has access to your systems or your data. Most businesses have not audited these relationships from a security perspective.

The practical starting point is not a comprehensive overhaul. It is a deliberate habit: ask the security question before signing, review access periodically, and treat the vendor relationship as part of your security perimeter — because, whether you treat it that way or not, it already is.
