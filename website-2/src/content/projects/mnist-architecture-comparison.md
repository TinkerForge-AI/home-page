---
title: "Experiment 3: MNIST Neural Network Architecture Comparison Experiment"
description: "Compare traditional neural networks and lightweight single-weight neuron models with attention on the MNIST dataset."
date: 2025-07-22
status: "Active Experiment"
tags: ["mnist", "neural-network", "architecture-comparison", "attention", "experiments", "ai-research"]
github: "https://github.com/TinkerForge-AI/experiment-3-lightweight-neurons/tree/main/mnist_experiment"
---

# MNIST Neural Network Architecture Comparison Experiment

## Overview
This project compares traditional neural network architectures with lightweight single-weight neurons combined with attention modules on the MNIST dataset.

### The experiment evaluates:
- **Traditional Neural Networks:** Standard fully connected and CNN architectures
- **Lightweight Networks:** Single-weight neurons with attention mechanisms

### Metrics Compared
- Accuracy on test set
- Training time
- Inference time
- Memory usage
- Model parameter count

## Project Structure
```
mnist_experiment/
├── data/                # MNIST data loading and preprocessing
│   ├── __init__.py
│   └── mnist_loader.py  # Data loading utilities
├── models/              # Model definitions
│   ├── __init__.py
│   ├── traditional.py   # Traditional NN architectures
│   └── lightweight.py   # Lightweight single-weight neuron models
├── training/            # Training and evaluation
│   ├── __init__.py
│   └── train.py         # Training/evaluation loops
├── experiments/         # Experiment scripts
│   ├── __init__.py
│   └── compare.py       # Main comparison script
├── utils/               # Helper functions
│   ├── __init__.py
│   ├── metrics.py       # Performance metrics
│   └── plotting.py      # Visualization utilities
├── results/             # Output directory for logs, models, plots
├── requirements.txt     # Python dependencies
└── README.md           # This file
```

## Setup
Install dependencies:
```bash
pip install -r requirements.txt
```
Run the comparison experiment:
```bash
python experiments/compare.py
```

## Usage
### Running Individual Models
```python
from models.traditional import TraditionalCNN
from models.lightweight import LightweightNetwork
from training.train import train_model
from data.mnist_loader import get_mnist_dataloaders

# Load data
train_loader, test_loader = get_mnist_dataloaders(batch_size=64)

# Train traditional model
traditional_model = TraditionalCNN()
traditional_results = train_model(traditional_model, train_loader, test_loader)

# Train lightweight model
lightweight_model = LightweightNetwork()
lightweight_results = train_model(lightweight_model, train_loader, test_loader)
```

### Customizing Experiments
Modify `experiments/compare.py` to adjust:
- Model hyperparameters
- Training epochs
- Batch sizes
- Learning rates
- Evaluation metrics

## Results
Results are saved in the `results/` directory:
- Model checkpoints (`.pth` files)
- Training logs (`.json` files)
- Performance plots (`.png` files)
- Comparison summaries (`.csv` files)

## Extension
The codebase is designed for easy extension to:
- Additional datasets (CIFAR-10, ImageNet, etc.)
- New architectures
- Advanced attention mechanisms
- Different optimization strategies

## License
See LICENSE file for details.
