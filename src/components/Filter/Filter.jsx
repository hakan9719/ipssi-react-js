export default function Filter({ handleChange }) {
  return <input onChange={(e) => handleChange(e)} type="text" />;
}
