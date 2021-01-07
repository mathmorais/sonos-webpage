import Link from 'next/link'
import Dropdown from '../components/Dropdown'
import { useRouter } from 'next/router'
const DropdownContainer = ({ handleToggle, toggleState }) => {
  const langs = ['pt', 'en']
  const router = useRouter()

  const items = langs.map((element, index) => {
    return (
      <Link key={index} href={`/${element}`} locale={element}>
        <p>{element}</p>
      </Link>
    )
  })

  const currentLang = router.pathname.slice(1)

  return (
    <Dropdown
      handleToggle={handleToggle}
      toggleState={toggleState}
      currentLang={currentLang}
      items={items}
    />
  )
}

export default DropdownContainer
