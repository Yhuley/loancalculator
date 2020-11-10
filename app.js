// Calculate results
calculateResults = (event) => {
    // UI Variables
    const loanAmount = document.getElementById('loanAmount')
    const loanInterest = document.getElementById('loanInterest')
    const loanYears = document.getElementById('loanYears')
    const monthlyPayment = document.getElementById('monthlyPayment')
    const totalPayment = document.getElementById('totalPayment')
    const totalInterest = document.getElementById('totalInterest')

    const principal = parseFloat(loanAmount.value)
    const calculatedInterest = parseFloat(loanInterest.value) / 100 / 12
    const calculatedPayments = parseFloat(loanYears.value) * 12

    // Calculate monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthly = (principal * x * calculatedInterest) / (x - 1)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(3)
        totalPayment.value = (monthly * calculatedPayments).toFixed(3)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(3)
    }else {
        showError('Please chek your number')
    }

    event.preventDefault()
}

// Show error
showError = (error) => {
    const errorElement = document.createElement('div')
    // bootstrap class
    errorElement.className = 'alert alert-danger'

    errorElement.appendChild(document.createTextNode(error))

    // get elements
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    card.insertBefore(errorElement, heading)

    setTimeout(hideError, 1200)
}
// Hide error
hideError = () => {
    console.log('sdf')
    document.querySelector('.alert').remove()
}
// Listen for submit
document.querySelector('.loanForm').addEventListener('submit', calculateResults)