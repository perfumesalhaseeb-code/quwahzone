export interface Program {
    id: number;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    exercises: {
        name: string;
        sets: string;
        reps: string;
        notes?: string;
    }[];
    benefits: string[];
    requirements: string[];
    color: string;
}

export const PROGRAMS: Program[] = [
    {
        id: 1,
        slug: "foundation",
        title: "FOUNDATION",
        description: "Build the essential structural integrity and movement patterns required for all future training.",
        longDescription: "The Foundation program is designed to prepare your body for the demands of calisthenics. It focuses on joint health, mobility, and mastering the basic movement patterns. This is where you build the 'armor' that will protect you from injury as you progress to more advanced skills.",
        exercises: [
            { name: "Scapular Push-ups", sets: "3", reps: "10-15", notes: "Focus on protraction and retraction." },
            { name: "Australian Pull-ups (Incline)", sets: "3", reps: "8-12", notes: "Keep body straight, pull to chest." },
            { name: "Assisted Squats", sets: "3", reps: "15-20", notes: "Use support if needed, focus on depth." },
            { name: "Plank Holds", sets: "3", reps: "30-45s", notes: "Engage core and glutes." },
            { name: "Wall Handstand Hold", sets: "3", reps: "20-30s", notes: "Stomach to wall for better alignment." }
        ],
        benefits: ["Improved Joint Health", "Basic Body Awareness", "Core Stability", "Better Posture"],
        requirements: ["None. Suitable for complete beginners."],
        color: "var(--color-orange)"
    },
    {
        id: 2,
        slug: "control",
        title: "CONTROL",
        description: "Develop mastery over your bodyweight with slow, controlled movements.",
        longDescription: "Control is about owning every inch of the movement. By slowing down the tempo and increasing time under tension, you build connective tissue strength and hypertrophy. This level bridges the gap between basic movements and strength training.",
        exercises: [
            { name: "Full Push-ups", sets: "4", reps: "8-12", notes: "Chest to floor, full lockout." },
            { name: "Chin-ups", sets: "3", reps: "5-8", notes: "Palms facing you, full range of motion." },
            { name: "Deep Squats", sets: "4", reps: "15-20", notes: "Below parallel, keep chest up." },
            { name: "Hanging Knee Raises", sets: "3", reps: "10-15", notes: "Control the swing." },
            { name: "Crow Pose (Frog Stand)", sets: "3", reps: "15-30s", notes: "Balance practice." }
        ],
        benefits: ["Hypertrophy", "Connective Tissue Strength", "Mind-Muscle Connection"],
        requirements: ["Ability to do 10 Scapular Push-ups", "30s Plank"],
        color: "var(--color-orange)"
    },
    {
        id: 3,
        slug: "power",
        title: "POWER",
        description: "Introduce explosive dynamic movements. Learn to generate force quickly.",
        longDescription: "Power is force x velocity. In this level, you will learn to move your body with speed and explosiveness. This is crucial for advanced skills like the muscle-up and jumping movements. You will also start working on more difficult static progressions.",
        exercises: [
            { name: "Explosive Push-ups", sets: "4", reps: "5-8", notes: "Hands should leave the ground." },
            { name: "Pull-ups", sets: "4", reps: "6-10", notes: "Explosive pull, controlled negative." },
            { name: "Jump Squats", sets: "4", reps: "10-15", notes: "Soft landing, immediate rebound." },
            { name: "L-Sit (Tuck)", sets: "3", reps: "15-20s", notes: "Push floor away, shoulders down." },
            { name: "Muscle-up Transitions", sets: "3", reps: "5-8", notes: "Use low bar or bands." }
        ],
        benefits: ["Explosive Power", "Fast-Twitch Muscle Fiber", "Athleticism"],
        requirements: ["15 Push-ups", "5 Pull-ups"],
        color: "var(--color-orange)"
    },
    {
        id: 4,
        slug: "mastery",
        title: "MASTERY",
        description: "Advanced calisthenics skills that require high levels of strength and balance.",
        longDescription: "Mastery is where you start looking like a pro. You will unlock the 'cool' skills like the Muscle-up and Handstand Push-up. This level requires dedication and consistency, as the progressions become much harder.",
        exercises: [
            { name: "Archer Push-ups", sets: "3", reps: "6-8/side", notes: "Straight arm is assistance only." },
            { name: "Muscle-ups", sets: "3", reps: "3-5", notes: "Clean form, no excessive kipping." },
            { name: "Pistol Squats", sets: "3", reps: "5-8/leg", notes: "Balance and depth." },
            { name: "L-Sit (Full)", sets: "3", reps: "10-15s", notes: "Legs straight, toes pointed." },
            { name: "Handstand Push-ups (Wall)", sets: "3", reps: "5-8", notes: "Full range, nose to floor." }
        ],
        benefits: ["Advanced Skills", "Unilateral Strength", "Upper Body Mass"],
        requirements: ["10 Explosive Push-ups", "10 Pull-ups"],
        color: "var(--color-orange)"
    },
    {
        id: 5,
        slug: "elite",
        title: "ELITE",
        description: "Pro-level static holds and dynamic combinations.",
        longDescription: "Elite level is for the top 1%. Here we focus on the straight-arm strength required for levers and the immense pushing power for one-arm work. These skills take years to master.",
        exercises: [
            { name: "Front Lever", sets: "4", reps: "5-10s", notes: "Or advanced tuck progression." },
            { name: "Back Lever", sets: "3", reps: "10-15s", notes: "Supinated grip for bicep health." },
            { name: "One Arm Push-up", sets: "3", reps: "3-5/arm", notes: "Feet wide for balance." },
            { name: "Human Flag", sets: "3", reps: "5-10s", notes: "Or vertical flag progression." },
            { name: "Freestanding HSPU", sets: "3", reps: "3-5", notes: "Balance is key." }
        ],
        benefits: ["Straight Arm Strength", "Elite Body Control", "Static Power"],
        requirements: ["10 Muscle-ups", "30s L-Sit"],
        color: "var(--color-orange)"
    },
    {
        id: 6,
        slug: "unbound",
        title: "UNBOUND",
        description: "Beyond structure. Creative flow and freestyle combinations.",
        longDescription: "Unbound is the ultimate level of freedom. You are no longer training for a specific skill, but using your strength to express yourself. Planche, one-arm pull-ups, and freestyle flows are the tools of your trade.",
        exercises: [
            { name: "Planche", sets: "5", reps: "Max hold", notes: "Lean forward, protract scapula." },
            { name: "One Arm Pull-up", sets: "3", reps: "1-3/arm", notes: "The ultimate pull exercise." },
            { name: "360 Muscle-up", sets: "Practice", reps: "Attempts", notes: "Dynamic freestyle move." },
            { name: "Freestyle Flow", sets: "3", reps: "1 min", notes: "Connect moves smoothly." },
            { name: "Impossible Dip", sets: "3", reps: "3-5", notes: "Elbows to forearms." }
        ],
        benefits: ["Total Freedom", "World Class Strength", "Creativity"],
        requirements: ["Full Front Lever", "Freestanding HSPU"],
        color: "var(--color-orange)"
    }
];
