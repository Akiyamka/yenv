/**
 * To import in TypeScript:
 *
 * import * as yenv from 'yenv'
 */
declare module 'yenv' {
  /**
   * Yenv namespace
   */
  namespace yenv {
    /**
     * The environment.
     */
    type IEnvironment = any;

    /**
     * The yenv options
     *
     * @interface IYenvOpts
     */
    interface IYenvOpts {
      /**
       * What environment should be used? Defaults to "development"
       *
       * @type {string}
       */
      env?: string;
      /**
       * The environment to check on. Defaults to `process.env`
       *
       * @type {IEnvironment}
       */
      envObject?: IEnvironment;
    }
  }

  /**
   * Loads the environment settings
   *
   * @param {string} [filePath]
   * @param {yenv.IYenvOpts} [opts]
   * @returns {yenv.IEnvironment}
   */
  function yenv(filePath?: string, opts?: yenv.IYenvOpts): yenv.IEnvironment;

  namespace yenv {}

  export = yenv
}