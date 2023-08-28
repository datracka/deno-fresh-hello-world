import { i18n } from "../i18next.ts";

export default function ChangeToSpanish() {
  return (
    <button
      type="button"
      onClick={() => {
        i18n.changeLanguage("es");
        console.log("changed language to Spanish");
      }}
    >
      Change Title to Spanish
    </button>
  );
}
