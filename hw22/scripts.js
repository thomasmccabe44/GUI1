let colors = ['yellow', 'pink', 'purple', 'lightblue', 'hotpink', 'teal', 'lavender', 'white', 'cyan', 'aqua', 'chartreuse', 'fuschia', 'tomato', 'aquamarine', 'lightgreen', 'gainsboro', 'aliceblue', 'orchid', 'deeppink', 'blueviolet', 'salmon', 'chocolate', 'cornflowerblue', 'crimson', 'skyblue', 'ghostwhite', 'honeydew', 'indigo', 'lime', 'paleturquoise', 'plum', 'thistle', 'springgreen', 'peachpuff', 'gold', 'floralwhite', 'transparent', 'turquoise', 'orange'],
    stars = Math.floor(Math.random() * 200);

const generateStars = () => {
    for (let index = 0; index < stars; index++) {
        let star = document.createElement('div');

        star.style.color = colors[Math.floor(Math.random() * colors.length)];
        star.className = `fas fa fa-${Math.floor(Math.random() * 6)}x fa-star`;

        document.querySelector('.galaxy').append(star);
    }
};


generateStars();
