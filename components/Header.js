import {
  HeaderName,
  Header as CarbonHeader,
  SkipToContent,
} from 'carbon-components-react'
import Link from 'next/link'

export default function Header() {
  return (
    <CarbonHeader aria-label="Sports TV program">
      <SkipToContent />
      <HeaderName href="/" prefix="STVP">
        Sports TV program
      </HeaderName>
    </CarbonHeader>
  )
}
