 let allTours = [
		{link: 'https://novipovorot.pp.ua/page-Dzharylgach.html', linkName: '1Джарылгач - Украинские Мальдивы'}
];
		
 for(var i = 0; i < allTours.length; i++) {
     document.write(
       '<a class="dropdown-item" href="' + allTours[i].link + '">' + allTours[i].linkName + '</a>'
     );
}
