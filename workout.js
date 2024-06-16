// Variables
const workoutDisplayArea = document.querySelector("#workout-of-the-day-display");
const menuDaysArr = document.querySelectorAll(".menu-see-workout-day");

const splittDayTypes = {
    monday: document.querySelector("#splitt-monday-type"),
    tuesday: document.querySelector("#splitt-tuesday-type"),
    wednesday: document.querySelector("#splitt-wednesday-type"),
    thursday: document.querySelector("#splitt-thursday-type"),
    friday: document.querySelector("#splitt-friday-type"),
    saturday: document.querySelector("#splitt-saturday-type"),
    sunday: document.querySelector("#splitt-sunday-type"),
};

const menuDays = {
    monday: document.querySelector("#menu-monday"),
    tuesday: document.querySelector("#menu-tuesday"),
    wednesday: document.querySelector("#menu-wednesday"),
    thursday: document.querySelector("#menu-thursday"),
    friday: document.querySelector("#menu-friday"),
    saturday: document.querySelector("#menu-saturday"),
    sunday: document.querySelector("#menu-sunday")
};

const workoutPlan = {
    monday: {
        type: "Legs & abs",
        plan: [
            {
                exercise: "Hanging leg (or knee) raises",
                repRange: "8-12",
                sets: "4"
            },
            {
                exercise: "Ab crunch machine",
                repRange: "8-12",
                sets: "4"
            },
            {
                exercise: "Leg extension",
                repRange: "10-15 (past failure)",
                sets: "3"
            },
            {
                exercise: "Leg curl",
                repRange: "8-12 (past failure)",
                sets: "3"
            },
            {
                exercise: "Leg press",
                repRange: "8-12 (failure)",
                sets: "2"
            },
            {
                exercise: "Calf extension machine",
                repRange: "10-15 (past failure)",
                sets: "4"
            },
            {
                exercise: "Back extension machine",
                repRange: "8-12",
                sets: "3"
            }
        ]
    },
    tuesday: {
        type: "Chest and back",
        plan: [
            {
                exercise: "Dumbbell incline bench press",
                repRange: "8-12 (failure)",
                sets: "2"
            },
            {
                exercise: "Lat pulldown machine",
                repRange: "8-12 (failure)",
                sets: "3"
            },
            {
                exercise: "Chest press",
                repRange: "6-10 (failure)",
                sets: "3"
            },
            {
                exercise: "Machine row",
                repRange: "10-15 (failure)",
                sets: "3"
            },
            {
                exercise: "Chest flies machine",
                repRange: "8-12 (failure)",
                sets: "4"
            },
            {
                exercise: "Kneeling single arm pulldown",
                repRange: "8-12 (failure)",
                sets: "3"
            },
        ]
    },
    wednesday: {
        type: "Arms & shoulders",
        plan: [
            {
                exercise: "SUPERSET | Straight bar bicep curl",
                repRange: "8-12 (failure)",
                sets: "4"
            },
            {
                exercise: "SUPERSET | Straight bar tricep pushdown",
                repRange: "8-12 (failure)",
                sets: "4"
            },
            {
                exercise: "Cable rear delt fly",
                repRange: "8-12 (failure)",
                sets: "4"
            },
            {
                exercise: "Shoulder press machine",
                repRange: "8-12 (failure)",
                sets: "4"
            },
            {
                exercise: "Tricep overhead extension",
                repRange: "8-12 (failure)",
                sets: "4"
            },
            {
                exercise: "SUPERSET | Cable rope hammer curl",
                repRange: "8-12 (failure)",
                sets: "4"
            },
            {
                exercise: "SUPERSET | Cable lateral raise",
                repRange: "8-12 (failure)",
                sets: "4"
            }
        ]
    },
    thursday: {
        type: "Legs & abs",
        plan: [
            {
                exercise: "Hanging leg (or knee) raises",
                repRange: "8-12",
                sets: "4"
            },
            {
                exercise: "Ab crunch machine",
                repRange: "8-12",
                sets: "4"
            },
            {
                exercise: "Leg extension",
                repRange: "10-15 (past failure)",
                sets: "3"
            },
            {
                exercise: "Leg curl",
                repRange: "8-12 (past failure)",
                sets: "3"
            },
            {
                exercise: "Leg press",
                repRange: "8-12 (failure)",
                sets: "2"
            },
            {
                exercise: "Calf extension machine",
                repRange: "10-15 (past failure)",
                sets: "4"
            },
            {
                exercise: "Back extension machine",
                repRange: "8-12",
                sets: "3"
            }
        ]
    },
    friday: {
        type: "Rest"
    },
    saturday: {
        type: "Upper body (not abs)",
        plan: [
            {
                exercise: "Incline dumbbell bench press OR Chest press",
                repRange: "DB: 8-12 | Chest press: 6-10 | (failure)",
                sets: "4"
            },
            {
                exercise: "Lat pulldown machine",
                repRange: "8-12",
                sets: "4"
            },
            {
                exercise: "Cable lateral raise",
                repRange: "8-12 (FAILURE)",
                sets: "4"
            },
            {
                exercise: "SUPERSET | Straight bar bicep curl",
                repRange: "8-12 (failure)",
                sets: "4"
            },
            {
                exercise: "SUPERSET | Straight bar tricep pushdown",
                repRange: "8-12 (failure)",
                sets: "4"
            },
            {
                exercise: "Chest flies machine",
                repRange: "8-12 (past failure / partial reps)",
                sets: "4"
            },
            {
                exercise: "Kneeling single arm pulldown",
                repRange: "8-12",
                sets: "4"
            },
            {
                exercise: "SUPERSET | Hammer curls",
                repRange: "8-12",
                sets: "4"
            },
            {
                exercise: "SUPERSET | Overhead tricep extension",
                repRange: "8-12",
                sets: "4"
            },
            {
                exercise: "Cable rear delt fly",
                repRange: "8-12",
                sets: "4"
            },
        ]
    },
    sunday: {
        type: "Rest"
    }
};

