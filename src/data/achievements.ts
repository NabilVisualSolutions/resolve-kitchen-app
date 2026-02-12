export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string; // Emoji or Lucide icon name
    condition: (user: any) => boolean;
}

export const achievements: Achievement[] = [
    {
        id: 'recruit',
        title: 'Dish Washer',
        description: 'Start your journey (Level 1)',
        icon: '🧼',
        condition: (user) => user.level >= 1
    },
    {
        id: 'first_cut',
        title: 'First Cut',
        description: 'Complete your first lesson',
        icon: '🎬',
        condition: (user) => user.completedLessons.length >= 1
    },
    {
        id: 'sous_chef',
        title: 'Sous Chef',
        description: 'Reach Level 5',
        icon: '👨‍🍳',
        condition: (user) => user.level >= 5
    },
    {
        id: 'fast_learner',
        title: 'Prep Cook',
        description: 'Complete 5 Lessons',
        icon: '🔪',
        condition: (user) => user.completedLessons.length >= 5
    },
    {
        id: 'on_fire',
        title: 'On Fire',
        description: 'Complete 10 Lessons',
        icon: '🔥',
        condition: (user) => user.completedLessons.length >= 10
    },
    {
        id: 'master_chef',
        title: 'Executive Chef',
        description: 'Complete all 25 Lessons',
        icon: '🎖️',
        condition: (user) => user.completedLessons.length >= 25
    },
    {
        id: 'color_wizard',
        title: 'Sauce Master',
        description: 'Earn 1000 XP',
        icon: '🎨',
        condition: (user) => user.xp >= 1000
    },
    {
        id: 'audio_guru',
        title: 'Sound Check',
        description: 'Complete level 10',
        icon: '🎧',
        condition: (user) => user.level >= 10
    },
    {
        id: 'dedicated',
        title: 'Early Bird',
        description: 'Login 3 days in a row',
        icon: '🌅',
        condition: (_user) => false // Currently hardcoded to false as we don't track login dates yet
    },
    {
        id: 'night_owl',
        title: 'Night Owl',
        description: 'Edit late at night',
        icon: '🦉',
        condition: (_user) => false
    },
    {
        id: 'shortcuts',
        title: 'Speed Demon',
        description: 'Earn 500 XP',
        icon: '⚡',
        condition: (user) => user.xp >= 500
    },
    {
        id: 'fusion_scientist',
        title: 'Mad Scientist',
        description: 'Reach Level 15',
        icon: '⚗️',
        condition: (user) => user.level >= 15
    },
    {
        id: 'publisher',
        title: 'Broadcaster',
        description: 'Complete final lesson',
        icon: '📡',
        condition: (user) => user.completedLessons.includes(25)
    }
];
