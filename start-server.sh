#!/bin/bash
# Simple local web server to avoid CORS issues
# Run this script, then open http://localhost:8000/tunnel_trans.html in your browser

cd "$(dirname "$0")"
echo "Starting local web server..."
echo "Open http://localhost:8000/tunnel_trans.html in your browser"
echo "Press Ctrl+C to stop the server"
python3 -m http.server 8000

