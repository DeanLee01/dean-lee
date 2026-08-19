---
title: "Google's Marvell Warrant Prices the TPU Supply Chain"
description: "Google's warrant for nearly 59 million Marvell shares ties custom chip economics to purchase volume. The deal says more about bargaining power than chip design alone."
pubDate: 2026-08-19
column: "AI Economics"
number: 11
---

Google's new agreement with Marvell is easy to read as another custom AI chip headline. Reuters reported that Marvell issued Google a warrant to buy up to 58.97 million Marvell shares at $206.58 a share, worth about $12.18 billion if fully exercised. The agreement covers custom semiconductor products connected to Google's TPU ecosystem, including inference accelerators, storage controllers, network interface controllers, memory interface controllers, and near-memory compute. Reuters also noted that a fully exercised stake would make Google Marvell's fifth-largest investor, based on LSEG data.

That list of parts matters. A TPU is a headline chip, but an AI data center is a system. The accelerator gets the attention because it is where the model math happens. The economics leak into the less glamorous parts: memory movement, networking, storage, rack-level integration, utilization, procurement risk, and the question of who takes volume risk before demand is certain.

The warrant structure deserves more attention than the press headline. According to a summary of Marvell's filing, 1,360,867 shares vest in quarterly installments during the first year after execution. The remaining shares vest in 240 equal tranches, with one tranche vesting for each $500 million of custom product revenue from Marvell's fiscal third quarter of 2027 through fiscal 2033. Put plainly, most of the upside comes only if Google keeps buying.

That is a clean way to turn a supply contract into a shared payoff. Google does not have to acquire a supplier to push it toward Google's roadmap. Marvell gets a large customer with a visible purchase path. Google gets a potential equity upside if the work it sends to Marvell helps reprice Marvell's custom silicon business.

The market reaction fit the story. Reuters said Marvell rose more than 11 percent in premarket trading while Broadcom fell more than 2 percent. Broadcom has been Google's main custom chip partner and has a long-term agreement tied to future TPU generations and next-generation AI racks through 2031. The Marvell deal does not need to displace Broadcom to matter. A second credible partner changes the bargaining problem.

This is where hyperscaler custom silicon gets misunderstood. People often frame it as a direct assault on Nvidia. That reading has some truth. In-house chips can lower cost for a specific workload, especially inference, and reduce dependence on a single external GPU roadmap. Google has been doing that with TPUs for years. But the more immediate negotiation is inside the custom silicon supply chain. Google wants capacity, design help, and specialized components without leaving one vendor with too much hold-up power.

Supplier concentration is expensive even when the supplier is good. If a vendor owns too many of the design services, interfaces, packaging assumptions, and future rack decisions, the buyer pays for switching costs long before any formal price increase appears. A second partner gives Google another path for technical comparison and commercial discipline. It can ask which parts of the TPU ecosystem are scarce because they are genuinely hard and which are scarce because a single partner has become the default.

For Marvell, the warrant is also a bet on becoming infrastructure rather than a peripheral supplier. The custom silicon story has been strong because hyperscalers are willing to fund specialized chips at a scale normal enterprise buyers cannot touch. A design win in this market is not a one-off sale. It can become years of revenue if the part sits inside a growing internal platform. The filing's revenue-linked vesting schedule makes that explicit. Each tranche says the same thing in financial language: prove the purchase volume, then share the equity upside.

The numbers imply how large the ambition is. If 240 tranches vest at $500 million of custom product revenue each, the full variable portion points to a very large cumulative revenue path. I would not treat that as a forecast. A warrant schedule is a contract design, not a demand curve. Still, it shows the scale at which Google and Marvell are bargaining. This is not a lab experiment with a strategic press release wrapped around it.

The deal sits inside a much larger capital cycle. Bloomberg reported in April that the biggest U.S. tech firms were planning as much as $725 billion of capital expenditures this year, mostly on AI data center equipment. Fortune described estimates from Alphabet, Amazon, Meta, and Microsoft that put combined quarterly capital expenditures above $130 billion, with annual spending potentially near $700 billion, up from about $410 billion the prior year. The exact total will move with guidance, but the order of magnitude is the point. AI competition has become a balance sheet contest.

A capital cycle that large changes what a chip deal means. In ordinary software, the platform fight is often about users, distribution, and developer mindshare. In AI infrastructure, the platform fight starts earlier. It starts when a company decides which machines to buy, which power contracts to sign, which suppliers to lock in, and which technical standards become normal inside its data centers.

