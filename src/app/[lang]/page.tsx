import { Dictionary } from "@/@types"
import { Couter } from "@/components/couter"
import { LangToggle } from "@/components/lang-toggle"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ModeToggle } from "@/components/mode-toggle"
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/libs/get-dictionary"

export default async function Home(
  { params: { lang } }: { params: { lang: Locale } }
) {

  const dictionary: Dictionary = await getDictionary(lang)
  const {
    current_locale,
    server_components: { welcome },
    couter
  } = dictionary

  return (

    <div
      className="min-h-screen flex justify-center items-center bg-zinc-50 dark:bg-zinc-900"
    >
      <div>
        <div
          className="w-full flex justify-between"
        >
          <LangToggle />
          <ModeToggle />
        </div>
        <LocaleSwitcher/>
        <p>
          {current_locale}: {lang}
        </p>
        <p>
          server components: {welcome}
        </p>
        <Couter dictionary={couter} />
      </div>
    </div>
  )
}
