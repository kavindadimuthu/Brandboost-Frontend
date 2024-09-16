document.addEventListener('DOMContentLoaded', function () {
    function typeText(paragraph, text, speed) {
        let index = 0;
        paragraph.innerHTML = ''; // Clear paragraph content
        const interval = setInterval(() => {
            paragraph.innerHTML += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, speed);
    }

    const paragraph1 = document.querySelector('.description .container2 .p1');
    const text1 = paragraph1.innerHTML;
    const paragraph2 = document.querySelector('.description .container2 .p2');
    const text2 = paragraph2.innerHTML;
    
    typeText(paragraph1, text1, 10);
    typeText(paragraph2, text2, 10);
});
