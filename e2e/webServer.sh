#!/bin/bash

# runs from e2e folder
cd ..
docker build -t iqengine .
docker run -p 3000:3000 -e RFDX_FF_INMEMDB=1 -e VITE_FEATURE_FLAGS='{"useAPIDatasources": true}' iqengine:latest
cd e2e