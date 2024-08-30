import { ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";
import { LangContext } from "@contexts/LangContext";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div>
      <p className="text-center" style={{ color: theme.fgColor }}>
        {theme.name === 'light' && (
          <div>{lang.detail.lightActivated}</div>
        )}
        {theme.name === 'dark' && (
          <div>{lang.detail.darkActivated}</div>
        )}
        {/*Display activated theme message here (EN or TH)*/}
        {/* tip: Get information from "theme" variable to determine 
    which theme is currently selected */}
      </p>
    </div>
  );
};
