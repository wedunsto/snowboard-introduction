interface groupLesson {
    type: string,
    lesson: string[]
}

export const standingUpLesson: string[] = [
    "Put your lead foot in your lead foot binding and keep the tail foot out of the tail foot binding",
    "Put the tail foot behind the heel edge",
    "Raise the toe edge so the heel edge is in the snow",
    "Move the board left and right to feel the edge in the snow",
    "Try to push the board perpendicular to the edge. It's pretty locked into the the edge",
    "Lower the toe edge so the heel edge is no longer in the snow",
    "Move the board left and right to feel the lack of friction",
    "Slide the board around the lead foot, the board moves more freely",
    "The higher the board, the more friction, the lower the board, the less friction"
];

export const toeEdgeLesson: string[] = [
    "Put the trailing foot in front of the toe edge",
    "Bend the knee of the lead foot so the toe edge is in the snow",
    "Move the board left and right to feel the edge in the snow",
    "Try to push the board perpendicular to the edge. It's pretty locked into the edge",
    "Lower the heel edge so the toe edge is no longer in the snow",
    "Move the board left and right to feel the lack of friction",
    "Slide the board around the lead foot, the board moves more freely"
];

export const skatingLesson: string[] = [
    "(*)Keep your eyes up, your spine up, and navigate your board",
    "Put about 65% of your weight on your lead foot",
    "Shift your hip over your lead foot with your knee and ankle bent",
    "Place trailing foot behind the heel edge",
    "Take small steps with the trailing foot in the direction of the lead foot",
    "As the board picks up momentum, place the trailing foot against the trailing binding",
    "Keep the lead shoulder, hip, and board aligned and in the same direction",
    "Take small progressive steps",
    "Keep your knees bent"
];

export const turnSkatingLesson: string[] = [
    "Place the trailing foot in front of the toe edge",
    "Pick up the board with the lead foot",
    "Hit the board against the heel of your trailing foot",
    "Rotate the trailing foot in the direction of the trailing foot binding",
    "Place the trailing foot behind the heel edge",
    "Place more weight on the trailing foot",
    "Rotate the trailing foot in the direction of the lead foot binding",
    "Without engaging either edge, slide the bord with your lead foot"
];

export const climbingUpHillLesson: string[] = [
    "Place your trailing foot in front of the toe edge",
    "Take a step up hill",
    "Keep the toe edge engaged as you bring the board uphill"
];

export const ridingDownHillLesson: string[] = [
    "Place trailing foot behind the heel edge",
    "Pck up trailing foot and place it against trailing foot binding",
    "Allow the momentum to build in the direction of the lead foot",
    "Keep about 55% to 65% of weight on the lead foot",
    "Keep your shoulder, knee, and board, in the same direction",
    "Keep your knees bent"
];

export const heelStopLesson: string[] = [
    "Pretend the lead knee is a door",
    "Rotate the lead knee 'open' or out",
    "Keep the shoulder and hip in the same direction",
    "Engage the heel edge of the lead foot by lifting the toes",
    "Once the board is swinging around, engage the heel edge of the trailing foot by lifing the toes"
];

export const toeStopLesson: string[] = [
    "Pretend the lead knee is an open door",
    "Rotate the knee 'closed' or in",
    "Keep the shoulder and hip in the direction of the turn",
    "Engage the toe edge of the lead knee over the toes, allowing the board to tilt",
    "Once the board is swinging around, engage the toe edge of the trailing foot by pressing the knee over the toes"
];

export const standingUpWithBothBindings: string[] = [
    "Sit down with both feet engaging the heel edge",
    "Use your lead hand to grab the toe edge",
    "Scoot your tail bone to your board",
    "Squat on top of your board",
    "Push off your back foot",
    "Stand straight up",
    "Keep your toes up, engaging your heel edge",
    "Keep even weight between both feet"
];

export const catchingAnEdge: string = "Anytime you slide down hill, lean up hill";

export const managingSpeed: groupLesson[] = [
    {
        type: "heel",
        lesson: [
            "Lean back like sitting in a chair",
            "Lift up your toe to stop quicker",
            "Progressively engage the heel edge to avoid abrupt stops",
            "Keep weight distributed between both feet"
        ]
    },
    {
        "type": "toe",
        "lesson": [
            "Keep your spine straight, don't hunch over",
            "Press your knees to your toes, and lean forward",
            "Press harder to stop quicker",
            "Progressively engage the toe edge to avoid abrupt stops",
            "Keep weight distributed between both feet"
        ]
    }
];

export const fallingLeaf: groupLesson[] = [
    {
        "type": "heel",
        "lesson": [
            "Start by engaging both feet on the heel edge",
            "Slowly lower the toe edge",
            "Shift your weight left to go left",
            "Shift your weight right to go right"
        ]
    },
    {
        "type": "toe",
        "lesson": [
            "Face uphill with both feet engaging the toe edge",
            "Slow lower the heel edge",
            "Shift your weight left to go left",
            "Shift your weight right to go right",
            "Keep shoulders up",
            "Dont reach for the ground",
            "Dont stick your butt out",
            "Press your hips forward, as you press your knees toward your toes"
        ]
    }
];

export const approachFallLine: string[] = [
    "Keep yout weight even between each foot",
    "Hop and point your lead foot down the fall line",
    "Keep your weight even until you approach a turn or stop"
];

export const kneeSteering: string[] = [
    "Use your lead shoulder to point in the direction you want to go",
    "Use your lead knee to turn across the fall line",
    "Place about 65% of your weight on your lead foot"
];

export const fallLineDuration: string = "Use a duration that you are comfortable with";

export const linkingTurns: string[] = [
    "Start by pointing your board down the fall line",
    "Utilize knee steering to go in the direction you want to go",
    "Engage the uphill edge and travel across the fall line",
    "Evenly distribute your weight between both feet",
    "Point you board down the fall line",
    "Count to 3* seconds",
    "Utilize knee steering to go in the opposite direction",
    "Engage the uphill edge and travel across the fall line",
    "Evenly distribute your weight between both feet",
    "Repeat",
];

export const chairLift: string[] = [
    "Keep your eyes up",
    "Keep your shoulders, hips, and board in the same direction",
    "Skate up to the chair lift",
    "Look over your back shoulder and spot the chair lift",
    "Anticipate when the chair lift will pick you up",
    "Take your back hand and reach for the back of the chair lift",
    "Grab the back, and sit down",
    "Lift your lead foot a bit",
    "Keep the nose of the board pointed out straight",
    "When you are no longer touching the ground, bring down the safety arm",
    "Get to the top of the lift",
    "Take your trailing hand and grab the back of the chair",
    "Scoot to the edge of the chair",
    "Point your lead hip and the nose of the board straight out toward the rail",
    "Look out where you want to do",
    "Don't stare at the ground",
    "Keep your body straight and aligned",
    "Start to stand up when the chair lift reaches the flat part",
    "Slightly push off the back of the chair, riding off the chair lift",
    "Keep an athletic stance",
    "Apply about 65% of your weight on your lead foot"
];

export const STurn: string[] = [
    "Make a heel side turn",
    "Maintain the turn duration for 5* seconds",
    "Follow the linking turn steps without coming to a full stop",
    "Make a toe side turn",
    "Maintain the turn duration for 5* seconds",
    "Speed up by reducing the turn duration",
    "Slow down by extending the turn duration"
];