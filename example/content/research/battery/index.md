---
title: "Ultra-Low Noise Power Supply for VLSI Chip Testing"
tags: ["power electronics", "c++", "operating systems", "vlsi"]
date: Feb. 2023 - Current
authors:
  - name: "Flynn Research Group"
  - "University of Michigan"
path: "research/battery"
selected: false
cover: "./preview.png"
priority: 3
---

## Motivation
Low-noise, laboratory-grade power supplies are crucial for testing highly-sensitive high-performance modern integrated circuits (ICs); however, these power supplies can be exceedingly costly, especially in academic environments. To tackle this issue, we devised an affordable low-noise power supply solution using two 18650 LiPo battery cells.

## Methodology
The design of this project was guided by two primary objectives: minimizing noise and reducing cost. To accomplish such goals, a battery-powered approach was chosen over a more complex switching power supply approach, given that batteries generate power through internal chemical reactions, resulting in minimal noise. Due to our battery-centric design, we also incorporate passive balancing recharging circuitry and safety features such as overvoltage protection, undervoltage protection, and reverse polarity protection.

Precautions were also taken during the board design process to minimize crosstalk interference between signal traces and components. Moreover, filtering was performed on both ground and signal lines via ferrite beads (both of which use polygon pours instead of thin traces to reduce resistance and thermal noise).

The power supply can connect to the load device through either an SMA or banana plug port, and an OLED displays the battery charge status. To run the device and properly prioritize safety over functionality, we employ a [real-time operating system](https://www.digikey.com/en/maker/projects/what-is-a-realtime-operating-system-rtos/28d8087f53844decafa5000d89608016) (RTOS).

## Results
This design was tested against against several characterized industry-grade power supplies for noise comparison purposes. For each tested power supply (displayed in the table below), the average peak-to-peak noise was sampled over 50 seconds of measurement.

*All measurements were taken with the Siglent SDS2204X Plus Oscilloscope (noise floor of ~630 µV).

<figure>
  <div style="text-align:center">
    <img src="https://i.ibb.co/RN80LJh/SDS2204-X-Plus-PNG-1.png" alt="Noise snapshot—Agilent E3631A (top); Battery solution (bottom)" style="width:70%;" />
    <figcaption><b>Figure 1:</b> Noise snapshot—Agilent E3631A (top); Battery solution (bottom)</figcaption>
  </div>
</figure>

<div align="center">

| Power Supply | Peak to Peak (mV) | Price (USD) |
|--------------|-------------------|-------------|
| HP Harrison 6205B | 10.09 | 125 |
| Agilent E3631A | 23.43 | 495 |
| Keithley 2400 | 74.68 | 5000 |
| Rigol DP832 | 4.04 | 359 |
| Battery Power Solution | 3.89 | 80 |

<figcaption><b>Table 1:</b> Pk-pk characterizations of commonly-used laboratory power supplies</figcaption>

</div>
<br/>

Evidently, this solution demonstrates comparable signal cleanliness to many high-end industry-grade power supplies at a significantly lower cost. Despite the 3.89 mV of noise present in our solution, it is comparatively cleaner than *all* industry-grade power supplies in our lab.

It is hypothesized that the presented design could positively impact electronics testing in academia by providing a cost-effective and reliable alternative to expensive industry-grade power supplies.
