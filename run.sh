#!/bin/bash


if [ $# -eq 0 ]; then
  echo "Usage: $0 <script_name.ts> [args...]"
  exit 1
fi

npx ts-node scenarios/$1