---
title: "The Eighty-Five Percent Goodwill Loophole"
description: "When Nvidia paid $17 billion to license Groq's LPU architecture, it booked $14.4 billion as goodwill attributable to the workforce. Delaware Chancery filings show how synthetic mergers bypass antitrust review and statutory appraisal rights, turning rival chipmakers into captive cloud resellers."
pubDate: 2026-10-08
column: "AI Economics"
number: 57
---

In corporate accounting, goodwill is the residual premium paid over the identifiable fair value of net assets. It represents future economic benefits that cannot be individually identified or separately recognized, such as brand reputation, customer loyalty, and assembled human capital. In normal manufacturing acquisitions, goodwill rarely exceeds thirty or forty percent of transaction value. Physical plant, patents, working capital, and customer contracts account for the rest.

When Nvidia structured its transaction with Groq in late 2025, the balance sheet arithmetic broke all historical conventions.

A proposed class action unsealed in Delaware's Court of Chancery on October 8, 2026, filed by former Groq engineers Benjamin Serebrin and Joshua Rubin against former CEO Jonathan Ross and the Groq board, details the exact anatomy of the transaction. The total headline consideration was $20 billion. Yet Nvidia never bought Groq. In an internal email to employees, Nvidia chief executive Jensen Huang stated plainly that Nvidia was not acquiring Groq as a company.

Instead, the transaction was divided into two distinct components. Nvidia paid Groq a $17 billion technology license fee, structured as $13.0 billion in cash at closing and $4.0 billion in deferred payments within one year, including imputed interest. Separately, Nvidia established a $3.0 billion restricted stock pool reserved exclusively for Groq personnel who agreed to transition their employment. Nvidia then hired roughly 200 engineers, representing nearly the entire core chip design staff, including Ross and Chief Architect Igor Arsovski.

The accounting reality appeared several months later in Nvidia's annual report filed with the SEC. Nvidia assigned just $2.5 billion of the purchase price to the acquired technology assets. It allocated $14.4 billion of the license fee directly to goodwill, noting in the footnotes that this premium was primarily attributable to the workforce and future development of the licensed technology. The filing added that no customer contracts, existing products, or equity interests were purchased.

Goodwill accounted for roughly 85% of the total license consideration. Nvidia paid 5.8 times more for the assembled talent and the agreement not to compete than it did for the underlying intellectual property portfolio.

The economic logic sits at the intersection of antitrust enforcement and minority equity claims.

Under the Clayton Act and the Hart-Scott-Rodino Antitrust Improvements Act, acquiring the voting securities or operational assets of a direct competitor above statutory thresholds triggers mandatory pre-merger notification. An outright acquisition of Groq by Nvidia would have faced immediate regulatory opposition. Groq was the only commercial competitor demonstrating a radically different architecture for large model inference, using an SRAM-heavy, deterministic tensor streaming processor that bypassed the high-bandwidth memory bottlenecks defining Nvidia's GPU clusters. A direct takeover would have invited immediate second requests from the Federal Trade Commission and the Department of Justice.

A non-exclusive intellectual property license, by contrast, sits in a regulatory blind spot. Because Nvidia did not purchase voting shares or acquire operating corporate divisions, the companies argued the arrangement fell outside standard merger review guidelines. The Department of Justice eventually issued a formal request for information months after closing, but by then the transaction was irreversible. The engineering team had moved, the code repositories were integrated, and the product roadmap was absorbed.

The second optimization targeted corporate governance and minority shareholder rights. Under Delaware General Corporation Law Section 251, a statutory merger requires a formal vote of common shareholders and grants dissenting holders statutory appraisal rights under Section 262, allowing them to petition the Court of Chancery to determine the fair cash value of their stock. Section 271 similarly requires a shareholder vote for a sale of substantially all corporate assets.

Structuring the transaction as an intellectual property license paired with individual employment offers bypassed both statutory protections. The plaintiffs allege that common shareholders were denied a formal vote on the transaction and stripped of appraisal rights. Furthermore, treating the $17 billion as a corporate licensing fee converted what would have been capital proceeds into corporate taxable income at the entity level, eroding net cash before distributions. Meanwhile, the preferred venture funds on Groq's board maintained their equity stakes or rolled over into a reorganized corporate shell.

The industrial outcome illustrates who held bargaining power throughout the transaction. Following the transfer of its engineering core, Groq abandoned independent chip design entirely. The business reorganized as Groq LLC, raised a $350 million Series A at a $3.5 billion valuation (roughly half its prior $6.9 billion valuation), and pivoted to become an AI cloud infrastructure provider.

In August, Groq joined the Nvidia Cloud Partner program. It announced that it would deploy Nvidia Groq 3 LPX racks, built with Samsung 4nm process technology and paired with Nvidia Vera Rubin NVL72 architectures, in partnership with Dell. The company that invented the language processing unit is now leasing those same processors back from Nvidia to resell compute hours to third parties.

For Nvidia, spending $20 billion to acquire the LPU engineering team and subordinate the SRAM architecture into a co-processor rack was a rational risk-adjusted trade. The transaction neutralized an architectural hedge that could have challenged GPU pricing power in decode-heavy inference, while adding 315 FP8 PFLOPS of decode acceleration to its Rubin product cycle.

For venture-backed common shareholders, the legal precedent is dangerous. As antitrust agencies raise the friction on formal mergers, acquirers increasingly unbundle the target company into a commercial license and an employment transfer. The intellectual property and engineering talent migrate to the buyer's balance sheet, while common stockholders remain invested in an operating entity that no longer owns the product it spent a decade building.
