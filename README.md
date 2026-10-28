
# Premiere Pro Notepad

A lightweight, dark-themed notepad panel for Adobe Premiere Pro. Write and keep notes directly inside Premiere Pro using a minimal text editor with automatic saving.

## Features

- **Auto-Save:** Automatically saves your notes one second after you stop typing.
- **Persistent Notes:** Stores notes in `localStorage` so they remain available when the panel is reopened in the same extension storage environment.
- **Dark Theme:** Uses a dark background and light text to complement a dark editing workspace.
- **Minimal Interface:** A single, full-panel text editor without unnecessary controls.
- **Monospaced Font:** Uses Consolas for a familiar coding-style writing experience.
- **Spell Check:** Browser spell checking is enabled.
- **Keyboard-Friendly:** The editor receives focus automatically when the panel loads.

## Project Structure

```text
Notepad_PR/
├── client/
│   ├── index.html
│   ├── index.js
│   └── style.css
└── CSXS/
    └── manifest.xml
```

### File Overview

- `client/index.html` — Defines the notepad interface.
- `client/index.js` — Loads saved notes and handles automatic saving.
- `client/style.css` — Defines the dark theme, editor layout, typography, and scrollbar styling.
- `CSXS/manifest.xml` — Defines the Adobe CEP extension metadata, panel configuration, and host compatibility.

## Requirements

- Adobe Premiere Pro.
- Adobe CEP extension support.
- A Premiere Pro version compatible with the extension manifest.

**Declared compatibility:** The manifest specifies Premiere Pro versions `[22.0,23.0]`, corresponding to the declared host-version range. Compatibility with other versions has not been verified.

## Installation

1. Download or clone this repository.
2. Locate the `Notepad_PR` extension folder.
3. Install the folder in an appropriate Adobe CEP extensions directory for your operating system and Premiere Pro setup.
4. If required by your environment, enable loading of unsigned CEP extensions.
5. Restart Premiere Pro.
6. Open the extension from the applicable Premiere Pro Extensions menu.

The exact installation directory and menu location can vary by operating system and Premiere Pro version.

## Usage

1. Open the Notepad panel in Premiere Pro.
2. Type your notes into the text area.
3. Stop typing for approximately one second.
4. The extension saves the text automatically.
5. Reopen the panel in the same extension storage environment to retrieve your saved notes.

No manual Save button is required.

## How Auto-Save Works

The extension retrieves previously saved text from `localStorage` using the key `premiereNotepad`.

Whenever the text changes, it resets a timer. After one second without further input, the current text is stored.

```javascript
localStorage.setItem("premiereNotepad", note.value);
```

This is a local browser-storage mechanism. The project does not implement cloud synchronization, file export, or automatic backup to a separate text file.

## Customization

### Change the Auto-Save Delay

Open `client/index.js` and locate the timer delay:

```javascript
saveTimer = setTimeout(function () {
  localStorage.setItem("premiereNotepad", note.value);
}, 1000);
```

Change `1000` to the desired delay in milliseconds.

### Change the Theme

Edit `client/style.css` to customize the editor's background, text color, font size, padding, and scrollbar appearance.

### Change the Default Panel Size

Open `CSXS/manifest.xml` and modify the width and height values in the `Geometry` section.

## Limitations

- Notes are stored in local browser storage rather than a standalone file.
- The extension does not provide multiple notes, folders, search, or export functionality.
- Storage persistence depends on the CEP environment and its storage behavior.
- The supplied manifest declares a limited Premiere Pro host-version range.
- Installation requirements may vary between systems.

## Contributing

Contributions, bug reports, and suggestions are welcome. When submitting changes, keep the extension lightweight and preserve its simple notepad workflow.

## License

No license file is included in the supplied project. Unless a license is added, the code should not be assumed to be available for unrestricted reuse, modification, or redistribution.

If you plan to publish this project publicly, consider adding a `LICENSE` file that clearly states the permissions and conditions for use.
