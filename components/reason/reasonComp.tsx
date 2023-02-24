import ReasonCard from "./card/card";

const reasons: {
  label: string;
  icon: string;
  message: string;
}[] = [
  {
    icon: "🎓",
    label: "Outstanding Faculty",
    message: `Our teachers are highly trained and passionate about education. They are
        committed to ensuring that your child receives the best possible support
        and guidance throughout their academic journey.`,
  },
  {
    icon: "📚",
    label: "Global Curriculum",
    message: `Our international curriculum is designed to equip students with the skills and knowledge they need to thrive in a globalized world. We offer a wide range of subjects and programs that are tailored to meet the unique needs of each individual student.`,
  },
  {
    icon: "🏫",
    label: "State-of-the-Art Facilities",
    message: `Our school is equipped with modern and innovative facilities, including science and computer labs, libraries, sports grounds, and more. These facilities provide students with the tools they need to excel in their studies and develop their talents.`,
  },
];
export default function Reason() {
  return (
    <>
      {reasons.map((el, id) => (
        <ReasonCard {...el} id={id} key={el.label} />
      ))}
    </>
  );
}
