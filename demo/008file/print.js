//
// Печать данных грида и пивота
//

// Использовать код из Экселя
// Функция печати
// Можно будет переделать как метод класса действия или режима
function gridPrint() {
	var s = ''; // Переменная для печати
	s += '<h2>'+page.pagename+'</h2>';
	s += '<p>'+dc.accuracy.ixdata[page.accuracyid].accuracyname + '</p>';

	if (page.modeid == 'grid') {
        // Для обыкновенной таблицы
		s += '<table>';
		s += '<thead>';
		_.forEach(grid.columns, function(col) {
			s += '<th>'+col.name+'</th>';
		});

		s += '<tbody>';
		_.forEach(grid.data, function(d) {
			s += '<tr>';
			_.forEach(grid.columns, function(col) {
				s += '<td';

                if(col.id == dict.identcolumn) {
                    // Если отступы
                    if(dict.levelcolumn && d[dict.levelcolumn]) s += " style ='padding-left:"+(8+parseInt(d[dict.levelcolumn].toString())*30)+"px;' ";
                };

				s += '>';
				if(col.kindid == 'money') s+=formatMoney(d[col.id]);
				else s += d[col.id];
				s += '</td>'; // Добавить форматированный вывод цифр
			});
			s += '</tr>';
		});

		s += '</table>';		

	} else if(page.modeid == 'pivot') {
        // Для пивота
		s += '<table class="table table-bordered table-stripped">';
		s += '<tbody>';
		_.forEach(pivot.data, function(d,ri) {
			s += '<tr>';
			_.forEach(pivot.data[0], function(col,ci) {
				if(ri == 0 || ci == 0) s += '<th style="text-align:left">'+d[ci]+'</th>'; 
                else s += '<td style="text-align:right">' + formatMoney(d[ci]) + '</td>';
			});
			s += '</tr>';
		});
		s += '</table>';
	};
	
  	var disp_setting="toolbar=yes,location=no,directories=yes,menubar=yes,"; 
    	disp_setting+="scrollbars=yes,width=650, height=600, left=100, top=25"; 
  
  	var docprint=window.open("","",disp_setting); 
   	docprint.document.open(); 
   	docprint.document.write('<html><head><title>'+page.name+'</title>'); 
   	docprint.document.write('<link rel="stylesheet" href="/lib/bootstrap/css/bootstrap.css">');
   	docprint.document.write('<link rel="stylesheet" href="/lib/bootstrap/css/bootstrap-theme.css">');

   	docprint.document.write('</head><body onLoad="self.print()">');          
   	docprint.document.write(s);          
   	docprint.document.write('</body></html>'); 
   	docprint.document.close(); 
   	docprint.focus(); 

}
