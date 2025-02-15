# Unhandled 'error' event in Node.js server

This repository demonstrates a common error in Node.js where an unhandled 'error' event leads to server crashes without informative error messages.

## Problem

The provided `server.js` file includes a simple HTTP server. However, it lacks proper error handling.  If an error occurs (e.g., network issue), the server crashes silently, making debugging difficult.

## Solution

The `serverSolution.js` file provides a solution by adding an 'error' event listener to the server. This listener captures the error, logs it to the console, and allows the server to continue running. This detailed error logging is essential for effective debugging.

## How to Run

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node server.js` (for the buggy version) or `node serverSolution.js` (for the solution).