const PingLoader = () => {
  return (
    <div className="absolute flex h-8 w-8">
      <span className="absolute -top-4 -left-4 h-8 w-8 animate-ping rounded-full bg-purple-500 opacity-75"></span>
      <span className="relative -top-4 -left-4 h-8 w-8 rounded-full bg-purple-200"></span>
    </div>
  );
};

export default PingLoader;
