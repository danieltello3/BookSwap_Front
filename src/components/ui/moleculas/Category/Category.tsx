interface CategoryProps {
  name: string;
  onClick?: (id: number) => void;
  selected?: boolean;
  id?: number;
}

const Category: React.FC<CategoryProps> = ({name, onClick, id, selected}) => {
  return (
    <div className={`w-full cursor-pointer py-1 hover:bg-neutral-400/50 ${selected ? 'bg-teal-600 hover:bg-teal-600':''}`} onClick={()=> onClick(id)}>
      <p>{name}</p>
    </div>
  );
};

export default Category;
