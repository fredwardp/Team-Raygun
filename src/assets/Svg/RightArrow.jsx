const RightArrow = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2002_2786)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4227 1.91076L19.512 10.0001L11.4227 18.0893L10.2442 16.9108L16.3216 10.8334L6.09633e-05 10.8334L6.13145e-05 9.16672H16.3216L10.2442 3.08927L11.4227 1.91076Z"
          fill={color ? color : "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2002_2786">
          <rect width="20" height="20" fill={color ? color : "white"} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RightArrow;
