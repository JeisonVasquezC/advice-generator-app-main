const api = axios.create({
    baseURL: 'https://api.adviceslip.com/advice',
    Headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
})

const spanidAdvice = document.querySelector('#idAdvice');
const spanAdvice = document.querySelector('#pAdvice');
const buttonReloand = document.querySelector('#buttonReloand');

const getAdvice = async () => {
    // const res = await fetch('https://api.adviceslip.com/advice')
    // const data = await res.json();
    const { data } = await api();

    const idAdvace = data.slip.id;
    const advice = data.slip.advice;

    spanidAdvice.textContent = idAdvace;
    spanAdvice.textContent = `"${advice}"`;
};

buttonReloand.addEventListener('click', () => {
    getAdvice();
},false);

getAdvice();