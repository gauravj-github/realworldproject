const treatments = [
  { title: "In-Vitro Fertilization (IVF)", desc: "We offer more than just procedures. We offer a chance. A chance to hold, to create, to begin.", icon: "🥚" },
  { title: "Egg Freezing and Preservation", desc: "Your future is uniquely yours. When you're ready, we'll be right here for you.", icon: "❄️" },
  { title: "Multiple IVF & IUI Failures", desc: "We explore new approaches and tailored treatments to give fresh hope after repeated failed attempts.", icon: "🔬" },
  { title: "Intrauterine Insemination (IUI)", desc: "From the gentlest touches to guided steps, we guide you with care and precision.", icon: "❤️" },
  { title: "Male Fertility Solutions", desc: "Fertility is a journey for both partners. We're here at every moment, every partner, every story, every step.", icon: "🧬" },
  { title: "Pregnancy after Menopause", desc: "Advanced procedures that make motherhood possible, even beyond menopause.", icon: "👶" }
];
const Section3 = () => {
  return (
     <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">
            Being India’s Best Fertility & IVF Center. We Specialize in:
          </h2>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg">
            View all treatments
          </button>
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {treatments.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="font-semibold mt-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-gray-600 leading-relaxed">
          <p>
            Our wide network of centers ensures you receive expert support closer to home,
            and closer to comfort. Our wide network of centers ensures you receive expert
            support closer to home, and closer to comfort.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section3