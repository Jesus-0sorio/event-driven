import events from "events";

const eventEmitter = new events.EventEmitter();

const PROCESS_ADDED_FILES_EVENT = "process-added-files";

export const sendAddedFilesToProcess = (addedFiles) => {
  eventEmitter.emit(PROCESS_ADDED_FILES_EVENT, addedFiles);
};

export const startEventListener = () => {
  eventEmitter.on(PROCESS_ADDED_FILES_EVENT, (payload) => {
    console.log("Processing added files: ", payload);
  });
};
