---
layout:   post
title:    "Why Your Logs Might Not Save You — And How to Fix the Most Common Monitoring Gaps"
date:     2026-08-10
category: Research & Analysis
excerpt:  "A monitoring system that is running is not the same as one that is seeing. Four common failure modes — silent sources, coverage gaps, short retention and parsing gaps — and how to fix each."
author:   aegispub
---

## Introduction

Many businesses and IT teams assume that having a monitoring system means they'll know when something goes wrong. The assumption is understandable. After all, if the system is running and collecting logs, surely it would detect a problem.

The gap between that assumption and reality is one of the most consequential issues in practical security. A monitoring system that's running but covering only part of the environment generates alerts about only part of what's happening. The rest is invisible — and that invisible space is where most sophisticated attackers operate.

This guide examines the most common monitoring gaps that leave organisations exposed, explains why they're hard to notice until you're looking for them, and offers practical steps for anyone responsible for a security monitoring programme.

## The Silent Failure: When Log Sources Stop Sending Data

The most dangerous monitoring failure isn't a false alarm. It's a log source that stops sending data without anyone noticing.

Here's what happens: a configuration change is made to a server — a routine update, a software upgrade, a network modification. As a side effect, the setting that forwards log data to the central monitoring system is altered or disabled. The server stops sending logs. The monitoring system receives nothing from that server.

No alert fires. The monitoring system has no way to know what it's missing unless someone specifically built a rule that fires when expected data doesn't arrive. Most monitoring deployments don't include this kind of check.

The gap continues until someone investigates an incident and discovers that logs from that server stopped being collected weeks or months earlier. At that point, the data that would have explained the investigation is gone.

The fix is monitoring for the absence of expected data — often called data-absence alerting. The principle is simple: if a server normally generates thousands of log entries per day and suddenly produces zero, that silence should trigger a notification. Implementing this requires knowing what each source normally generates (its baseline volume) and creating an alert that fires when the received volume drops significantly below that baseline.

This is a standard feature in most modern monitoring platforms, but it requires deliberate configuration. It doesn't happen automatically.

## The Coverage Illusion: When Monitoring Covers Less Than You Think

A related problem is the gap between assumed coverage and actual coverage.

An organisation deploys a monitoring system, connects its most important servers and workstations, and considers the implementation complete. Over time, new systems are added to the environment. Some are connected to the monitoring system; others aren't. Cloud services are adopted without anyone asking whether they should be adding their logs to the central system.

The result is a monitoring system that covers the environment as it existed when the implementation was completed, not the environment as it exists today. The dashboards still look green. The alerts still fire. But an increasing proportion of the environment is generating no data for the system to analyse.

The only way to find this gap is to compare the monitoring system's list of active sources against the current asset inventory. Any asset in the inventory that isn't in the sources list is a gap. Assets that were in the sources list but have since been decommissioned appear as active sources generating zero data — a different kind of signal worth investigating.

This comparison should be a regular practice, not a one-time exercise during the initial deployment. A quarterly review that matches the asset register against the active monitoring sources surfaces gaps before they have consequences.

## The Retention Problem: When Evidence Expires Before the Investigation

Even when monitoring coverage is complete and log sources are forwarding correctly, there's a third failure mode that's determined before any incident occurs: the retention policy.

Log retention policies define how long collected data is kept before being deleted. The decision is typically made based on storage cost — longer retention is more expensive, so organisations often set the shortest retention period they believe they can get away with.

The problem is that security incidents often aren't detected quickly. Sophisticated attackers deliberately pace their activity to avoid detection, staying below the thresholds that would trigger alerts and blending their behaviour with normal operations. The average time between an attacker's initial access and their detection is measured in weeks or months.

An organisation with a thirty-day retention policy that detects an incident forty-five days after the initial access cannot reconstruct how the attacker got in. The logs that would tell that story were deleted fifteen days earlier. The investigation can examine what's happening now, but not the history of how it started.

Understanding the full history of an intrusion matters for complete remediation. Attackers establish persistence — hidden accounts, scheduled tasks, software implants — at various points during their presence. Without the historical logs, some of those persistence mechanisms may go undiscovered. The organisation cleans up what it can see and believes the incident is resolved, while the attacker retains access through mechanisms that the incomplete investigation never found.

The practical guidance on retention periods reflects real investigation requirements: ninety days minimum for operational logs, twelve months for authentication and identity logs, with high-sensitivity systems warranting extended retention at whichever end of that range fits the budget.

## The Parsing Gap: When Data Is Collected But Not Usable

A fourth failure mode is subtler than the others and easier to overlook: the monitoring system is receiving data from a log source, but the data isn't being correctly interpreted.

Modern monitoring systems receive data in many different formats from many different sources. Windows servers produce logs in one format. Linux servers produce them in another. Network devices, cloud services, and security tools each have their own formats. The process of transforming these varied formats into a common structure — so that the concept of a “source IP address” means the same thing regardless of which log it came from — is called normalisation.

Normalisation is the most labour-intensive part of configuring a monitoring system, and it's the part most likely to be incomplete. A log source whose data isn't correctly parsed produces records in the monitoring system that can't be correlated with records from other sources. Correlation rules — the logic that combines events from multiple sources to detect multi-stage attacks — depend on the data from each source being in a consistent, normalised format.

A monitoring system that's receiving twenty log sources but has only correctly normalised fifteen of them is running correlation rules against sixty percent of the data it's supposed to be analysing. Attacks that leave traces in the unnormalised sources are invisible to every detection rule in the system.

## Practical Steps for Improving Monitoring Reliability

These four failure modes — silent source failures, coverage gaps, insufficient retention, and parsing gaps — are all detectable and fixable. The practical steps for each are distinct:

- **Silent source failures:** implement data-absence alerting for every monitored source. Define the expected daily volume range for each source and create alerts that fire when observed volume falls significantly below the floor of that range.
- **Coverage gaps:** conduct quarterly reviews comparing the active sources in your monitoring system against your current asset inventory. Any asset not in the sources list is a gap to assess and close.
- **Retention problems:** review current retention periods against a realistic estimate of attacker dwell times in your industry. Adjust retention for high-sensitivity systems to match investigation requirements rather than storage budget minimums.
- **Parsing gaps:** audit normalisation completeness for every connected source. Any source whose data can't be correlated with other sources in correlation rules is not providing the visibility it appears to provide.

## Conclusion

The monitoring system that appears to be working and the monitoring system that's actually providing reliable security visibility are not always the same thing. The gap between them is filled by silent failures, incomplete coverage, expired evidence, and data that's collected but not usable.

The discipline that closes this gap is regular validation: not just confirming that systems are running, but confirming what they're actually seeing and whether that coverage matches what the environment requires. That validation is not glamorous work. It rarely generates the kind of visible incident response activity that gets noticed in security programmes. But it's the foundational work that makes everything else in the monitoring programme worth the investment.
