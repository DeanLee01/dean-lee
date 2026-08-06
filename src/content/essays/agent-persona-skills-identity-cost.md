---
title: "The Expensive Part of Persona Agents Is Identity"
description: "Persona skills make AI agents more useful, but they also turn identity into a reusable asset that needs pricing, governance, and tighter permissions."
pubDate: 2026-08-06
column: "AI Economics"
number: 1
---

A useful personal agent has to remember enough about you to stop asking the same questions. That is the steelman for persona skills. Nobody wants to rebuild context every time a calendar agent, coding assistant, travel bot, or research tool starts a new session. If the agent knows your writing habits, risk tolerance, approval style, preferred sources, and awkward little constraints, it can do less theater and more work.

The new AntiSkillBench paper makes the other side harder to wave away. The authors study persona skills, meaning distilled artifacts built from personal interaction histories and reused by downstream agents. Their benchmark uses 7,500 persona-grounded dialogue traces across 50 rich profiles, then measures privacy leakage, attribute disclosure, and behavioral impersonation across several distillation strategies. Their reported result is not just that agents can leak explicit facts. The risks persist across frontier backbones and distillation protocols, and extend into communication style and personality traits. The tested defenses help unevenly and do not generalize cleanly.

That matters because the economics of agents push in exactly this direction. Context is expensive to collect. Workflow preferences are expensive to elicit. Personal style is expensive to infer. Once a vendor has packaged those signals into a portable skill, the marginal cost of reuse falls. The product team sees retention. The user sees convenience. The security team sees a new bearer asset.

Bearer asset is the right mental model. A password proves access. A persona skill can help prove you. Not perfectly, and not in a courtroom sense, but well enough to draft as you, choose as you, route work as you, and persuade another system that a request belongs to your normal pattern. That changes the loss function. The harm is no longer only a database row with your address or employer. It can be an executable approximation of your operating style.

Firms will be tempted to treat this as another privacy setting. That is too cheap. A privacy setting usually assumes the risky object is data at rest, accessed by a known application. Persona skills are closer to identity derivatives. They are built from many small observations, reused across contexts, and valuable precisely because they compress behavior into something portable. Deleting one source record may not delete the inference. Revoking one app may not revoke the pattern if it has already been distilled elsewhere.

There is a market-structure angle here. The companies with the broadest distribution will have the best raw material for persona skills. Email, documents, browser sessions, code repos, messages, calendars, support tickets, payment flows. Each surface adds a little more signal. The convenience story points toward bundling, because a persona layer is more useful when it spans tools. The risk story points toward separation, because a compromised or over-permissive persona layer has a larger blast radius.

This is one reason open versus closed agents is not only a model-quality debate. A closed suite can enforce a consistent identity and permission model, at least in theory. It can also make the persona layer harder to inspect or move. An open ecosystem can give users more control and portability, but portability cuts both ways. If the artifact travels, so does the risk. The winning design is not obvious. It depends on who bears the cost when an agent acts too much like its owner in the wrong place.

The early web offers a useful contrast. Cookies were not invented as a grand surveillance architecture. They solved a state problem. Over time, the market discovered that state was also targeting, attribution, and power. Persona skills solve a context problem. It would be odd if the market did not also discover that context is retention, switching cost, fraud surface, and bargaining power.

The outside evidence is already pointing in that direction. DataDome reported 7.9 billion AI agent requests across its network in January and February 2026, with trusted agent names being spoofed at scale. Recorded Future argues that agentic AI will push identity and access management toward agent identity governance, because agents need access to cloud applications and internal systems to be useful. These are not the same problem as persona-skill leakage, but they rhyme. Once software can act, identity stops being a login screen and becomes an operating perimeter.

For users, the practical lesson is not to reject personalization. That would be like refusing autocomplete because keyboards can leak. The lesson is to price the option correctly. A persona skill that helps an agent choose better sources for a blog draft is one thing. A persona skill that can send mail, approve invoices, access client records, and imitate writing style is another. The second one should come with narrower scopes, short-lived credentials, audit logs, and boring revocation paths. Boring is good here.

For vendors, the hard problem is incentive-compatible restraint. The most profitable persona layer is persistent, cross-product, and hard to leave. The safest persona layer is scoped, legible, and easy to kill. Users will not read a forty-page control panel. Enterprises will not accept a black box that turns employee behavior into a transferable credential. Regulators will care once the first visible incident joins impersonation with material loss.

My prior is that persona agents become real infrastructure only after the industry stops treating memory as a feature and starts treating it as balance-sheet risk. The asset is useful because it concentrates personal signal. The liability is the same sentence.

The distribution to watch is not benchmark accuracy alone. It is where the tail losses sit. If the vendor captures the retention upside while the user or employer eats the impersonation downside, the equilibrium will be too much memory in too many places. If liability, insurance, and procurement force the vendor to carry more of the tail, persona systems will look less magical and more like financial plumbing. Slower. More permissions. More logs. Fewer demos that pretend context is free.

That would be a healthy trade. Agents should learn enough to be useful. They should not quietly become portable claims on who you are.
