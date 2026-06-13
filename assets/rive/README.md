# CloudCat Rive State Machine

This folder contains the Rive authoring contract for the cloud cat.

## Files

- `cloudcat_state_machine.rive.json`: state machine contract for the Rive editor.
- `cloudcat_state_machine.riv`: export this binary file from Rive and place it here.

## Required Rive Setup

In Rive, create:

- Artboard: `CloudCat`
- State machine: `CloudCatMachine`

Inputs expected by `script.js`:

- `state` number: `0 idle`, `1 listen`, `2 low`, `3 hug`, `4 tearing`, `5 happy`
- `emotion` number: `0 neutral`, `1 tired`, `2 anxious`, `3 wronged`, `4 annoyed`, `5 happy`
- `pointerX` number: normalized `-1` to `1`
- `pointerY` number: normalized `-1` to `1`
- `isPetting` boolean
- `listen` trigger
- `tear` trigger
- `discover` trigger
- `pet` trigger
- `sparkle` trigger

After export, save the Rive binary as:

```text
assets/rive/cloudcat_state_machine.riv
```

The page will automatically try to load this file. If it is missing, the existing PNG/CSS cat actor remains active.
