# LifeRPG — Claude Code Instructions

## 1. Project Overview

LifeRPG is a mobile application that turns real-life personal development into an RPG-style experience.

The core idea is:

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

The application should make personal development feel like progressing through a game.

The first target platform is Android.

The initial application language is English.

Future localization may include:

- German
- Russian
- Ukrainian
- French

---

# 2. Development Stack

Use the existing project stack.

Core technologies:

- React Native
- Expo
- Expo Router
- TypeScript
- npm

Development tools:

- Visual Studio Code
- Android Studio
- Android Emulator
- Git
- GitHub

Do not replace the existing stack unless explicitly requested.

Do not introduce new frameworks or major dependencies without discussing the reason first.

---

# 3. Important Project Documentation

Before implementing a major feature, read the relevant documentation.

Project documentation:

- docs/vision.md
- docs/game-design.md
- docs/features.md
- docs/roadmap.md
- docs/architecture.md

These documents describe the current project vision, gameplay, features, roadmap and technical architecture.

If the implementation conflicts with the documentation, stop and explain the conflict before making a large change.

Documentation is part of the project and should be kept up to date when major decisions change.

---

# 4. Expo Version

This project uses Expo SDK 57.

Before writing Expo-specific code, consult the versioned Expo documentation specified in AGENTS.md.

Do not assume that APIs from other Expo versions are compatible with this project.

Prefer the official Expo SDK 57 documentation.

---

# 5. Current Development Stage

The project is currently in the foundation/prototype stage.

The goal is NOT to build the complete LifeRPG universe immediately.

The first goal is to create a small working prototype.

Initial prototype flow:

Open application
↓
Main screen
↓
Create/view character
↓
View quests
↓
Complete quest
↓
Receive XP
↓
See progress

Build the project incrementally.

Always prefer a small working feature over a large unfinished system.

---

# 6. MVP Scope

The initial MVP should contain:

- Character
- Quests
- XP
- Levels
- Skills
- Achievements
- Basic rewards
- Basic inventory
- Simple personal room/world
- Goals

Do not implement postponed systems unless explicitly requested.

Postponed systems include:

- Multiplayer
- Social network
- Large open world
- Advanced AI image generation
- Complex backend
- Health device integrations
- Advanced finance tracking
- Real-time location systems
- Complex travel systems

---

# 7. Architecture Rules

Follow the architecture described in:

docs/architecture.md

The project should separate:

UI
Application logic
Data

Prefer:

- reusable components
- small focused files
- clear naming
- simple data models
- readable code
- separation of business logic from UI

Avoid:

- unnecessary abstraction
- premature optimization
- unnecessary dependencies
- huge components
- duplicated logic
- hardcoded application-wide values

---

# 8. React Native Rules

Use React Native components and APIs appropriate for the current Expo version.

Prefer functional components.

Use TypeScript.

Avoid using web-only APIs or browser-specific implementations unless they are intentionally required for Expo Web compatibility.

The primary target is mobile.

Do not design the application as a web application.

---

# 9. Navigation

Expo Router is used for navigation.

Navigation belongs in:

src/app/

Keep routes understandable.

Do not create a complicated navigation architecture before it is necessary.

---

# 10. State Management

Start with local React state when possible.

Do not introduce Redux, Zustand or another state-management library just because it is available.

If state becomes complex, explain the problem and propose an appropriate solution.

Possible future options include:

- Zustand
- Redux Toolkit

The choice should be based on actual project requirements.

---

# 11. Data Persistence

The first prototype can use local data.

Do not introduce a database or backend unnecessarily.

Possible future technologies include:

- AsyncStorage
- Expo SQLite
- SecureStore

The persistence strategy should evolve with the actual data requirements.

---

# 12. Backend

The first MVP should work without a backend.

Do not create backend infrastructure unless explicitly requested.

A backend may be introduced later for:

- accounts
- cloud synchronization
- cross-device synchronization
- social features
- AI services
- online content
- backups

Possible future backend stack:

- Java
- Spring Boot
- PostgreSQL
- REST API

---

# 13. Localization

