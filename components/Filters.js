export default function Filters({ filters = [] }) {
  return <div>{JSON.stringify(filters, 0, 10)}</div>
}
