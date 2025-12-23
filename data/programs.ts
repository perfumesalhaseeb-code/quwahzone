export interface Exercise {
    name: string;
    sets: string;
    reps: string;
    notes?: string;
}

export interface WorkoutSection {
    title: string;
    exercises: Exercise[];
}

export interface DaySchedule {
    day: number;
    title: string;
    isRestDay: boolean;
    exercises: Exercise[]; // Keep for backward compatibility or summary
    sections?: WorkoutSection[]; // New detailed structure
    challengeLine?: string; // Video ending line
}

export interface Program {
    id: number;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    exercises: Exercise[]; // Keep core exercises for summary
    schedule: DaySchedule[]; // New 30-day schedule
    benefits: string[];
    requirements: string[];
    color: string;
}

// Helper to generate a 30-day schedule
function generateSchedule(coreExercises: Exercise[]): DaySchedule[] {
    const schedule: DaySchedule[] = [];

    // Split exercises into Workout A and Workout B for variety
    const workoutA = coreExercises.slice(0, 3);
    const workoutB = coreExercises.slice(2, 5); // Overlap slightly or just mix

    for (let i = 1; i <= 30; i++) {
        const dayMod = i % 4; // 3 days on, 1 day off cycle

        if (dayMod === 0) {
            schedule.push({
                day: i,
                title: "Active Recovery & Rest",
                isRestDay: true,
                exercises: [
                    { name: "Light Stretching", sets: "1", reps: "10-15 min", notes: "Focus on tight areas" },
                    { name: "Walking", sets: "1", reps: "20-30 min", notes: "Low intensity" }
                ]
            });
        } else if (dayMod === 1) {
            schedule.push({
                day: i,
                title: "Workout A: Strength Foundation",
                isRestDay: false,
                exercises: workoutA
            });
        } else if (dayMod === 2) {
            schedule.push({
                day: i,
                title: "Workout B: Skill & Control",
                isRestDay: false,
                exercises: workoutB
            });
        } else {
            schedule.push({
                day: i,
                title: "Workout C: Full Body Volume",
                isRestDay: false,
                exercises: coreExercises
            });
        }
    }
    return schedule;
}

const foundationExercises = [
    { name: "Scapular Push-ups", sets: "3", reps: "10-15", notes: "Focus on protraction and retraction." },
    { name: "Australian Pull-ups (Incline)", sets: "3", reps: "8-12", notes: "Keep body straight, pull to chest." },
    { name: "Assisted Squats", sets: "3", reps: "15-20", notes: "Use support if needed, focus on depth." },
    { name: "Plank Holds", sets: "3", reps: "30-45s", notes: "Engage core and glutes." },
    { name: "Wall Handstand Hold", sets: "3", reps: "20-30s", notes: "Stomach to wall for better alignment." }
];

const controlExercises = [
    { name: "Full Push-ups", sets: "4", reps: "8-12", notes: "Chest to floor, full lockout." },
    { name: "Chin-ups", sets: "3", reps: "5-8", notes: "Palms facing you, full range of motion." },
    { name: "Deep Squats", sets: "4", reps: "15-20", notes: "Below parallel, keep chest up." },
    { name: "Hanging Knee Raises", sets: "3", reps: "10-15", notes: "Control the swing." },
    { name: "Crow Pose (Frog Stand)", sets: "3", reps: "15-30s", notes: "Balance practice." }
];

const powerExercises = [
    { name: "Explosive Push-ups", sets: "4", reps: "5-8", notes: "Hands should leave the ground." },
    { name: "Pull-ups", sets: "4", reps: "6-10", notes: "Explosive pull, controlled negative." },
    { name: "Jump Squats", sets: "4", reps: "10-15", notes: "Soft landing, immediate rebound." },
    { name: "L-Sit (Tuck)", sets: "3", reps: "15-20s", notes: "Push floor away, shoulders down." },
    { name: "Muscle-up Transitions", sets: "3", reps: "5-8", notes: "Use low bar or bands." }
];

