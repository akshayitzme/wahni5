const form = document.querySelector('#form')

const handleSubmit = (refer) => {
    let data= {
        name: form.elements['name'].value,
        email: form.elements['email'].value,
        mobile_no: form.elements['phone'].value,
        cost_center: refer
    }
    fetch('https://erp.wahni.com/api/method/wahni.tasks.add_lead', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(async (data) => {
            let formatted = data.message.replace(/['"]+/g, '')
            let regex = /true/g
            if (regex.exec(formatted)) {
                alert('Success')
            } else {
                alert('Failed')
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