Google has one advantage most AI labs do not. It is both a large model builder and a large infrastructure owner. If a lab rents compute from a cloud provider, the cloud provider owns a meaningful piece of the economics. Google can internalize more of that stack. TPUs let it tune hardware to its own workloads, and Google Cloud can sell some of that capacity to customers. The same machine can support internal products and become a cloud product when the economics work.

Custom silicon still has a cost. Specialization trades flexibility for efficiency. A GPU is expensive partly because it is broad and well supported. A custom chip has to earn its keep through volume, workload stability, and software support. If model architectures shift quickly or demand arrives in a different shape than expected, a specialized path can become awkward. The buyer saves money only if the workload behaves enough like the plan.

The warrant helps handle that uncertainty. Google can commit volume over time rather than write a blank check at the start. Marvell can accept a structure in which some of the upside depends on actual revenue. Both sides are pricing the same distribution: maybe custom inference demand keeps compounding, maybe a few designs win and the rest disappoint, maybe the bottleneck moves from accelerators to memory, networking, packaging, or power.

I like the warrant as a signal because it is less theatrical than most AI partnership language. It says who has to do what. Marvell has to deliver useful custom products. Google has to buy enough for most of the warrant to vest. The equity part aligns incentives, but the purchase milestones keep the deal from being just a branding exercise.

Investors and suppliers should also watch the customer concentration risk. Hyperscalers are not normal customers. They have enough volume to make a supplier, enough engineering capacity to audit the supplier closely, and enough alternatives to squeeze margins if the supplier becomes replaceable. A big customer can be wonderful and dangerous in the same contract. The Google warrant could make Marvell look more central to AI infrastructure. It could also make Marvell more exposed to Google's procurement cycle.

Marvell is accepting a familiar trade. A custom silicon supplier wants hyperscaler intimacy because that is where the revenue is. The supplier also wants enough customers, enough reusable IP, and enough bargaining power to avoid becoming a design-services appendage to someone else's platform. The best outcome for Marvell is that Google volume funds capabilities Marvell can reuse across other cloud customers. The weaker outcome is a large, prestigious, lower-margin relationship that gives Google most of the option value.

Broadcom is the useful comparison. Its role with Google did not vanish because Marvell entered the picture. In a rational procurement strategy, Google keeps multiple partners close. One supplier may be better at networking, another at a memory-adjacent design, another at an inference accelerator, and another at packaging or integration. The buyer's ideal map has enough overlap to preserve competition and enough specialization to avoid wasting engineering effort.

Nvidia still sits in the background. Custom TPUs and ASICs can take share in workloads where the buyer has scale and a predictable demand profile. Nvidia keeps its edge where flexibility, software maturity, supply breadth, and time-to-deployment matter more than squeezing every unit cost for one internal workload. The fight will probably look less like a clean substitution curve and more like workload sorting. Training, frontier experimentation, inference at scale, enterprise cloud demand, and internal consumer-product serving can land on different chips.

The financial question follows the workload. Who owns the option when demand surprises to the upside? If Google sends enough work to Marvell, Google may own a valuable equity position. If Marvell turns the work into a broader custom silicon franchise, Marvell keeps more of the upside. If the main benefit is lower internal TPU cost, Google wins through cheaper infrastructure even before counting any shares. If demand disappoints, the unvested warrant simply tells us the bullish path did not arrive.

The Google-Marvell deal belongs in the AI economics file for that reason. It is a map of bargaining power. Google is using purchase volume as currency. Marvell is using equity upside to win a deeper seat in the TPU supply chain. Broadcom now has another reference point in negotiations. Nvidia watches custom silicon absorb some inference growth while the broader data center buildout still depends on high-end GPUs, networking, and software.

AI infrastructure is moving deeper into contract design. The contracts decide who finances capacity, who owns upside, who eats idle risk, and which supplier becomes hard to replace. The chip sits inside that bargain.

Follow the warrant. It points to the buyer with volume, the supplier with technical scarcity, and the revenue milestones that turn a partnership into an option on the next phase of AI capex.

## Sources

- Reuters, "Marvell gives Google option to buy $12.2 billion stake in custom chip deal," August 19, 2026.
- Marvell Technology Form 8-K summary, StockTitan, August 2026.
- Bloomberg, "US Big Tech Ratchets Up AI Spending Past $700 Billion This Year," April 30, 2026.
- Fortune, "Big Tech will spend nearly $700 billion on AI this year," April 30, 2026.
