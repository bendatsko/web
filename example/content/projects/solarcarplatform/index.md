---
title: "U-M Solar Car - Race Simulation Microservice"
tags: ["web", "react", "flask", "api"]
date: 2022-11-1
cover: "./IMG_7951-Edit.jpg"
path: "projects/websim"
---

**A web-based microservice designed for the [University of Michigan Solar Car Team](https://www.solarcar.engin.umich.edu/).**

Over the years, the team has accrued numerous simulators, all created at different times and with various tech stacks. These discrepancies make it quite cumbersome to run simulations in the chase vehicle during the [World Solar Challenge](https://worldsolarchallenge.org/) (spanning from Darwin, Australia to Adelaide, Australia). During this challenge, race strategists must be able to run simulations on the fly within our chase vehicle - something our previous setup certainly did not easily allow for. 

The result of this hiccup led to the birth of The Solar Car Platform, which serves as a highly-navigable web hub for the University of Michigan Solar Car Team's crucial simulators and race strategy tools.

## Technical Overview

The Solar Car Platform is built on a client-server architecture has contains three main components: 
<ol>

<li>Front end, built with React Native.</li>
<li>CRUD API, build in ExpressJS, that accesses our MongoDB database.</li>
<li>Master API, which is a Flask wrapper that receives simulation parameters from the front-end and invokes the simulator(s). In terms of cloud hosting, we use an AWS EC2 instance. The site is served with Nginx, PM2 is used for container orchestration, and Certbot is used for domain management.</li>
</ol>

_The documentation, APIs, and source code for this project are *private*._


## Demo

### 1. Race Simulation Dashboard
<img src="https://i.ibb.co/RYYLpdN/1.png" alt="" style="width: 100%; height: auto;"/>

<br/><br/>
The race simulator homepage features a table (where each row is a simulation), allowing users to view all simulations run on the Solar Car Platform. Simulations are sorted by most recently created, and their status is indicated by a lozenge displaying one of the following simulation states: successful, failed, or in progress.


### 2. Making a New Race Simulation
<img src="https://i.ibb.co/K5MHsrT/2.png" alt="" style="width: 100%; height: auto;"/>

<br/><br/>
The simulation creation page contains various inputs for a single race simulation, including (but not limited to) a segmented route file, beginning/ending battery charge states, max speed, regional weather data (for irradiation simulation), a schedule, and characterized car data.


### 3. Viewing Simulation Output
<img src="https://i.ibb.co/7Kr4XsP/3.png" alt="" style="width: 100%; height: auto;"/>

<br/><br/>
To view simulation output, return to the simulation database page and find a given simulation in the table. Each simulation is denoted as a new row in the table, and the output for each simulation is accessible via the drop-down menu at the far right of each row.

<br/><br/>
Sometimes simulations don’t run as expected, causing the simulator to throw errors. To account for this, the CMake output is piped back to the front end and displayed, enabling debug accessibility. When a simulation runs successfully, the following data is available to the user on its output page: input parameters, summarized output, and a detailed, segment-by-segment race physics breakdown.