type EventHandler = () => void;

type HookOptions = {
  active ?: boolean;
  keys ?: string | string[];
}

declare const useKeydown : (handler : EventHandler, opts : HookOptions) => void;

export default useKeydown;
