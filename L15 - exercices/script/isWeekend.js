const isWeekend = (formatedDate) => {
    return formatedDate === '0' ? 'Today is Sunday, It is Weekend!' :
           formatedDate === '6' ? 'Today is Saturday, It is Weekend!' :
           "It's not weekend";
}

export default isWeekend