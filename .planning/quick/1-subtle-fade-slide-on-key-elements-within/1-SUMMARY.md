---
phase: 1-subtle-fade-slide-on-key-elements-within
plan: 1
subsystem: frontend
tags: [animation, framer-motion, ux, scroll-animations]
dependency_graph:
  requires: [ScrollAnimations.tsx]
  provides: [element-level animations in AboutSection, ServicesSection, ContactSection]
  affects: [user experience, visual polish]
tech_stack:
  added: []
  patterns: [ScrollReveal with distance parameter, StaggerContainer + StaggerItem, element-level animations]
key_files:
  created: []
  modified:
    - src/components/sections/AboutSection.tsx
    - src/components/sections/ServicesSection.tsx
    - src/components/sections/ContactSection.tsx
decisions:
  - Use distance=15 for subtle icon animations
  - Use distance=20 for section headers and larger elements
  - Icons animate before titles with staggered delays
  - Badge tags use StaggerContainer for tight staggering (0.08s)
metrics:
  duration: 5 minutes
  completed_date: 2026-03-15
  tasks_completed: 3
  files_modified: 3
---

# Phase 1 Plan 1: Subtle Fade + Slide on Key Elements Summary

## One-liner
Added element-level fade + slide animations to icons and titles in AboutSection, ServicesSection, and ContactSection using existing ScrollAnimations infrastructure with refined parameters (15-20px distance).

## Objective
Create a more polished, dynamic feel where individual elements animate in a staggered fashion, rather than entire sections animating as blocks.

## Tasks Completed

### Task 1: Animate key elements in AboutSection
- Reduced section header distance from 30 to 20px
- Wrapped card icons with ScrollReveal (distance=15, delay=0)
- Wrapped card titles with ScrollReveal (distance=15, delay=0.1)
- Added staggered badge animations for Uzman Optik Hizmeti card using StaggerContainer (staggerDelay=0.08)

### Task 2: Animate key elements in ServicesSection
- Reduced section header distance from 30 to 20px
- Wrapped service card icons with ScrollReveal (distance=15)
- Added staggered delays based on index (0, 0.05, 0.1...)

### Task 3: Animate key elements in ContactSection
- Reduced section header distance from 30 to 20px
- Wrapped contact card icons (Phone, WhatsApp, Email) with ScrollReveal (distance=15)
- Wrapped Address and Hours card icons with ScrollReveal
- Reduced map ScrollReveal distance to 20px

## Deviations from Plan

None - plan executed exactly as written.

## Verification Results

- All three section components build without errors
- Animations use subtle distances (15-20px) as specified
- Key visual elements (icons) animate before their container content
- No entire sections wrapped in animation - only internal elements
- FrameGallery unchanged (already has individual frame animations)

## Success Criteria Met

- npm run build passes
- Icons in each section fade+slide in with subtle motion
- Section headings have refined, lighter animations
- User can scroll through the page and see elements animate independently within sections

## Commits

| Commit | Description |
|--------|-------------|
| b762bec | feat(quick-1): add element-level animations to AboutSection |
| bf27e43 | feat(quick-1): add icon-first entrance animations to ServicesSection |
| c6e6497 | feat(quick-1): add icon animations to ContactSection |

## Self-Check: PASSED

- All modified files exist and build successfully
- All commits verified in git history
- Animation parameters match plan specifications