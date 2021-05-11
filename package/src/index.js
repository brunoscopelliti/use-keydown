import { useEffect } from "react";

/**
 * A custom React hook to fire an event when user press one,
 * or more specific keys.
 * @name useKeydown
 * @param {Function} handler
 * @param {import("./index").HookOptions} [opts]
 */
const useKeydown =
  (handler, opts) => {
    const { active = true, keys } = opts || {};

    useEffect(
      () => {
        /**
         * @name onKeydown
         * @param {KeyboardEvent} event
         * @returns {void}
         */
        const onKeydown =
          (event) => {
            if (
              keys == null ||
              keys === event.code ||
              (Array.isArray(keys) && keys.includes(event.code))
            ) {
              handler(event);
            }
          };

        if (active) {
          document.addEventListener("keydown", onKeydown);
        }

        return () => {
          if (active) {
            document.removeEventListener("keydown", onKeydown);
          }
        };
      },
      [active, handler, keys]
    );
  };

export default useKeydown;
