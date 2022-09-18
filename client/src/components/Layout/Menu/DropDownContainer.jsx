const DropDownContainer = (props) => {
  return (
    <div
      className={`flex p-6 absolute border border-third rounded-xl left-1/2 translate -translate-x-2/4 ${props.className} `}
    >
      {props.children}
    </div>
  );
};

export default DropDownContainer;
