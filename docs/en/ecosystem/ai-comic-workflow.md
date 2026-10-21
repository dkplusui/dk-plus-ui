---
title: AI Comic Production Workflow
description: The six stages of AI comic production — positioning, script, character standards, storyboard, voice, and publishing — each with its output, pass condition, and common failure.
---

<div class="ecosystem-product-hero">
  <div>
    <span class="ecosystem-product-eyebrow">KARUI CREATOR GUIDE</span>
    <h1>Production Workflow</h1>
    <p class="ecosystem-product-lead">Six stages in order. Each one has a defined output and a pass condition, and there is no reason to enter the next stage before the previous one passes.</p>
    <div class="ecosystem-product-actions">
      <a href="#stage-overview">See the overview</a>
      <a href="/en/ecosystem/ai-comic-prompts">Get prompts and standards</a>
      <a href="/en/ecosystem/ai-comic">Back to overview</a>
    </div>
  </div>
  <div class="ecosystem-product-mark">WORK<br />FLOW</div>
</div>

## Stage Overview

| #   | Stage                           | Key output                                     | Pass condition                                         |
| --- | ------------------------------- | ---------------------------------------------- | ------------------------------------------------------ |
| 1   | Topic and positioning           | Positioning statement and audience profile     | You can say in one sentence who has what problem       |
| 2   | Script and rhythm               | Scene script with information points annotated | Deleting any scene should break the story              |
| 3   | Characters and visual standards | Character sheets and a visual standards page   | Three test shots pass the standards                    |
| 4   | Storyboard and visuals          | Storyboard table and visual material           | A fixed reviewer spot-checks consistency               |
| 5   | Voice and sound                 | Voice tracks and a three-layer sound mix       | On headphones, dialogue stays clear and forward        |
| 6   | Editing and publishing          | The finished cut and the publishing version    | Watch it on a small screen, on speaker, and vertically |

<div class="ecosystem-feature-grid">
  <div class="ecosystem-feature-card"><strong>The early stage is cheap</strong><p>Getting the topic or the script wrong costs one rewrite, so it is worth trying several versions.</p></div>
  <div class="ecosystem-feature-card"><strong>The middle stage is expensive</strong><p>Skipping character and visual standards and generating at full scale is the costliest mistake.</p></div>
  <div class="ecosystem-feature-card"><strong>The late stage runs on checklists</strong><p>Sound and editing depend on a checklist, not on instinct at the last minute.</p></div>
</div>

## Stage One Topic and Positioning

Write down the target audience, the content type, and the central conflict. A good topic can be expressed in one sentence: who has what problem, and why is it worth continuing to watch.

"A story about revenge" is a genre, not a positioning statement. The positioning sentence needs a person, a situation, and a reason to keep watching.

- Output: one positioning statement and an audience profile.
- Checkpoint: if you cannot say that sentence, the topic has not converged. Do not start production.
- Common failure: the topic sounds grand but has no specific person in it; retention will suffer.

## Stage Two Script and Rhythm

Break the story into opening, development, turn, and resolution. Give each scene a single primary information point, and label the purpose of dialogue, narration, and visuals separately so that not all information depends on subtitles.

Pacing splits, scene structure, and the storyboard output format are the most reusable part of this stage. See <a href="/en/ecosystem/ai-comic-prompts#script-and-copy">Prompts and Asset Standards</a>.

- Output: a scene-level script with information points annotated.
- Checkpoint: if any scene can be deleted without breaking the story, that scene is redundant.
- Common failure: three separate things crammed into one episode, and the audience remembers none of them.

## Stage Three Characters and Visual Standards

Build character sheets recording hairstyle, clothing, body type, expression, personality, and habitual gestures. At the same time, fix the frame, colour, line, and lighting style. Complete a few test shots before extending to the full episode — this removes a large amount of rework.

Field lists for character sheets, the turnaround specification, and style families are on <a href="/en/ecosystem/ai-comic-prompts#characters-and-style">Prompts and Asset Standards</a>.

- Output: character sheets and a visual standards page.
- Checkpoint: run three test shots against the standards before mass production.
- Common failure: writing only "the heroine, 20 years old" with no clothing, hairstyle, or body type guarantees drift across episodes.

## Stage Four Storyboard and Visuals

For each shot, specify shot size, camera position, character action, background, and duration. After generating the frames, review character consistency, hand detail, text errors, spatial relationships, and shot continuity first.

When generating background-only shots, add strong constraints so characters do not wander in. The rules are on <a href="/en/ecosystem/ai-comic-prompts#background-only-prompts">Prompts and Asset Standards</a>.

- Output: a storyboard table and visual material.
- Checkpoint: consistency is spot-checked by a fixed reviewer, not self-assessed by the generator.
- Common failure: text inside the frame (signage, screens) is almost always wrong. Remove it or mask it in post.

## Stage Five Voice and Sound

Unify timbre and speaking pace to match each character's personality, and leave pauses for key lines. Background music carries emotion, ambience carries space, and effects carry action feedback; none of them should drown out the dialogue.

Voice classification and cross-episode consistency live on <a href="/en/ecosystem/ai-comic-prompts#voice-standards">Prompts and Asset Standards</a>.

- Output: voice tracks and a three-layer sound mix.
- Checkpoint: listen on headphones and confirm the dialogue stays clear and forward.
- Common failure: one speaking pace for the whole episode, read flat from start to finish.

## Stage Six Editing and Publishing

Finish the rough cut first, then add camera movement, transitions, subtitles, and sound detail. Before publishing, review the opening hook, information rhythm, subtitle readability, rights risk, and how it looks on different screens.

- Output: the finished cut and the publishing version.
- Checkpoint: watch it once each on a small phone screen, on speaker, and in vertical orientation.
- Common failure: finishing the edit on a large monitor and publishing with half the subtitles cropped out.

## Pre-publish Checklist

<div class="ecosystem-feature-grid">
  <div class="ecosystem-feature-card"><strong>Order</strong><p>Finish the rough cut before adding transitions and camera moves. Do not polish a structure that is not settled.</p></div>
  <div class="ecosystem-feature-card"><strong>Sound</strong><p>Dialogue stays clear and is never buried under music and effects.</p></div>
  <div class="ecosystem-feature-card"><strong>Subtitles</strong><p>Readable on a small screen, with enough size and outline.</p></div>
  <div class="ecosystem-feature-card"><strong>Frame</strong><p>Nothing important is cropped in vertical view, and content stays inside the safe area.</p></div>
  <div class="ecosystem-feature-card"><strong>Compliance</strong><p>Licensing, AI disclosure, and sensitive elements checked against <a href="/en/ecosystem/ai-comic-compliance">Compliance and Rights</a>.</p></div>
  <div class="ecosystem-feature-card"><strong>Archive</strong><p>Project files, character sheets, license records, and publishing history are saved.</p></div>
</div>

> After finishing one episode, add whatever you skipped to this checklist, then update <a href="/en/ecosystem/ai-comic-prompts">Prompts and Asset Standards</a>. It should become your own production asset, not a directory of somebody else's toolbox.
