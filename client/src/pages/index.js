import { useRouter } from 'next/router'

const redirect = () => {
  const router = useRouter()
  if (typeof window !== 'undefined') {
    const browserLang = window.navigator.language.slice(0, 2)
    if (browserLang === 'en' || browserLang === 'pt') {
      router.push(`/${browserLang}`)
    } else {
      router.push('/en')
    }
  }

  return null
}

export default redirect
