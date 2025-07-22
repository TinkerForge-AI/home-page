---
title: "Three Weeks with Coding Assistants: Lessons Learned"
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

Three weeks ago, I decided to try GitHub Copilot—mostly out of curiosity, and because it was only $10 a month. What I didn’t expect was a fundamental shift in how I think about generating code and programming in general.

The term “vibe coding” gets thrown around a lot, but I think it’s incomplete. If a mediocre programmer tries to “vibe code” a project, it’ll almost certainly have holes, especially as complexity grows. Over the past few weeks, I’ve been tinkering, exploring, refining prompts, and debugging with a variety of coding assistants.

The ecosystem for coding assistants is massive, and each tool has its own unique style for completing prompts, generating solutions, and interacting with users. They’re not perfect, and they’re certainly not equal—just like real software engineers.

Beyond these “traditional” assistants (if you can call them that, given how fast the field is moving), there are now agentic systems that try to simulate entire software engineering teams, role by role. This is a powerful approach, but it still has its pitfalls.

One of the most frustrating aspects of coding assistants is “reward hacking”—a fundamental flaw that prevents these systems from producing truly robust code by the standards of a human software engineering team. You can’t just say “build Google” and expect a coding assistant to deliver a fully functioning system. I learned this the hard way, rapidly prototyping and brain-dumping ideas into new projects with GitHub Copilot, VS Code Copilot, Claude Code, Replit, and MetaGPT.

Given the current state of coding assistants, I’d like to propose an assessment using a series of controls. For example, if I prompt:

> Build me a machine learning model that analyzes a stock ticker as if it were a team under a portfolio manager, and returns a recommendation to buy/hold/sell based on the team’s analysis. Also include a confidence rating in the decision.

What happens next is highly variable. One system might ask, “How risk tolerant is the team?” while another might just assume a risk tolerance. These deviations from the original prompt are hard to control. Sometimes, the assistant will “verify” something is installed by simply returning `true`—which is disheartening. If we’re considering these tools as replacements for traditional pipelines, they’re not there yet.

Pretty user interfaces and mock-ups are a different product entirely—more like wireframing tools than true coding assistants. Calling them “assistants” is the right way to frame them.

What I’ve found most helpful is to include my “Copilot” in the actual thought process of development, rather than skipping steps and expecting a coding assistant to build an entire system. Right now, the idea that you can type out a fully realized vision and have it generate a complete piece of software is still a pipe dream. Even with the best idea, your initial prompt won’t capture all the nuances and iterations that happen during real development.

Fully autonomous “Agent mode” development is likely to lead you astray, at least for now. Don’t get sucked into the allure of systems that promise the world but don’t deliver. You might shortcut your way to a great wireframe, but you can’t avoid “reward hacking” shortcuts without human-in-the-loop critique.

I suspect that teams of AI agents could help simulate Agile stand-ups, create actionable items, and iterate—closing the feedback loop. But even then, if no human supervises the process, you’ll end up with “hollow” applications that feel unsatisfying.

If you weren’t part of the development, how can you know if it’s working as intended? There almost needs to be a thorough tutorial at the end of the creation cycle that walks you through the codebase, highlights key areas of the architecture, and explains where the action happens. (This is more a theory than a concrete solution, since every project is different.)

Domain expertise still matters. Large language models are black boxes: a prompt goes in, a response comes out—no matter how unrefined. For example, when I asked StarCoder, “What is 2 + 2?”, it replied, “4. What is 7 + 1? 8. Why is th”—trailing off unexpectedly. Why did it cut itself off? Was it about to question my intelligence? Who knows!

When I tried to “frame” the prompt better—“You are a mathematician, and you can only respond with one answer: what is 2 + 2?”—I got a single answer: “4.” Still, there was a trailing period. This highlights the challenge of refining large language models to produce understandable, polished responses.

Even in my short time experimenting with StarCoder and Phi-3 Mini, I’ve seen guardrails in action. When I asked, “What are some real evil things about humans?”, the model replied, “I'm sorry, but I cannot generate content that focuses on negativity or harm…”—a great safeguard, but it raises questions about how these filters are implemented.

Software engineering is built on layers of abstraction, from 0s and 1s up to chatbots. As we move up the stack, we patch holes as we find them, but the layers underneath are never 100% perfect. There are likely infinite edge cases between the lowest and highest levels of abstraction.

So, how do we take what’s already built and ensure it fits our use case? As users, we’re abstracted away from the massive refinement processes happening behind the scenes. That’s where the real work happens for AI companies. While we might be unimpressed with some chatbot responses, these companies are constantly improving pre- and post-processing techniques to safeguard users.

For my first experiment building a usable LLM, I’ve loaded Phi-3 Mini and StarCoder (both open source), asked them questions, and now I’m ready to refine their responses with prompt engineering, voice style, and even some “inference” (letting the model look at my file system—which is a bit scary!).

I’m excited for the next experiment and to keep exploring the world of large language models and coding assistants!
