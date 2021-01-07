import { useRouter } from 'next/router'

const redirect = () => {
  const router = useRouter()
  if (typeof window !== 'undefined') {
    const browserLang = window.navigator.language.slice(0, 2)
    router.push(`/${browserLang}`)
  }

  return null
}

export default redirect
