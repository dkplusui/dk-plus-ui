---
title: AI Comic Prompts and Asset Standards
description: Copy-ready AI comic prompt templates — novel adaptation, original script, storyboard output, extraction, character sheet and turnaround, style and camera moves, background-only shots, clip generation, frame repair, consistency review, voice and mix, and compliance self-checks, with an asset spec and variable table.
---

<div class="ecosystem-product-hero">
  <div>
    <span class="ecosystem-product-eyebrow">KARUI CREATOR NOTES</span>
    <h1>Prompts and Asset Standards</h1>
    <p class="ecosystem-product-lead">Every block below is ready to paste straight into a model. {{}} marks a variable to replace; the surrounding notes explain why it is written that way and which values you must test on your own model.</p>
    <div class="ecosystem-product-actions">
      <a href="#storyboard-output-format">Copy the storyboard prompt</a>
      <a href="#characters-and-style">Characters and style</a>
      <a href="#quick-reference">See the quick table</a>
      <a href="/en/ecosystem/ai-comic-workflow">See the workflow</a>
    </div>
  </div>
  <div class="ecosystem-product-mark">PROMPT<br />NOTES</div>
</div>

## How to Use This Page

Prompts fall into two categories: **reusable templates** (stable structure, copy as-is) and **parameters that need testing** (durations, word counts, level of detail, which vary by model). The labels mean:

<div class="ecosystem-feature-grid">
  <div class="ecosystem-feature-card"><strong>Widely adopted</strong><p>Many independent practices arrive at the same approach. Highest confidence — use it directly.</p></div>
  <div class="ecosystem-feature-card"><strong>Divergent</strong><p>Different approaches give different parameters. Test them against your own model before committing.</p></div>
  <div class="ecosystem-feature-card"><strong>Known pitfalls</strong><p>Problems several people have hit. Avoiding them early is much cheaper than rework.</p></div>
</div>

> Prompt performance depends heavily on the specific model. Templates are a starting point, not an endpoint: run one episode on your own account, delete the constraints that do not work, keep the ones that do, and write your own pitfalls back into this page. For a whole season, only tune the parameter slots — never restructure the template episode by episode.

## Quick Reference

Find the template by production stage; each link goes straight to a copy-ready prompt.

