---
title: "Multi-Chiplet ReRAM-based Machine Learning Accelerator (130,000+ parameters)"
tags: ["ml acceleration", "vlsi", "pytorch",]
date: Oct. 2022 - Current
authors:
  - name: "Flynn Research Group"
  - "University of Michigan"
path: "research/cerebro"
selected: true
cover: "./preview.png"
priority: 0
---

<p align="center">
    <div style="width: 90%">
        <img src="preview.png" alt="drawing" width="100%"/><br/>
        <p align="left" style="margin-top: 2%;"><strong>Figure 1</strong>: Prototype chip on custom substrate PCB in PLCC socket (Piston motherboard). Prototype die measures 3.2 x 5.1mm.</p>
    </div>
</p>


## Abstract
The **Cerebro** chip utilizes analog compute-in-memory and Multi-Level Cell (MLC) Resistive Random Access Memory (ReRAM) technologies to facilitate highly dense and efficient computations, making it well-suited for machine learning and scientific computing tasks. Our System on Chip (SoC) prototype comprises four self-contained ReRAM-based Compute In Memory (CIM) tiles and a RISC-V host. It achieves impressive raw and normalized peak efficiencies of 20.7 and 662 TOPS/W, respectively, with a compute density of 8.4 TOPS/mm².

## Introduction
Despite the advancements in mixed-signal and digital circuits for analog computing, power and area bottlenecks persist. Our approach to address these limitations includes ADC-assisted bit-serial processing, a compact low-power binary-weighting ADC, a pitch-matched switch architecture, on-chip support of accurate NVM characterization, RISC-V control of programming and MAC operations with DMA between data memory and CIM macros, and a local controller to offload MAC operations from the host.

## Key Features
One of our primary contributions is the introduction of the binary-weighted multi-cycle sampling (BWMCS) ADC for high throughput, high accuracy, and low power. We also present a unique Transimpedance Amplifier (TIA) design, and pitch-matched mixed-signal support circuitry. Each feature optimizes integration and performance while addressing critical challenges.

## Proposed System and Measurements
Our SoC prototype features four self-contained ReRAM CIM macros and incorporates numerous innovations. The mixed-signal support circuitry matches the pitch of the NVM array and each odd/even column pair is pitch-matched to an ADC. The RISC-V host controls and coordinates the four CIM tiles over AXI4.

Our proprietary ReRAM CMOS prototype measures 3.2mm x 5.1mm and demonstrates peak raw and normalized efficiencies of 662 and 20.7 Tera Operations per Second per Watt (TOPS/W), respectively, along with a compute density of 8.4 TOPS/mm². The prototype has successfully programmed 4-bit LeNet-1 weights in adjacent crossbar columns on multiple CIM tiles, achieving a classification accuracy of 96.8% on the MNIST dataset with 128 images.

## Resources
For more information about previous iterations of the project, you can review the following resources:

- [Cerebro Datasheet](AMAT_Cerebro_Datasheet_9_18.docx.pdf)
- [Piston User Guide](Piston%20V2%20User%20Guide%20(1).pdf)
- [Schematics](Schematics.PDF)


## Notice
**This is an ongoing project.** Current information may be inaccurate. Developments will be published as and when they are approved by the Flynn Research Group and relevant parties.
