const data = [
  {
    bullet: "10-Foot Rule",
    text: "If a staff comes within 10 feet of a guest, they should make eye contact, smile, and greet the guest warmly; creating a positive first impression and setting the tone for their experience.",
  },
  {
    bullet: "5-Foot Rule",
    text: "If a staff comes within 5 feet of a guest, in addition to the above, the staff are encouraged to engage in conversation and offer assistance or guidance if needed; demonstrating attentiveness and willingness to provide personalized service to the guests.",
  },
];

const CustomBulletList = () => {
  return (
    <div className="p-4 my-8 md:p-4 md:my-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start gap-2 mb-4"
        >
          <span className="text-xl font-span md:mt-1 md:text-3xl">
            {item.bullet}
          </span>{" "}
          {/* Custom bullet text for mobile and desktop */}
          <p className="text-sm md:flex-1 md:text-sm font-napzer">
            {item.text}
          </p>{" "}
          {/* Adjusted text size for mobile */}
        </div>
      ))}
    </div>
  );
};

export default CustomBulletList;
