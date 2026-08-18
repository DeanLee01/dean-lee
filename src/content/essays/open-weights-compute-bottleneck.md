---
title: "Open Weights Do Not Move the Bottleneck Far Enough"
description: "Dario Amodei is right that open weights alone do not decentralize frontier AI. The harder question is whether regulation or commodity inference does more to loosen the compute bottleneck."
pubDate: 2026-08-18
column: "AI Economics"
number: 10
---

Dario Amodei's argument against open weights is stronger than the usual closed-lab version of this debate. He is not saying that open models are useless. In his exchange with investor Gavin Baker, he said open weights help, but only partly, because frontier AI still depends on chips, power, and large-scale infrastructure. The New Stack quoted the line cleanly: open weights "simply shift the concentration somewhat to those with the most compute and chips." TechRepublic framed the same point as a challenge to the idea that downloadable models will democratize Silicon Valley by themselves.

That is a good argument. It is also a convenient one for Anthropic.

Start with the steelman. A model file is not a data center. If the frontier keeps moving with scale, the party that controls accelerator supply, cloud capacity, power contracts, networking, and depreciation schedules has a lot of the bargaining power. A startup can download weights and still rent the scarce part from a hyperscaler. An enterprise can self-host a model and still discover that the monthly GPU bill behaves like a second cloud contract. The open-weight victory can be real at the software layer and still thin at the physical layer.

This is the part open-source rhetoric often rounds off. Code is cheap to copy. Frontier compute is not. If performance improves with training runs that cost more, and if useful inference at scale requires reserved capacity, the economics will pull toward firms that can finance the machines before demand is certain. The marginal developer gets autonomy over prompts, data handling, fine-tuning, and deployment choices. The industry as a whole may still settle around a small number of capital providers.

The result is a different kind of centralization. Not one API vendor deciding every rule, but a chain of bottlenecks: Nvidia or its rivals for chips, hyperscalers for capacity, utilities for power, landlords and local governments for sites, and the largest AI labs for demand commitments that make the whole stack financeable. Open weights can weaken one gatekeeper while leaving three others intact.

Baker's side deserves its own steelman. Open weights do reduce dependence on a single model company. They let researchers inspect behavior, let enterprises keep sensitive workloads closer to their own systems, and let smaller firms build products without asking permission from a closed API provider. They also put pricing pressure on proprietary models. Even if the largest frontier systems remain expensive, a lot of economic value lives below the frontier. Customer support, coding assistance, document review, search, analytics, and internal workflows do not all need the most capable model available on the day of deployment.

That matters. The market does not buy intelligence in one clean block. It buys latency, price, privacy, reliability, integration, procurement comfort, and enough capability for the job. Open weights are powerful when the task can trade a little capability for more control or lower cost. In that zone, they are not symbolism. They are a price check.

So the real question is not whether open weights decentralize AI. They do, in some places. The question is where the bottleneck moves after they do.

At the top of the capability distribution, Amodei's compute argument still bites. If a model needs a giant training run and expensive inference to compete, capital decides who plays. That does not vanish because the license says open. Someone funded the training run. Someone bought or rented the GPUs. Someone takes the utilization risk after the initial excitement fades. The weights may be public, but the frontier remains tied to balance sheets.

Below the frontier, the story is less friendly to closed labs. Quantization, smaller specialized models, better routing, distillation, and local hardware make more workloads economical outside the API bundle. A weaker model that runs cheaply and predictably can beat a better model with an uncertain bill. Enterprises especially care about that. They do not want a demo that wins a benchmark and then becomes an unbounded operating expense.

This creates a barbell. The frontier gets more capital-intensive. The useful middle gets more competitive. Anthropic's preferred framing tends to focus on the first half because that is where safety rules and frontier-lab governance live. Open-weight advocates tend to focus on the second half because that is where users can actually switch. Both are describing real markets. They are just not describing the same slice of the distribution.

Regulation sits awkwardly across that barbell. Amodei argues that regulation need not mean capture. He says Anthropic has supported tiered rules that slow frontier labs while exempting smaller companies, including thresholds based on training compute or revenue. In principle, that is sensible. A policy that treats a hobby model and a frontier system the same way would be a gift to incumbents. A policy that puts the heavy burden only on the labs with the largest runs can reduce catastrophic-risk concerns without crushing ordinary experimentation.

But thresholds are not magic. Training compute is visible before release, which makes it administratively tempting. Capability is what users care about, and capability can change through fine-tuning, tool use, scaffolding, retrieval, and deployment context. A model below a compute threshold can become more dangerous or more valuable once it is attached to the right workflow. A model above the threshold may be less useful than expected. Regulation will want a clean line. The market will keep handing it a cloud of points.

There is also the incentive problem. Every large lab can sincerely believe in safety and still prefer rules that make its own cost structure the industry standard. That is not a conspiracy. It is corporate gravity. If you have already paid for frontier compliance, audits, evaluations, reporting, and internal safety teams, a world where those functions become table stakes feels responsible and competitively natural. Smaller labs will hear the same proposal as a fixed cost.

The open-weight camp has its own incentive problem. It can treat decentralization as if releasing weights automatically disperses power. It does not. If the best open model requires scarce chips to serve at useful scale, the user has only moved from one landlord to another. If cloud providers become the real control point, then open models can turn into lead generation for GPU rental. That is still better than a single closed API in many cases, but it is not decentralization in the strong sense.

My prior is that open weights will matter most where inference becomes boring. Boring is not an insult. It means models are cheap enough, small enough, and reliable enough that users can choose them the way they choose databases or search libraries. At that point, margins compress, integration matters, and the model provider loses some mystique. The frontier labs will still sell frontier capability, but more of the economy will refuse to pay frontier prices for non-frontier tasks.

That is why Amodei is right and incomplete. Open weights alone do not break the capital bottleneck. They are not a substitute for chips, substations, cloud contracts, or the cash to absorb underused capacity. But they can break the habit of treating one lab's API as the default unit of AI adoption. They make substitution easier. They make price discrimination harder. They give buyers a credible outside option, especially when the job does not need the best model in the world.

The useful test is simple: who can say no? If a developer can say no to Anthropic but not to Nvidia, power has moved. If an enterprise can say no to a proprietary API but not to its cloud provider, power has moved. If a small lab can release useful weights but needs a hyperscaler to make them fast and cheap, power has moved. In each case, open weights improved the user's bargaining position without dissolving the infrastructure constraint.

That may sound modest, but modest changes in outside options can still move prices. Markets do not need perfect decentralization to discipline a supplier. They need enough credible alternatives to make the supplier negotiate.

The next phase of AI competition will probably look less like open versus closed and more like a stack of choke points. Weights, data, evals, chips, power, distribution, procurement, and regulation will each have their own market structure. Open weights solve one layer. Frontier scale concentrates another. The winners will be the firms that know which layer they actually control.

Amodei wants the debate to stop pretending that openness at the model layer automatically decentralizes power. Fair. The closed labs should accept the symmetric point: safety language and tiered regulation do not automatically decentralize power either. In both cases, follow the bottleneck. That is where the rents go.
