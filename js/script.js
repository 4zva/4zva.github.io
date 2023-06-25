const cookies = document.getElementById("cookies");
const cookiesBtn = document.getElementById("cookies__btn");

cookiesBtn.addEventListener("click", function () {
    cookies.style.display = "none";
});




window.addEventListener("DOMContentLoaded", function () {
	"use strict";
	//Получаем табы (переключатели), родительский элемент табов, и контент табов
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContect = document.querySelectorAll(".info-tabcontent");
	//Функция которая скрывает контентные табы
	function hideTabContect(a) {
		for (let i = a; i < tabContect.length; i++) {
			tabContect[i].classList.remove("show");
			tabContect[i].classList.add("hide");
		}
	}
	//Скрываются все кроме 1 элемента
	hideTabContect(1);
	//Функция показа контентных табов
	function ShowTabContect(b) {
		if (tabContect[b].classList.contains("hide")) {
			tabContect[b].classList.remove("hide");
			tabContect[b].classList.add("show");
		}
	}

	//Создаем событие клика на родителя, используя делегирование событий
	info.addEventListener("click", function (event) {
		let target = event.target;

		if (target && target.classList.contains("info-header-tab")) {
			// Связь элементов при совпадении target
			for (let i = 0; i < tab.length; i++) {
				//если совпадают
				if (target == tab[i]) {
					//Скрываем все табы
					hideTabContect(0);
					// удаляем класс активности таба
					tab.forEach((item) => {
						item.classList.remove("active");
					});
					//элементу target(на который кликнули) добавляем активный класс
					target.classList.add("active");

					//Совпадение по нумерации
					ShowTabContect(i);

					break;
				}
			}
		}
	});
});


const filtb = document.querySelectorAll(".cart");


document.querySelector('nav').addEventListener('click', (event)=> {
    if (event.target.tagName !== 'LI') return false;

    let filtc = event.target.dataset["f"];
    filtb.forEach( (elem)=> {
        elem.classList.remove('hide')
        if (!elem.classList.contains(filtc) && filtc != 'all') {
            elem.classList.add('hide');
        };
    })
});


const accordion = () => {
	const btns = document.querySelectorAll(".accordion-head");
	btns.forEach((btn) => {
		btn.addEventListener("click", function () {
			this.classList.toggle("active-style");
			//Следующий элемент
			this.nextElementSibling.classList.toggle("active-content");
			if (this.classList.contains("active-style")) {
				this.nextElementSibling.style.maxHeight =
					this.nextElementSibling.scrollHeight + 50 + "px";
			} else {
				this.nextElementSibling.style.maxHeight = "0px";
			}
		});
	});
};
accordion();




let slideIndex = 1,
		slides = document.querySelectorAll(".sliderNew-item"),
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		dotsWrap = document.querySelector(".sliderNew-dots"),
		dots = document.querySelectorAll(".dot");

	showSlides(slideIndex);
	// Принимала аргумент номер слайда, который нужно показать
	function showSlides(n) {
		// дополнительно делаем проверку чтобы индекс не вышел за пределы
		if (n > slides.length) {
			// Возвращаемся к первому слайду
			slideIndex = 1;
		}
		if (n < 1) {
			// Возвращаемся к последнему слайду
			slideIndex = slides.length;
		}

		slides.forEach((item) => (item.style.display = "none"));
		// for (let i = 0; i < slides.length; i++) {
		//     slides[i].style.display = 'none';
		// }
		dots.forEach((item) => item.classList.remove("dot-active"));

		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].classList.add("dot-active");
	}
	function plusSlides(n) {
		showSlides((slideIndex += n));
	}
	function currentSlide(n) {
		showSlides((slideIndex = n));
	}

	prev.addEventListener("click", function () {
		plusSlides(-1);
	});

	next.addEventListener("click", function () {
		plusSlides(1);
	});
	//Создаем событие клика на родителя, используя делегирование событий
	dotsWrap.addEventListener("click", function (event) {
		// перебираем все dot и узнаем на какую именно кликнули
		for (let i = 0; i < dots.length + 1; i++) {
			// проверяем элемент на соответствие и узнаем номер точки
			if (
				event.target.classList.contains("dot") &&
				event.target == dots[i - 1]
			) {
				currentSlide(i);
			}
		}
	});


	const menuxa = document.querySelector("#menuxa");
	const popup = document.querySelector("#popup");
	// Глубокое клонирование со всем содержимым
	const menu = document.querySelector("#menuh");
	// const body = document.body;
	
	menuxa.addEventListener("click", menuxaHandler);

	function menuxaHandler(e) {
		popup.classList.toggle('open');
		renderPopup();
	}