const masteryExercises = [
    { name: "Archer Push-ups", sets: "3", reps: "6-8/side", notes: "Straight arm is assistance only." },
    { name: "Muscle-ups", sets: "3", reps: "3-5", notes: "Clean form, no excessive kipping." },
    { name: "Pistol Squats", sets: "3", reps: "5-8/leg", notes: "Balance and depth." },
    { name: "L-Sit (Full)", sets: "3", reps: "10-15s", notes: "Legs straight, toes pointed." },
    { name: "Handstand Push-ups (Wall)", sets: "3", reps: "5-8", notes: "Full range, nose to floor." }
];

const eliteExercises = [
    { name: "Front Lever", sets: "4", reps: "5-10s", notes: "Or advanced tuck progression." },
    { name: "Back Lever", sets: "3", reps: "10-15s", notes: "Supinated grip for bicep health." },
    { name: "One Arm Push-up", sets: "3", reps: "3-5/arm", notes: "Feet wide for balance." },
    { name: "Human Flag", sets: "3", reps: "5-10s", notes: "Or vertical flag progression." },
    { name: "Freestanding HSPU", sets: "3", reps: "3-5", notes: "Balance is key." }
];

const unboundExercises = [
    { name: "Planche", sets: "5", reps: "Max hold", notes: "Lean forward, protract scapula." },
    { name: "One Arm Pull-up", sets: "3", reps: "1-3/arm", notes: "The ultimate pull exercise." },
    { name: "360 Muscle-up", sets: "Practice", reps: "Attempts", notes: "Dynamic freestyle move." },
    { name: "Freestyle Flow", sets: "3", reps: "1 min", notes: "Connect moves smoothly." },
    { name: "Impossible Dip", sets: "3", reps: "3-5", notes: "Elbows to forearms." }
];

