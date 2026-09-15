---
title: "OpenAI Bundled Financial Data to Cut Out the Middle Tier"
description: "OpenAI launched ChatGPT for Financial Services with Morgan Stanley and Evercore, bundling PitchBook, Daloopa, and LSEG directly into its infrastructure. When the model host absorbs the data layer, specialized connector software loses its reason to exist."
pubDate: 2026-09-11
column: "AI Economics"
number: 31
---

On September 10, OpenAI introduced ChatGPT for Financial Services, a specialized enterprise configuration developed in partnership with Morgan Stanley and Evercore. The package connects GPT-6 Astra reasoning directly to licensed proprietary datasets, including PitchBook, Daloopa, LSEG News, Crunchbase, and Quartr.

OpenAI chose to index and host those datasets directly on its own infrastructure rather than relying on external Model Context Protocol connections or requiring client firms to negotiate standalone data contracts. By hosting the data centrally, the platform promises sub-second retrieval, unified governance, and granular citations that map generated figures back to specific tables in financial statements and earnings call transcripts.

I understand why Morgan Stanley and Evercore signed on as design partners. An entry-level investment banking analyst or equity research associate often spends fifty to seventy hours a week on repetitive data hygiene. They pull historical balance sheets from SEC filings, normalize adjusted EBITDA by auditing non-recurring charges in the footnotes, cross-reference private transaction multiples from PitchBook, and paste the output into pitch decks.

Current software setups for this workflow are fragile. A team attempting to automate financial comparisons typically chains together custom Python scripts, external API connectors, and spreadsheet plugins. Every external query adds round-trip latency, and minor schema shifts on the vendor side break downstream models. Moving the financial corpus directly into OpenAI's compute cluster eliminates orchestration friction. For Morgan Stanley and Evercore, paying a premium enterprise seat to recapture hundreds of junior associate hours each month is an easy operational return on capital.

The immediate casualty in this release is the software layer sitting between frontier models and corporate clients. Over the past three years, dozens of vertical enterprise startups raised capital by pitching themselves as specialized financial copilots. Their core proposition was bridging generic language models with institutional financial databases.

OpenAI's native bundle dismantles that intermediary layer. By striking wholesale data agreements with PitchBook, Daloopa, and LSEG, OpenAI absorbs the integration workflow into its core product. When the model vendor provides both the reasoning engine and the underlying data feeds within a single compliance perimeter, third-party software wrappers lose their pricing leverage.

The relationship between OpenAI and the data providers creates its own tension. For vendors like Daloopa and PitchBook, partnering with OpenAI offers immediate distribution to thousands of institutional finance professionals. At the same time, it shifts user interaction away from proprietary vendor terminals and into OpenAI's prompt interface. When financial analysts no longer interact with the original vendor software, the data providers risk turning into wholesale inventory suppliers. In digital distribution, the interface that captures user workflow retains the majority of economic surplus, while commodity data suppliers face long-term pricing pressure.

A deeper operational constraint lies in the nature of financial liability. In software engineering, an automated agent can verify its output by running automated test suites against a compiler. In investment banking, financial models are legal artifacts. A merger fairness opinion or a debt covenant model cannot tolerate subtle hallucinations. Adjusted EBITDA is not a standardized GAAP metric; management teams routinely modify calculations to highlight favorable operating trends, and sell-side analysts often contest those adjustments.

Granular citations help mitigate this risk by allowing bankers to inspect the exact footnote disclosures behind an adjusted margin. Even with precise citations, senior bankers cannot delegate fiduciary responsibility to an automated system. Analysts will still spend material time auditing source citations to confirm that excluded restructuring costs or stock-based compensation figures match the deal team's underwriting assumptions. The software reduces transcription labor, but it leaves the verification burden firmly on human analysts.

Pricing power will ultimately depend on whether OpenAI can move beyond efficiency gains into true workflow entrenchment. A Bloomberg Professional terminal commands roughly $30,000 annually because it controls real-time liquidity, trade execution, and the messaging network that coordinates market participants. ChatGPT for Financial Services offers research synthesis and fundamental modeling, which remain advisory functions rather than market plumbing.

OpenAI is testing whether horizontal frontier labs can capture high-value vertical software budgets by absorbing the data supply chain. For Wall Street banks, the product lowers the hourly cost of financial modeling. For specialized software startups built on external API connectors, it demonstrates that when a frontier lab decides to own an enterprise vertical, the middle layer gets compressed first.
