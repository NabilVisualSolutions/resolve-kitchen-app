export interface Quote {
    id: number;
    day: number;
    quote: string;
    author: string;
    context: string;
    isLocked: boolean;
}

export const quotes: Quote[] = [
    {
        id: 1,
        day: 1,
        quote: "A recipe has no soul. You, as the cook, must bring soul to the recipe.",
        author: "Thomas Keller",
        context: "In Resolve, the 'recipe' is just standard cuts. Your 'soul' is the rhythm, color, and sound you add. Don't just follow the manual, feel the edit.",
        isLocked: false
    },
    {
        id: 2,
        day: 2,
        quote: "The only real stumbling block is fear of failure. In cooking you've got to have a what-the-hell attitude.",
        author: "Julia Child",
        context: "Don't be afraid to try a crazy effect in Fusion. If it breaks, Ctrl+Z (or Cmd+Z) is your best friend!",
        isLocked: false // User should unlock these day by day in a real app
    },
    {
        id: 3,
        day: 3,
        quote: "Good food is very often, even most often, simple food.",
        author: "Anthony Bourdain",
        context: "Don't over-grade. Sometimes a simple Contrast and Saturation adjustment is all your footage needs. Respect the ingredients.",
        isLocked: false
    },
    {
        id: 4,
        day: 4,
        quote: "If you're not making mistakes, it's a mistake.",
        author: "Miles Davis (Jazz/Cooking Spirit)",
        context: "The Cut Page is about jamming. Make fast choices. Mistakes lead to happy accidents in editing.",
        isLocked: false
    },
    {
        id: 5,
        day: 5,
        quote: "Mise en place is the religion of all good cooks.",
        author: "Anthony Bourdain",
        context: "Organize your bins. If you can't find the clip, you can't cook with it.",
        isLocked: false
    },
    {
        id: 6,
        day: 6,
        quote: "Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it's how you combine them that sets you apart.",
        author: "Wolfgang Puck",
        context: "Nodes in the Color Page are your flavors. Combine them in parallel or serial to create something unique.",
        isLocked: false
    },
    {
        id: 7,
        day: 7,
        quote: "Sharp knives matter.",
        author: "Every Chef",
        context: "Learn your shortcuts. 'T' for Trim, 'B' for Blade. A dull workflow slows you down.",
        isLocked: false
    },
    {
        id: 8,
        day: 8,
        quote: "Taste as you go.",
        author: "Standard Kitchen Rule",
        context: "Watch your playback constantly. Does the audio mix sound right *now*? Don't wait until the end to fix levels.",
        isLocked: false
    },
    {
        id: 9,
        day: 9,
        quote: "Presentation is everything.",
        author: "Japanese Proverb",
        context: "The Color Page isn't just about correction; it's about directing the viewer's eye. Use vignettes like garnish.",
        isLocked: false
    },
    {
        id: 10,
        day: 10,
        quote: "Don't overcrowd the pan.",
        author: "Sauté Rule",
        context: "Don't clutter your timeline with unused tracks. Keep V1, V2, V3 clean. Delete what you don't need.",
        isLocked: false
    },
    {
        id: 11,
        day: 11,
        quote: "Let the meat rest.",
        author: "Steak Advice",
        context: "Step away from the edit. Come back with fresh eyes (and ears) to see the pacing issues you missed.",
        isLocked: false
    },
    {
        id: 12,
        day: 12,
        quote: "Acid cuts fat.",
        author: "Samin Nosrat",
        context: "If your image looks 'muddy' (too much fat), use the Color Wheels to add contrast (Acid) to cut through the haze.",
        isLocked: false
    },
    {
        id: 13,
        day: 13,
        quote: "Consistency is key.",
        author: "Chain Restaurants (and fine dining)",
        context: "Copy/Paste attributes or use Stills to ensure Scene A matches Scene B. A jarring color shift ruins the immersion.",
        isLocked: false
    },
    {
        id: 14,
        day: 14,
        quote: "The best dishes have contrast.",
        author: "Flavor Theory",
        context: "Loud vs Quiet. Fast vs Slow. Contrast isn't just luma; it's pacing. Use speed ramps!",
        isLocked: false
    },
    {
        id: 15,
        day: 15,
        quote: "Respect the source.",
        author: "Farm to Table",
        context: "Don't push 8-bit footage too hard. It will break. Know the limits of your camera sensor.",
        isLocked: false
    },
    {
        id: 16,
        day: 16,
        quote: "Clean as you go.",
        author: "Kitchen Hygiene",
        context: "Delete render cache files you don't need. Keep your database backed up.",
        isLocked: false
    },
    {
        id: 17,
        day: 17,
        quote: "It needs more salt.",
        author: "Every Chef Ever",
        context: "Usually, it needs more Audio compression. Make that dialogue pop!",
        isLocked: false
    },
    {
        id: 18,
        day: 18,
        quote: "Cooking is an observation-based process.",
        author: "Alton Brown",
        context: "Read your Scopes. The Waveform doesn't lie. Your eyes might be biased by the room light.",
        isLocked: false
    },
    {
        id: 19,
        day: 19,
        quote: "Don't boil the sauce.",
        author: "Delicate Cooking",
        context: "Don't clip your audio (red zone). Simmer it in the yellow zone (-10 to -3 dB).",
        isLocked: false
    },
    {
        id: 20,
        day: 20,
        quote: "The secret ingredient is love (and time).",
        author: "Grandma",
        context: "Motion Graphics in Fusion take time and patience. Don't rush keyframes.",
        isLocked: false
    },
    {
        id: 21,
        day: 21,
        quote: "Use the right tool for the job.",
        author: "Kitchen Safety",
        context: "Don't edit in the Color page. Don't mix audio in the Cut page. Use the stations as designed.",
        isLocked: false
    },
    {
        id: 22,
        day: 22,
        quote: "A dull knife is dangerous.",
        author: "Safety First",
        context: "A lagging computer causes mistakes. Use Proxies if your system is struggling!",
        isLocked: false
    },
    {
        id: 23,
        day: 23,
        quote: "Balance flavors.",
        author: "Thai Cuisine",
        context: "Sweet, Sour, Salty, Spicy. In Color: Lift, Gamma, Gain, Offset. Balance them perfectly.",
        isLocked: false
    },
    {
        id: 24,
        day: 24,
        quote: "Garnish with purpose.",
        author: "Modern Plating",
        context: "Don't add 'Film Grain' just because. Does it fit the story? Does it add texture?",
        isLocked: false
    },
    {
        id: 25,
        day: 25,
        quote: "Serve hot.",
        author: "Service",
        context: "Deliver your project in the right format. H.264 for web, ProRes for masters.",
        isLocked: false
    },
    {
        id: 26,
        day: 26,
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Transformation",
        context: "Try the Neural Engine AI tools. Magic Mask, Voice Isolation. Use the new tech.",
        isLocked: false
    },
    {
        id: 27,
        day: 27,
        quote: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        context: "A simple cut is often better than a 3D transition.",
        isLocked: false
    },
    {
        id: 28,
        day: 28,
        quote: "Know your ingredients.",
        author: "Sourcing",
        context: "Frame rates. Codecs. Resolution. Know what you are working with before you start.",
        isLocked: false
    },
    {
        id: 29,
        day: 29,
        quote: "Practice makes perfect.",
        author: "Life",
        context: "Edit every day. Grade every day. Even if it's just a 10-second clip.",
        isLocked: false
    },
    {
        id: 30,
        day: 30,
        quote: "Share your food.",
        author: "Commuinty",
        context: "Collaborate. Use Blackmagic Cloud to work with others.",
        isLocked: false
    },
    {
        id: 31,
        day: 31,
        quote: "You are the Chef.",
        author: "Resolve Kitchen",
        context: "DaVinci Resolve is just the stove. You are the one creating the art. Go cook!",
        isLocked: false
    }
];
