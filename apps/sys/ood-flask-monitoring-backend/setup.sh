#!/bin/bash
set -eo pipefail
IFS=$'\n\t'

python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
