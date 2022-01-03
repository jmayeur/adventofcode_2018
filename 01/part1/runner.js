const raw = require('../data');

const parseData = (raw) => {
    const lines = raw.split('\n');
    return lines.map(line => {
        const operation = line.substring(0, 1);
        const value = parseInt(line.substring(1));
        return { operation, value };
    });
};

const processCommands = (command, startValue) => {
    return command.reduce((acc, command) => {
        if (command.operation === '+') {
            return acc + command.value;
        } else {
            return acc - command.value;
        }   
    }, startValue);
};

const commands = parseData(raw);

console.log(processCommands(commands, 0));