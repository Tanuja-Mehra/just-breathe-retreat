import { useState } from 'react';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/70">
          <button
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            className="flex w-full items-center justify-between px-5 py-4 text-left"
          >
            <span className="font-semibold">{item.title}</span>
            <span className="text-xl text-brand-navy">{index === openIndex ? '−' : '+'}</span>
          </button>
          {index === openIndex && <p className="px-5 pb-5 text-sm text-slate-600">{item.body}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