// Functions
const ReturnWorkoutHTML = (obj) => {
    if (!(obj.type.toLowerCase() === "rest")) {
        // Making a new table
        const newTable = document.createElement("table");
        newTable.setAttribute("id", "workout-plan-day-table");
        
        // Setting top content
        const topPartOfTable = `
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Rep range</th>
                    <th>Sets</th>
                </tr>
            </thead>
        `;
        newTable.innerHTML = topPartOfTable;

        // Setting the workout part
        const tableBody = document.createElement("tbody");

        obj.plan.forEach((planSubPart) => {
            const tableRow = document.createElement("tr");
            tableRow.innerHTML = `
                <td>${planSubPart.exercise}</td>
                <td>${planSubPart.repRange}</td>
                <td>${planSubPart.sets}</td>
            `;
            tableBody.appendChild(tableRow);
        });

        newTable.appendChild(tableBody);

        return newTable.outerHTML;
    } else {
        return `<p id="rest-day-display-text">This is a rest day</p>`;
    };
};

const SetDaysToMatchSplitt = () => {
    splittDayTypes.monday.textContent = workoutPlan.monday.type;
    splittDayTypes.tuesday.textContent = workoutPlan.tuesday.type;
    splittDayTypes.wednesday.textContent = workoutPlan.wednesday.type;
    splittDayTypes.thursday.textContent = workoutPlan.thursday.type;
    splittDayTypes.friday.textContent = workoutPlan.friday.type;
    splittDayTypes.saturday.textContent = workoutPlan.saturday.type;
    splittDayTypes.sunday.textContent = workoutPlan.sunday.type;
};

const ResetMenuAndDisplay = () => {
    workoutDisplayArea.innerHTML = "";
    menuDaysArr.forEach((element) => {
        if (element.classList.contains("clicked")) {
            element.classList.remove("clicked");
        };
    });
};

const HandleMenuOptionClick = (event) => {
    const dayClicked = event.target.id.split("-")[1];
    const dayObject = workoutPlan[dayClicked];
    const dayClickedElement = event.target;

    if (!(dayClickedElement.classList.contains("clicked"))) {
        ResetMenuAndDisplay()
        const HTMLToBeDisplayed = ReturnWorkoutHTML(dayObject);
        workoutDisplayArea.innerHTML = HTMLToBeDisplayed;
        dayClickedElement.classList.add("clicked");
    } else {
        ResetMenuAndDisplay();
        workoutDisplayArea.innerHTML = "";
    };
};

// Add event listeners
menuDays.monday.addEventListener("click", HandleMenuOptionClick);
menuDays.tuesday.addEventListener("click", HandleMenuOptionClick);
menuDays.wednesday.addEventListener("click", HandleMenuOptionClick);
menuDays.thursday.addEventListener("click", HandleMenuOptionClick);
menuDays.friday.addEventListener("click", HandleMenuOptionClick);
menuDays.saturday.addEventListener("click", HandleMenuOptionClick);
menuDays.sunday.addEventListener("click", HandleMenuOptionClick);

// The rest
SetDaysToMatchSplitt();
