---
title: "The Optimal Stopping Illusion"
description: "Empirical tests show autonomous agents recognize useless search results 97% to 100% of the time, yet query until the budget deadline anyway. You cannot prompt an autoregressive model into capital discipline; optimal stopping requires an exogenous boundary in the execution harness."
pubDate: 2026-10-07
column: "AI Economics"
number: 56
---

In sequential decision theory, the search problem is framed around optimal stopping. An agent gathers observations sequentially. Each extra query carries a marginal cost: token consumption, API fees, latency, and context degradation. Rational stopping dictates that an agent continues querying only so long as the expected marginal value of information exceeds the marginal cost of acquisition. When incoming data yields nothing, the option value of continuation goes negative, and the search must terminate.

Enterprise deployments of tool-using language agents lean heavily on the assumption that models can internalize this calculus. Enterprise architectures hand models a set of search tools, define an operational budget, and embed cost warnings in the system prompt. The thesis is intuitive: as models scale in reasoning capability, they will weigh the quality of retrieved evidence against the expenditure of running another tool turn, pruning unproductive searches before blowing through their token ceilings.

A pre-registered empirical study by researchers across Nanyang Technological University, the National University of Singapore, and Carnegie Mellon University directly stress-tests this assumption. Evaluating seven open and frontier model architectures across 90,000 episodes in a controlled retrieval failure environment, the authors isolated how agents judge evidence from how they actually decide to stop.

The empirical results reveal a stark operational dissociation. The agents are not blind. When retrieval tools return unhelpful or corrupted results, the tested models correctly identify the incoming information as useless between 97% and 100% of the time. They evaluate the quality of the data with near-flawless accuracy.

Yet their stopping decisions completely ignore their own judgments. The authors constructed a time-matched contrast metric, measuring whether an agent was more likely to stop after an unbroken string of useless results than after a sequence containing useful evidence. For prompt-governed agents, that contrast remained near zero. The models recognized that the well was dry, yet they continued pumping anyway.

Prompt engineering fails to bridge this gap. Introducing explicit financial costs per call into the prompt changes the timing slightly but does not tie stopping to evidence quality. Telling models they have permission to answer from internal memory triggers arbitrary premature halts regardless of whether external retrieval succeeded. Most revealingly, stating an explicit step budget transforms an upper limit into a spending target. For open models in the 7-billion to 8-billion parameter range, declaring a budget simply shifted the stopping distribution directly onto the final deadline.

Like a bureaucratic division burning through its annual appropriations in the fourth quarter to prevent next year's budget from being cut, an agent with an eight-step budget treats eight steps as a quota to be consumed.

To understand why this happens, you have to look at the loss function. An autoregressive language model has no endogenous balance sheet. It experiences zero disutility from spending compute. In token generation, committing to a terminal answer carries immediate downside risk: the model produces a definitive output that can be scored as incorrect. Executing another tool call, by contrast, feels like risk postponement. The model defers accountability by remaining in an iterative state, spending the client's credit balance to avoid committing to a distribution.

The paper shows that stopping follows evidence only when the architectural harness enforces it exogenously. When the runtime code intervenes to remove tool access after five consecutive useless results, leaving only the terminal answer action, task success increases across every single model architecture tested, and the stopping point remains invariant even when the step budget doubles.

The market assumption treats autonomous agents as mini-enterprises that can be persuaded into capital discipline via prompt instructions.

I want the distribution, not the point estimate.

The median case in enterprise agent software today is an unhedged American call option granted to an algorithm with zero loss aversion. Giving an agent API keys and a prompt that says "be frugal" does not induce cost discipline; it creates an unmonitored spending ceiling. If the execution harness does not enforce the stopping boundary at the code level, the model will burn the entire allocation every time it encounters unexpected variance.

Capital discipline in automated workflows is not an emergent reasoning skill that appears with more training tokens. It is an exogenous constraint imposed by contract. The firms that build profitable agent pipelines will not be the ones writing longer cost warnings into system prompts. They will be the ones that treat search as an expensive derivative and hardcode the exercise boundary into the execution engine.
