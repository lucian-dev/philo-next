import AccordionTab from "./AccordionTab";

const ProductAccordion = ({ tabs }) => {
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

export default ProductAccordion;
