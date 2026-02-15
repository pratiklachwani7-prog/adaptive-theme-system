export function complement(color)
{
  // If color is hex
  if (color.startsWith("#"))
  {
    let hex = color.replace("#", "");

    if (hex.length === 3)
    {
      hex = hex.split("").map(c => c + c).join("");
    }

    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);

    const compR = 255 - r;
    const compG = 255 - g;
    const compB = 255 - b;

    const result =
      "#" +
      compR.toString(16).padStart(2, "0") +
      compG.toString(16).padStart(2, "0") +
      compB.toString(16).padStart(2, "0");

    return result;
  }

  // If it's a basic named color
  const namedColors = {
    red: "cyan",
    blue: "yellow",
    green: "magenta",
    yellow: "blue",
    cyan: "red",
    magenta: "green",
    black: "white",
    white: "black"
  };

  return namedColors[color.toLowerCase()] || "black";
}
