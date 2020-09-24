import { Tag } from 'carbon-components-react'

export default function Filters({
  filters = [],
  selectedFilter = {},
  setSelectedFilter,
}) {
  function handleClick(filter) {
    setSelectedFilter({ ...filter })
  }
  function handleClose() {
    setSelectedFilter({})
  }

  return filters.map((filter) => (
    <Tag
      key={filter?.id}
      id={'' + filter?.id}
      type="cyan"
      filter={filter.id === selectedFilter.id}
      className="filter__tag"
      onClick={() => handleClick(filter)}
      onClose={handleClose}
    >
      {filter?.displayName}
    </Tag>
  ))
}
