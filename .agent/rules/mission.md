---
trigger: always_on
---

# MISSION: Build Production-Ready Landing Page

## Goal
Convert visitors into email leads for 2025 Cottage Food Legal Hub roadmap.

## Key Features
1. Hero: Pattern interrupt headline + sub + CTA
2. Anxiety: Problem copy + 3 risk cards
3. Solution: Transformation copy + feature cards
4. Trust: Quote + community badge
5. Final CTA: Form (name, state, email) → N8N webhook
6. Quick stat selector (state dropdown → dynamic facts)

## Requirements
- Use provided copy exactly (from PROJECT_STATE.md)
- POST to webhook via env var
- Zod validation + loading/success/error states
- Mobile responsive
- Fast performance
- Privacy checkbox + disclaimer

## Success Criteria
- No critical issues from /Jim review
- Form submits securely
- Visual matches attached mockups