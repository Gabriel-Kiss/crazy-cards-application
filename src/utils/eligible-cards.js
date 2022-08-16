export default function eligibleCards (cardsData, annualIncome, employmentType) {
    return cardsData.filter(card => {
        const { name } = card;
        return (name === "Anywhere Card" || (annualIncome > 16000 && name === "Liquid Card") || (employmentType === 'Student' && name === "Student Life"))
    });
}