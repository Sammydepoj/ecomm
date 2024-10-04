type Props = {
    holder: string;
  };
  
  const CategoriesButton: React.FC<Props> = ({ holder }) => {
    return (
      <button className="bg-[#002366] text-white font-bold text-xl tracking-wider px-16 rounded-lg py-4 border">
        {holder}
      </button>
    );
  };
  
  export default CategoriesButton;