| Stage       | Prompt                                                                                                         | What it solves                                                       |
| ----------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Adaptation  | [Adapting a novel](#adapting-a-novel)                                                                          | Turn a novel passage into vertical short-drama copy                  |
| Writing     | [Original script](#original-script)                                                                            | Generate a scene-level script with pacing                            |
| Storyboard  | [Storyboard output format](#storyboard-output-format)                                                          | Output a fixed structure that becomes a table                        |
| Extraction  | [Asset extraction](#asset-extraction)                                                                          | Dialogue, narration, characters and props, video reverse-engineering |
| Character   | [Character sheet](#character-sheet) / [Turnaround](#turnaround)                                                | Lock the look and stop cross-episode drift                           |
| Style       | [Style families](#style-families) / [Camera moves](#camera-movement-prompts)                                   | One style and camera language for the season                         |
| Backgrounds | [Background-only prompts](#background-only-prompts)                                                            | Stop characters leaking into background shots                        |
| Visuals     | [Single-clip generation](#single-clip-generation) / [Frame repair](#frame-repair)                              | Generate from the storyboard and fix what is broken                  |
| Review      | [Consistency review](#consistency-review)                                                                      | Catch continuity and artefacts automatically                         |
| Sound       | [Voice definition](#defining-voices) / [Dialogue generation](#generating-dialogue) / [Mix review](#mix-review) | No voice drift, no buried dialogue                                   |
| Compliance  | [Pre-publish self-check](#pre-publish-self-check) / [Rewriting risky frames](#rewriting-risky-frames)          | Catch high-risk items before publishing                              |

See the [Variable Table](#variable-table) for the unified placeholder syntax.

## Script and Copy

### Adapting a Novel

Converting a novel passage into short-video copy, the requirements are remarkably consistent: keep the theme, reverse at the start, cut setup to raise conflict density, leave a hook at the end, write text that converts directly into shots, and close with positive framing. The template below turns all six into hard constraints.

```text
You are a short-drama adaptation writer. Rewrite the novel passage I provide as
copy for a vertical comic-style short drama.

[Hard requirements]
1. Keep the original theme and main line. Do not add characters or subplots
   unrelated to the main line.
2. The first 3 seconds must contain a hook: use a counter-intuitive or
   counter-logical contrast as the suspense. Never open with background setup.
3. Cut all environmental setup and internal monologue; keep only actions and
   dialogue that push the conflict forward.
4. Raise conflict density: every two consecutive lines must advance the plot.
5. End on suspense that clearly drives the viewer to the next episode.
6. The text must convert directly into storyboards and voiceover: write the
   character, expression, action, and setting for every beat. No abstract writing.
7. Avoid character names, faction names, technique names, and signature plot
   points from real, existing works.
8. No crude, violent, gory, or suggestive content. Where violence or despicable
   behaviour appears, close it with positive framing.
9. Strictly follow short-video platform content rules. Do not output anything
   that violates them.

[Output format]
Two sections:
Section 1 "Script copy" — lines of dialogue and narration ready for voiceover.
Section 2 "Visual adaptation" — one shot description per line, with character,
expression, action, and setting.

[Source passage]
{{paste the source text}}

[Target episode and runtime]
{{e.g. episode 3, 60 seconds}}
```

> Almost every adaptation prompt ends with "strictly follow all short-video platform content rules". That is not boilerplate: platform review is the largest source of uncertainty for this kind of content, so write the red lines into the prompt as hard constraints instead of leaving them outside as good intentions.

### Original Script

Structured prompting is far more stable than free-form writing. The reusable frame fixes five blocks: **characters, specification, pacing, content requirements, output format**.

```text
You are a screenwriter for vertical comic-style short drama. Write an original
script from the setup below.

[Characters]
- Lead: {{name}}, {{role}}, personality {{...}}, catchphrase {{...}}
- Supporting: {{name + relationship to the lead + personality}}
- Antagonist: {{name + motive}}

[Specification]
- Episodes: {{10}}
- Runtime per episode: {{1 to 2}} minutes
- Target length: about {{700}} words per episode

[Pacing split] by percentage — do not distribute evenly
- 0-10%    hook immediately, no background setup
- 10-40%   small events build to a small climax
- 40-60%   the major reversal, supported by earlier clues
- 60-85%   the strongest conflict
- 85-100%  close quickly and leave a hook into the next episode

[Content requirements]
1. Open on conflict; at least one reversal per episode.
2. Dialogue is conversational, in character, and compact; every line carries
   information.
3. No idiotic plot points; violent or despicable behaviour needs positive framing.
4. Avoid military, police, and religious topics.
5. Use national emblems and flags with care; profanity must be censored and kept
   minimal.
6. Do not reuse names, faction names, or technique names from well-known works
   in the same genre.

[Output format]
Scene by scene. Each scene contains:
scene number | setting (name + time of day) | duration | characters present
| the single information point of this scene | body (action and dialogue, line by line)

[Genre]
{{one-line premise}}
```

Dividing an episode by percentage is widely and independently adopted. Three variables actually decide how it feels: **information density, emotional swing, and alternation between fast and slow**. Asking only for a word count without a pacing split usually produces a flat, running summary.

### Storyboard Output Format

This is the one worth copying verbatim. The core is a **fixed output structure with no creative latitude**, so the result can be dropped straight into a storyboard table:

```text
You are a storyboard artist. Convert the script below into storyboard content
suitable for AI generation.

[Output format] Output one shot at a time using exactly these fields, in this
order. Do not add or remove fields:
[Shot number] + [Visual description] + [Dialogue/Narration] + [SFX/BGM]
+ [Single shot duration]

[Hard requirements]
1. Total runtime about {{30}} seconds, with a strong hook in the first {{3}}
   seconds.
2. Visual descriptions must be concrete: character name, blocking, expression,
   action, setting, lighting, and shot size — written as a sentence you could
   paste directly into an image generator. No abstract writing such as
   "the mood is tense".
3. Dialogue is conversational, in character, and compact; every line carries
   information.
4. Do not put generated text into the frame (signage, screens, book covers). When
   text is needed, leave the space and note it after the SFX field as
   "post text: {{content}}".
5. End on suspense that drives the viewer to the next episode.
6. Single shot duration within {{1 to 5}} seconds. Consecutive shots in the
   same setting must vary clearly in length — never equal.

[Camera language]
- Adjacent shots must not repeat the same shot size
- At least one shot-size change every {{3 to 5}} shots
- Character eyeline direction stays consistent between adjacent shots

[Script]
{{paste the script}}
```

> This maps directly onto the storyboard fields in the <a href="/en/ecosystem/ai-comic-workflow#stage-four-storyboard-and-visuals">production workflow</a>. Fix it as a template and make every episode fill it in.

### Asset Extraction

When turning a script into downstream assets, nothing should be lost. Write these **as four separate prompts** — mixing them in one request makes the model cross the streams.

```text
You are an asset extraction assistant. Extract every line of dialogue from the
script below.

[Requirements]
1. Keep the original text intact: nothing dropped, rewritten, or polished.
2. Use {{35 to 50}} characters including punctuation as the per-line limit.
   Split longer lines on meaning.
3. Every split line must belong to the same speaker. Never merge across speakers.
4. Do not output narration or visual descriptions.
5. Output format: scene number | character | line
```

```text
You are an asset extraction assistant. Extract all narration from the script
below.

[Requirements]
1. Extract narration only. Keep character dialogue separate; never mix them.
2. Rewrite narration into spoken language and drop written connectives without
   changing the information.
3. Add a one-line suggested visual for each narration line.
4. Output format: scene number | narration | suggested visual
```

```text
You are a setting extraction assistant. Extract three categories of information
from the script below. Do not mix them.

1. Characters: name, age range, body type, hairstyle, clothing colours,
   signature props, personality
2. Settings: name, interior or exterior, key furnishings, lighting and mood
3. Props: name, material, size, which scene it appears in

[Requirements]
- One table per category
- Write "not mentioned" for missing fields. Never invent details.
- Do not output source text

[Script]
{{paste the script}}
```

```text
Using the finished piece below as a reference, produce a reusable storyboard
structure analysis:

1. List every shot on a timeline: shot size, duration, narrative function
2. Mark the three key hooks: at which second, and what technique was used
3. Mark pacing shifts: acceleration, pauses, empty space
4. End with a structural template that contains no specific content and can be
   reused

[Requirements]
- Do not retell the plot
- Do not output any original dialogue
- Analyse structure only

[Reference description or timeline]
{{paste the timeline or storyboard description}}
```

> Video reverse-engineering is for learning rhythm and structure. Never lift the original dialogue or specific plot into your own finished piece.

## Characters and Style

### Character Sheet

Consistency comes from a character sheet first, then fixed camera angles. The most common failure is a sheet like "the heroine, 20 years old" — **every field must be concrete enough to feed an image generator**:

```text
You are a character designer. From the script below, build an image-ready
character sheet for every character that appears.

[Fields]
Name | age range | gender expression | body type | hair (bangs, length, colour)
| clothing (top, trousers, shoes, colour HEX) | signature accessory
| baseline expression | personality | habitual gestures and catchphrases
| voice characteristics

[Requirements]
1. Only use what can be derived from the script. Write "TBD" where it cannot be
   derived. Do not invent details that conflict with the source.
2. Clothing and colours must be specific styles and values — never "casual wear".
3. Only record fields that stay constant across episodes. Put changing states
   in a separate notes column.
4. Add one "visual anchor" sentence per character, for example
   "always wears red-framed glasses, scar on the left hand". Every later image
   must be consistent with it.
5. Add one "voice anchor" sentence per character, for example
   "grainy, slow pace, falling intonation".

[Script]
{{paste the script}}
```

### Turnaround

```text
Generate a turnaround reference sheet for this character.

[Content]
1. Front full-body standing pose, left-side full-body standing pose, back
   full-body standing pose, plus one front portrait.
2. Plain white background: no setting, no props, no text, no borders.
3. Four images side by side at the same character height and proportion, with
   no table lines.
4. Follow the character sheet exactly: do not add or remove clothing or
   accessories, do not change colours.
5. Keep line work and lighting neutral so the sheet stays useful as a
   consistency reference.

[Aspect]
16:9 landscape

[Character sheet]
{{paste the character sheet}}
```

More advanced prompts for micro-expression control and extracting a look from reference photos exist to tighten cross-episode drift once a sheet exists.

### Style Families

The following seven families are the same split adopted independently by many practices, and work as a direct index for choosing a style:

| Family                    | Covers                                |
| ------------------------- | ------------------------------------- |
| Realistic and cinematic   | Lifelike texture, film-grade lighting |
| 3D and rendered           | 3D renders, game-engine looks         |
| Anime and manga           | 2D Japanese style, shōjo manga        |
| Chinese traditional       | Guoman and ink-wash                   |
| Korean webtoon and manhwa | Korean comic line work                |
| Dark and stylized         | Strong contrast, high personality     |
| Dreamy and fairy-tale     | Soft low saturation, storybook feel   |

A second taxonomy splits styles by character and setting, adding texture, lighting, and trend dimensions on top of those six families. **Library size is not the point**: every keyword set you choose must stay unchanged for the whole season. Consistency beats variety.

Use the prompt below to lock a style in, then store the resulting style paragraph and reuse it in every later image prompt:

```text
From the character sheet and genre below, choose one primary style and give a
complete reusable description.

[Candidate styles]
{{fill in the 2 best matches from the seven families}}

[Output]
1. Primary style: {{name}}
2. Style prompt: one complete paragraph that must cover line work, colour,
   lighting, texture, and camera feel, written so it can be pasted directly
   into an image prompt
3. Colour scheme: one primary, one secondary, one accent colour, with HEX values
4. Conflicting terms: 3 to 5 style words that must not be used together with it

[Character sheet]
{{paste the character sheet}}

[Genre]
{{one-line premise}}
```

### Camera Movement Prompts

Classify camera moves and fix them as templates combined with shot-size changes, instead of describing them ad hoc. Ad-hoc descriptions differ from shot to shot and the result visibly shakes.

| Move     | Reusable camera wording                                                             |
| -------- | ----------------------------------------------------------------------------------- |
| Push in  | Slow dolly forward from {{medium shot}} to {{close-up}}, constant speed, no shake   |
| Pull out | Slow dolly back from {{close-up}} to {{wide shot}}, constant speed, no shake        |
| Pan      | Camera position fixed, panning horizontally from {{A}} to {{B}}, constant speed     |
| Track    | Camera tracks sideways with {{character}}, who stays in the same position in frame  |
| Crane    | Camera moves {{up/down}} vertically, tilt angle unchanged, constant speed           |
| Orbit    | Camera orbits {{character}} 90 degrees at constant speed, clear background parallax |

How to use it: a storyboard's camera field may only contain these six moves plus a shot size (extreme wide, wide, medium, close-up, extreme close-up). If you need a new move, add it to the table first and then use it across the whole episode — never invent a term for a single shot.

### Background-only Prompts

Generating a pure background needs strong constraints. Drop any one of these four rules and characters start leaking in:

1. No person, body part, silhouette, or face anywhere in the frame.
2. No character name anywhere in the scene description.
3. Every prompt must begin with "no other people, empty scene".
4. Never output bracketed explanations; output the final prompt directly.

```text
Generate a background-only image. Hard requirements:

1. No person, body part, silhouette, or face may appear anywhere in the frame.
2. No character name may appear in the scene description.
3. Never output bracketed explanations. Output the final prompt directly.

[Scene] {{more than four characters, e.g. "a convenience store entrance at night in the rain"}}
[Time of day and lighting] {{e.g. night, cold light from a neon sign as the main source}}
[Key furnishings] {{list 3 to 5 objects that must appear}}
[Style] {{paste the season-wide style prompt}}
[Colours] {{paste primary / secondary / accent}}
[Aspect]
9:16 vertical
```

> These come from real rework. A character leaking into a background shot breaks consistency for the whole episode, and fixing it in post costs far more than constraining it from the start.

## Visuals and Camera

### Single-clip Generation

The common practice is to **lock every independent clip at 15 seconds**, which makes stitching and alignment predictable. Always pass the previous shot's information in, otherwise blocking and lighting jump.

```text
Generate the image for this shot from the storyboard.

[Shot number] {{03}}
[Duration] strictly {{15}} seconds
[Shot size / camera angle / move] {{medium / eye level / slow push in}}
[Blocking] {{lead at the front-left third, window on the right of the background}}
[Action and expression] {{concrete description}}
[Dialogue or inner monologue] {{no longer than the dialogue limit in the variable table}}
[Must keep unchanged]
- face shape, hairstyle, clothing, body type, and accessories exactly as in the
  character sheet
- the season-wide style prompt and colour scheme
- eyeline direction, lighting direction, and blocking consistent with the
  previous shot
[Forbidden]
- any text characters inside the frame
- clothing, accessories, or characters that do not match the character sheet

[Aspect]
9:16
[Previous shot notes] {{blocking, eyeline, and lighting of the previous shot}}
```

### Frame Repair

Prompts for the four most frequent problems. **Every repair must state that the rest stays unchanged**, otherwise one fix ruins the whole frame.

```text
Correct the hand structure only. Keep the identity, expression, clothing,
composition, lighting, and background completely unchanged.
The result must still match the character sheet: {{hand-related detail from
the character sheet}}
```

```text
Replace the text area in the frame with flat empty space, keeping the
perspective, lighting, and texture of that area consistent with the original.
Do not change any other part of the frame. Text location: {{exact location}}
```

```text
Remove characters from this frame that do not belong to this shot, and complete
the original composition with the correct environment elements. Keep the
style, lighting direction, shot size, and blocking completely unchanged.
Characters that must remain: {{character name}}
```

```text
Repaint this shot from the storyboard description below, keeping the character
sheet appearance, style, and colours unchanged:
{{paste that shot's storyboard fields}}
```

### Consistency Review

Use this as a machine first pass after batch generation, so human spot-checks only cover the shots the machine named.

```text
You are a storyboard reviewer. Compare the frames against the character sheet
and the storyboard, and output a problem list.

[Character sheet]
{{paste the character sheet}}

[Storyboard]
{{paste the storyboard}}

[Frame descriptions]
{{paste images or descriptions shot by shot}}

[Checks per shot]
1. Appearance consistency: differences in face shape, hairstyle, clothing, body
   type against the character sheet
2. Hand anomalies
3. Any text inside the frame
4. Blocking and eyeline direction conflicting with the previous shot
5. Shot size and lighting matching the storyboard annotation
6. Whether the duration requirement is met

[Output]
- Problems only, sorted by severity. No praise.
- Each item: shot number, problem type, one-sentence fix suggestion.
```

## Voice Standards

### Defining Voices

Voice is where the most material effort goes, but **what matters is not how many voices exist — it is locking exactly one per recurring character.** Define voice, pace, and pauses in one pass:

```text
Define a fixed voice for every character in the character sheet below.

[Output fields]
Gender tendency | apparent age | timbre texture | speaking rate (words per
minute) | intonation range | pause habits | voice anchor (one sentence)

[Requirements]
1. The same voice is used for a character's narration and dialogue.
2. Give 2 options per character and mark the primary and the backup. The backup
   is only used if the primary fails.
3. Output parameters usable as-is. Adjectives alone are not acceptable.
4. Stay consistent with the voice anchor in the character sheet.
5. Do not offer several phrasings of the same voice for one character.

[Character sheet]
{{paste the character sheet}}
```

### Generating Dialogue

```text
Generate voiceover from the storyboard.

[Voice]
{{character name}} → {{voice description}}, {{X}} words per minute

[Emotional curve] {{this episode's arc, e.g. suppressed 3 rising to 8 then
settling to 4}}

[Requirements]
1. Generate line by line. Do not merge or rewrite.
2. Leave {{0.3 to 0.5}} seconds of pause before and after key lines.
3. Put emotion cues in brackets as delivery guidance. Never read the brackets.
4. Output format: shot number | line | emotion cue
5. All lines for one character must use the same voice. No drift.
6. Output narration as a separate group from dialogue.

[Storyboard]
{{paste the storyboard}}
```

> Voice drift is where series content gives itself away. At the end of each episode, spot-check three key lines against episode one. If the voice has drifted, regenerate — do not wait for the audience to notice.

### Mix Review

| Layer                | Job                       | Level relationship                          |
| -------------------- | ------------------------- | ------------------------------------------- |
| Voice                | Carries the information   | Always the loudest                          |
| Background music     | Drives emotion            | Below the voice; drop again under key lines |
| Ambience and effects | Space and action feedback | Brief lifts; never over the voice           |

```text
You are a mixing reviewer. Check the mix against the layer configuration below
and list the problems with adjustment suggestions.

[Layers] voice | background music | ambience | effects
[Emotional curve this episode] {{...}}

[Checks]
1. Any passage where voice is buried under music or effects — give timestamps
2. Places where music under a key line should drop further
3. Effects that are too loud or too dense
4. Voice drift within the episode — mark the shot numbers where it jumps
5. Whether speaking pace matches the visual rhythm

[Output]
Problems and adjustments only, sorted by severity.
```

Listen once on headphones: if the voice is buried, it fails. Listen once on a speaker: if the effects are harsh, fix that too.

## Compliance

The full red-line list is on <a href="/en/ecosystem/ai-comic-compliance">Compliance and Rights</a>. Two executable prompts belong here.

### Pre-publish Self-check

```text
You are a pre-publish compliance reviewer. Check against the list below and
output every failing item.

[Red lines]
1. No military, police, or religious subjects
2. No specific province names or real historical figures
3. No distortion or parody treatment of national emblems, flags, or currency
4. Sensitive content suggested through atmosphere, not depicted directly
5. Violent or crude scenes carry positive framing
6. Profanity is censored and kept minimal
7. No infringement of others' rights or real incidents; no photorealistic faces
   of identifiable living people
8. Licensing confirmed for material, music, fonts, and likenesses, covering
   commercial use
9. Required AI disclosure retained per platform rules
10. No fabricated plots, exaggerated returns, or forced downloads

[This episode]
Storyboard: {{...}}
Dialogue: {{...}}
Material sources and licences: {{...}}

[Output]
For each item: pass / fail / uncertain. For failures, give the shot number and
a fix. For uncertain items, state what a human must confirm.
```

### Rewriting Risky Frames

```text
The frame description below may break platform review rules. Rewrite it as a
lower-risk version.

[Original]
{{paste the description or storyboard row}}

[Rewrite requirements]
1. No photorealistic face of an identifiable living person. Use profile, back
   view, silhouette, or a non-photoreal style.
2. No blood, wound close-ups, or limb damage.
3. Sensitive content becomes atmosphere and implication, never direct depiction.
4. Keep the original shot size, camera angle, camera move, duration, and
   narrative function unchanged.
5. Keep the character sheet appearance and the season-wide style.

[Output] original | rewritten | reason for each change
```

> Platforms differ widely in how they review photorealistic faces, and those rules change quickly. **Always follow the latest platform policy**, and do not copy any fixed recipe — including this prompt.

## Variable Table

Use `{{ }}` for everything you need to replace. It makes each prompt easy to freeze as your own template and saves you re-reading the whole block every episode.

| Variable                       | Fill it with                            | Notes                                                 |
| ------------------------------ | --------------------------------------- | ----------------------------------------------------- |
| `{{paste the script}}`         | The scene-level script                  | Shared by adaptation and storyboard prompts           |
| `{{character sheet}}`          | The full character sheet                | Image generation, review, and mixing all depend on it |
| `{{season-wide style prompt}}` | The locked style paragraph              | Chosen once per season, reused everywhere             |
| `{{colour scheme}}`            | Primary / secondary / accent HEX values | Same                                                  |
| `{{storyboard}}`               | The five-field storyboard table         | Dialogue generation consumes it directly              |
| `{{previous shot notes}}`      | Blocking, eyeline, lighting             | Mandatory when generating images to avoid axis jumps  |
| `{{X}}` / `{{N}}`              | Durations, word counts, shot counts     | **This is the part that needs testing**               |

> This page is original Karui content. It does not reproduce anyone's prompt library, asset pack, or contact details. Update it after finishing an episode — it should become your own production asset.
