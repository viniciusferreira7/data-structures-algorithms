# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Testing
- `bun test` - Run all tests
- `bun test --watch` - Run tests in watch mode

### Code Quality
- `bunx biome format --write` - Format code according to biome configuration
- `bunx biome lint --write` - Run linter and auto-fix issues
- `biome check` - Run complete biome check (format + lint)

## Project Architecture

This is a TypeScript algorithms playground focused on implementing and testing various algorithms and data structures. The project uses Bun as the runtime and testing framework.

### Directory Structure
```
src/
└── array/
    └── two-pointer/
        ├── hashmap/          # Hash map based algorithms (e.g., two-sum)
        ├── sliding-window/   # Sliding window algorithms
        └── exponential-search/ # Exponential search algorithms
```

### Code Organization
- Each algorithm implementation is paired with its corresponding `.spec.ts` test file
- Algorithms are organized by technique/pattern (two-pointer, sliding window, etc.)
- All implementations include comprehensive JSDoc documentation with examples
- Functions follow a consistent naming pattern and include type annotations

### Development Patterns
- Algorithm implementations should include detailed JSDoc with:
  - Function description and approach
  - Parameter constraints and types
  - Return value description
  - Multiple usage examples
- Test files use Bun's built-in test framework
- Code follows TypeScript strict mode requirements
- Biome is used for consistent formatting and linting

### Testing Strategy
- Each algorithm has comprehensive test cases covering:
  - Basic functionality examples
  - Edge cases
  - Input validation
- Tests are co-located with implementation files
- Use `bun test --watch` during development for immediate feedback

## Important notes

- Never use emojis on this projects only on README.md, it`s allowed.