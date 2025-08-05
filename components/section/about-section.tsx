const AboutSection = () => {
  return (
    <section className="relative flex flex-col gap-4 max-w-lg w-full">
      <h2 className="font-display text-lg sm:text-xl text-foreground">
        What You'll Get
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        You'll find motion best practices, clean and performant code, and
        occasionally a reusable, production-grade component.
        <br className="mb-4" />
        Everything here is built with intent, whether it's a quick prototype or
        a polished interaction.
      </p>
    </section>
  );
};

export default AboutSection;
