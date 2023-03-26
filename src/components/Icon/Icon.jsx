// Icons from Iconoir https://iconoir.com/

function getIcon(icon) {
  switch (icon) {
    case "info":
      return (
        <path d='M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'></path>
      )
  }
}

function Icon({ icon, ...rest }) {
  return (
    <svg
      {...rest}
      width='16'
      height='16'
      strokeWidth='2'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {getIcon(icon)}
    </svg>
  )
}

export default Icon
