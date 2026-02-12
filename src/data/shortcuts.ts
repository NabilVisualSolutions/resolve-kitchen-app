export interface Shortcut {
    id: number;
    description: string;
    keysMac: string[];
    keysPc: string[];
    category: "General" | "Edit" | "Cut" | "Color" | "Fairlight" | "Fusion" | "Management" | "View";
}

export const shortcuts: Shortcut[] = [
    // General & View
    { id: 1, description: "Undo", keysMac: ["Cmd", "Z"], keysPc: ["Ctrl", "Z"], category: "General" },
    { id: 2, description: "Redo", keysMac: ["Cmd", "Shift", "Z"], keysPc: ["Ctrl", "Shift", "Z"], category: "General" },
    { id: 3, description: "Save Project", keysMac: ["Cmd", "S"], keysPc: ["Ctrl", "S"], category: "General" },
    { id: 4, description: "Select All", keysMac: ["Cmd", "A"], keysPc: ["Ctrl", "A"], category: "General" },
    { id: 5, description: "Deselect All", keysMac: ["Cmd", "Shift", "A"], keysPc: ["Ctrl", "Shift", "A"], category: "General" },
    { id: 6, description: "Full Screen Viewer", keysMac: ["Cmd", "F"], keysPc: ["Ctrl", "F"], category: "View" },
    { id: 7, description: "Cinema Viewer (Clean Feed)", keysMac: ["Cmd", "P"], keysPc: ["Ctrl", "P"], category: "View" },
    { id: 8, description: "Fit to Window", keysMac: ["Shift", "Z"], keysPc: ["Shift", "Z"], category: "View" },

    // Edit & Cut
    { id: 9, description: "Blade Tool / Razor", keysMac: ["B"], keysPc: ["B"], category: "Edit" },
    { id: 10, description: "Selection/Normal Edit Mode", keysMac: ["A"], keysPc: ["A"], category: "Edit" },
    { id: 11, description: "Trim Edit Mode", keysMac: ["T"], keysPc: ["T"], category: "Edit" },
    { id: 12, description: "Dynamic Trim Mode", keysMac: ["W"], keysPc: ["W"], category: "Edit" },
    { id: 13, description: "Snapping On/Off", keysMac: ["N"], keysPc: ["N"], category: "Edit" },
    { id: 14, description: "Linked Selection On/Off", keysMac: ["Cmd", "Shift", "L"], keysPc: ["Ctrl", "Shift", "L"], category: "Edit" },
    { id: 15, description: "Zoom In Horizontal", keysMac: ["Cmd", "+"], keysPc: ["Ctrl", "+"], category: "Edit" },
    { id: 16, description: "Zoom Out Horizontal", keysMac: ["Cmd", "-"], keysPc: ["Ctrl", "-"], category: "Edit" },
    { id: 17, description: "Add Marker", keysMac: ["M"], keysPc: ["M"], category: "Edit" },
    { id: 18, description: "Modify Marker", keysMac: ["M", "M"], keysPc: ["M", "M"], category: "Edit" },
    { id: 19, description: "Play/Pause", keysMac: ["Space"], keysPc: ["Space"], category: "Edit" },
    { id: 20, description: "Play Reverse", keysMac: ["J"], keysPc: ["J"], category: "Edit" },
    { id: 21, description: "Stop", keysMac: ["K"], keysPc: ["K"], category: "Edit" },
    { id: 22, description: "Play Forward", keysMac: ["L"], keysPc: ["L"], category: "Edit" },
    { id: 23, description: "Play Faster / Slower", keysMac: ["Hold J or L"], keysPc: ["Hold J or L"], category: "Edit" },
    { id: 24, description: "Mark In Point", keysMac: ["I"], keysPc: ["I"], category: "Edit" },
    { id: 25, description: "Mark Out Point", keysMac: ["O"], keysPc: ["O"], category: "Edit" },
    { id: 26, description: "Clear In & Out", keysMac: ["Opt", "X"], keysPc: ["Alt", "X"], category: "Edit" },
    { id: 27, description: "Insert Edit", keysMac: ["F9"], keysPc: ["F9"], category: "Edit" },
    { id: 28, description: "Overwrite Edit", keysMac: ["F10"], keysPc: ["F10"], category: "Edit" },
    { id: 29, description: "Replace Edit", keysMac: ["F11"], keysPc: ["F11"], category: "Edit" },
    { id: 30, description: "Place on Top", keysMac: ["F12"], keysPc: ["F12"], category: "Edit" },
    { id: 31, description: "Append at End", keysMac: ["Shift", "F12"], keysPc: ["Shift", "F12"], category: "Edit" },
    { id: 32, description: "Ripple Delete (Delete space)", keysMac: ["Shift", "Delete"], keysPc: ["Shift", "Backspace"], category: "Edit" },
    { id: 33, description: "Disable/Enable Clip", keysMac: ["D"], keysPc: ["D"], category: "Edit" },
    { id: 34, description: "Move Video Track Up", keysMac: ["Opt", "Up"], keysPc: ["Alt", "Up"], category: "Edit" },
    { id: 35, description: "Move Video Track Down", keysMac: ["Opt", "Down"], keysPc: ["Alt", "Down"], category: "Edit" },
    { id: 36, description: "Nudge Clip Left (1 Frame)", keysMac: [","], keysPc: [","], category: "Edit" },
    { id: 37, description: "Nudge Clip Right (1 Frame)", keysMac: ["."], keysPc: ["."], category: "Edit" },
    { id: 38, description: "Nudge Clip Left (Multiframe)", keysMac: ["Shift", ","], keysPc: ["Shift", ","], category: "Edit" },
    { id: 39, description: "Nudge Clip Right (Multiframe)", keysMac: ["Shift", "."], keysPc: ["Shift", "."], category: "Edit" },
    { id: 40, description: "Change Speed / Retime", keysMac: ["Cmd", "R"], keysPc: ["Ctrl", "R"], category: "Edit" },
    { id: 41, description: "Paste Attributes", keysMac: ["Opt", "V"], keysPc: ["Alt", "V"], category: "Edit" },

    // Color Page
    { id: 42, description: "Reset Color Grade", keysMac: ["Shift", "Home"], keysPc: ["Shift", "Home"], category: "Color" },
    { id: 43, description: "Add Serial Node", keysMac: ["Opt", "S"], keysPc: ["Alt", "S"], category: "Color" },
    { id: 44, description: "Add Parallel Node", keysMac: ["Opt", "P"], keysPc: ["Alt", "P"], category: "Color" },
    { id: 45, description: "Add Layer Node", keysMac: ["Opt", "L"], keysPc: ["Alt", "L"], category: "Color" },
    { id: 46, description: "Add Outside Node", keysMac: ["Opt", "O"], keysPc: ["Alt", "O"], category: "Color" },
    { id: 47, description: "Add Serial Before", keysMac: ["Shift", "S"], keysPc: ["Shift", "S"], category: "Color" },
    { id: 48, description: "Grab Still", keysMac: ["Opt", "Cmd", "G"], keysPc: ["Alt", "Ctrl", "G"], category: "Color" },
    { id: 49, description: "Play Around Current Frame", keysMac: ["/"], keysPc: ["/"], category: "Color" },
    { id: 50, description: "Loop Playback Toggle", keysMac: ["Cmd", "/"], keysPc: ["Ctrl", "/"], category: "Color" },
    { id: 51, description: "Toggle Bypass Grade (See Original)", keysMac: ["Shift", "D"], keysPc: ["Shift", "D"], category: "Color" },
    { id: 52, description: "Highlight Mode (See Matte)", keysMac: ["Shift", "H"], keysPc: ["Shift", "H"], category: "Color" },
    { id: 53, description: "Printer Light Hotkeys On/Off", keysMac: ["Shift", "P"], keysPc: ["Shift", "P"], category: "Color" },

    // Fairlight
    { id: 54, description: "Show/Hide Mixer", keysMac: ["M"], keysPc: ["M"], category: "Fairlight" },
    { id: 55, description: "Lower Audio Level 1dB", keysMac: ["Opt", "Cmd", "Down"], keysPc: ["Alt", "Ctrl", "Down"], category: "Fairlight" },
    { id: 56, description: "Raise Audio Level 1dB", keysMac: ["Opt", "Cmd", "Up"], keysPc: ["Alt", "Ctrl", "Up"], category: "Fairlight" },

    // Fusion
    { id: 57, description: "Select All Tools", keysMac: ["Cmd", "A"], keysPc: ["Ctrl", "A"], category: "Fusion" },
    { id: 58, description: "Add Tool to Flow", keysMac: ["Shift", "Space"], keysPc: ["Shift", "Space"], category: "Fusion" },
    { id: 59, description: "Rename Tool", keysMac: ["F2"], keysPc: ["F2"], category: "Fusion" },
    { id: 60, description: "View in Viewer 1", keysMac: ["1"], keysPc: ["1"], category: "Fusion" },
    { id: 61, description: "View in Viewer 2", keysMac: ["2"], keysPc: ["2"], category: "Fusion" },

    // Management
    { id: 62, description: "Project Manager", keysMac: ["Shift", "1"], keysPc: ["Shift", "1"], category: "Management" },
    { id: 63, description: "Preferences", keysMac: ["Cmd", ","], keysPc: ["Ctrl", ","], category: "Management" }
];
