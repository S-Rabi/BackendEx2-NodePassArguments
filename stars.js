export default function stars(numberOfStars = 10, text = "Hi") {
  console.log(
    `${"*".repeat(numberOfStars)}
    ${text}
    ${"*".repeat(numberOfStars)}`
  );
}
