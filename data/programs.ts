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

// Helper to generate a 30-day schedule (unused for now but kept for reference if needed later)
function generateSchedule(coreExercises: Exercise[]): DaySchedule[] {
    return [];
}

const foundationExercises = [
    { name: "Incline Push-ups", sets: "2", reps: "8", notes: "High surface" },
    { name: "Dead Hangs", sets: "2", reps: "10s", notes: "Grip strength" },
    { name: "Assisted Squats", sets: "2", reps: "10", notes: "Full depth" },
    { name: "Knee Raises", sets: "2", reps: "10", notes: "Core focus" },
    { name: "Plank", sets: "2", reps: "15s", notes: "Stability" }
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
                exercises: [],
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
                            { name: "Incline Push-ups", sets: "2", reps: "8", notes: "High surface par — table/wall. Smooth tempo." },
                            { name: "Dead Hangs / Towel Pulls", sets: "2", reps: "10 sec", notes: "Agar bar nahi to towel pull-down mimic." },
                            { name: "Assisted Squats", sets: "2", reps: "10", notes: "Chair ya wall support allowed." },
                            { name: "Knee Raises", sets: "2", reps: "10", notes: "Bedhi hui position se bhi ho sakta." },
                            { name: "Plank", sets: "2", reps: "15 sec", notes: "" },
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
                title: "Foundation Challenge",
                isRestDay: false,
                exercises: [],
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
                            { name: "Incline Push-ups", sets: "2", reps: "8", notes: "High surface par — table/wall. Smooth tempo." },
                            { name: "Dead Hangs / Towel Pulls", sets: "2", reps: "10 sec", notes: "Agar bar nahi to towel pull-down mimic." },
                            { name: "Assisted Squats", sets: "2", reps: "10", notes: "Chair ya wall support allowed." },
                            { name: "Knee Raises", sets: "2", reps: "10", notes: "Bedhi hui position se bhi ho sakta." },
                            { name: "Plank", sets: "2", reps: "15 sec", notes: "" },
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
            // DAY 3
            {
                day: 3,
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
                            { name: "Incline Push-ups", sets: "3", reps: "6", notes: "Control slow rakhein: 2 sec down, 1 sec up" },
                            { name: "Towel Row (Standing)", sets: "3", reps: "8", notes: "Towel ko door handle ya imaginary pull jaisa use karein" },
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
            // DAY 4
            {
                day: 4,
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
                            { name: "Incline Push-ups", sets: "3", reps: "6", notes: "Control slow rakhein: 2 sec down, 1 sec up" },
                            { name: "Towel Row (Standing)", sets: "3", reps: "8", notes: "Towel ko door handle ya imaginary pull jaisa use karein" },
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
            // DAY 5
            {
                day: 5,
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
            // DAY 6
            {
                day: 6,
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
                        title: "Mobility Flow (Main Part)",
                        exercises: [
                            { name: "Cat–Cow stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Forward fold (relaxed)", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Chest opener stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Seated spinal twist", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Deep squat hold (assisted)", sets: "1", reps: "25–30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Breathing Reset (2 minutes)",
                        exercises: [
                            { name: "Breathing", sets: "Repeat", reps: "2 min", notes: "Inhale 4 sec → hold 2 sec → exhale 6 sec" },
                        ]
                    }
                ]
            },
            // DAY 8
            {
                day: 8,
                title: "Mobility & Core Challenge",
                isRestDay: false,
                exercises: [],
                challengeLine: "Strong joints build a strong future. Day 4 — Mobility unlocked.",
                sections: [
                    {
                        title: "Mobility Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Neck rolls (slow)", sets: "1", reps: "20–25 sec", notes: "" },
                            { name: "Shoulder rolls", sets: "1", reps: "20–25 sec", notes: "" },
                            { name: "Arm swings", sets: "1", reps: "20–25 sec", notes: "" },
                            { name: "Hip circles", sets: "1", reps: "20–25 sec", notes: "" },
                            { name: "Cat–Cow stretch", sets: "1", reps: "20–25 sec", notes: "" },
                            { name: "Ankle mobility", sets: "1", reps: "20–25 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Core + Stability Workout",
                        exercises: [
                            { name: "Dead Bug", sets: "3", reps: "6", notes: "Each side. Slow & controlled" },
                            { name: "Bird Dog", sets: "3", reps: "8", notes: "Each side" },
                            { name: "Front Plank (Knees)", sets: "3", reps: "25 sec", notes: "" },
                            { name: "Single-Leg Stand", sets: "2", reps: "30 sec", notes: "Each leg" },
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
            // DAY 9
            {
                day: 9,
                title: "Mobility & Core Challenge",
                isRestDay: false,
                exercises: [],
                challengeLine: "Strong joints build a strong future. Day 4 — Mobility unlocked.",
                sections: [
                    {
                        title: "Mobility Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Neck rolls (slow)", sets: "1", reps: "20–25 sec", notes: "" },
                            { name: "Shoulder rolls", sets: "1", reps: "20–25 sec", notes: "" },
                            { name: "Arm swings", sets: "1", reps: "20–25 sec", notes: "" },
                            { name: "Hip circles", sets: "1", reps: "20–25 sec", notes: "" },
                            { name: "Cat–Cow stretch", sets: "1", reps: "20–25 sec", notes: "" },
                            { name: "Ankle mobility", sets: "1", reps: "20–25 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Core + Stability Workout",
                        exercises: [
                            { name: "Dead Bug", sets: "3", reps: "6", notes: "Each side. Slow & controlled" },
                            { name: "Bird Dog", sets: "3", reps: "8", notes: "Each side" },
                            { name: "Front Plank (Knees)", sets: "3", reps: "25 sec", notes: "" },
                            { name: "Single-Leg Stand", sets: "2", reps: "30 sec", notes: "Each leg" },
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
            // DAY 10
            {
                day: 10,
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
            // DAY 11
            {
                day: 11,
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
            // DAY 12
            {
                day: 12,
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
                        title: "Assessment Challenge (Main Part)",
                        exercises: [
                            { name: "Incline Push-ups", sets: "1", reps: "Max", notes: "Stop jab form tootay" },
                            { name: "Bodyweight Squats", sets: "1", reps: "Max", notes: "Controlled" },
                            { name: "Plank (Knees or Full)", sets: "1", reps: "Max hold", notes: "" },
                            { name: "Single-Leg Stand", sets: "1", reps: "Max time", notes: "Each leg" },
                        ]
                    },
                    {
                        title: "Light Flow (Recovery)",
                        exercises: [
                            { name: "Cat–Cow", sets: "1", reps: "20–30 sec", notes: "" },
                            { name: "Forward fold", sets: "1", reps: "20–30 sec", notes: "" },
                            { name: "Chest opener", sets: "1", reps: "20–30 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "20–30 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "30 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 13
            {
                day: 13,
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
                        title: "Assessment Challenge (Main Part)",
                        exercises: [
                            { name: "Incline Push-ups", sets: "1", reps: "Max", notes: "Stop jab form tootay" },
                            { name: "Bodyweight Squats", sets: "1", reps: "Max", notes: "Controlled" },
                            { name: "Plank (Knees or Full)", sets: "1", reps: "Max hold", notes: "" },
                            { name: "Single-Leg Stand", sets: "1", reps: "Max time", notes: "Each leg" },
                        ]
                    },
                    {
                        title: "Light Flow (Recovery)",
                        exercises: [
                            { name: "Cat–Cow", sets: "1", reps: "20–30 sec", notes: "" },
                            { name: "Forward fold", sets: "1", reps: "20–30 sec", notes: "" },
                            { name: "Chest opener", sets: "1", reps: "20–30 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "20–30 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "30 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 14
            {
                day: 14,
                title: "Active Recovery & Mobility Flow",
                isRestDay: true,
                exercises: [],
                challengeLine: "Recovery is part of strength. Week 2 — Completed.",
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
                        title: "Mobility Flow (Main Part)",
                        exercises: [
                            { name: "Cat–Cow stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Forward fold (relaxed)", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Chest opener stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Seated spinal twist", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Deep squat hold (assisted)", sets: "1", reps: "25–30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Breathing Reset (2 minutes)",
                        exercises: [
                            { name: "Breathing", sets: "Repeat", reps: "2 min", notes: "Inhale 4 sec → hold 2 sec → exhale 6 sec" },
                        ]
                    }
                ]
            },
            // DAY 15
            {
                day: 15,
                title: "Strength & Control Upgrade",
                isRestDay: false,
                exercises: [],
                challengeLine: "Week 3 begins. Stronger than last week.",
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
                            { name: "Knee Raises (Lying or Seated)", sets: "3", reps: "12", notes: "" },
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
            // DAY 16
            {
                day: 16,
                title: "Strength & Control Upgrade",
                isRestDay: false,
                exercises: [],
                challengeLine: "Week 3 begins. Stronger than last week.",
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
                            { name: "Knee Raises (Lying or Seated)", sets: "3", reps: "12", notes: "" },
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
            // DAY 17
            {
                day: 17,
                title: "Pull & Core Focus",
                isRestDay: false,
                exercises: [],
                challengeLine: "Strong back. Strong core. Day 17 — Balance building.",
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
                            { name: "Dead Hang or Isometric Hold", sets: "3", reps: "15 sec", notes: "Bar or towel pull hold" },
                            { name: "Seated Knee Raises", sets: "3", reps: "12", notes: "" },
                            { name: "Bird Dog", sets: "3", reps: "10", notes: "Each side" },
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
            // DAY 18
            {
                day: 18,
                title: "Pull & Core Focus",
                isRestDay: false,
                exercises: [],
                challengeLine: "Strong back. Strong core. Day 18 — Balance building.",
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
                            { name: "Dead Hang or Isometric Hold", sets: "3", reps: "15 sec", notes: "Bar or towel pull hold" },
                            { name: "Seated Knee Raises", sets: "3", reps: "12", notes: "" },
                            { name: "Bird Dog", sets: "3", reps: "10", notes: "Each side" },
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
            // DAY 19
            {
                day: 19,
                title: "Full Body Control Challenge",
                isRestDay: false,
                exercises: [],
                challengeLine: "Control your body. Day 19 — Movement mastery begins.",
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
                            { name: "Incline Push-ups (Slow Tempo)", sets: "3", reps: "10", notes: "3 sec down, 1 sec up" },
                            { name: "Reverse Lunges", sets: "3", reps: "8", notes: "Each leg" },
                            { name: "Glute Bridge Hold", sets: "3", reps: "25 sec", notes: "" },
                            { name: "Dead Bug", sets: "3", reps: "8", notes: "Each side" },
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
            // DAY 20
            {
                day: 20,
                title: "Full Body Control Challenge",
                isRestDay: false,
                exercises: [],
                challengeLine: "Control your body. Day 20 — Movement mastery begins.",
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
                            { name: "Incline Push-ups (Slow Tempo)", sets: "3", reps: "10", notes: "3 sec down, 1 sec up" },
                            { name: "Reverse Lunges", sets: "3", reps: "8", notes: "Each leg" },
                            { name: "Glute Bridge Hold", sets: "3", reps: "25 sec", notes: "" },
                            { name: "Dead Bug", sets: "3", reps: "8", notes: "Each side" },
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
            // DAY 21
            {
                day: 21,
                title: "Active Recovery & Mobility Flow",
                isRestDay: true,
                exercises: [],
                challengeLine: "Recovery is part of strength. Week 3 — Completed.",
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
                        title: "Mobility Flow (Main Part)",
                        exercises: [
                            { name: "Cat–Cow stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Forward fold (relaxed)", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Chest opener stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Seated spinal twist", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Deep squat hold (assisted)", sets: "1", reps: "25–30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Breathing Reset (2 minutes)",
                        exercises: [
                            { name: "Breathing", sets: "Repeat", reps: "2 min", notes: "Inhale 4 sec → hold 2 sec → exhale 6 sec" },
                        ]
                    }
                ]
            },
            // DAY 22
            {
                day: 22,
                title: "Strength + Endurance",
                isRestDay: false,
                exercises: [],
                challengeLine: "Endurance builds discipline. Day 22 — staying strong longer.",
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
                            { name: "Plank (Knees or Full)", sets: "3", reps: "35 sec", notes: "" },
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
            // DAY 23
            {
                day: 23,
                title: "Strength + Endurance",
                isRestDay: false,
                exercises: [],
                challengeLine: "Endurance builds discipline. Day 23 — staying strong longer.",
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
                            { name: "Plank (Knees or Full)", sets: "3", reps: "35 sec", notes: "" },
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
            // DAY 24
            {
                day: 24,
                title: "Pull + Mobility Blend",
                isRestDay: false,
                exercises: [],
                challengeLine: "Strong back, healthy joints. Day 24 — balance maintained.",
                sections: [
                    {
                        title: "Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Arm swings (wide)", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Scapular shrugs", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Wrist circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Easy squats", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Main Workout",
                        exercises: [
                            { name: "Towel Rows (Standing)", sets: "4", reps: "10", notes: "Chest open, elbows back" },
                            { name: "Dead Hang / Towel Hold", sets: "3", reps: "20 sec", notes: "" },
                            { name: "Scapular Wall Slides", sets: "3", reps: "10", notes: "" },
                            { name: "Bird Dog (Slow)", sets: "3", reps: "10", notes: "Each side" },
                            { name: "Hanging Stretch / Lat Stretch", sets: "2", reps: "30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Cool-Down (3 minutes)",
                        exercises: [
                            { name: "Shoulder stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Upper-back stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Child’s pose", sets: "1", reps: "30 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "40 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 25
            {
                day: 25,
                title: "Pull + Mobility Blend",
                isRestDay: false,
                exercises: [],
                challengeLine: "Strong back, healthy joints. Day 25 — balance maintained.",
                sections: [
                    {
                        title: "Warm-Up (4 minutes)",
                        exercises: [
                            { name: "Arm swings (wide)", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Scapular shrugs", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Wrist circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Easy squats", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Main Workout",
                        exercises: [
                            { name: "Towel Rows (Standing)", sets: "4", reps: "10", notes: "Chest open, elbows back" },
                            { name: "Dead Hang / Towel Hold", sets: "3", reps: "20 sec", notes: "" },
                            { name: "Scapular Wall Slides", sets: "3", reps: "10", notes: "" },
                            { name: "Bird Dog (Slow)", sets: "3", reps: "10", notes: "Each side" },
                            { name: "Hanging Stretch / Lat Stretch", sets: "2", reps: "30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Cool-Down (3 minutes)",
                        exercises: [
                            { name: "Shoulder stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Upper-back stretch", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Child’s pose", sets: "1", reps: "30 sec", notes: "" },
                            { name: "Deep breathing", sets: "1", reps: "40 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 26
            {
                day: 26,
                title: "Full Body Flow",
                isRestDay: false,
                exercises: [],
                challengeLine: "Move better, feel stronger. Day 26 — flow unlocked.",
                sections: [
                    {
                        title: "Warm-Up (3 minutes)",
                        exercises: [
                            { name: "Easy jumping jacks", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Arm circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip openers", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Knee bends", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder rolls", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Full Body Flow Circuit (3 rounds)",
                        exercises: [
                            { name: "Incline Push-up → Stand", sets: "3", reps: "6", notes: "" },
                            { name: "Bodyweight Squat", sets: "3", reps: "10", notes: "" },
                            { name: "Standing Knee Raise", sets: "3", reps: "10", notes: "" },
                            { name: "Bird Dog", sets: "3", reps: "6", notes: "Each side" },
                            { name: "Plank (Knees)", sets: "3", reps: "25 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Mobility Flow (3 minutes)",
                        exercises: [
                            { name: "Cat–Cow", sets: "1", reps: "30 sec", notes: "" },
                            { name: "Deep squat hold", sets: "1", reps: "30 sec", notes: "" },
                            { name: "Chest opener", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Forward fold", sets: "1", reps: "30 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 27
            {
                day: 27,
                title: "Full Body Flow",
                isRestDay: false,
                exercises: [],
                challengeLine: "Move better, feel stronger. Day 27 — flow unlocked.",
                sections: [
                    {
                        title: "Warm-Up (3 minutes)",
                        exercises: [
                            { name: "Easy jumping jacks", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Arm circles", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Hip openers", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Knee bends", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Shoulder rolls", sets: "1", reps: "20 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Full Body Flow Circuit (3 rounds)",
                        exercises: [
                            { name: "Incline Push-up → Stand", sets: "3", reps: "6", notes: "" },
                            { name: "Bodyweight Squat", sets: "3", reps: "10", notes: "" },
                            { name: "Standing Knee Raise", sets: "3", reps: "10", notes: "" },
                            { name: "Bird Dog", sets: "3", reps: "6", notes: "Each side" },
                            { name: "Plank (Knees)", sets: "3", reps: "25 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Mobility Flow (3 minutes)",
                        exercises: [
                            { name: "Cat–Cow", sets: "1", reps: "30 sec", notes: "" },
                            { name: "Deep squat hold", sets: "1", reps: "30 sec", notes: "" },
                            { name: "Chest opener", sets: "1", reps: "20 sec", notes: "" },
                            { name: "Forward fold", sets: "1", reps: "30 sec", notes: "" },
                        ]
                    }
                ]
            },
            // DAY 28
            {
                day: 28,
                title: "Active Recovery & Mobility Flow",
                isRestDay: true,
                exercises: [],
                challengeLine: "Recovery is part of strength. Week 4 — Completed.",
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
                        title: "Mobility Flow (Main Part)",
                        exercises: [
                            { name: "Cat–Cow stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Forward fold (relaxed)", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Chest opener stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Seated spinal twist", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Shoulder stretch", sets: "1", reps: "25–30 sec", notes: "" },
                            { name: "Deep squat hold (assisted)", sets: "1", reps: "25–30 sec", notes: "" },
                        ]
                    },
                    {
                        title: "Breathing Reset (2 minutes)",
                        exercises: [
                            { name: "Breathing", sets: "Repeat", reps: "2 min", notes: "Inhale 4 sec → hold 2 sec → exhale 6 sec" },
                        ]
                    }
                ]
            }
        ],
        benefits: ["Improved Joint Health", "Basic Body Awareness", "Core Stability", "Better Posture"],
        requirements: ["None. Suitable for complete beginners."],
        color: "var(--color-orange)"
    },
    {
        id: 2,
        slug: "control",
        title: "CONTROL",
        description: "Coming Soon",
        longDescription: "Coming Soon",
        exercises: [],
        schedule: [],
        benefits: [],
        requirements: [],
        color: "var(--color-orange)"
    },
    {
        id: 3,
        slug: "power",
        title: "POWER",
        description: "Coming Soon",
        longDescription: "Coming Soon",
        exercises: [],
        schedule: [],
        benefits: [],
        requirements: [],
        color: "var(--color-orange)"
    },
    {
        id: 4,
        slug: "mastery",
        title: "MASTERY",
        description: "Coming Soon",
        longDescription: "Coming Soon",
        exercises: [],
        schedule: [],
        benefits: [],
        requirements: [],
        color: "var(--color-orange)"
    },
    {
        id: 5,
        slug: "elite",
        title: "ELITE",
        description: "Coming Soon",
        longDescription: "Coming Soon",
        exercises: [],
        schedule: [],
        benefits: [],
        requirements: [],
        color: "var(--color-orange)"
    },
    {
        id: 6,
        slug: "unbound",
        title: "UNBOUND",
        description: "Coming Soon",
        longDescription: "Coming Soon",
        exercises: [],
        schedule: [],
        benefits: [],
        requirements: [],
        color: "var(--color-orange)"
    }
];
