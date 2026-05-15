const isWithInOneWeek = (dateStrign: string): boolean => {
    const targetDate = new Date(dateStrign);
    const today = new Date()

    if (isNaN(targetDate.getTime())) {
        return false;
    }

    targetDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - targetDate.getTime();

    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays >= 0 && diffDays <= 7;
};

type DateProps = {
    date: string
}

export default function NewLabel({ date }: DateProps) {
    const isNew = isWithInOneWeek(date);
    return (
        <div>
            {isNew && (
                <span className="NewLabel">NEW</span>
            )}
        </div>
    )
}
