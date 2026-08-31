# Decision Log: Creative Response Prompts (the "A" in STEAM)

**Date:** 2026-08-30
**Feature:** An optional creative-response prompt at the end of a unit's lesson — one real example built, TEKS 2.8A "2D Shapes."

## The idea

Research on arts integration shows real, measurable gains in math and science achievement, not just "soft" engagement benefits — see the LinkedIn post drafted the same night, citing a third-grade math-proficiency study and James Catterall's 25,000-student longitudinal study. Rather than only writing about that research, this closes the loop: one real unit now has a creative prompt tied specifically to what it teaches.

## Decision 1 — A written prompt, not an in-app drawing tool

Two very different builds were on the table: a text prompt the student acts on outside the app (paper, verbally, however), or an actual in-app canvas capturing and saving student drawings. The canvas version is a real, dedicated feature — new interaction pattern, save/load state — closer in size to the adaptive-difficulty engine build. The written-prompt version reuses the existing lesson-tab pattern entirely. Chose the written prompt for tonight; the canvas version is a legitimate future build, not this one.

## Decision 2 — One unit, chosen for a genuinely tight pedagogical fit, not a generic add-on

TEKS 2.8A teaches 2D shapes. Picasso's Cubism is literally built from geometric forms — triangles, circles, squares, rectangles reassembled into faces and figures. This isn't "add art because art is good," it's a specific, well-matched cross-disciplinary connection. Picked over other candidate units (e.g., "Equal Groups," a plausible Mondrian/grid pairing) to keep tonight's build to one real example.

## Decision 3 — Rendered as a highlighted box inside the existing Lesson tab, not a new tab

Adding a whole new tab means updating the `Tab` type, the tab-icon map, and the tab bar rendering — a bigger, riskier change for one prototype unit. A dashed-border callout box appended to the end of the Lesson tab (`unit.creativePrompt`, optional field) is additive, low-risk, and consistent with how other optional content (like `lessonImage`) already works in this data model.

## What's still open

- Only one unit has a `creativePrompt`. The field is optional and grade/unit-agnostic — extending it further is a content-authoring task, not a code task, same pattern as every other feature this week.
- No artist-style pairing has been designed for non-geometry units yet (e.g., a Mondrian/grid pairing for arrays or fractions).

## Verification

Type-checked clean. Verified live via Playwright on `/student/2/2.8A`: confirmed the Lesson tab renders the "Dibuja como Picasso" / "Draw Like Picasso" box with both English and Spanish text, zero console errors, screenshot confirms visual match to the site's design system.
