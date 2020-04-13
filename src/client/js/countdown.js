const countdown = (departureMsec) => {
    const todayMsec = Date.parse(new Date())
    const countdownMsec = departureMsec - todayMsec
    let countdownDays = Math.ceil(countdownMsec/86400000)
    if (countdownDays > 0) {
        countdownDays === 1 ? countdownDays = '1 day' : countdownDays = `${countdownDays} days`
        return `It's ${countdownDays} Away!`
    } else if (countdownDays == 0) {
        return 'Your Departure is Today!'
    } else {
        let pastDate = Math.abs(countdownDays)
        pastDate === 1 ? pastDate = '1 day' : pastDate = `${pastDate} days`
        console.log(pastDate)
        return `It has been ${pastDate} since your trip`
    }
}

export { countdown }