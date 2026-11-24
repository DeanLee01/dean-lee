---
title: "The Agent Bill for Incomplete Data"
description: "A tool can return a plausible fragment without returning the whole answer. A fault-injection study puts a price on the verification question."
pubDate: 2026-11-25
column: "AI Economics"
---

An agent that reports a database total after a tool failure may look cheaper than a person who checks the source. If the tool returned only part of the table, the savings depend on whether anyone notices before the total is used. A successful tool call and a complete answer are separate things to verify.

In a [November 20 paper](https://arxiv.org/abs/2611.28341), Gün Kaynar, Boshen Yan and Carl Kingsford test what happens when tools fail during multi-step agent tasks. Their example is concrete: an agent reports revenue of $32,000 after reading a truncated set of rows, when the correct total is $48,750. The arithmetic on the rows received can be consistent while the answer to the original question is wrong.

## The experiment

The researchers built a sandbox with a real filesystem and SQLite databases, a constrained shell and a local mock HTTP server. They designed 30 tasks with known answers and injected nine types of fault, from denied permissions to partial data. Four agents ran 2,100 faulted baseline trials in total. The trials included cases where the targeted fault never fired, or where a partial-data fault could not actually degrade the returned payload. Answers were graded against ground truth by a separate model.

Across the four agents, correct recovery ranged from 18.9% to 67.6% of faulted runs. The share ending in a wrong or unsupported answer asserted as fact ranged from 5.5% to 25.9%. These are results for the study's tasks and injected faults, not estimates of failure rates for a production system.

Partial data was especially difficult. In the pooled baseline, 38.3% of runs assigned a partial-success fault ended in a fabricated answer. The researchers describe the mechanism as silent ingestion: the agent treats the fragment as valid and continues. In their experiment, a visible access denial more often led to an admission that the task could not be completed.

## The monitor and its blind spot

The authors also tested a monitor that observes the agent and can issue corrective instructions. Its checks include comparing asserted values with tool output and recomputing some aggregates. Across all faulted runs, the monitored setup raised correct recovery from 45.6% to 56.3% and reduced fabricated answers from 17.3% to 10.8%.

That improvement came with extra work: the monitor used a second, stronger model and averaged 6.4 supervisory calls per run, against 11 steps for the agent. The paper reports call counts, not a dollar cost or an end-to-end productivity gain. A buyer comparing systems would need the prices, latency and review costs for their own workload.

The monitor was weakest on the most deceptive case. For partial-success faults, fabrication fell from 38.3% to 32.1%. The monitor engaged after an error, but a truncated response often arrived without one. A total computed correctly from the rows received can pass a check against those same rows while missing the rows that never arrived. The study's code-only monitor did not improve that partial-success result.

## Who pays for the check

A low agent price is attractive when the answer is easy to inspect or a mistake is cheap to reverse. The same price says less about a workflow where a partial result can pass into an invoice, a financial report or another automated decision. In those cases the customer bears the cost of detecting omissions and correcting downstream work. The paper does not measure those business losses; it identifies a failure mode that makes them worth considering.

A practical buying test is to include incomplete responses as well as obvious errors in an evaluation. For a paginated data source, the reviewer can compare the returned count and pagination status with the source's own metadata, where that metadata exists. For a total, a separate control total or a reconciliation against the complete source is more informative than checking the arithmetic on the agent's subset. These are evaluation choices, not interventions measured in the paper.

More oversight can improve results, and the study gives that argument real support. It also shows why an extra model call is not a substitute for evidence that the input is complete. The economically relevant comparison is the cost per answer a user can rely on, including the checks needed for that particular source.
