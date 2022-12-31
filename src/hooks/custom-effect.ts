import { useEffect, useRef } from "react";

const useEffectAfterInitialRender = (
  function_: React.EffectCallback,
  deps: React.DependencyList
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) function_();
    else didMount.current = true;
  }, deps);
};

export { useEffectAfterInitialRender };
