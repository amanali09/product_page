const Title = ({ detail }) => {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl">{detail.title}</h1>
      <p className="py-1">{detail.subtitle}</p>
    </div>
  );
};

export default Title;
