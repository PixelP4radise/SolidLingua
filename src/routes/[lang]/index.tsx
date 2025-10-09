import { Show } from "solid-js";
import { useI18n } from "~/i18n/i18n-context";

export default function LandingPage() {
  const i18n = useI18n();

  return (
    <Show when={i18n.t}>
      <div>{i18n.t("hero.title")}</div>
      <button>{i18n.t("hero.button.primary")}</button>
    </Show>
  );
}