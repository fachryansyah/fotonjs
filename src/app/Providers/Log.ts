import rootPath from "app-root-path";
import { createLogger, transports as _transports } from "winston";

const options = {
    file: {
        level: "info",
        filename: `${rootPath}/storage/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: "debug",
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

const logger = createLogger({
    transports: [
        new _transports.File(options.file),
        new _transports.Console(options.console),
    ],
    exitOnError: false,
});

export default logger;
