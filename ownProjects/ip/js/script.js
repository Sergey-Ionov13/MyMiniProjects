/* Расчёт стоимости */

const inputFields = document.querySelectorAll('.userInput');
inputFields.forEach( (el) => el.addEventListener('input', () => {
  const inputValue = el['value'];
  if (inputValue) el['value'] = validMask(inputValue);
}));

function validMask(inputValue) {
    return ~inputValue.search(/\D/) ? restoreNumber(inputValue) : inputValue;
}
function restoreNumber(inputValue) {
  return ~inputValue.search(/\d/) ? inputValue.match(/\d+/)[0] : '';
}

let balResult = '',
  wpResult = '',
  hydResult = '',
  detResult = '';

//Балансировка
const buttonB = $('.bal-calculate'),
  trv = $('#thermostaticValve'),
  sbv = $('#staticBV'),
  dbv = $('#dynamicBV'),
  resultText = $('.sum'),
  small = $('.small');

buttonB.click(function () {
    const trvVal = trv.val(),
      sbvVal = sbv.val(),
      dbvVal = dbv.val(),
      result = +trvVal * 5 + +sbvVal * 15 + +dbvVal * 20;
      balResult = result;

    if (isNaN(result)){
        resultText.css('color', '#f44').text('Вы ввели некорректные данные!');
        small.text('');
    } else {
        resultText.css('color', '#49f').text(result);
        small.text('бел. руб.');
    }
});

//Опрессовка и промывка
const buttonW = $('.wash-press-calculate'),
  radForms = $('.radiators'),
  rad = $('#radiator'),
  press = $('#press'),
  wash = $('#wash'),
  checkboxes = $('input[type="checkbox"]');

checkboxes.click(function () {
    if (press.is(':checked') || wash.is(':checked')) {
        radForms.show();
    } else {
        radForms.hide();
    }
});

buttonW.click(function () {
    const radCount = rad.val(),
      mediumResult = +radCount * 10;
      wpResult = mediumResult;

    if (isNaN(mediumResult)){
        resultText.css('color', '#f44').text('Вы ввели некорректные данные!');
        small.text('');
    } else {
        if (press.is(':checked') && !wash.is(':checked')) {
            resultText.css('color', '#49f').text(mediumResult * 0.4);
            small.text('бел. руб.');
            wpResult = mediumResult * 0.4;
        } else if (!press.is(':checked') && wash.is(':checked')) {
            resultText.css('color', '#49f').text(mediumResult * 0.6);
            small.text('бел. руб.');
            wpResult = mediumResult * 0.6;
        } else {
            resultText.css('color', '#49f').text(mediumResult);
            small.text('бел. руб.');
        }
    }
});

//Гидравлический расчёт
const buttonC = $('.comp-calculate'),
  area = $('#area'),
  heating = $('#heating');

buttonC.click(function () {
    let result = +area.val();
    hydResult = result;

    if (heating.is(':checked')) {
        result *= 1.5;
        hydResult *= 1.5;
    }

    if (isNaN(result)){
        resultText.css('color', '#f44').text('Вы ввели некорректные данные!');
        small.text('');
    } else {
        resultText.css('color', '#49f').text(result);
        small.text('бел. руб.');
    }
});

//Деталировка
const buttonD = $('.detail-calculate'),
  square = $('#square');

buttonD.click(function () {
    const result = +square.val();
    detResult = result;

    if (isNaN(result)){
        resultText.css('color', '#f44').text('Вы ввели некорректные данные!');
        small.text('');
    } else {
        resultText.css('color', '#49f').text(result);
        small.text('бел. руб.');
    }
});



/*
Анимация навигационной панели, отображение элементов главного окна и формы расчёта стоимости
*/

const navbarButtons = $('.nav > li'),
  mainMain = $('.main-main'),
  balancingMain = $('.balancing-main'),
  balancingCalculate = $('.balancing-calculate'),
  washingMain = $('.washing-main'),
  washingCalculate = $('.washing-calculate'),
  computationMain = $('.computation-main'),
  computationCalculate = $('.computation-calculate'),
  detailingMain = $('.detailing-main'),
  detailingCalculate = $('.detailing-calculate'),
  licenseMain = $('.license-main'),
  costPanel = $('.cost-panel'),
  navbarToggle = $('.navbar-toggle');

navbarButtons.click(function () {
    navbarButtons.removeClass('active');
    $(this).addClass('active');

    const mql = window.matchMedia('all and (max-width: 767px)');
    if (mql.matches) {
        navbarToggle.click();
    }

    const currentButton = $(this).attr('class');

    if (currentButton == 'main-but' + ' active') {
        mainMain.show();
        balancingMain.hide();
        balancingCalculate.hide();
        washingMain.hide();
        washingCalculate.hide();
        computationMain.hide();
        computationCalculate.hide();
        detailingMain.hide();
        detailingCalculate.hide();
        licenseMain.hide();
        costPanel.hide();
    } else if (currentButton == 'bal' + ' active') {
        mainMain.hide();
        balancingMain.show();
        balancingCalculate.show();
        washingMain.hide();
        washingCalculate.hide();
        computationMain.hide();
        computationCalculate.hide();
        detailingMain.hide();
        detailingCalculate.hide();
        licenseMain.hide();
        costPanel.show();
      if(balResult) {
        resultText.text(balResult);
        small.text('бел. руб.');
      } else {
        resultText.text('');
        small.text('');
      }
    } else if (currentButton == 'wap' + ' active') {
        mainMain.hide();
        balancingMain.hide();
        balancingCalculate.hide();
        washingMain.show();
        washingCalculate.show();
        computationMain.hide();
        computationCalculate.hide();
        detailingMain.hide();
        detailingCalculate.hide();
        licenseMain.hide();
        costPanel.show();
      if(wpResult) {
        resultText.text(wpResult);
        small.text('бел. руб.');
      } else {
        resultText.text('');
        small.text('');
      }
    } else if (currentButton == 'hid' + ' active') {
        mainMain.hide();
        balancingMain.hide();
        balancingCalculate.hide();
        washingMain.hide();
        washingCalculate.hide();
        computationMain.show();
        computationCalculate.show();
        detailingMain.hide();
        detailingCalculate.hide();
        licenseMain.hide();
        costPanel.show();
      if(hydResult) {
        resultText.text(hydResult);
        small.text('бел. руб.');
      } else {
        resultText.text('');
        small.text('');
      }
    } else if (currentButton == 'det' + ' active') {
        mainMain.hide();
        balancingMain.hide();
        balancingCalculate.hide();
        washingMain.hide();
        washingCalculate.hide();
        computationMain.hide();
        computationCalculate.hide();
        detailingMain.show();
        detailingCalculate.show();
        licenseMain.hide();
        costPanel.show();
      if(detResult) {
        resultText.text(detResult);
        small.text('бел. руб.');
      } else {
        resultText.text('');
        small.text('');
      }
    } else if (currentButton == 'lic' + ' active') {
        mainMain.hide();
        balancingMain.hide();
        balancingCalculate.hide();
        washingMain.hide();
        washingCalculate.hide();
        computationMain.hide();
        computationCalculate.hide();
        detailingMain.hide();
        detailingCalculate.hide();
        licenseMain.show();
        costPanel.hide();
    }
});
