# Sabacc

Welcome to the Sabacc project! This is a digital implementation of the legendary card game played throughout the Star Wars galaxy.

## What is Sabacc?

Sabacc is a popular high-stakes card game played throughout the galaxy, known for its mix of skill, strategy, and unpredictability. The objective of the game is to build a hand with a value as close to zero as possible (often referred to as a "Sabacc" or "Pure Sabacc").

The game is famously known as the one where Han Solo won the Millennium Falcon from Lando Calrissian.

### Basic Rules

- **The Deck**: Played with a specialized deck containing positive (Sun) and negative (Blood) cards.
- **The Goal**: Reach a hand value closest to zero. A hand of exactly zero is a Pure Sabacc.
- **Gameplay**: Players draw, swap, or stand with their cards across multiple turns.
- **The Twist**: In traditional Sabacc, card values can randomly "shift" unless placed in the interference field, adding a layer of chaos to the strategy.

## Project Structure

This project is built using modern web technologies to provide a seamless and responsive gaming experience:

- **Framework**: React with TanStack Start/Router for robust routing and SSR capabilities.
- **Styling**: Tailwind CSS and DaisyUI for a beautiful, responsive, and themable interface.
- **Backend/Auth**: Firebase Admin for secure authentication and database management.
- **State Management**: TanStack Query for efficient server state and data fetching.

## Getting Started

To run this project locally:

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Run the development server**:

   ```bash
   pnpm run dev
   ```

3. **Build for production**:

   ```bash
   pnpm run build
   ```

## Contributing

Contributions are welcome! Whether it's adding new game mechanics, improving the AI, or refining the UI, feel free to open a pull request.

May the Force be with you at the Sabacc table!
