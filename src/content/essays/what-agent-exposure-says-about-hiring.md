---
title: "What Agent Exposure Says About Hiring"
description: "A large study finds slower job-posting growth at firms whose shares move with agent use. The measure leaves important questions open."
pubDate: 2026-11-24
column: "AI Economics"
---

A hiring slowdown can be a sensible response to a productivity gain. If software handles a larger share of routine work, a firm may need fewer new employees for the same output. It may also expand output, lower prices, or ask employees to do different work. The direction of total employment depends on which adjustment wins.

A [November 20 working paper](https://arxiv.org/abs/2611.27210) by Nicola Borri, Anton Cheremukhin, Yukun Liu and Aleh Tsyvinski offers a way to look for an early signal. The authors combine OpenRouter usage data with 34.8 million US job postings matched to 1,784 listed parent companies. They find slower subsequent posting growth among firms more exposed to a measure of AI agent use. The paper measures postings, not hires or layoffs, and its exposure measure is indirect.

## What the researchers measure

OpenRouter connects users to models hosted by different providers. The researchers count tokens associated with model responses that end in an external tool call, such as a request to run code or read a file. They use weekly growth in this aggregate token count as their agent-use factor.

The firm-level measure is a market beta. The authors estimate how each company's stock returns move with growth in aggregate agentic token consumption, controlling for the market return. A higher beta means a stock has been more sensitive to that aggregate factor. It does not tell us how many agents the company purchased, or how many employees used them.

That construction has an advantage. Investors may incorporate information about demand and competitive pressure before a company discloses a detailed implementation. The authors find that higher-beta firms subsequently made more mentions of AI agents in filings and earnings calls. Mentions lend the measure some support, though they still do not establish a count of deployed agents or their effect on a particular team.

## A relative slowdown, not a headcount estimate

In the main analysis, a one-standard-deviation increase in the agentic beta predicts approximately 2.11% lower job-posting growth over the following six months, after the paper's controls. That is a difference in growth between firms, not a finding that 2.11% of workers lost their jobs. A company could have rising postings and still grow more slowly than another.

The authors also study the period after the September 2025 release of Claude Code 2.0, using exposure estimated before the release. They report 4.73% lower six-month posting growth for a one-standard-deviation difference in pre-release beta. Their event-study interpretation assumes that higher- and lower-exposure firms would otherwise have had similar posting growth after controls. Other changes around the same period could complicate that comparison.

The paper reports a stronger negative relationship for non-senior postings; the estimate for senior postings is statistically insignificant. That does not prove senior hiring was unaffected. It says the data do not precisely establish a senior effect in that specification. The authors also report no decline in advertised wages, which is a different outcome from the wages of people already employed.

## Who bears the adjustment

A firm that slows entry-level recruiting may save money before any employee is laid off. For a new graduate, the same decision narrows the set of openings. Existing workers, applicants and shareholders therefore need not experience the adjustment at the same time. The study cannot put a dollar amount on that transfer, nor can it tell an individual applicant which employer will hire.

There is another reason to resist a tidy causal story. A stock can move with an aggregate AI factor because investors expect a firm to benefit, face competition, or change its spending. Those expectations can themselves track other changes in business prospects. The authors control for industry, time and firm characteristics and run alternative specifications, but those steps cannot turn a market-derived beta into a direct record of workplace automation.

The sample also covers listed US firms with sufficient posting activity, not every employer. OpenRouter is one route to models, not a census of all enterprise usage. The paper's event is a useful test of timing, not a randomized rollout of coding agents.

For someone deciding how much weight to put on an AI hiring headline, the useful distinction is between an exposure proxy and observed staffing. Watch whether the relative posting pattern persists, whether it appears in actual hiring and employment records, and whether output expands enough to offset fewer openings per unit of work. Until then, the result is evidence of a labor-demand pattern worth investigating, not a count of jobs replaced by agents.
