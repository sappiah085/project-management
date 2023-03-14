export default function TabLike({
  label,
  handleClick,
  active,
}: {
  handleClick: () => void;
  label: string;
  active: boolean;
}) {
  return (
    <button
      onClick={handleClick}
      style={{
        color: active ? "#4220ae" : "black",
        borderBottom: active ? "2px solid #4220ae" : "none",
      }}
      className=" border-b-2 pb-1 font-semibold"
    >
      {label}
    </button>
  );
}
