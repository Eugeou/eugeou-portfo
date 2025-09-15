export const AnimatedCard = ({
  animation,
  digit,
}: {
  animation: string;
  digit: string | number;
}) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};
