const Loader = ({ type }) => {
  return (
    <>
      {type === "postsLoader" ? (
        <div className="loader-container">
          <div className="loader-bar"></div>
        </div>
      ) : (
        <div className="flex-center w-full">
          <img
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
