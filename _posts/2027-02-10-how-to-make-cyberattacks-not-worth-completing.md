---
layout:   post
title:    "How to Make Cyberattacks Not Worth Completing"
date:     2027-02-10
category: Cybersecurity Insights
excerpt:  "Five concrete controls that raise attacker cost instead of chasing perfect prevention — from hardware MFA to honeypots."
author:   aegispub
---

Most cybersecurity guidance focuses on blocking attacks. This framing creates an unrealistic expectation: that a sufficiently good defence prevents all attacks from succeeding. A different framing is more achievable. Instead of asking "how do we prevent every attack?" ask "how do we make successful attacks not worth completing?"

This approach, grounded in attacker economics, shifts the goal from perfect prevention to deliberate cost imposition. You are not building a wall that no one can climb. You are making the climb so expensive that the attacker's expected return no longer justifies the investment.

## 1. Hardware Multi-Factor Authentication: Making Credentials Worthless

Credential phishing is one of the most economically efficient attacks available. A phishing kit costs a few hundred dollars. Email distribution costs almost nothing. Even a tiny success rate against thousands of recipients produces profitable results.

Hardware security keys (FIDO2/WebAuthn) address what happens after the credential is stolen. When a hardware key is required for login, it is cryptographically bound to the legitimate login site. Even if an employee enters their credentials on a fake phishing page, the attacker cannot use those credentials. The hardware key will not authenticate against a fraudulent site.

The phishing campaign still runs. The credential still gets stolen. But the stolen credential cannot be used. The return on investment drops to zero.

## 2. Rate Limiting: Breaking the Economics of Automated Attacks

Automated attacks are only economically viable because they are cheap to run at scale. A credential stuffing attack tests millions of username and password combinations from other breaches. Even a small success rate produces access to many accounts.

Rate limiting disrupts that model. When a login system limits attempts before triggering a challenge or block, the attacker must rotate through a large pool of proxy IP addresses. Proxy pools cost money to maintain. As the required pool size grows, the cost of the attack increases. At some threshold, the cost exceeds the value of accounts that testing would reveal.

## 3. Endpoint Detection: Forcing Custom Development

The majority of attacks against business endpoints use commodity tooling — freely available remote access tools, standard exploitation frameworks. This tooling is used because it works, and because it is cheap.

A modern endpoint detection and response product with behavioural analysis makes commodity tooling dangerous to use. These tools are already fingerprinted. To bypass a modern EDR, an attacker needs custom tooling — modified versions not yet fingerprinted, or purpose-built code written specifically for this campaign. Custom development takes time and skill. Time and skill cost money.

## 4. Internal Monitoring: Taxing Every Step After Entry

Without internal network monitoring, an attacker who gains initial access can move relatively freely. They can probe systems, escalate privileges, locate valuable data, and take their time reaching their objective.

With monitoring inside the network — watching traffic between internal systems — every step the attacker takes after gaining access generates a signal. An attacker who knows the internal network is instrumented must move more slowly. Slow movement costs time. Time costs money. And every additional hour is an hour in which detection becomes more likely.

## 5. Honeypots: The Zero-False-Positive Detector

A honeypot is a decoy — a fake server, a fake set of credentials, a fake file with an enticing name. Nothing legitimate ever accesses it. Any interaction with a honeypot is therefore unambiguously suspicious.

For a small organisation, a basic honeypot can be as simple as a file named "employee-passwords-backup" in a shared network location, configured to send an alert whenever it is opened. No legitimate employee would ever need to open that file. If it is opened, something is wrong — and the alert fires with essentially zero chance of being a false alarm.

## Conclusion

The goal of practical cybersecurity is not to stop every possible attack. It is to make the attacks most likely to target your organisation not worth completing. Credential phishing becomes worthless when stolen credentials cannot be used. Automated scanning becomes uneconomical when rate limits force expensive proxy infrastructure. Commodity malware stops working when endpoint tools require custom development to bypass.

None of these measures is perfect. All of them raise the cost of attacking you above the threshold where most of the attackers actually targeting organisations like yours will choose to continue. That is a defensible, achievable, realistic goal.
