import InformationParent from "../information/information";

export default function ParentalInfo() {
  return (
    <>
      <h1 className="font-bold  text-xl sticky top-16 z-10 bg-white py-1">
        Personal Information
      </h1>
      <InformationParent parent="Father's" />
      <InformationParent parent="Mother's" />
      <InformationParent parent="Guardian Information (Fill this if you are the guardian)" />
    </>
  );
}
