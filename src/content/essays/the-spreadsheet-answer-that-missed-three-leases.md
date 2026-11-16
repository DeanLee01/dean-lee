---
title: "The Spreadsheet Answer That Missed Three Leases"
description: "A new workbook benchmark shows why checking the rows an AI returns is only half the verification job."
pubDate: 2026-11-17
column: "AI Economics"
---

A spreadsheet assistant can give you six correct answers and still leave $14 million out of the forecast. In a public example from [GDP.xlsx](https://arxiv.org/html/2611.17766v1), a new benchmark of professional workbook tasks, an agent identified six qualifying tenancies but missed three others whose tenant break dates appeared on another tab. The missing leases accounted for $14 million in forecast net rent over three years.

The six returned entries were correct. Checking them against the workbook would not, on its own, reveal the omission. A reviewer also has to establish that the search covered every place where a qualifying lease could appear. That extra work belongs in the cost of using an AI assistant, even when its first answer arrives quickly.

## What the benchmark measures

The authors, Suhaas Garre, Sushant Mehta and Edwin Chen, assembled 70 requests from professionals across 13 domains, with 58 Excel workbooks and 12 CSV files. The files contained 2.18 million populated cells in total. Each request came with an expert-written rubric; the 70 rubrics contained 791 binary criteria.

The tasks were deliberately hard. The contributors started with workflows where frontier models had previously failed them. Agents had spreadsheet tools and up to 60 minutes and 200 turns per attempt. They answered in text; edits to a workbook or other files were not graded. An agentic model judge, which could open files and run code, applied the rubrics.

The leading configuration passed every criterion on 38.3% of scored attempts, under the paper's task-averaged strict pass@1 measure. The median of the 20 configurations was 19.3%. A single missed criterion could turn an otherwise useful answer into a failure. Provider errors and timeouts were excluded from scoring, so the figure is not an end-to-end completion rate. It is also not an estimate of the share of spreadsheet cells that are wrong.

There are reasons to treat the result as a warning about this particular test rather than a universal failure rate. The sample was chosen around previously difficult workflows. The judge was itself a model, and only three of the 70 tasks are public. A company deciding whether to use an assistant still needs evidence from its own files and review process.

## The missing row is expensive to check

The benchmark makes a useful distinction between an answer's precision and its completeness. In the rent example, all six returned tenancies qualified, but the answer found six of the nine that should have been listed. A spot check of the six rows could establish that they belong on the list. It could not establish that the list was complete.

The structure of the source files makes that difference consequential. The paper reports that 41 tasks required information to be linked across sheets, and 21 carried meaning in layout or formatting. One equipment-register task put the relevant cabinet label in a pasted diagram. A reviewer who checks only the visible text returned by the assistant can miss information that never reached the answer.

The model can still be useful. It may assemble a first pass, point to promising rows and save time on routine calculations. The savings are smaller if a person then has to reconstruct every search from scratch. They are larger when the task has a known control total, a reliable list of candidate records, or a cheap independent way to check the answer's coverage. The paper does not measure the time or cost of those checks, so it cannot tell us which workflow wins economically.

## Put a price on verification

For a team comparing assistants, the relevant unit is an accepted answer, including the work needed to verify it. A cheaper or faster run is attractive when the reviewer can quickly check completeness. For a high-stakes forecast with no control total, the same output may require a much longer review. That cost falls on the organization using the assistant, even if the model provider's invoice is small.

A practical trial can start with a small set of representative files and a known answer for each. Record the time to produce and verify an answer, including the search for missing items. Check whether the assistant inspected the relevant tabs and conditions, and compare that effort with the existing manual process. This is a proposed evaluation, not an intervention tested by the paper.

The rent example is a useful test case because the errors hide in the absence of three rows, not in the six rows that look right. A model comparison that counts only correct returned rows would miss the same $14 million that the answer did.
