const ContactItem = (props) => {
  return (
    <div className={`flex flex-col gap-4 ${props.className}`}>
      <div className="text-lg font-semibold">{props.title}</div>
      <div className="flex flex-col gap-2">{props.children}</div>
    </div>
  );
};

export default ContactItem;
