export default function({ name }) {
  if (!name) { return { success: false, errors: ['Name cannot be blank']}}
  return { success: true }
}
