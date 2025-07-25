import Image from "next/image";

export default function TestimonialCard({ testimonial, animationClass, delay }) {
  return (
    <div
      className={`bg-[#1a1a1a] p-4 rounded-xl shadow-lg min-w-[280px] ${animationClass}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-base lg:text-lg font-semibold mb-4">
        "{testimonial.text}"
      </p>
      <div className="flex items-start gap-2">
        <Image
          src={testimonial.image}
        alt={testimonial.name}
          width={48}
          height={48}
          className="w-[48px] h-[48px] rounded-full object-cover"
        />
        <div>
          <p className="text-base font-semibold">{testimonial.name}</p>
          <p className="text-sm text-[#aaa]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
