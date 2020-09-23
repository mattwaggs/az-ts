type CleanUpAddTaskCallback = (_: () => void) => void;
type CleanUpCallback = ({ addCleanupTask: CleanUpAddTaskCallback }) => void;

/**
 * Performs some 'cleanup' actions when the program exits
 * unexpectedly or when the execution of the callback completes
 */
export const CleanUp = (callback: CleanUpCallback) => {
  var controller = new CleanUpController();
  callback({ addCleanupTask: controller.addTask });
  controller.destroy();
};

class CleanUpController {
  private cleanupTasks: (() => void)[] = [];

  addTask = (task: () => void) => {
    this.cleanupTasks.push(task);
  };

  constructor() {
    // handle normal condition exit
    process.on("exit", this.exitNormally);

    // catch ctrl+c event and exit normally
    process.on("SIGINT", this.exitSIGINT);

    //catch uncaught exceptions, trace, then exit normally
    process.on("uncaughtException", this.exitException);
  }

  exitNormally = (code) => {
    if (code !== 2 && code !== 99) {
      this._cleanup();
    }
  };

  exitSIGINT = () => {
    this._cleanup();
    process.exit(2);
  };

  exitException = (e: any) => {
    console.log("Uncaught Exception...");
    console.log(e.stack);
    this._cleanup();
    process.exit(99);
  };

  _cleanup = () => {
    this.cleanupTasks.forEach((task) => {
      task();
    });
  };

  destroy = () => {
    this._cleanup();
    process.removeListener("exit", this.exitNormally);
    process.removeListener("SIGINT", this.exitNormally);
    process.removeListener("uncaughtException", this.exitException);
    this.cleanupTasks = [];
  };
}
