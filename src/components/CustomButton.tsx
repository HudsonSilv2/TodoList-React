type Props = {
    label: string;
    onClick: () => void;
}

export const CusttonButton = ({label, onClick}: Props) => {
    return (
        <button onClick={onClick} className="p-3 mr-2 rounded-md text-white bg-blue-700">{label}</button>
    );
}