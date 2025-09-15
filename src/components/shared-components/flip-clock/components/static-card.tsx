export const StaticCard = ({
  position,
  digit,
}: {
  position: string;
  digit: string | number;
}) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};
