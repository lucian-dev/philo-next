import AccordionTab from "./AccordionTab";

const Accordion = ({ tabs }) => {
  return (
    <div>
      {tabs.map((tab) => {
        return (
          <AccordionTab
            key={tab.id}
            title={tab.name}
            content={tab.description}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
