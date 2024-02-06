const Loading = () => {
  return (
    <div className="px-8 flex items-center w-full gap-[100px] ">
        <div className="w-full h-[80vh] bg-gray-700 animate-pulse rounded"></div>
      <div className="w-full h-[80vh] max-h[500px] px-8 flex">
        <div className="mt-2 w-full h-full flex *:rounded *:animate-pulse *:bg-gray-700 *:w-full flex-col gap-6 ">
          <div className=" h-[10vh]"></div>
          <div className=" h-[10vh]"></div>
          <div className=" h-[10vh]"></div>
          <div className=" h-[20vh]"></div>
          <div className=" h-[10vh]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
