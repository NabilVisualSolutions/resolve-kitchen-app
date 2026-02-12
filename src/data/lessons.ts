export type Level = 'Beginner' | 'Intermediate' | 'Hard';

export interface Lesson {
    id: number;
    title: string;
    summary: string;
    content: string;
    xp: number;
    isCompleted: boolean;
    level: Level;
    image: string;
    pdfUrl?: string; // Optional PDF link
    pdfPages?: number[]; // Map each slide to a specific PDF page number
}

export const lessons: Lesson[] = [
    {
        id: 1,
        title: "Lesson 1: The Kitchen Tour (Interface Overview)",
        summary: "Welcome to your new kitchen! Let's learn where everything is kept.",
        level: "Beginner",
        image: "https://placehold.co/600x400/2563eb/FFF?text=Kitchen+Tour",
        pdfUrl: "/resolve-kitchen-app/DaVinci-Resolve-20_Beginners-Guide.pdf",
        pdfPages: [1, 5, 8, 12, 15, 20, 25, 30, 35], // Map each slide to specific PDF pages
        content: `
# The Grand Tour

Welcome, Chef! Before we start cooking, you need to know your station. DaVinci Resolve is like a professional Michelin-star kitchen, organized into specific stations for specific tasks.

### 1. The Pantry (Media Pool)
This is where you keep all your **ingredients** (footage, audio, graphics). Just like you wouldn't cook with rotten tomatoes, you format and organize your clips here before bringing them to the line.

### 2. The Chopping Block (Cut Page)
This is for **rough prep**. You're quickly trimming the fat, chopping off the ends (heads and tails of clips), and getting the raw ingredients ready for the main assembly. It's built for speed!

### 3. The Main Line (Edit Page)
This is your **primary cooking station**. Here, you assemble the dish. You precisely time when the onions go in (clips), how long they sauté (duration), and mix everything together. This is where the story (the dish) truly comes together.

### 4. The Spice Rack (Fusion)
Want to add some molecular gastronomy? Fusion is where you add **visual effects** and motion graphics. It's complex, like chemistry, but adds that "wow" factor.

### 5. The Plating Station (Color Page)
The food is cooked, but does it look appetizing? Color correction is **plating**. You adjust the lighting, mood, and style so the customer eats with their eyes first.

### 6. Due Ambiance (Fairlight)
A great meal needs great atmosphere. Fairlight is where you control the **audio**—the music, the sizzling sounds (SFX), and the conversation (dialogue).

### 7. The Pass (Deliver Page)
Service up! This is where you package the meal and send it out to the dining room (YouTube, Vimeo, or Cinema).

**Chef's Tip:** Don't run between stations frantically. Finish your prep in the Cut page before moving to the Edit page!
    `,
        xp: 50,
        isCompleted: false,
    },
    {
        id: 2,
        title: "Lesson 2: Stocking the Pantry (Importing Media)",
        summary: "Bringing your ingredients into the kitchen safely.",
        level: "Beginner",
        image: "https://placehold.co/600x400/2563eb/FFF?text=Media+Import",
        pdfUrl: "/resolve-kitchen-app/DaVinci-Resolve-20_Beginners-Guide.pdf",
        pdfPages: [40, 42, 45, 48, 50], // Importing Media, Bins, Backup
        content: `
# Reviewing Your Ingredients

You can't cook without food. Importing media is like receiving your delivery from the supplier.

### Inspection (The Media Storage)
Check your clips in the Media Storage browser. Are they fresh? (Correct frame rate/resolution).

### Shelving (Bins)
In a professional kitchen, we use containers labeled "Vegetables," "Meats," "Dairy." In Resolve, we use **Bins**.
*   **Master Bin**: The main walk-in fridge.
*   **Smart Bins**: Like a magical robot assistant that automatically sorts ingredients based on metadata (e.g., "All shots from Camera A").

### The Clone Tool
Always backup your ingredients! The Clone Tool in the Media page is like creating a frozen backup of your stock in case the fresh batch spoils.

**Chef's Tip:** Never work with disorganized ingredients. Label your bins or your soup will taste like chaos.
    `,
        xp: 50,
        isCompleted: false,
    },
    {
        id: 3,
        title: "Lesson 3: Mise en Place (Organizing)",
        summary: "Everything in its place. Metadata and Smart Bins.",
        level: "Beginner",
        image: "https://placehold.co/600x400/2563eb/FFF?text=Mise+en+Place",
        pdfPages: [52, 55, 58, 60], // Metadata, Smart Bins, Power Bins
        content: `
# Mise en Place

"Mise en place" means "putting in place." Before you fire up the stove, everything must be prepped.

### Metadata: The Nutrition Label
Every clip has metadata—Camera type, Lens, Date. Use the **Metadata** panel to tag your clips. 
*   "Good Take" = Fresh
*   "Bad Audio" = Needs Salt

### Smart Bins: The Auto-Sorter
Imagine a shelf that automatically grabs all the "Spicy" ingredients. Create a Smart Bin for "Keywords: Interview" and Resolve will automatically fill it.

### Power Bins
These are your secret spice blends that travel with you between kitchens (Projects). Put your intro logos and common sound effects here.
    `,
        xp: 50,
        isCompleted: false,
    },
    {
        id: 4,
        title: "Lesson 4: Rough Chop (Cut Page Basic)",
        summary: "Speed chopping for the hungry customer.",
        level: "Beginner",
        image: "https://placehold.co/600x400/2563eb/FFF?text=Rough+Chop",
        pdfPages: [70, 72, 75], // Dual Timeline, Source Tape
        content: `
# The Chopping Block

The Cut Page is designed for speed. It's when the dinner rush is starting and you need to prep fast.

### Dual Timeline
Look up! You have two views of your cutting board.
*   **Top View**: The whole bird (Entire timeline).
*   **Bottom View**: The specific slice (Detailed zoom).
No need to zoom in and out constantly.

### Source Tape
Imagine unrolling all your ingredients on one long table. **Source Tape** mode lets you scrub through *every single clip* in your bin as if it were one long tape. Spot the good parts, hit 'I' (In) and 'O' (Out), and throw it in the pot.
    `,
        xp: 60,
        isCompleted: false,
    },
    {
        id: 5,
        title: "Lesson 5: Fast Assembly (Cut Page Editing)",
        summary: "Throwing it in the pan. Smart Insert and Append.",
        level: "Beginner",
        image: "https://placehold.co/600x400/2563eb/FFF?text=Fast+Assembly",
        pdfPages: [80, 82, 85, 88], // Smart Insert, Append, Ripple Overwrite
        content: `
# Cooking with Fire

In the Cut Page, we don't gently place things. We toss them in!

### Smart Insert
The "Smart" part determines where the slice goes. It looks for the nearest cut point to your playhead (the knife). You don't need to be precise; Resolve knows you want to put the cheese *between* the bread and ham.

### Append
Toss it at the end! This quickly adds the clip to the very end of your timeline. Great for building the rough structure of the story quickly.

### Ripple Overwrite
The magic eraser. Don't like that shot? Replace it with another one of the exact same length automatically. No gaps left in the sandwich.
    `,
        xp: 60,
        isCompleted: false,
    },
    {
        id: 6,
        title: "Lesson 6: The Chef's Station (Edit Page)",
        summary: "Precision cooking. The traditional timeline.",
        level: "Intermediate",
        image: "https://placehold.co/600x400/a855f7/FFF?text=Edit+Page",
        content: `
# The Main Line

Now we move to the Edit Page. This is traditional, two-monitor editing.
*   **Left Screen (Source)**: Your cutting board.
*   **Right Screen (Timeline)**: The cooking pot.

### 3-Point Editing
The Holy Trinity of Editing.
1.  **In Point**: Start of the slice.
2.  **Out Point**: End of the slice.
3.  **Timeline Point**: Where it goes in the pot.

You define 3 points, and Resolve calculates the 4th. It's simple geometry, Chef.
    `,
        xp: 75,
        isCompleted: false,
    },
    {
        id: 7,
        title: "Lesson 7: Trimming the Fat (Edit Tools)",
        summary: "Fine-tuning cuts. Roll, Ripley, Slip, and Slide.",
        level: "Intermediate",
        image: "https://placehold.co/600x400/a855f7/FFF?text=Trimming",
        content: `
# Knife Skills (Trimming)

A good chef knows how to trim the fat without losing the meat.

### Selection Mode (A)
The standard tongs. You pick things up and move them.

### Trim Edit Mode (T)
The precision knife.
*   **Ripple Edit**: Adjust the cut point and everything moves to close the gap. (Pushing the ingredients together).
*   **Roll Edit**: Moving the cut point between two clips. (Making one slice larger and the neighbor smaller, but the sandwich size stays the same).

### Slip & Slide
*   **Slip**: Keeping the clip in the same spot, but changing *which part* of the video plays. (Like rotating a round fruit without moving it).
*   **Slide**: Moving the clip in the timeline, but keeping its content the same. (Moving the tomato to a different layer).
    `,
        xp: 80,
        isCompleted: false,
    },
    {
        id: 8,
        title: "Lesson 8: Transitions (Seasoning the Cuts)",
        summary: "Cross dissolves and smooth cuts.",
        level: "Beginner",
        image: "https://placehold.co/600x400/2563eb/FFF?text=Transitions",
        content: `
# The Sauce Between Courses

Transitions are how we move from one flavor to another.

### Cut
The standard hard cut. Clean, simple, honest. Like a fresh slice of cucumber.

### Cross Dissolve
Blending the flavors. Melting the cheese into the meat. Use this to suggest time passing or a smooth change.

**Chef's Warning:** Don't drown your dish in sauce. Use "Star Wipes" sparingly, or your food will look cheap.
    `,
        xp: 50,
        isCompleted: false,
    },
    {
        id: 9,
        title: "Lesson 9: Slow Cooking (Speed Changes)",
        summary: "Retime controls. Slow motion and speed ramps.",
        level: "Intermediate",
        image: "https://placehold.co/600x400/a855f7/FFF?text=Speed+Ramps",
        content: `
# Controlling Time

Sometimes you want to slow roast (Slow Motion) and sometimes you want to flash fry (Fast Forward).

### Retime Controls (Cmd+R)
Open the speed graph.
*   **Speed Ramp**: Start fast, slow down for the action, speed up again. It's like the rhythm of a sauté pan. Toss, wait, toss.

### Optical Flow
When slowing down 30fps footage, it looks choppy (like chunky soup). Turn on **Optical Flow** to make Resolve invent new frames, smoothing it out like a puree.
    `,
        xp: 90,
        isCompleted: false,
    },
    {
        id: 10,
        title: "Lesson 10: Titles & Garnish (Effects Library)",
        summary: "Adding text and visual overlays.",
        level: "Beginner",
        image: "https://placehold.co/600x400/2563eb/FFF?text=Titles",
        content: `
# The Menu Cards

Your customer needs to know what they're eating.
*   **Text+**: The powerful title tool. Don't use the basic "Text" if you can help it. Text+ is seasoned with Fusion magic.

### Adjustment Clips
Think of this as a "glaze" over the entire dish. Put an adjustment clip specifically on track 2, add a color grade to it, and everything below it gets graded. Great for applying a consistent look to a whole scene.
    `,
        xp: 60,
        isCompleted: false,
    },
    {
        id: 11,
        title: "Lesson 11: Introduction to Nodes (Color Page)",
        summary: "Layering flavors. Serial and Parallel nodes.",
        level: "Intermediate",
        image: "https://placehold.co/600x400/a855f7/FFF?text=Nodes",
        content: `
# The Flavor Profile

In other software, you have layers (like a cake). In Resolve, we have **Nodes** (like a recipe flow chart).

### Serial Nodes
Step 1, then Step 2.
*   Node 1: Exposure (Heat)
*   Node 2: Contrast (Salt)
*   Node 3: White Balance (Acid)

The signal flows from left to right. Whatever you do in Node 1 affects what Node 2 sees.
    `,
        xp: 100,
        isCompleted: false,
    },
    {
        id: 12,
        title: "Lesson 12: Primary Correction (Setting the Base)",
        summary: "Exposure, Contrast, and White Balance.",
        level: "Intermediate",
        image: "https://placehold.co/600x400/a855f7/FFF?text=Primary+Correction",
        content: `
# The Broth

Before you add spices, the stock must be good.
*   **Lift**: Shadows (Deep flavors)
*   **Gamma**: Midtones (Main body)
*   **Gain**: Highlights (Top notes)

Use the **Scopes** (Waveform/Parade)! Don't trust your eyes; they get tired. Trust the recipe (Scopes). If the trace hits the bottom (0), you've burnt the black. If it hits the top (1023), you've blown out the white.
    `,
        xp: 90,
        isCompleted: false,
    },
    {
        id: 13,
        title: "Lesson 13: Secondary Correction (Specials)",
        summary: "Qualifiers. Picking a specific color.",
        level: "Hard",
        image: "https://placehold.co/600x400/ef4444/FFF?text=Qualifiers",
        content: `
# Picky Eaters

Sometimes you need to change *just* the red shirt, not the red sunset.
**Qualifiers** (the dropper) let you pick a specific ingredient.

1.  Click the dropper on the red shirt/tomato.
2.  Use "Highlight" mode to see the matte (what you selected).
3.  Adjust the Hue/Saturation/Luminance to refine the selection.
4.  Change the color. Now you have a green tomato!
    `,
        xp: 110,
        isCompleted: false,
    },
    {
        id: 14,
        title: "Lesson 14: Windows (Plating Control)",
        summary: "Power Windows. Limiting effects to shapes.",
        level: "Intermediate",
        image: "https://placehold.co/600x400/a855f7/FFF?text=Power+Windows",
        content: `
# The Spotlight

Use **Power Windows** to shine light on specific parts of the plate.
*   **Circle Window**: Great for highlighting a face (Vignette).
*   **Gradient Window**: Great for darkening a bright sky.

Combine Windows with Tracking. If the plate moves, the garnish stays with it!
    `,
        xp: 100,
        isCompleted: false,
    },
    {
        id: 15,
        title: "Lesson 15: The Tracker (Following the Action)",
        summary: "Cloud Tracker and Point Tracker.",
        level: "Hard",
        image: "https://placehold.co/600x400/ef4444/FFF?text=Tracking",
        content: `
# Sticky Sauce

You put a Power Window on the chef's face, but he walked away!
Go to the **Tracker** palette.
1.  Draw your window.
2.  Press "Track Forward" (The Play button in the tracker).
Resolve analyzes the movement and sticks the window to the face like glue. Magic.
    `,
        xp: 120,
        isCompleted: false,
    },
    {
        id: 16,
        title: "Lesson 16: Curves (Fine Dining)",
        summary: "Custom curves. Hue vs Hue, Hue vs Sat.",
        level: "Hard",
        image: "https://placehold.co/600x400/ef4444/FFF?text=Curves",
        content: `
# Precision Shaping

**Custom Curves** give you ultimate control.
*   **Hue vs Hue**: "I want this specific Yellow to be slightly more Orange."
*   **Hue vs Sat**: "I want the Greens (leaves) to be less saturated, but the Reds (roses) to strictly stay bright."

This is how you get that "Film Look" where skin tones are preserved but the background is desaturated.
    `,
        xp: 110,
        isCompleted: false,
    },
    {
        id: 17,
        title: "Lesson 17: LUTs (The Pre-Mix)",
        summary: "Using Look Up Tables.",
        level: "Beginner",
        image: "https://placehold.co/600x400/2563eb/FFF?text=LUTs",
        content: `
# Canned Sauces

**LUTs (Look Up Tables)** are pre-made mathematical formulas for color.
*   **Technical LUTs**: Convert "Log" (flat, raw footage) to "Rec.709" (Standard TV standard). Like rehydrating dried mushrooms.
*   **Creative LUTs**: "Teal and Orange," "Vintage," "Noir."

**Chef's Tip:** Don't just slap a LUT on at 100% opacity. Use the **Key Output Gain** in the Key tab to dial it back. Season to taste!
    `,
        xp: 80,
        isCompleted: false,
    },
    {
        id: 18,
        title: "Lesson 18: Audio Basics (Fairlight)",
        summary: "Levels and Mixing.",
        level: "Beginner",
        image: "https://placehold.co/600x400/2563eb/FFF?text=Fairlight",
        content: `
# The Sound of Sizzle

Bad audio ruins good video.
Go to the **Fairlight Page**.
*   **Mixer**: Your console. Each track has a fader.
*   **Goal**: Dialogue should sit around -12dB to -15dB. Background music around -20dB or lower.
*   **Red is Dead**: If your meter hits 0dB, it clips (distorts). It's like burning the food. Keep it below 0!
    `,
        xp: 90,
        isCompleted: false,
    },
    {
        id: 19,
        title: "Lesson 19: EQ (Audio Seasoning)",
        summary: "Equalization. Removing mud.",
        level: "Intermediate",
        image: "https://placehold.co/600x400/a855f7/FFF?text=EQ",
        content: `
# Balancing the Palate

**EQ (Equalizer)** lets you cut or boost frequencies.
*   **Low Cut (High Pass)**: Remove the rumble (AC, fridge hum) below 80-100Hz.
*   **Mid Scoop**: Look around 300-500Hz. If it sounds "muddy," cut a little here.
*   **High Boost**: Make voices "crisp" by boosting slightly around 3-5kHz.
    `,
        xp: 100,
        isCompleted: false,
    },
    {
        id: 20,
        title: "Lesson 20: Dynamics (Compressor)",
        summary: "Smoothing out the volume.",
        level: "Intermediate",
        image: "https://placehold.co/600x400/a855f7/FFF?text=Compressor",
        content: `
# Consistent Portions

A **Compressor** makes the loud parts quieter and the quiet parts louder. It keeps the volume (dynamic range) consistent.
1.  Turn on Dynamics on the Dialogue track.
2.  Enable "Compressor".
3.  **Threshold**: When does it kick in?
4.  **Ratio**: How much does it squash? (2:1 or 3:1 is a good start for voice).

Now, even if the actor whispers then screams, the audience doesn't need to reach for the volume remote.
    `,
        xp: 110,
        isCompleted: false,
    },
    {
        id: 21,
        title: "Lesson 21: Fusion Basics (The Lab)",
        summary: "Nodes in Fusion vs Color. Merge nodes.",
        level: "Hard",
        image: "https://placehold.co/600x400/ef4444/FFF?text=Fusion",
        content: `
# The Science Lab

Fusion is node-based, but different from Color.
*   **MediaIn**: The raw ingredient.
*   **MediaOut**: The finished dish.
*   **Merge Node**: The frying pan. You connect a Background (Yellow input) and a Foreground (Green input) to it.

Everything flows together to create the final composite.
    `,
        xp: 130,
        isCompleted: false,
    },
    {
        id: 22,
        title: "Lesson 22: Text in Fusion",
        summary: "Advanced titles and tracking text.",
        level: "Hard",
        image: "https://placehold.co/600x400/ef4444/FFF?text=Fusion+Text",
        content: `
# Molecular Text

Fusion text is 3D-aware.
1.  Add a **Text+** node.
2.  Style it in the inspector (Shading elements).
3.  Add a **Transform** node to animate it moving.
4.  Use a **Planar Tracker** to stick the text to a wall in the video.
    `,
        xp: 120,
        isCompleted: false,
    },
    {
        id: 23,
        title: "Lesson 23: Multicam Editing",
        summary: "Editing the live show.",
        level: "Intermediate",
        image: "https://placehold.co/600x400/a855f7/FFF?text=Multicam",
        content: `
# The Live Kitchen

Cooking for a banquet with multiple stations?
1.  Select all clips (Cam A, Cam B, Audio).
2.  Right-click -> "Create New Multicam Clip" -> Sync by Audio.
3.  Drop it in the timeline.
4.  Switch the viewer to "Multicam" mode.
5.  Play the video and tap "1", "2", "3" on your keyboard to cut live between cameras like a TV director!
    `,
        xp: 100,
        isCompleted: false,
    },
    {
        id: 24,
        title: "Lesson 24: Delivery (Exporting)",
        summary: "Sending it to the pass.",
        level: "Beginner",
        image: "https://placehold.co/600x400/2563eb/FFF?text=Export",
        content: `
# Service!

Time to export.
1.  Go to the **Deliver Page**.
2.  Choose a preset (YouTube 1080p is a safe bet).
3.  **Format**: MP4 or QuickTime.
4.  **Codec**: H.264 (Standard) or H.265 (Smaller/Newer).
5.  "Add to Render Queue".
6.  "Render All".

Ding! Order up.
    `,
        xp: 50,
        isCompleted: false,
    },
    {
        id: 25,
        title: "Lesson 25: Database Management",
        summary: "Managing the restaurant business.",
        level: "Intermediate",
        image: "https://placehold.co/600x400/a855f7/FFF?text=Database",
        content: `
# The Manager's Office

Your Project Library (Database) is where all your recipes (Projects) are stored.
*   **Local Database**: Stored on this computer.
*   **Network/Cloud**: Shared with other chefs.

**Backup**: In the Project Manager, hit the "i" button next to your library and "Backup". Do this weekly. If the database corrupts, the restaurant closes.
    `,
        xp: 200,
        isCompleted: false,
    },
];
