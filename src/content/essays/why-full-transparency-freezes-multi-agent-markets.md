---
title: "Why Full Transparency Freezes Multi-Agent Markets"
description: "A Stanford and UMD study reveals that handing frontier LLMs complete information triggers aggressive rent extraction in double auctions, cutting realized market welfare by up to thirty-five percentage points."
pubDate: 2026-11-06
column: "AI Economics"
number: 86
---

When engineers design multi-agent architectures, their default instinct is almost always total disclosure. If an autonomous procurement agent needs to buy compute or book logistics from an autonomous supplier agent, the prevailing practice is to maximize context. Developers feed system prompts with exact cost curves, budget ceilings, timeline deadlines, and marginal utility schedules. The underlying intuition comes from single-agent prompt engineering, where additional context reduces ambiguity. Transferred to an interaction between multiple agents, developers assume that complete transparency allows the system to clear at maximum theoretical efficiency.

In market microstructure, information is rarely neutral. Handing a counterparty an exact reservation price exposes bargaining surplus without hedging the transaction.

A research team from Stanford and the University of Maryland recently tested this architectural assumption empirically. In a study titled "Who Should Know What? Empirical Information Design for Multi-Agent LLM Economies" (arXiv:2611.07667), Mete Erdogan, Mirac Suzgun, James Zou, and their co-authors evaluated ten frontier language models across bilateral bargaining, multi-resource trade, and double auctions. Instead of treating information sharing as an all-or-nothing binary, the researchers held interaction rules and model checkpoints constant while altering disclosure policies from coarse signals, such as ordinal preference rankings, to full transparency with exact dollar valuations.

Their findings contradict the assumption that transparency improves multi-agent coordination. In double auctions, providing agents with full disclosure of counterparty costs and valuations caused market efficiency to collapse. Realized welfare for Claude Opus 5.5 dropped from 94.6% of maximum theoretical surplus under coarse information to 64.1% under full disclosure. Gemini 3.1 Pro fell from 97% to 78%. Grok 4.7 dropped from 97.4% to 62.1%.

The clearing engine in these auctions still identified buyer-seller pairs capable of generating over 99% of maximum possible gains. Candidate quality remained nearly perfect. The trades failed to execute because the agents priced each other out of the market. When sellers observed buyer valuations, they raised asking prices far above baseline production costs. When buyers observed seller margins, they lowered bids. Both sides attempted to capture the entire available surplus. In markets with wide potential margins, where the economic value of trade was largest, the resulting bid-ask spreads expanded until transactions froze entirely.

The breakdown stems from the difference between two economic functions of information: value discovery and value capture.

Value discovery is the process of identifying whether a mutually beneficial transaction exists. If agent A holds surplus memory bandwidth and agent B holds surplus token allocation, they must know enough about each other's constraints to determine if a swap creates net utility. Value capture is the strategic struggle over how the resulting surplus is divided.

In simple economic environments, value discovery requires very little information. In two-resource bilateral exchanges, ordinal preference rankings alone are enough for frontier models to identify viable trades. When researchers gave agents exact numeric valuations in those simple settings, the extra data contributed nothing to discovery. Instead, models used the precision for value capture.

For models like GPT-6 Sol and Claude Opus 5.5, moving from coarse preference rankings to exact valuations produced a surge in extractive counteroffers. The researchers defined an extractive counteroffer as a proposal that increases the proposing agent's private gain while reducing both the counterparty's gain and total combined surplus relative to the preceding offer. In asymmetric markets, GPT-6 Sol increased extractive counteroffers from 0.63 to 1.50 per negotiation. The proposing agent squeezed additional margin, but the counterparty often rejected the offer, resulting in lower realized aggregate gains (falling from 97.7% to 90.8%).

The paper documents a structural shift when market complexity rises. When the exchange expanded from two resources to ten resources, the combinatorial space of possible trades grew exponentially. In that high-dimensional setting, coarse signals were no longer sufficient for agents to discover efficient allocations. At ten resources, full information improved trade discovery enough to outweigh the friction of value capture. For GPT-5.1, realized gains in ten-resource markets rose from 63.8% under coarse disclosure to 80.4% under full disclosure.

This divergence reveals the core trade-off in multi-agent system design. Detailed information pays for its carrying cost only when the combinatorial problem of finding a match is severe. When the matching space is simple, granular transparency provides no allocative benefit while actively encouraging aggressive holdout behavior.

In classical economic theory, the Myerson-Satterthwaite theorem established in 1983 that no bilateral trading mechanism can achieve ex-post efficiency, Bayesian incentive compatibility, and individual rationality without outside subsidies when information is private. For decades, economists viewed incomplete information as the fundamental friction preventing efficient clearing.

The empirical results from LLM economies expose an inversion of that logic. When engineers eliminate private information by publishing exact reservation prices into shared prompt spaces, they do not recover frictionless clearing. Frontier language models are fine-tuned and reinforcement-learned to optimize task payoffs tenaciously. When an agent observes the exact boundaries of a counterparty's indifference curve, its learned objective drives it to push bids to the absolute edge of that boundary. Because opposing agents apply the same extraction logic simultaneously, the market breaks down.

For developers and engineering leads building multi-agent workflows, these findings suggest practical architectural rules:

First, avoid passing raw reservation prices, internal budget limits, or true marginal costs directly into counterparty agent context windows. Information disclosure is a first-class control variable rather than a documentation dump.

Second, in bilateral negotiations and procurement loops, restrict inter-agent communication to coarse, ordinal signals. Allow agents to declare priority orderings, binary acceptability thresholds, or banded ranges rather than exact floating-point values. The empirical data shows that ordinal ranking preserves trade execution while dampening the incentive for destructive extraction.

Third, when precise pricing is required to clear complex multi-party swaps, route transactions through an independent automated clearinghouse. A mediator can ingest private valuation constraints from participating agents under strict confidentiality, calculate the joint surplus-maximizing allocation, and return binding take-it-or-leave-it settlements. This preserves the computational benefit of exact data for value discovery while preventing agents from exploiting counterparty margins for value capture.

Multi-agent coordination requires mechanism design. When an architecture allows agents to observe every dollar of surplus on the table, those agents spend their compute fighting over the distribution.
