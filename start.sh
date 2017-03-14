#!/bin/bash

for run in {1..10000}
do
  node t1.js
  node t2.js
done

node report.js
