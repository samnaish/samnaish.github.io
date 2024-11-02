type TitleComponentProps = {
  title: string;
}

const TitleComponent = ({ title }: TitleComponentProps) => {
  return (
    <div className="text-2xl mb-8 ">{title}</div>
  )
};

export { TitleComponent };