The initial application language is English.

Do not hardcode large amounts of user-facing text in a way that makes future localization difficult.

When appropriate, keep text organized so localization can be introduced later.

Do not add a complete localization framework unless it is actually needed.

---

# 14. Visual Direction

LifeRPG should have an original visual identity inspired by:

- retro RPG games
- pixel art
- cozy games
- classic handheld RPG interfaces
- nostalgic game aesthetics

The application should feel:

- cozy
- friendly
- playful
- nostalgic
- motivating
- personal

Do not copy copyrighted game assets or directly reproduce another game's interface.

---

# 15. AI Features

AI is an optional future feature.

Possible future AI features include:

- quest generation
- goal breakdown
- personalized suggestions
- life-story generation
- conversational assistant
- language practice
- personalized challenges
- image transformation

Do not make AI a requirement for the basic application.

---

# 16. Claude Code Working Style

Claude Code is a coding assistant.

Claude Code should help implement clearly defined tasks.

Preferred workflow:

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
Implementation
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
Push

ChatGPT is used for project planning, architecture discussions, learning and reviewing technical decisions.

Claude Code is used primarily for implementation and repository-level coding tasks.

---

# 17. Before Writing Code

Before implementing a non-trivial feature:

1. Understand the existing project structure.
2. Read the relevant documentation.
3. Inspect existing code.
4. Explain what files will be changed.
5. Explain the implementation approach.
6. Identify potential risks.
7. Ask for confirmation if the change is architectural or potentially destructive.

For small obvious changes, avoid unnecessary discussion.

---

# 18. Do Not Make Large Changes Without Approval

Do not:

- rewrite the project
- replace the architecture
- replace Expo
- replace React Native
- replace Expo Router
- introduce a backend
- add a large dependency
- delete existing functionality
- rename large parts of the project
- restructure the entire repository

without explicit approval.

If a large architectural change seems necessary, explain why first.

---

# 19. Do Not Modify Unrelated Files

When implementing a feature:

Only modify files necessary for the requested task.

Do not make unrelated formatting changes.

Do not rewrite working code unnecessarily.

Do not remove code simply because you prefer another implementation.

---

# 20. Testing

After implementing a feature:

1. Check TypeScript errors.
2. Run the application.
3. Test the feature on the Android Emulator.
4. Check for runtime errors.
5. Review the changed files.
6. Run git diff.

Do not claim that a feature works without checking it when practical.

---

# 21. Git Rules

The main branch is:

main

Features should normally use feature branches.

Example:

main
↓
feature/character-screen

Recommended workflow:

Create feature branch
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

Commit messages must be written in English.

Use conventional-style commit prefixes where appropriate.

Examples:

feat: add character screen
feat: add quest model
feat: implement experience system
fix: correct quest completion state
docs: update project roadmap
refactor: simplify character state

Never force-push unless explicitly requested.

Never delete branches or commits without explicit approval.

---

# 22. Git Safety

Before making potentially destructive Git operations:

STOP and explain what the command will do.

Do not automatically run:

- git reset --hard
- git clean
- git push --force
- git branch -D
- destructive history rewriting

unless explicitly requested.

Never discard user changes without permission.

---

# 23. Documentation Rules

Documentation is part of the project.

Important files:

docs/vision.md
docs/game-design.md
docs/features.md
docs/roadmap.md
docs/architecture.md

When a major design or architectural decision changes, propose an update to the relevant documentation.

Do not silently change the project specification.

---

# 24. Code Quality

Prefer:

- readable TypeScript
- explicit naming
- small components
- reusable components
- simple functions
- clear types
- predictable data flow

Avoid:

- unnecessary cleverness
- deeply nested logic
- giant components
- duplicated business logic
- magic numbers
- unexplained constants
- unnecessary dependencies

Code should be understandable to a developer who is still learning mobile development.

---

# 25. Teaching Mode

The developer is learning mobile application development.

When introducing a new technology, command, architectural concept or important pattern:

Explain briefly:

- what it is
- why we need it
- what it does
- where it belongs in the project

Do not assume knowledge of Android development.

