interface VolunteerProp {
  name: string;
  imageUrl: string;
  socials: string;
  width: number;
  height: number;
  className: string;
}

const Volunteer = ({
  name,
  imageUrl,
  socials,
  width,
  height,
  className,
}: VolunteerProp) => {
  return (
    <div onClick={() => window.open(socials, "_blank", "noopener")}>
      <img
        src={imageUrl}
        width={width}
        height={height}
        alt={name}
        loading='lazy'
        className={className}
        onContextMenu={(e) => e.preventDefault()}
        title={name}
      />
    </div>
  );
};

export default Volunteer;
