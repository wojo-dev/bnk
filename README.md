# bnk

A mobile banking app built with Expo and React Native. Features biometric authentication, fund transfers, recipient management, and transaction history.

## Tech Stack

- **Expo SDK 55** (preview) with React 19 and React Native 0.83
- **Expo Router** — file-based routing with typed routes
- **Zustand** — client state management
- **React Query** — server state, caching, and sync
- **React Hook Form + Zod** — form handling and validation
- **Axios** — HTTP client with auth interceptors
- **expo-local-authentication** — biometric (Face ID / Touch ID)
- **expo-secure-store** — secure token storage
- **Storybook** — on-device component development
- **React Compiler** — enabled via Expo experiments

## Prerequisites

- **Node.js** >= 18
- **npm**
- **Xcode** (for iOS) with command line tools installed
- **CocoaPods** (`sudo gem install cocoapods`)
- **Android Studio** (for Android) with an emulator configured

## Setup

1. Install dependencies

   ```bash
   npm install
   ```

2. Generate native projects (if `ios/` or `android/` directories don't exist)

   ```bash
   npx expo prebuild
   ```

3. Install iOS pods

   ```bash
   cd ios && pod install && cd ..
   ```

## Running the App

### Development Build (Recommended)

A dev build compiles the full native project locally, which is required for native modules like biometric auth, secure store, and contacts.

**iOS:**

```bash
npm run ios
```

**Android:**

```bash
npm run android
```

These commands run `expo run:ios` and `expo run:android`, which build the native app and start the Metro bundler automatically.

### Expo Go (Limited)

Expo Go does not support all native modules used in this project (e.g. `expo-local-authentication`, `expo-contacts`). Use a dev build instead.

```bash
npm start
```

### Web

```bash
npm run web
```

## Scripts

| Script | Description |
| --- | --- |
| `npm start` | Start the Metro bundler |
| `npm run ios` | Build and run on iOS |
| `npm run android` | Build and run on Android |
| `npm run web` | Start the web dev server |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest tests |
| `npm run knip` | Check for unused exports |
| `npm run storybook-generate` | Generate Storybook story loader |

## Project Structure

```
src/
├── app/                    # Expo Router routes (file-based)
│   ├── (tabs)/             # Bottom tab navigator (Home, Recipients)
│   ├── api/                # API route handlers (+api.ts)
│   ├── transfer/           # Transfer flow (form → process → success)
│   ├── login.tsx           # Login screen
│   ├── transaction.tsx     # Transaction history
│   └── _layout.tsx         # Root layout (auth guard, providers)
│
├── features/               # Feature modules
│   ├── auth/               # Authentication (store, login page)
│   ├── home/               # Home screen (profile, actions, recent)
│   ├── balance/            # Balance display and visibility toggle
│   ├── transfer/           # Transfer flow (form, PIN, biometric, success)
│   ├── recipient/          # Recipient list, search, contacts import
│   ├── transaction/        # Transaction history and grouping
│   ├── biometric/          # Biometric authentication hook
│   └── shared/             # Shared code
│       ├── components/ui/  # Reusable UI components
│       ├── lib/            # API client, haptics
│       ├── styles/tokens/  # Design tokens (colors, typography, spacing)
│       ├── hooks/          # Shared hooks
│       ├── utils/          # Formatting utilities
│       └── store/          # Network state store
│
├── server/                 # Mock backend data and utilities
│   ├── data/               # Mock data (profile, balance, recipients, etc.)
│   └── utils/              # Auth and helper utilities
│
└── global.css              # Global styles
```

## Design Decisions

### Feature-Based Architecture

Code is organized by feature domain (`auth`, `transfer`, `recipient`, `transaction`, `home`, `balance`) rather than by layer. Each feature contains its own pages, components, hooks, stores, types, and utilities. Shared code lives under `features/shared/`.

### State Management Split

- **Zustand** for client-only state: auth status, transfer flow data, recipient selection, balance visibility, and network connectivity.
- **React Query** for server state: data fetching, caching (1-minute stale time), retry logic (max 2, no retries for 4xx), and exponential backoff.

### API Routes as Mock Backend

Expo Router's API routes (`src/app/api/*+api.ts`) serve as the mock backend. This keeps the app self-contained during development without needing an external server.

### Biometric-First Authentication

The app uses `expo-local-authentication` for Face ID / Touch ID as the primary auth method. Tokens are persisted in `expo-secure-store`. Transfer authorization uses either biometric or PIN fallback.

### Design Token System

All visual values (colors, typography, spacing, shadows, dimensions) are centralized in `src/features/shared/styles/tokens/`. Components reference tokens rather than hard-coded values.

### Path Aliases

TypeScript path aliases keep imports clean:

| Alias | Path |
| --- | --- |
| `@/*` | `./src/*` |
| `@/assets/*` | `./assets/*` |
| `@/tokens/*` | `./src/features/shared/styles/tokens/*` |
| `@/ui/*` | `./src/features/shared/components/ui/*` |
| `@/hooks/*` | `./src/features/shared/hooks/*` |
| `@/utils/*` | `./src/features/shared/utils/*` |
| `@/lib/*` | `./src/features/shared/lib/*` |

### Performance

- **React Compiler** enabled to automatically memoize components and hooks.
- **FlashList** (`@shopify/flash-list`) for efficient list rendering.
- **Reanimated** for 60fps animations on the UI thread.
- **Hermes** engine for faster startup and lower memory usage.

### Haptic Feedback

Haptic feedback is integrated across interactive elements (tab presses, button actions, error/success states) using `expo-haptics` with a cross-platform abstraction in `src/features/shared/lib/haptics.ts`.
