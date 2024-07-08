document.addEventListener('DOMContentLoaded', function () {
	const basePrice = 399;
	const discounts = [0, 17, 21, 33];
	const periods = [1, 3, 6, 12];

	const oldPrices = periods.map(period => basePrice * period);
	const newPrices = oldPrices.map(
		(price, index) => (price * (100 - discounts[index])) / 100
	);
	const monthlyPrices = newPrices.map((price, index) =>
		(price / periods[index]).toFixed(2)
	);

	document.querySelectorAll('.basic-packages__item').forEach((item, index) => {
		const newPriceElement = item.querySelector('.basic-packages__new-price');
		const oldPriceElement = item.querySelector('.basic-packages__old-price');
		const discountBadgeElement = item.querySelector(
			'.basic-packages__item-badge'
		);
		const monthlyPriceElement = item.querySelector(
			'.basic-packages__item-discount'
		);

		newPriceElement.textContent = `${Math.round(newPrices[index])} ₽`;
		oldPriceElement.textContent = index === 0 ? '' : `${oldPrices[index]} ₽`;
		discountBadgeElement.textContent =
			index === 0 ? '' : `- ${discounts[index]}%`;
		monthlyPriceElement.textContent =
			index === 0 ? '' : `${Math.round(monthlyPrices[index])} ₽ за месяц`;
	});
});

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 42,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1280: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.additional-packages__button_right',
		prevEl: '.additional-packages__button_left',
	},
});