Do not assume knowledge of native Android development.

Do not assume knowledge of Expo internals.

Commands should be explained when they are important for learning.

---

# 26. Current Project Goal

The immediate goal is to build the first functional LifeRPG prototype.

The first implementation should remain simple.

Do not attempt to build all game systems at once.

The first priority is proving the core gameplay loop:

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

Build one working system at a time.

---

# 27. Important Principle

LifeRPG should always remain understandable.

When choosing between:

A complicated solution that could support many future possibilities

and

A simple solution that solves the current problem

prefer the simple solution unless there is a clear technical reason not to.

The project should grow incrementally.

Working software first.

Complexity only when necessary.

---

# 28. Collaboration and Decision Making

LifeRPG is developed collaboratively using two AI assistants with different responsibilities.

## ChatGPT

ChatGPT is responsible primarily for:

- project planning
- architecture discussions
- product decisions
- gameplay design discussions
- technical decision review
- breaking large goals into manageable tasks
- reviewing proposed implementation approaches

## Claude Code

Claude Code is responsible primarily for:

- inspecting the repository
- implementing approved tasks
- writing and modifying code
- running project checks
- reporting implementation results
- identifying technical problems in the existing code

Claude Code is not the sole decision-maker for product or architecture changes.

When a task involves a significant architectural, product, gameplay, or structural decision:

1. Stop before making the change.
2. Explain the issue.
3. Present the proposed solution.
4. Identify affected files.
5. Wait for explicit approval.

Do not silently change project requirements because a different implementation appears easier.

---

# 29. Task Execution Protocol

When receiving a development task, follow this process.

## Step 1 — Understand

Read the task carefully.

Identify:

- what needs to be changed
- why it needs to be changed
- which documentation is relevant
- which existing files are involved

## Step 2 — Inspect

Before modifying code:

- inspect the relevant existing files
- verify the current implementation
- check imports and dependencies
- avoid assuming that the repository matches the documentation

## Step 3 — Plan

For non-trivial tasks, provide:

- short implementation plan
- files to create
- files to modify
- files to delete, if any
- potential risks or conflicts

Do not modify files yet when explicit approval is required.

## Step 4 — Implement

After approval:

- make the smallest reasonable change
- preserve existing functionality
- avoid unrelated refactoring
- follow the project's architecture and coding rules

## Step 5 — Verify

After implementation:

- run TypeScript checks
- run lint when appropriate
- run the application when appropriate
- report any errors honestly

## Step 6 — Review

Before finishing:

- review changed files
- inspect git diff
- verify that no unrelated files were modified
- summarize what changed

Claude Code must not claim that a change works if it has not been verified.

---

# 30. Change Size Principle

Prefer incremental changes.

A task should normally produce a small, understandable Git diff.

Avoid combining unrelated changes such as:

- navigation changes
- theme redesign
- data models
- state management
- new features
- dependency changes

into one implementation unless explicitly requested.

When several changes are needed, separate them into logical steps.

Each step should leave the application in a working or clearly testable state.

---

# 31. Existing Starter Code

The current project was initially created from an Expo starter template.

Some existing files may contain starter functionality that is not part of LifeRPG.

Do not automatically delete or replace starter files simply because they are not currently needed.

Before deleting starter code:

1. Check whether it is referenced elsewhere.
2. Explain why it is no longer needed.
3. Confirm that removing it will not break existing functionality.
4. Obtain approval when the deletion is structural or potentially destructive.

---

# 32. Documentation Has Priority Over Assumptions

The files in `docs/` represent the current project specification.

Do not invent requirements that are not documented when implementing a feature.

If the documentation is incomplete:

- identify the missing decision
- explain why it matters
- propose a reasonable option
- ask for approval when the decision affects architecture or product behavior

Do not silently turn an implementation assumption into a project requirement.

---

# 33. First Implementation Rule

The first implementation should be intentionally small.

Do not attempt to implement the complete MVP in one task.

Build the application incrementally.

Each feature should be:

1. planned
2. implemented
3. tested
4. reviewed
5. committed

before moving to the next significant feature.
