---
title: "The Coding Agent Bill After the Sixth Task"
description: "A Microsoft Research experiment puts a price on repeated work in coding-agent sessions, with limits on what the savings mean."
pubDate: 2026-11-18
column: "AI Economics"
---

A cheaper model is one way to reduce a coding agent's bill. Another is to stop paying it to rediscover the same repository on every task. The second approach preserves the model choice, though it comes with its own setup costs and risks.

In a [Microsoft Research report on TokenEconomizer](https://www.microsoft.com/en-us/research/blog/tokeneconomizer-learning-from-experience-to-make-ai-coding-agents-more-efficient/), researchers from UC Berkeley, Microsoft Research and Microsoft Security tested a plugin that learns from previous coding sessions. Across 277 SWE-Bench bug-fixing tasks in six repositories, they report average cost reductions of 18.4% to 30.9% across five agent and model combinations. The reported costs include the plugin's own model calls. Task success rates were broadly stable on their measures.

That is a useful result for anyone paying for repeated work in the same codebase. It is not a forecast that a team's invoice will fall by a quarter. The test uses benchmark tasks, and its savings depend on the agents, models and repositories the authors selected. The more useful purchase decision is whether the cost of keeping and checking repository context pays for itself over the work a team actually does.

## Paying twice for the same discovery

The authors first profiled Claude Code on 60 SWE-Bench tasks run sequentially by repository. Once a repository had at least five completed tasks, 30% of tool calls repeated an action from an earlier task in that repository. The agent also received descriptions for 23 tools on every turn, even though 16 were never called. The 17% of tasks that failed accounted for 32% of spending.

These are measurements from the authors' setup, not a census of production agents. Still, the mechanisms are easy to see. Sending unused descriptions consumes context. A repeated search or test costs another sequence of calls. A failing task can continue consuming resources without producing a usable fix.

The plugin addresses those costs in different ways. It proposes short repository-specific notes after patterns recur, removes tool descriptions its history suggests are unlikely to be needed, and uses a judge model to detect repeated failure. It can restore removed tools, and the open-source plugin alerts the developer if a stuck agent does not recover after a suggested change. Those interventions are themselves work: the research counts the plugin's model calls in the reported cost.

## The cost of learning

Each repository began without prior session history. In the authors' Claude Code cumulative-cost chart, early tasks could cost more while the plugin learned, and cumulative costs fell below the default by the sixth task in every tested repository. That is an observed break-even point for this experiment, not a promise that six tasks will be enough elsewhere.

Repeated work creates the opportunity to recover the initial expense. If a team moves between unrelated repositories or changes its tooling frequently, the value of accumulated context may be smaller. The authors also report savings on web-development and security-auditing benchmarks, including audits where each task used a new repository. That is evidence beyond the six-repository bug-fix test, though it still leaves the size of any particular team's benefit open.

There is a quality tradeoff in the alternative. The researchers report that reducing model reasoning effort produced similar or larger cost savings, but substantially degraded performance in their tests. A lower cost per run is less attractive if more runs fail or require a person to repair the result. The relevant denominator is a useful, accepted fix, not a completed model call.

## What belongs in the invoice

A team comparing approaches can track total agent and controller spend alongside accepted fixes over a representative sequence of tasks. It can also record the time spent reviewing changes and correcting bad repository notes. Those human costs are not established by the reported token savings, and the experiment does not price them.

The decision depends on the distribution of work. A repository with many similar tasks gives setup costs more chances to be recovered. A small project with one unusual assignment has less history to reuse. Either way, an old instruction can become an expensive shortcut if it steers an agent toward an outdated assumption, so a lower token bill deserves to be read beside the quality of the resulting work.

For the tested combinations, the researchers found savings even after counting their controller's model calls. Whether those savings survive a team's review costs and changing codebase is a separate measurement, one that belongs beside the provider's price per token.
