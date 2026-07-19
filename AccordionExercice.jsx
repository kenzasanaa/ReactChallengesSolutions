import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-50 p-8">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="w-full max-w-2xl divide-y divide-gray-200 rounded-lg bg-white shadow-lg">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`cursor-pointer p-6 transition-colors duration-200 ${
        isOpen ? "border-l-4 border-green-500 bg-green-50" : "hover:bg-gray-50"
      }`}
      onClick={handleToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={`text-lg font-semibold ${
            isOpen ? "text-green-600" : "text-gray-400"
          }`}
        >
          {num < 9 ? `0${num + 1}` : num + 1}
        </span>

        <p
          className={`flex-1 text-lg font-medium ${
            isOpen ? "text-gray-900" : "text-gray-700"
          }`}
        >
          {title}
        </p>

        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold ${
            isOpen
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <div className="mt-4 pl-12 text-gray-600 leading-relaxed">
          {text}
        </div>
      )}
    </div>
  );
}