import Container from "@/components/container";
import CalendarPicker from "@/structures/calendar-picker";

export default function Talk() {
  return (
    <Container size="lg" className="py-8 lg:py-12">
      <div className="text-center mb-8">
        <h1 className="font-rachouan text-3xl font-semibold mb-2">
          Book a Meeting
        </h1>
        <p>
          Select a date and time that works for you. I look forward to our
          conversation!
        </p>
      </div>
      <div className="bg-gray-50/50 border border-gray-100 rounded-md p-4">
        <CalendarPicker />
      </div>
    </Container>
  );
}
