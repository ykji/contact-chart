interface Props {
  label: string;
  value: number;
}

const DataCard = (props: Props) => {
  const { label, value } = props;

  return (
    <div className="p-4 border rounded-lg">
      <p className="text-xl font-bold">{label}</p>
      <p className="text-2xl mt-2">{value.toLocaleString("en-IN")}</p>
    </div>
  );
};

export default DataCard;
