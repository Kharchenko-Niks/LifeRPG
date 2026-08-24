# LifeRPG — Technical Architecture

## 1. Project Type

LifeRPG is a mobile application.

The first target platform is Android.

The application is developed using:

- React Native
- Expo
- Expo Router
- TypeScript

The project is developed in Visual Studio Code.

Android Studio is used primarily for:

- Android SDK
- Android Emulator
- Android development tools

Android Studio is not the primary code editor for this project.

---

# 2. Technology Stack

## Frontend

- React Native
- Expo
- TypeScript
- Expo Router

## Development

- Visual Studio Code
- Git
- GitHub
- Android Studio
- Android Emulator

## Package Management

- npm

## Version Control

- Git
- GitHub

---

# 3. Project Structure

The project should use a clear and scalable structure.

Initial structure:

```text
LifeRPG/
│
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   │
│   ├── components/
│   ├── features/
│   ├── screens/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   ├── constants/
│   ├── utils/
│   └── assets/
│
├── docs/
│   ├── vision.md
│   ├── game-design.md
│   ├── features.md
│   ├── roadmap.md
│   └── architecture.md
│
├── assets/
├── app.json
├── package.json
├── tsconfig.json
├── CLAUDE.md
├── AGENTS.md
└── README.md

The structure may evolve as the project grows.

4. Navigation

Expo Router is used for application navigation.

Screens should be organized through the src/app directory.

The application should eventually contain screens such as:

Home
Character
Quests
Skills
Achievements
Inventory
World
Goals
Profile
Settings

Navigation should remain simple and understandable.

5. Application Layers

LifeRPG should separate UI, application logic, and data.

UI Layer

Responsible for:

Screens
Components
Layout
Animations
User interaction

Examples:

components/
screens/
Application Logic

Responsible for:

Quest completion
XP calculation
Level progression
Skill progression
Achievement conditions
Reward logic

Examples:

features/
hooks/
utils/
Data Layer

Responsible for:

User data
Character data
Quests
Skills
Achievements
Inventory
Goals
World progression

Examples:

services/
types/
6. Core Domain Models

The first version should define clear TypeScript models.

Possible models:

User
Character
Quest
Skill
Achievement
Reward
InventoryItem
Goal
World
Memory
TravelLocation

Example:

type Skill = {
  id: string;
  name: string;
  level: number;
  experience: number;
};

Models should remain simple until the requirements become clearer.

7. State Management

The application will initially use simple local state where possible.

Do not introduce a large state-management library before it is necessary.

If application complexity grows, evaluate:

Zustand
Redux Toolkit

The decision should be based on actual application requirements.

8. Data Persistence

The application will eventually need persistent local data.

Possible technologies:

AsyncStorage
Expo SQLite
SecureStore for sensitive information

The initial prototype can use local storage.

A database should be introduced when the data model becomes sufficiently complex.

9. Backend

The first MVP should avoid unnecessary backend complexity.

The initial application should work locally.

A backend can later be introduced for:

User accounts
Cloud synchronization
Cross-device synchronization
Social features
AI services
Online content
Backups

Possible future technologies:

Java
Spring Boot
PostgreSQL
REST API

The backend technology should be evaluated when backend requirements are clear.

10. Cloud Storage

The project may eventually support cloud synchronization.

The user's own cloud environment may be connected later.

Possible purposes:

Project files
Development backups
User data synchronization
Media storage
Application assets

Cloud integration should not block development of the MVP.

11. AI Integration

AI is considered an optional advanced feature.

Possible AI functionality:

Quest generation
Goal breakdown
Personalized suggestions
Life-story generation
Conversational assistant
Language practice
Personalized challenges

AI should not be required for the basic application to function.

12. Image Processing

Users may eventually be able to add real-life photos.

Possible future functionality:

User photo
    ↓
Image processing
    ↓
Game asset
    ↓
Character / Memory / Item / Location

Advanced AI image transformation is postponed until after the MVP.

13. Localization

The initial application language is:

English

Future languages:

German
Russian
Ukrainian
French

Localization should be considered during architecture so that text is not hardcoded throughout the application.

14. Visual Style

The visual direction is inspired by:

1990s RPG games
Pixel art
Cozy games
Retro games
Classic handheld RPG interfaces

The application should feel:

Cozy
Friendly
Playful
Nostalgic
Motivating
Personal

The visual style should remain original and must not directly copy copyrighted game assets.

15. Development Environment

Primary editor:

Visual Studio Code

Mobile testing:

Android Emulator

Project runner:

Expo

Package manager:

npm

Version control:

Git + GitHub

16. AI Coding Workflow

Claude Code may be used as a coding assistant.

Development workflow:

Developer + ChatGPT
        ↓
Planning
        ↓
Technical decision
        ↓
Task definition
        ↓
Claude Code
        ↓
Code implementation
        ↓
Developer review
        ↓
Run application
        ↓
Test on Android Emulator
        ↓
Git diff
        ↓
Commit
        ↓
Push to GitHub

Claude Code should not make large architectural changes without explicit approval.

17. Coding Rules

The project should follow these principles:

TypeScript everywhere possible
Small reusable components
Clear naming
Avoid unnecessary dependencies
Avoid premature abstraction
Keep business logic separate from UI
Keep files reasonably small
Prefer readable code over clever code
Test changes on the emulator
Do not modify unrelated files
Do not remove existing functionality without approval
18. Git Workflow

The main branch is:

main

Features should normally be developed using feature branches.

Example:

main
  │
  └── feature/character-screen

Recommended workflow:

Create branch
    ↓
Implement feature
    ↓
Run application
    ↓
Test
    ↓
Review git diff
    ↓
Commit
    ↓
Push
    ↓
Merge into main

Commit messages should be written in English.

Examples:

feat: add character screen
feat: add quest model
feat: implement experience system
fix: correct quest completion state
docs: update project roadmap
refactor: simplify character state
19. Documentation

Documentation is part of the project.

Important documents:

docs/vision.md
docs/game-design.md
docs/features.md
docs/roadmap.md
docs/architecture.md

Documentation should be updated when major decisions change.

The README should eventually contain:

Project description
Main features
Tech stack
Installation instructions
Development commands
Project screenshots
Roadmap
Project status
20. Current Technical Goal

The immediate technical goal is not to build the complete game.

The immediate goal is to create a small functional prototype.

First prototype:

Open application
      ↓
Main screen
      ↓
Create / view character
      ↓
View quests
      ↓
Complete quest
      ↓
Receive XP
      ↓
See progress

Everything else should be added incrementally.

21. Development Principles

LifeRPG should be developed incrementally.

The project should always have a working version before new major systems are added.

The development priority is:

Core gameplay
User experience
Visual identity
Content
Advanced systems
AI and integrations

The first goal is not to build the complete LifeRPG universe.

The first goal is to prove that the core gameplay loop is fun:

Real life
    ↓
Quest
    ↓
XP
    ↓
Skill
    ↓
Reward
    ↓
World progression
22. MVP Scope

The MVP should contain only the systems necessary to demonstrate the core concept.

Initial MVP systems:

Character
Quests
XP
Levels
Skills
Achievements
Basic rewards
Basic inventory
Simple personal room/world
Goals

The following systems are intentionally postponed:

Multiplayer
Social network
Large open world
Advanced AI image generation
Complex backend
Health device integrations
Advanced finance tracking
Real-time location systems
Complex travel systems

These features may be developed after the MVP.

23. Current Development Status

Current project foundation:

Expo project created
React Native configured
TypeScript configured
Expo Router configured
Git repository initialized
GitHub repository created
GitHub remote connected
Android Studio installed
Android SDK installed
Android Emulator configured
Expo application successfully launched on Android Emulator
Project documentation created

Current next steps:

Finish project documentation
Configure AI coding instructions
Create the initial application architecture
Create the first feature branch
Build the first application screen
Test the screen on Android Emulator
Review changes with Git
Commit the feature
Push the feature branch to GitHub
```
