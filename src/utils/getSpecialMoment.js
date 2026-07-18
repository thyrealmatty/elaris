import specialMoments from "../data/specialMoments";

export default function getSpecialMoment() {
  const today = new Date();

  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    specialMoments.find(
      (moment) =>
        moment.month === month &&
        moment.day === day
    ) || null
  );
}