const raw = require('../data');

const frequencyMap = {

}
const parseData = (raw) => {
    const lines = raw.split('\n');
    return lines.map(line => {
        const operation = line.substring(0, 1);
        const value = parseInt(line.substring(1));
        return { operation, value };
    });
};

const processCommands = (commands, _freq) => {
    let freq = _freq;
    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        if (command.operation === '+') {
            freq += command.value;
        } else {
            freq -= command.value;
        }
        if (frequencyMap[freq]) {
            return freq;
        } else {
            frequencyMap[freq] = true;
        }
    }

    return processCommands(commands, freq);

};



const commands = parseData(raw);

console.log(processCommands(commands, 0));