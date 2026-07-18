import thoughts from "../data/thoughts";

export default function getTodaysThought() {
  const today = new Date();

  const month = today.getMonth() + 1;
  const day = today.getDate();

  // Anniversary
  if (month === 7 && day === 3) {
    return {
      text: "Happy Anniversary. Thank you for choosing this journey with me. ❤️",
      author: "Matty",
    };
  }

  // Skylar's Birthday
  if (month === 11 && day === 21) {
    return {
      text: "Happy Birthday, Skylar. May this year be filled with joy and God's blessings. 🎂",
      author: "Matty",
    };
  }

  // First Kiss
  if (month === 7 && day === 5) {
    return {
      text: "The day our story changed forever. 💋",
      author: "Elaris",
    };
  }

  // First Date
  if (month === 7 && day === 6) {
    return {
      text: "The first page of our adventure together. 🌹",
      author: "Elaris",
    };
  }

  const index =
    today.getDate() % thoughts.length;

  return thoughts[index];
}