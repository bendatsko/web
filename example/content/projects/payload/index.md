---
title: "Gerald - Stratospheric Weather Balloon Payload System"
tags: ["arduino", "c++", "python"]
date: "2022-01-16"
cover: "./preview.png"
path: "projects/payload"
---



**Explore the Gerald project site in the embed below,** or visit the site [here](https://gerald.datsko.dev/) if the embed doesn't work. 

<iframe src="https://gerald.datsko.dev/" style={{width: "100%", height: "500px", border: "1px solid hsl(210, 18%, 87%)"}}></iframe>

## Launching a Rubber Duck into the Stratosphere 

To provide a quick overview, our results revealed a significant increase in the average amount of UV radiation in the stratosphere since 1995. For an in-depth introduction, check out [this video](https://www.youtube.com/embed/DhZ-bQsRDM8).

### I. Background and Motivation

Our planet's ozone layer is our shield against solar ultraviolet radiation. Yet, human-made greenhouse gases are eroding this protective barrier. We set out to quantify this degradation by comparing our data with historical records.

> **Note:** A low ultraviolet index signifies a healthy ozone layer, whereas a high index indicates a weakened layer.

### II. Designing and Building Gerald

We faced many challenges while developing Gerald. The FAA imposes strict mass constraints on weather balloon payloads, so we had to ensure our design was as lightweight as possible. 

#### PCB and Casing

We used a large rubber duck as the casing—its malleability and light weight made it a perfect choice. The payload PCB was meticulously designed to minimize its form factor, ensuring it would fit within our unusual casing. 

#### Sensors

We equipped the board with a range of sensors, including a TMP36 temperature sensor, a thermistor sensor, a pressure sensor, a humidity sensor, an accelerometer, a UV radiation sensor, and a GPS. These sensors were crucial in collecting accurate data.

<img src="https://i.ibb.co/fqz38FN/baord1.png" alt="Board layout" style="width: 50%; height: auto;"/>

<img src="https://i.ibb.co/XD3PxtW/schematic2.png" alt="Schematic layout" style="width: 50%; height: auto;"/>

### III. Testing Gerald

To ensure Gerald could withstand the harsh conditions of the upper atmosphere, we conducted a series of tests:

- An endurance test to validate consistent and accurate measurements
- A cold chamber test, subjecting Gerald to -50°C for two hours
- A shock test to simulate the turbulent conditions in the stratosphere

<img src="https://i.ibb.co/q1QdPN9/cold.png" alt="Thermistor readings during cold chamber test" style="width: 50%; height: auto;"/>

<img src="https://i.ibb.co/qrCwQdV/shaek.png" alt="Accelerometer readings during shock test" style="width: 50%; height: auto;"/>

### IV. Results: Gerald in Action

We launched Gerald from Montpelier, OH on April 2, 2022. The payload reached an apogee of 86,000 feet before descending to Blissfield, MI. After cleaning the initial data, we found all the data usable.

High-altitude winds caused Gerald to rotate continuously, which led to some erratic UV sensor readings. We applied a max-value filter to smooth out these issues.

<img src="https://i.ibb.co/6D0xckc/dirty.png" alt="Raw UV sensor data" style="width: 50%; height: auto;"/>

<img src="https://i.ibb.co/FgCMQd6/image-2.png" alt="Cleaned UV sensor data, with distance as opposed to time on the x-axis" style="width: 50%; height: auto;"/>

### V. Conclusion: The Bigger Picture

Our results reveal a 19% increase in upper-atmospheric UV radiation between 1995 and 2022—a significant increase in a relatively short time span. Though recent data suggests a deceleration in UV radiation growth, the ozone layer remains at risk. 

This <u>underscores</u> the urgent need to continue combating climate change.
