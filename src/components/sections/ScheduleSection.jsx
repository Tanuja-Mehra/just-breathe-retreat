import Accordion from '../common/Accordion';
import { scheduleData } from '../../data/scheduleData';

function ScheduleSection() {
  return (
    <section id="schedule" className="bg-brand-teal px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">Daily rhythm</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A calm itinerary that unfolds naturally</h2>
            <p className="mt-4 text-lg text-slate-600">
              Every day is gently paced with grounding rituals, nourishing meals, restorative practices, and spacious time for reflection.
            </p>
          </div>
          <div className="rounded-[2rem] bg-brand-cream p-6">
            <Accordion items={scheduleData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;
