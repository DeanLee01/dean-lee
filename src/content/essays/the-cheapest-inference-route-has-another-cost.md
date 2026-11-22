---
title: "The Cheapest Inference Route Has Another Cost"
description: "OpenRouter's provider review puts a price on a question missing from many AI invoices: who can see the prompt along the way?"
pubDate: 2026-11-23
column: "AI Economics"
---

A model router can make a sensible buying decision easier. One API gives a team access to several models and hosting providers, with a way to move traffic when prices or availability change. The savings are visible on an invoice. The people who can read a prompt along its route are harder to count.

On November 22, [OpenRouter said](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) it had removed three providers from its platform and taken 125 endpoints off its zero data retention eligibility list after investigating researchers' findings. The endpoint removals included precautionary decisions as well as providers flagged by researchers. OpenRouter said the findings did not show a breach or unauthorized access of OpenRouter itself, and that it had notified potentially affected customers.

The distinction matters when choosing a route. Zero data retention is a data-handling commitment, not a guarantee that a provider cannot be compromised. Nor does removing an endpoint from eligibility establish that each of its requests leaked. A buyer needs the policy and evidence that the parties on the route follow it.

[Dragos researchers reported](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens) sending approximately two million prompts containing unique, trackable test secrets across AI services from July through November. They observed evidence of compromises at three providers, instances where marketplace resellers could access prompts through logging, and cases where data appeared to travel contrary to privacy settings. Those are findings from an investigation, not an estimate of the leakage rate across every provider or request. An untriggered canary also cannot prove that nobody read a prompt.

The route can be longer than the label in a model picker suggests. Dragos describes one router forwarding some traffic to a marketplace and says it used network observations and nested error responses to investigate hidden hops. A low advertised token price may still be a good deal, but it does not tell the customer who else processes the request. The buyer who wants flexibility has to evaluate the path as well as the model.

One provider's account shows a different failure mode. [Together AI said](https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026) an unauthorized party downloaded stored prompt samples after a credential for a private repository was exposed in public code. Together said the samples were authorized for testing, its review of affected contents was ongoing, and it had made zero data retention the default for new accounts. This is not evidence that every request on its service was affected. It does show why a retention setting and a provider's security controls answer different questions.

The economic trade is uneven. The customer receives a lower inference bill immediately, while the cost of reviewing vendors, investigating an incident or handling exposed data sits elsewhere in the organization. A router can earn its place by doing some of that work across many customers: identifying upstream processors, checking that restrictions survive each hop, and removing routes when evidence changes. Those checks have a cost too. They may narrow the provider pool or make the cheapest route unavailable.

For a team choosing where to send sensitive work, the practical comparison is therefore between complete routes. Ask which upstream providers and subprocessors can receive the data, whether fallback can change that list, and how an incident would be reported. Pinning a provider or sending certain requests directly may reduce routing uncertainty, though direct service still has its own security and data-sharing risks. Separate highly sensitive inputs from routine traffic if the cheaper pool cannot meet the same requirements.

OpenRouter says it is adapting the researchers' tests for ongoing checks and examining network paths for forwarding to third parties. The useful result will be a route a buyer can inspect and a change the buyer can see when that route no longer qualifies. Until then, a per-token quote is only one line of the bill.
