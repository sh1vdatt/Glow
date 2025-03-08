import { useState } from "react";

export function Accordion({
  children,
  type = "single",
  collapsible = false,
  className = "",
}) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (value) => {
    setOpenItems((prev) => {
      const newItems = new Set(prev);
      if (type === "single") {
        newItems.clear();
      }
      if (newItems.has(value)) {
        if (collapsible) {
          newItems.delete(value);
        }
      } else {
        newItems.add(value);
      }
      return newItems;
    });
  };

  return (
    <div className={className}>
      {children && Array.isArray(children)
        ? children.map((child) => {
            if (child?.type?.name === "AccordionItem") {
              return {
                ...child,
                props: {
                  ...child.props,
                  isOpen: openItems.has(child.props.value),
                  onToggle: () => toggleItem(child.props.value),
                },
              };
            }
            return child;
          })
        : children}
    </div>
  );
}

export function AccordionItem({ children, value, isOpen, onToggle }) {
  return (
    <div className="border-b">
      {children && Array.isArray(children)
        ? children.map((child) => {
            if (
              child?.type?.name === "AccordionTrigger" ||
              child?.type?.name === "AccordionContent"
            ) {
              return {
                ...child,
                props: {
                  ...child.props,
                  isOpen,
                  onToggle,
                },
              };
            }
            return child;
          })
        : children}
    </div>
  );
}

export function AccordionTrigger({
  children,
  className = "",
  isOpen,
  onToggle,
}) {
  return (
    <button
      className={`flex justify-between w-full py-4 text-left ${className}`}
      onClick={onToggle}
    >
      {children}
      <span
        className={`transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>
  );
}

export function AccordionContent({ children, className = "", isOpen }) {
  if (!isOpen) return null;

  return <div className={`py-4 ${className}`}>{children}</div>;
}
