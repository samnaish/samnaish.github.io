import { ReactNode } from "react";

type SectionProps = {
  id: string;
  className: string;
  children: ReactNode;
}

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <div id={id} className={`w-full min-h-screen ${className}`} >
      {children}
    </div>
  )
}

export { Section };
