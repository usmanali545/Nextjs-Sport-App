import {
  HeaderName,
  Header as CarbonHeader,
  SkipToContent,
} from 'carbon-components-react'

export default function Header() {
  return (
    <CarbonHeader aria-label="Sports TV program">
      <SkipToContent />
      <HeaderName href="#" prefix="STVP">
        Sports TV program
      </HeaderName>
    </CarbonHeader>
  )
}
