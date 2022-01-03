 let allTours = [
	 {link: ' ', linkName: ' '},
	 {link: ' ', linkName: ' '},
	 {link: ' ', linkName: ' '},
	 {link: ' ', linkName: ' '},
	 {link: ' ', linkName: ' '},
	 {link: ' ', linkName: ' '},
	 {link: ' ', linkName: ' '},
	 {link: 'https://novipovorot.pp.ua/page-balloon-festival.html', linkName: 'Фестиваль Воздушных Шаров'},
	 {link: 'https://novipovorot.pp.ua/page-Svyatogorsk-and-Soledar.html', linkName: 'Святогорск И Соледар'},
	 {link: 'https://novipovorot.pp.ua/page-Six-Days-in-the-Carpathians.html', linkName: '6 Дней В Карпатах'},
	 {link: 'https://novipovorot.pp.ua/page-Lviv-for-weekend.html', linkName: 'Львов На Выходные'},
	 {link: 'https://novipovorot.pp.ua/page-wine.html', linkName: 'Вино'},
	 {link: 'https://novipovorot.pp.ua/page-yavorovskaya-niagara.html', linkName: 'Яворовская Ниагара'},
	 {link: 'https://novipovorot.pp.ua/page-Turkey.html', linkName: 'Турция'},
	 {link: 'https://novipovorot.pp.ua/page-Karpati.html', linkName: 'Карпаты'},
	 {link: 'https://novipovorot.pp.ua/page-Kharkov.html', linkName: 'Хлопковые Горы Харькова'},
	 {link: 'https://novipovorot.pp.ua/page-Georgia.html', linkName: 'Грузия'},
	 {link: 'https://novipovorot.pp.ua/page-cofe-Isla.html', linkName: '50 Оттенков Кофе Isla'},
	 {link: 'https://novipovorot.pp.ua/page-Stambul.html', linkName: 'Стамбул - Столица Тюльпанов'},
	 {link: 'https://novipovorot.pp.ua/page-lions-and-horses.html', linkName: 'Львята И Лошадки'},
	 {link: 'https://novipovorot.pp.ua/page-Dzharylgach.html', linkName: 'Джарылгач - Украинские Мальдивы'},
	 {link: 'https://novipovorot.pp.ua/page-TicToc-pati.html', linkName: 'Tik Tok Pati'},
	 {link: 'https://novipovorot.pp.ua/page-gold-mines.html', linkName: 'Золотые Прииски Закарпатья'},
	 {link: 'https://novipovorot.pp.ua/page-eight-march.html', linkName: 'Букет К 8 Марта'},
	 {link: 'https://novipovorot.pp.ua/page-Odessa-on-march.html', linkName: 'Одесса'},
	 {link: 'https://novipovorot.pp.ua/page-LOL.html', linkName: 'ЛОЛ'},
	 {link: 'https://novipovorot.pp.ua/page-Limonariy.html', linkName: 'Лимонарий'}
];
		
 for(var i = 0; i < allTours.length; i++) {
     document.write(
       '<a class="dropdown-item" href="' + allTours[i].link + '">' + allTours[i].linkName + '</a>'
     );
}
