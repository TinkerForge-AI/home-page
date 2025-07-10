<template>
  <div class="container my-5">
    <h1 class="mb-4">Lab Hardware Setup</h1>
    <p class="lead">
      Transparency is a core principle of this lab. Here’s a detailed list of the hardware I use for all experiments and model training.
    </p>
    <div class="row">
      <div class="col-md-6 mb-4" v-for="machine in hardware" :key="machine.name">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">{{ machine.name }} <span class="badge bg-secondary ms-2">{{ machine.type }}</span></h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item"><strong>CPU:</strong> {{ machine.cpu }}</li>
              <li class="list-group-item"><strong>GPU:</strong> {{ machine.gpu }}</li>
              <li class="list-group-item"><strong>RAM:</strong> {{ machine.ram }}</li>
              <li class="list-group-item"><strong>Storage:</strong> {{ machine.storage }}</li>
            </ul>
            <p class="card-text">
              <strong>Notes:</strong> {{ machine.notes }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-info mt-4">
      Interested in supporting the lab or sponsoring hardware? <a href="mailto:youremail@domain.com">Contact me</a>.
    </div>
  </div>
</template>

<script setup>
const hardware = [
  {
    type: "Server",
    name: "Beast-01",
    cpu: "AMD Ryzen 9 7950X (16 cores, 32 threads)",
    gpu: "NVIDIA RTX 4090 (24GB VRAM)",
    ram: "128GB DDR5",
    storage: "2TB NVMe SSD, 8TB HDD",
    notes: "Main training box. Great for large batch sizes; gets hot under sustained load.",
  },
  {
    type: "Desktop",
    name: "TinkerRig",
    cpu: "Intel i7-12700K",
    gpu: "NVIDIA RTX 3070",
    ram: "64GB DDR4",
    storage: "1TB NVMe SSD",
    notes: "Used for prototyping and code development.",
  }
]
</script>

<style scoped>
.card-header {
  background: #f9f9f9;
}
</style>