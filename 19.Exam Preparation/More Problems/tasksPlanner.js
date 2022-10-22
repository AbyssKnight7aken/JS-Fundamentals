function tasksPlanner(inputArray) {

    let tasks = inputArray.shift().split(` `).map(Number);
    let index = 0;
    let operation = inputArray[index].split(` `);
    let command = operation[0];

    while (command !== `End`) {

        let value1 = Number(operation[1]);
        let value2 = Number(operation[2]);

        if (command === `Count`) {
            if (operation[1] === `Completed`) { command = `Count Completed`; }
            if (operation[1] === `Incomplete`) { command = `Count Incomplete`; }
            if (operation[1] === `Dropped`) { command = `Count Dropped`; }
        }

        switch (command) {
            case `Complete`: complete(value1); break;
            case `Change`: change(value1, value2); break;
            case `Drop`: drop(value1); break;
            case `Count Completed`: countCompleted(); break;
            case `Count Incomplete`: countIncomplete(); break;
            case `Count Dropped`: countDropped(); break;
        }

        index++;
        operation = inputArray[index].split(` `);
        command = operation[0];
    }

    function complete(index) {
        if (tasks[index]) {
            tasks[index] = 0;
        }
    }

    function change(index, time) {
        if (tasks[index]) {
            tasks[index] = time;
        }
    }

    function drop(index) {
        if (tasks[index]) {
            tasks[index] = -1;
        }
    }

    function countCompleted() {
        let completedTasks = tasks.filter(x => x === 0);
        let completedTasksCount = completedTasks.length;
        console.log(completedTasksCount);
    }

    function countIncomplete() {
        let incompletedTasks = tasks.filter(x => x > 0);
        let incompletedTasksCount = incompletedTasks.length;
        console.log(incompletedTasksCount);
    }

    function countDropped() {
        let droppedTasks = tasks.filter(x => x < 0);
        let droppedTasksCount = droppedTasks.length;
        console.log(droppedTasksCount);
    }

    let result = tasks.filter(x => x > 0);
    console.log(result.join(` `));

}

tasksPlanner([`1 2 3 4 5 4 0 3 2 1`,
    `Complete 0`,
    `Complete 1`,
    `Complete 2`,
    `Drop 3`,
    `Change 4 1`,
    `Count Completed`,
    `End`])

tasksPlanner([`1 -1 2 3 4 5`,
    `Complete 4`,
    `Change 0 4`,
    `Drop 3`,
    `Count Dropped`,
    `End`])