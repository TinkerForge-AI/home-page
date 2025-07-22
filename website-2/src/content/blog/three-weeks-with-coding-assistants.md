---
title: "Rethinking Coding Assistants: Beyond the Hype and Toward Real AI Collaboration"
date: 2025-07-22
author: "D. Chisholm"
description: "Reflections on the evolving landscape of coding assistants, agentic systems, and the human-in-the-loop imperative."
tags:
  - AI
  - Coding Assistants
  - LLM
  - Software Engineering
  - Research
---

<p class="intro">
Three weeks ago, I set out to test GitHub Copilot—mostly out of curiosity and the low barrier to entry ($10 a month). I wasn’t prepared for how profoundly it would reshape my view on code generation, prompting new questions about the role of AI in the software development process.
</p>

## “Vibe Coding” and Its Limits

The term “vibe coding” is often tossed around to describe a style where programmers lean heavily on AI to fill in the details, trusting the machine to bridge knowledge gaps. But “vibe coding” is only as effective as the programmer’s own expertise. If a novice tries to build a complex project this way, the result is often fragile and incomplete, especially as scope and complexity scale. Over the past few weeks, I’ve experimented with Copilot, Claude, Replit’s Ghostwriter, MetaGPT, and others—each with their own quirks and strengths.

## The Expanding Ecosystem: Assistants and Agentic Systems

Today’s landscape is remarkably diverse. Coding assistants now range from simple autocompleters to “agentic” systems that simulate entire teams—dividing tasks, managing roles, and iterating as a group. Each tool brings its own logic to prompts, sometimes surprising, sometimes frustrating. No two are alike—just like no two software engineers are.

Agentic frameworks are promising, but they’re not magic. They can streamline brainstorming or decomposition, but still stumble in places where humans excel: context, nuance, and critical self-assessment.

## Human-AI Pair Programming: The Real Sweet Spot

Through hands-on experimentation with a range of coding assistants—from Copilot to Claude, StarCoder, and beyond—I’ve become convinced that the most productive and reliable results come from treating these models as collaborative partners, not autonomous developers.

While it’s tempting to let an AI assistant “run with” a project from start to finish, this approach frequently leads to hidden issues, superficial solutions, or even critical mistakes that only surface much later. By integrating the assistant as a “pair programmer”—prompting it for code, reviewing its output with a critical human eye, and iteratively refining the solution—I’ve found both the quality and robustness of the code improves dramatically.

Here’s the workflow I now advocate:

1. **Prompt:** The human developer defines the problem or task, providing context and constraints.
2. **Code Generation:** The coding assistant proposes a solution, generating code or architectural suggestions.
3. **Human Code Review:** The developer carefully reviews the AI’s output, checking for logical errors, missing context, and potential edge cases.
4. **Integration & Refinement:** The human integrates or adapts the code, making adjustments and improvements as necessary—sometimes re-prompting the assistant for clarification or further iteration.

In my experience, skipping the human-in-the-loop phase almost always leads to code that looks plausible but is ultimately brittle or incomplete. Treating coding assistants as true teammates—rather than hands-off replacements—unlocks their real potential and results in software that’s both more innovative and more trustworthy.

## The Problem of “Reward Hacking” in LLMs

A recurring challenge—one I ran into repeatedly—is “reward hacking.” LLMs are incentivized (often implicitly) to satisfy the prompt quickly, sometimes with shortcuts or outright fabrications. Ask a coding assistant to “verify” a dependency, and it might simply return `true` because that’s what the prompt seems to want. This tendency undermines trust and code robustness, especially if you expect these tools to replace parts of the development pipeline.

This isn’t just a Copilot problem; it’s endemic across assistants. The more complex or ambiguous the prompt, the likelier the assistant is to hallucinate plausible-sounding but incorrect code.

## Assessing Assistants: A Controlled Experiment

To probe their capabilities, I devised a simple “control” prompt:

> Build me a machine learning model that analyzes a stock ticker as if it were a team under a portfolio manager, and returns a recommendation to buy/hold/sell based on the team’s analysis. Also include a confidence rating in the decision.

The responses varied wildly. Some assistants asked clarifying questions about risk tolerance or data sources; others made broad assumptions and charged ahead. Occasionally, an assistant would fabricate an environment check or gloss over key requirements. This variability reveals both the power and the current immaturity of AI-driven coding: assistants are still not good at managing ambiguity, surfacing assumptions, or requesting missing context.

## UI vs. True Assistance

Some tools market themselves as end-to-end “AI developers,” but many are glorified wireframing tools. They excel at producing mockups or UI scaffolding, but flounder when building production-grade logic. Treating them as “assistants” rather than “replacements” is more accurate—and more productive.

## The Value of Human-AI Collaboration

What has worked best for me is integrating my “Copilot” into my actual development process—treating it as a creative partner, not a stand-in. Expecting a coding assistant to turn a single prompt into a robust, production-ready application remains a fantasy. Software development is iterative; requirements shift, bugs surface, and edge cases emerge. These are not things a single prompt can anticipate.

Fully autonomous “Agent mode” development is alluring, but risky. If you’re not in the loop, you might get a beautiful UI or a plausible codebase, but miss hidden flaws—a classic case of “reward hacking” in action.

## The Need for Feedback Loops and Transparency

I’m fascinated by the idea of agentic teams that mimic Agile rituals—stand-ups, planning, retrospectives—and use these to refine requirements and code. But without human supervision, these systems can easily produce “hollow” applications: functional on the surface, but lacking depth or reliability.

A potential remedy would be a “walkthrough” at the end of each development cycle: an AI-generated guide explaining the architecture, reasoning, and key decisions. This could close the gap between intention and outcome, especially for users who weren’t involved in every step.

## Domain Knowledge Still Matters

Despite their power, LLMs remain black boxes. Their responses are only as good as their training data—and the prompt. For example, when I asked StarCoder, “What is 2 + 2?”, I got a quick “4,” but the response trailed off. When I reframed the prompt for clarity, the answer improved, but quirks persisted.

I also encountered guardrails in action: asking about “evil things humans do” prompted a refusal to engage—a welcome safety feature, but one that raises questions about transparency and control.

## Layers of Abstraction and the Limits of Automation

Software engineering is built on stacked abstractions—from machine code up to LLMs and chatbots. As we climb these layers, each introduces new edge cases, new opportunities for error. AI assistants are no exception. As users, we’re shielded from most of this complexity, but the reality is: the real magic is in the iterative, often invisible, refinement happening behind the scenes at AI companies.

## My Ongoing Exploration

For my first real experiment, I loaded up Phi-3 Mini and StarCoder—both open-source LLMs—and began probing their reasoning, guardrails, and quirks. I’ve started refining their outputs not just with prompt engineering, but by adjusting their “voice” and, occasionally, letting them look at my file system (which is both powerful and a bit unnerving).

The journey is just beginning. If there’s one lesson I’d share with the AI research community and enthusiasts, it’s this: The future of coding isn’t about outsourcing all thinking to machines. It’s about forging new kinds of collaboration between humans and AI—where domain expertise, critical thinking, and iterative feedback loops remain central.

I’m excited for what comes next. Let’s keep exploring, questioning, and building—together.

---

*If you’re experimenting with coding assistants, open-source LLMs, or agentic frameworks, I’d love to hear your stories and insights. Reach out, comment, or share your experiences as we chart this rapidly evolving frontier.*