export const PROGRAMS: Program[] = [
    {
        id: 1,
        slug: "foundation",
        title: "FOUNDATION",
        description: "Build the essential structural integrity and movement patterns required for all future training.",
        longDescription: "The Foundation program is designed to prepare your body for the demands of calisthenics. It focuses on joint health, mobility, and mastering the basic movement patterns. This is where you build the 'armor' that will protect you from injury as you progress to more advanced skills.",
        exercises: foundationExercises,
        schedule: [
            // DAY 1
            {
                day: 1,
                title: "Foundation Challenge",
                isRestDay: false,
                exercises: [], // Populated in sections
                challengeLine: "Today, you showed up. Tomorrow, you’ll get stronger. Day 1 — Completed.",
                sections: [
                    {
                        title: "Warm-Up (3 minutes)",
                        exercises: [
                            { name: "Arm Circles", sets: "1", reps: "20 sec", notes: "Forward + backward" },
                            { name: "March in Place", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Neck Rotations", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip Circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Wrist Circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Light Squats", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Main Workout",
                        exercises: [
                            { name: "Incline Push-ups", sets: "2", reps: "8", notes: "High surface (table/wall). Smooth tempo." },
                            { name: "Dead Hangs / Towel Pulls", sets: "2", reps: "10 sec", notes: "If no bar, mimic pull-down with towel." },
                            { name: "Assisted Squats", sets: "2", reps: "10", notes: "Chair or wall support allowed." },
                            { name: "Knee Raises", sets: "2", reps: "10", notes: "Can be done seated or lying." },
                            { name: "Plank", sets: "2", reps: "15 sec", notes: "Stability focus." },
                        ]
                    },
                    {
                        title: "Cool-Down (2 minutes)",
                        exercises: [
                            { name: "Chest Stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder Stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Light Forward Fold", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Deep Breathing", sets: "1", reps: "30 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 2
            {
                day: 2,
                title: "Control & Consistency Challenge",
                isRestDay: false,
                exercises: [],
                challengeLine: "Consistency beats motivation. Day 2 — Control unlocked.",
                sections: [
                    {
                        title: "Warm-Up (3 minutes)",
                        exercises: [
                            { name: "Jumping jacks (slow)", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Arm swings", sets: "1", reps: "20 sec", notes: "Front ↔ back" },
                            { name: "Hip circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Knee bends", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Wrist rotations", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Easy bodyweight squats", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Main Workout",
                        exercises: [
                            { name: "Incline Push-ups", sets: "3", reps: "6", notes: "Control slow: 2 sec down, 1 sec up" },
                            { name: "Towel Row (Standing)", sets: "3", reps: "8", notes: "Use door handle or imaginary pull" },
                            { name: "Chair Squats", sets: "3", reps: "10", notes: "" },
                            { name: "Seated Knee Raises", sets: "3", reps: "10", notes: "" },
                            { name: "Wall Plank", sets: "2", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Cool-Down (2 minutes)",
                        exercises: [
                            { name: "Shoulder stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Quad stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Back stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "30 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 3
            {
                day: 3,
                title: "Strength Foundation Challenge",
                isRestDay: false,
                exercises: [],
                challengeLine: "Strength is built slowly… but it stays forever. Day 3 — Foundation getting stronger.",
                sections: [
                    {
                        title: "Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Marching in place", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Arm circles", sets: "1", reps: "20 sec", notes: "Small → big" },
                            { name: "Hip openers", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Knee circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Ankle rotations", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Easy squats", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Main Workout",
                        exercises: [
                            { name: "Wall Push-ups", sets: "3", reps: "10", notes: "Body straight, slow control" },
                            { name: "Bodyweight Squats", sets: "3", reps: "12", notes: "" },
                            { name: "Glute Bridges", sets: "3", reps: "10", notes: "" },
                            { name: "Knee Plank", sets: "3", reps: "20 sec", notes: "" },
                            { name: "Standing Hold (Isometric)", sets: "2", reps: "30 sec", notes: "Chest open, core tight — posture focus" },
                        ]
                    },
                    {
                        title: "Cool-Down (3 minutes)",
                        exercises: [
                            { name: "Hamstring stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Chest opener", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "40 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 4
            {
                day: 4,
                title: "Mobility & Core Challenge",
                isRestDay: false,
                exercises: [],
                challengeLine: "Strong joints build a strong future. Day 4 — Mobility unlocked.",
                sections: [
                    {
                        title: "Mobility Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Neck rolls (slow)", sets: "1", reps: "20-25 sec", notes: "" },
                            { name: "Shoulder rolls", sets: "1", reps: "20-25 sec", notes: "" },
                            { name: "Arm swings", sets: "1", reps: "20-25 sec", notes: "" },
                            { name: "Hip circles", sets: "1", reps: "20-25 sec", notes: "" },
                            { name: "Cat–Cow stretch", sets: "1", reps: "20-25 sec", notes: "" },
                            { name: "Ankle mobility", sets: "1", reps: "20-25 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Core + Stability Workout",
                        exercises: [
                            { name: "Dead Bug", sets: "3", reps: "6/side", notes: "Slow & controlled" },
                            { name: "Bird Dog", sets: "3", reps: "8/side", notes: "" },
                            { name: "Front Plank (Knees)", sets: "3", reps: "25 sec", notes: "" },
                            { name: "Single-Leg Stand", sets: "2", reps: "30 sec/leg", notes: "" },
                            { name: "Deep Squat Hold (Assisted)", sets: "2", reps: "30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Cool-Down (3 minutes)",
                        exercises: [
                            { name: "Lower-back stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip flexor stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Chest opening", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "40 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 5
            {
                day: 5,
                title: "Full Body Strength Challenge",
                isRestDay: false,
                exercises: [],
                challengeLine: "You trained your whole body today. Day 5 — Full power foundation.",
                sections: [
                    {
                        title: "Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Jumping jacks (controlled)", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Arm circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip openers", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Knee bends", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder taps", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Light squats", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Main Workout",
                        exercises: [
                            { name: "Incline Push-ups", sets: "3", reps: "10", notes: "" },
                            { name: "Towel Rows (Standing)", sets: "3", reps: "10", notes: "" },
                            { name: "Bodyweight Squats", sets: "3", reps: "15", notes: "" },
                            { name: "Glute Bridges", sets: "3", reps: "12", notes: "" },
                            { name: "Front Plank (Knees)", sets: "3", reps: "30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Cool-Down (3 minutes)",
                        exercises: [
                            { name: "Hamstring stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Chest stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "40 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 6
            {
                day: 6,
                title: "Assessment & Light Flow",
                isRestDay: false,
                exercises: [],
                challengeLine: "You are stronger than Day 1. Progress checked. Foundation built.",
                sections: [
                    {
                        title: "Warm-Up (3 minutes)",
                        exercises: [
                            { name: "March in place", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Arm swings", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Easy squats", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder rolls", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Assessment Challenge (No Rush)",
                        exercises: [
                            { name: "Incline Push-ups", sets: "1", reps: "Max", notes: "Stop when form breaks" },
                            { name: "Bodyweight Squats", sets: "1", reps: "Max", notes: "Controlled" },
                            { name: "Plank (Knees or Full)", sets: "1", reps: "Max hold", notes: "" },
                            { name: "Single-Leg Stand", sets: "1", reps: "Max time", notes: "Each leg" },
                        ]
                    },
                    {
                        title: "Light Flow (Recovery)",
                        exercises: [
                            { name: "Cat–Cow", sets: "1", reps: "20-30 sec", notes: "" },
                            { name: "Forward fold", sets: "1", reps: "20-30 sec", notes: "" },
                            { name: "Chest opener", sets: "1", reps: "20-30 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "20-30 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "20-30 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 7
            {
                day: 7,
                title: "Active Recovery & Mobility Flow",
                isRestDay: true,
                exercises: [],
                challengeLine: "Recovery is part of strength. Week 1 — Completed.",
                sections: [
                    {
                        title: "Gentle Warm-Up (2 minutes)",
                        exercises: [
                            { name: "Easy marching", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Arm swings", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Neck mobility", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip circles", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Mobility Flow",
                        exercises: [
                            { name: "Cat–Cow stretch", sets: "1", reps: "25-30 sec", notes: "" },
                            { name: "Forward fold (relaxed)", sets: "1", reps: "25-30 sec", notes: "" },
                            { name: "Chest opener stretch", sets: "1", reps: "25-30 sec", notes: "" },
                            { name: "Seated spinal twist", sets: "1", reps: "25-30 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "25-30 sec", notes: "" },
                            { name: "Deep squat hold (assisted)", sets: "1", reps: "25-30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Breathing Reset (2 minutes)",
                        exercises: [
                            { name: "Breathing", sets: "Repeat", reps: "2 min", notes: "Inhale 4s → hold 2s → exhale 6s" },
                        ]
                    }
                ]
            },
            // DAY 8
            {
                day: 8,
                title: "Strength & Control Upgrade (Week 2)",
                isRestDay: false,
                exercises: [],
                challengeLine: "Week 2 begins. Stronger than last week.",
                sections: [
                    {
                        title: "Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Jumping jacks (easy pace)", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Arm circles (big)", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip openers", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Knee bends", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder rolls", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Light squats", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Main Workout",
                        exercises: [
                            { name: "Incline Push-ups", sets: "3", reps: "12", notes: "2 sec down, 1 sec up" },
                            { name: "Bodyweight Squats", sets: "3", reps: "15", notes: "" },
                            { name: "Glute Bridges", sets: "3", reps: "15", notes: "" },
                            { name: "Knee Raises (Lying/Seated)", sets: "3", reps: "12", notes: "" },
                            { name: "Plank (Knees)", sets: "3", reps: "30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Cool-Down (3 minutes)",
                        exercises: [
                            { name: "Hamstring stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Chest opener", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "40 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 9
            {
                day: 9,
                title: "Pull & Core Focus",
                isRestDay: false,
                exercises: [],
                challengeLine: "Strong back. Strong core. Day 9 — Balance building.",
                sections: [
                    {
                        title: "Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Arm swings", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Scapular shrugs", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Wrist rotations", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Easy squats", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Main Workout",
                        exercises: [
                            { name: "Towel Rows (Standing)", sets: "3", reps: "12", notes: "Elbows back, chest open" },
                            { name: "Dead Hang / Isometric Hold", sets: "3", reps: "15 sec", notes: "Bar or towel pull hold" },
                            { name: "Seated Knee Raises", sets: "3", reps: "12", notes: "" },
                            { name: "Bird Dog", sets: "3", reps: "10/side", notes: "" },
                            { name: "Standing Hollow Hold", sets: "2", reps: "20 sec", notes: "Core tight, ribs down" },
                        ]
                    },
                    {
                        title: "Cool-Down (3 minutes)",
                        exercises: [
                            { name: "Lat stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Lower-back stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "40 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 10
            {
                day: 10,
                title: "Full Body Control Challenge",
                isRestDay: false,
                exercises: [],
                challengeLine: "Control your body. Day 10 — Movement mastery begins.",
                sections: [
                    {
                        title: "Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Jumping jacks (slow)", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Arm circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip openers", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Knee bends", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder taps", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Light squats", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Main Workout",
                        exercises: [
                            { name: "Incline Push-ups (Slow)", sets: "3", reps: "10", notes: "3 sec down, 1 sec up" },
                            { name: "Reverse Lunges", sets: "3", reps: "8/leg", notes: "" },
                            { name: "Glute Bridge Hold", sets: "3", reps: "25 sec", notes: "" },
                            { name: "Dead Bug", sets: "3", reps: "8/side", notes: "" },
                            { name: "Plank Shoulder Taps (Knees)", sets: "2", reps: "20 taps", notes: "" },
                        ]
                    },
                    {
                        title: "Cool-Down (3 minutes)",
                        exercises: [
                            { name: "Hip flexor stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Chest opener", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "40 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 11
            {
                day: 11,
                title: "Strength + Endurance",
                isRestDay: false,
                exercises: [],
                challengeLine: "Endurance builds discipline. Day 11 — staying strong longer.",
                sections: [
                    {
                        title: "Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Marching → light jog", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Arm circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip openers", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Knee bends", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder rolls", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Easy squats", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Main Workout",
                        exercises: [
                            { name: "Incline Push-ups", sets: "4", reps: "8", notes: "Rest 30–40 sec" },
                            { name: "Bodyweight Squats", sets: "4", reps: "12", notes: "" },
                            { name: "Glute Bridges", sets: "3", reps: "15", notes: "" },
                            { name: "Plank (Knees/Full)", sets: "3", reps: "35 sec", notes: "" },
                            { name: "Wall Sit", sets: "2", reps: "30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Cool-Down (3 minutes)",
                        exercises: [
                            { name: "Quads stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hamstrings stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Chest opener", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "40 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 12 (Placeholder for next step if needed, but user stopped at 11/12 transition in prompt)
            // User prompt says: "Jab aap “Done” likhenge → main LEVEL 1 – DAY 12 (Pull + Mobility Blend) de dunga"
            // So I will stop at Day 11 for now as per the provided text, or maybe I should check if Day 12 was provided.
            // Re-reading: "Jab aap “Done” likhenge → main LEVEL 1 – DAY 12 (Pull + Mobility Blend) de dunga"
            // Wait, the user provided text up to Day 11.
            // Ah, the last line of user request is: "Jab aap “Done” likhenge → main LEVEL 1 – DAY 12 (Pull + Mobility Blend) de dunga"
            // So I only have up to Day 11.
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
        exercises: controlExercises,
        schedule: generateSchedule(controlExercises),
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
        exercises: powerExercises,
        schedule: generateSchedule(powerExercises),
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
        exercises: masteryExercises,
        schedule: generateSchedule(masteryExercises),
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
        exercises: eliteExercises,
        schedule: generateSchedule(eliteExercises),
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
        exercises: unboundExercises,
        schedule: generateSchedule(unboundExercises),
        benefits: ["Total Freedom", "World Class Strength", "Creativity"],
        requirements: ["Full Front Lever", "Freestanding HSPU"],
        color: "var(--color-orange)"
    }
];
