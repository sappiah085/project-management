import { FC, PropsWithChildren, SyntheticEvent, useEffect, useRef } from "react";
import { ClickOutsideProps } from "./interface";

const ClickOutside: FC<PropsWithChildren<ClickOutsideProps>> = ({ children, onclickOutside }) => {
  const container = useRef<HTMLSpanElement>(null!);
  useEffect(() => {
    function click(e: MouseEvent) {
      if (!container.current.contains(e.target as HTMLElement)) {
        onclickOutside();
      }
    }
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [onclickOutside]);
  return <span ref={container}>{children}</span>;
};
export default ClickOutside;
