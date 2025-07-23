---
title: "Running Open-Source LLMs Locally: A Work-in-Progress"
description: "Our first attempt at running an LLM locally using quantized GGUF models and Python APIs"
date: 2025-07-22
type: "blog"
author: "D. Chisholm"
tags: ["Getting Started", "LLM", "AI Research", "Code LLM", "Python", "FastAPI"]
---

## Introduction

This document is a living record of our journey to run open-source Large Language Models (LLMs) locally, using quantized GGUF models and Python APIs. We hope it helps others avoid some of the roadblocks we hit—and encourages experimentation!

---

## Goals

- Download and run quantized LLMs (Phi-3 Mini, StarCoder2-7B) on local hardware (16GB RAM, 6GB VRAM).
- Expose both models via a simple FastAPI server for easy prompt/response cycles.
- Make the setup reproducible and scriptable.

---

## Roadblocks & Lessons Learned

### 1. **Model Download Confusion**
- **Problem:** Hugging Face model repos often contain many quantizations. Downloading all of them is slow and unnecessary.
- **Solution:** Use `huggingface-cli download ... --include <filename>` to fetch only the quantization you want (e.g., Q4_K_M).

### 2. **Python Package Naming**
- **Problem:** Tried to install `llama_cpp` (doesn't exist).
- **Solution:** The correct package is `llama-cpp-python`.

### 3. **Model Path Issues**
- **Problem:** Model loading failed with `ValueError: Model path does not exist`.
- **Solution:** The `<snapshot_id>` in Hugging Face cache paths must be replaced with the actual folder name (a long hash).

### 4. **Prompt Formatting**
- **Problem:** Short or ambiguous prompts led to odd or verbose answers.
- **Solution:** Structure prompts to match the model's expected format (chat-style for Phi-3, code-style for StarCoder2).

### 5. **FastAPI Request Validation**
- **Problem:** Got `422 Unprocessable Entity` errors from FastAPI.
- **Solution:** Use `embed=True` in endpoint signatures so FastAPI expects a JSON object like `{"prompt": "..."}`.

---

## Current Working Setup

- **Model loading** is handled in `model_startup.py`.
- **API server** is in `api_server.py`, with endpoints for each model.
- **Testing** is done via `api_test.py`, sending structured prompts to each endpoint.

Example test script:
```python
import requests

def query_model(endpoint, prompt, model_name):
    response = requests.post(endpoint, json={"prompt": prompt})
    if response.ok:
        print(f"{model_name} Response: {response.json()['response']}")
    else:
        print(f"{model_name}  Error: {response.text}")

if __name__ == "__main__":
    phi3_prompt = "User: What is 2+2?\nAssistant:"
    starcoder_prompt = "# How do I add two numbers in Python?\n# Answer:"

    query_model("http://localhost:8000/generate/phi3/", phi3_prompt, "Phi-3 Mini")
    query_model("http://localhost:8000/generate/starcoder/",

## Observations on Model Responses

One thing we quickly noticed: the raw outputs from these models are not as polished or conversational as what you see in production LLM applications (like ChatGPT or Copilot). For example, when we sent the prompts:

- **"What is 2 + 2?"**  
  **Phi-3 Mini Response:**  
  `2 + 2 equals 4.`
  - Support: Correct,

- **"How do I add two numbers in Python?"**  
  **Starcoder Response:**  
  ```
  Using the + operator
  print(1 + 2)  # 3
  ```

These answers are technically correct, but they lack the natural, flowing style of a human conversation. This suggests that production-ready LLM apps do a significant amount of **pre-processing and post-processing**—rephrasing prompts, formatting outputs, and sometimes even filtering or re-ranking responses—to make the chat experience feel more natural and helpful.

**Takeaway:**  
If you want your local LLM app to feel more like a real assistant, you'll need to invest in prompt engineering and output processing. This might include:
- Adding context or instructions to prompts.
- Stripping or reformatting model outputs.
- Chaining multiple prompts or using templates for chat history.

We'll continue to experiment with these techniques as we refine our setup!