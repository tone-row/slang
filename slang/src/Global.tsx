import { useEffect } from "react";
import { getThemeCss, SlangConfig } from "./config";
import "./Global.css";

// Global is the way to write all necessary properties on the client **at runtime**
const ID = "__slang";

export default function Global({
  config,
  update = false,
}: {
  config?: Partial<SlangConfig>;
  update?: boolean;
}) {
  useEffect(() => {
    if (!document) return;
    let element = document.getElementById(ID);
    if (!element || update) {
      if (!element) {
        element = document.createElement("style");
        element.setAttribute("id", ID);
        document.head.appendChild(element);
      }
      element.innerHTML = getThemeCss(config);
    }
  }, [config, update]);
  return null;
}
