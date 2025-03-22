const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
