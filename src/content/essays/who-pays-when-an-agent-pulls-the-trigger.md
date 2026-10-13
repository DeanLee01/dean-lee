---
title: "Who Pays When an Agent Pulls the Trigger?"
description: "American Express launched an intent verification protocol for autonomous AI purchases. When software models gain write-access to capital, payments networks will extract a tax to insure the tail risk."
pubDate: 2026-10-13
column: "AI Economics"
number: 62
---

At TechCrunch Disrupt in San Francisco, American Express introduced its Intent Intelligence Framework, an infrastructure standard designed to authenticate consumer intent before autonomous software completes a transaction. Through an API layer, the protocol captures bounds (merchant identities, spending ceilings, item specifications), generates a cryptographic Proof of Intent Token, and dispenses single-use digital payment credentials. The stated premise is consumer protection: preventing nondeterministic models from misfiring and buying the wrong airline tickets or ordering surplus inventory.

The technology is sensible engineering. The commercial incentive behind it, however, is not risk prevention. It is the defensive positioning of card networks preparing to tax agentic workflows before software intermediaries bypass legacy interchange fees.

For two years, agent demonstrations operated strictly in read-only mode: scraping prices, summarizing itineraries, and drafting customer reviews. These activities generated massive API usage for foundational model providers while requiring zero balance-sheet risk. The moment an agent transitions from read access to write access, executing trades, booking hotel rooms, signing enterprise software renewals, the bottleneck shifts from token generation speed to settlement liability.

In conventional consumer finance, the allocation of dispute risk is well understood. Regulation E and Regulation Z establish statutory caps on consumer loss from unauthorized electronic transactions. Issuing banks and card networks absorb edge-case fraud, funding those reserves out of merchant discount rates ranging between two and three percent. That actuarial model relies on a fundamental behavioral constant: humans possess physical fatigue and limited execution bandwidth. A compromised card credential might run through several fraudulent charges before automated fraud heuristics trip a block.

Autonomous software removes that execution ceiling. An agent with execution permissions and an open prompt injection vulnerability can initiate hundreds of programmatic purchases across fragmented merchant endpoints in seconds. If an enterprise agent misinterprets an unstructured prompt and purchases non-refundable software licenses at four times the intended volume, the resulting dispute is neither standard credit card fraud nor typical merchant breach. It is an algorithmic error generated under a valid user authorization token.

Existing merchant acquiring agreements are ill-equipped to absorb that category of loss. If banks routinely charge back high-velocity agent blunders to merchant processors, merchants will reject agent-mediated checkouts. If banks absorb the losses directly, current interchange margins cannot survive the volatility.

By introducing the Intent Intelligence Framework, American Express is inserting a cryptographic boundary into the transaction stream. Capturing signed intent tokens prior to checkout accomplishes two critical economic objectives. First, it legally shifts the evidentiary burden: a cryptographically bound token establishes that the transaction fell within the user's initial policy envelope, insulating the network from unauthorized transaction claims under legacy payment regulations. Second, it creates a proprietary protocol toll booth.

Model developers like OpenAI and Anthropic have long aspired to turn conversational interfaces into sovereign commerce platforms. In their ideal unit economics, the model operator routes consumer purchasing intent directly to merchant balance sheets via low-cost rails, capturing marketplace take rates while disintermediating payment networks.

The Amex protocol demonstrates why that disintermediation remains elusive. Silicon Valley can optimize model reasoning, but it cannot underwrite credit risk without significant balance sheet capital. Payment networks hold banking charters, real-time risk engines, and decades of settlement law precedent. By conditioning execution tokens on verified intent proofs, card networks ensure that the execution layer remains tethered to their rails.

The ultimate price of autonomous agency will not be measured solely in inference tokens or API subscriptions. It will be priced in the spread between model instructions and verified settlement. Autonomous agents may soon handle the administrative toil of commerce, but legacy payment networks will continue collecting their spread at the gate, underwriting the tail risk that software engineers cannot debug away.
