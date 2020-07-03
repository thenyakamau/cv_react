export default function RemoveDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}
