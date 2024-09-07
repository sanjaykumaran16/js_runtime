((globalThis) => {
    const core=Deno.core;
    function argsToMessage(...args) {
        return args.map((arg) => JSON.stringify(arg)).join(" ");
    }
    globalThis.console = {
        log: (...args) => {
            core.print(`[out]:${argsToMessage(...args)}\n`,false);
        },
        sarcasm: (...args) => {
            const message = argsToMessage(...args)+" "+"Wohoo! You did it !"
            const logMessage = `[message]: ${message}`;
            core.print(`${logMessage}\n`, true);
        },
    };
}) (globalThis);