"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { i18n } from "@/i18n-config"

export const LocaleSwitcher = () => {

    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {

        if (!pathName) return "/"

        const segments = pathName.split("/")

        segments[1] = locale

        return segments.join("/")
    }

    return (

        <div>
            <ul>
                {i18n.locales.map(locale =>
                    <li
                        key={locale}
                    >
                        <Link
                            href={redirectedPathName(locale)}
                        >
                            {locale}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
