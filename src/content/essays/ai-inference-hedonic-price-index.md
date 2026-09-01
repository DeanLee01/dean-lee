---
title: "Why AI Compute Deflation Vanishes on the Enterprise Invoice"
description: "Official statistics measure a 10% annual fall in AI inference costs, while a quality-adjusted hedonic index finds a 52% collapse. Yet per-task enterprise bills are flat. Louis Yiven Zhu's new panel shows why token deflation and buyer spend diverge."
pubDate: 2026-09-01
column: "AI Economics"
number: 21
---

Every vendor in machine learning advertises price deflation. A million input tokens on a frontier API costs less than a third of what it cost eighteen months ago, and lightweight models have dropped even faster. Yet enterprise software budgets tell a contradictory story. Total compute bills for teams building agent pipelines or document extraction systems keep growing.

The gap between crashing token tariffs and stubborn IT invoices usually gets dismissed as simple Jevons paradox, where cheaper tokens induce more volume. But volume is only part of the mechanism. An empirical working paper by Louis Yiven Zhu at Oxford, "The Price of Intelligence: A Quality-Adjusted Price Index for AI Services" (arXiv:2608.29843), puts hard econometric structure around what is actually happening in the pricing of inference.

Zhu constructed a panel assembling 21,024 posted-price observations across 3,208 models and 86 cloud providers, joined to 4,605 benchmark evaluations. The goal was to build a hedonic price index for model intelligence, similar to how national statistical agencies construct quality-adjusted price indices for microprocessors, automobiles, or cloud storage.

When statistical agencies track software prices using standard matched-model methods, they follow the price of an identical SKU over time. Applied to Zhu's inference dataset, the matched-model method finds that inference prices fell at roughly 0.10 log points a year, or about 10%. That looks like mild deflation.

The reality looks completely different once you estimate a latent quality ladder from evaluation response patterns. On a quality-adjusted basis, the inference price index fell at 0.73 log points a year, an annual drop of roughly 52%. That means approximately 87% of the real deflation in machine intelligence is invisible to current national accounting methods.

The discrepancy comes from how frontier labs price new architectures. Providers rarely slash the price of an aging flagship model by 60% in place. Instead, they introduce a newer architecture that matches or exceeds the old flagship's benchmark score at a fraction of the operating cost, while retiring or deprioritizing the older SKU. Standard matched-model indices miss these discontinuous quality leaps because they compare existing SKUs against themselves.

The most striking finding in the paper concerns what happens when you switch from seller pricing to buyer expenditure. Counted per completed task, the buyer price stopped falling.

The divergence between token prices and task costs is driven by test-time compute. As labs shifted from single-turn generation to reasoning architectures and multi-step agent loops, models began consuming tokens at an exponential rate per successful answer. A task that once required 800 tokens on a standard model now consumes 15,000 tokens across internal scratchpads, self-critiques, and tool calls on a reasoning model. Even if the nominal price per token drops by half, an eighteen-fold expansion in token intensity raises the total cost of getting the correct output.

The seller experiences massive productivity gains and advertises deflation per unit of raw compute. The buyer receives higher task reliability, but the cash required to clear a business workflow remains flat or moves upward.

Zhu also ran a pre-registered validity audit on benchmark integrity that should worry anyone building quantitative models on public leaderboards. When he audited the dataset for contaminated benchmarks, removing tainted evaluations left the relative ranking of models virtually unchanged, with a rank correlation of 0.998. To a machine learning engineer glancing at a leaderboard, the evaluation looked rock-solid.

Yet that same contamination correction shifted the estimated quality-adjusted price index by 0.49 log points a year. Leaderboard stability is an ordinal property; economic statistics and hedonic deflators depend on cardinal distance. A benchmark that gives inflated scores to specific models distorts the estimated price of intelligence across the entire frontier, even while preserving the leaderboard order.

The steelman for declining inference costs is that model routing and distillation will eventually break this dynamic. If a company can route 90% of simple queries to tiny 3B-parameter models and reserve 120B reasoning engines for difficult edge cases, per-task expenditure should resume its downward trajectory. Many engineering teams are actively building those routing layers today.

The friction is that task difficulty is rarely known before execution. When workflows fail silently on cheaper models, teams default back to heavy reasoning models with wide token budgets to protect reliability. Until verification becomes cheap and autonomous, buyers will continue trading token efficiency for variance reduction.

For quants and enterprise operators, the takeaway is clear. Measuring AI cost trends through nominal API rate cards is an accounting error. If your models consume ten times more reasoning tokens to reduce error rates by two percentage points, the price of your end product has gone up, regardless of what the provider puts on their pricing page.
