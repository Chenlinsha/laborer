const user = document.querySelector('.user')
const psw = document.querySelector('.psw')
const token = localStorage.getItem("token")
document.querySelector('.login')['onclick'] = x => {
    const input = {
        username: user.value,
        password: psw.value
    }
    fetch('http://anonym.ink:8000/homework/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    }).then((res) => res.json())
        .then(res => localStorage.setItem("token", res.data))
}

if (token) {
    fetch('http://anonym.ink:8000/homework/auth/next_level', {
        method: 'GET',
        headers: {
            'Authorization': `BEARER ${token}`
        }
    }).then((res) => res.text())
        .then((res) => console.log(res))
}