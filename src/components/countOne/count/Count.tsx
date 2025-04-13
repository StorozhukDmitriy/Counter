

type CountType ={
    count: number
    className?: string
}

export const Count = ({count,className}:CountType) => {
    return (
        <div className={className}>{count}</div>
    );
};

