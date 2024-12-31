    // Function to validate discount code
    function validateDiscountCode() {
        const code = document.getElementById('discountCode').value;
        const message = document.getElementById('discountMessage');
        if (code === '2025') {
            message.textContent = 'Discount code applied! You will receive 10% off your order.';
        } else {
            message.textContent = 'Invalid discount code. Please try again.';
        }
    }

    // Function to display the order summary
    function displayOrder() {
        let orderSummary = 'Your Order:\n';
        let total = 0;
        order.forEach(item => {
            orderSummary += `${item.name}: ${item.price} RS\n`;
            total += item.price;
        });
        orderSummary += `Total: ${total} RS`;
        alert(orderSummary);
    }
