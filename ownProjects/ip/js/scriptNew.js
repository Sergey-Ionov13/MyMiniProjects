/* Расчёт стоимости */

//Балансировка
/*const buttonB = $('.bal-calculate'),
  trv = $('#thermostaticValve'),
  sbv = $('#staticBV'),
  dbv = $('#dynamicBV'),
  resultText = $('.sum'),
  small = $('.small');*/

/*buttonB.click(function () {
    const trvVal = trv.val(),
      sbvVal = sbv.val(),
      dbvVal = dbv.val(),
      result = +trvVal * 2 + +sbvVal * 3 + +dbvVal * 5;

    if (isNaN(result)){
        resultText.css('color', '#f44').text('Вы ввели некорректные данные!');
        small.text('');
    } else {
        resultText.css('color', '#49f').text(result);
        small.text('бел. руб.');
    }
});*/

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

    if (isNaN(mediumResult)){
        resultText.css('color', '#f44').text('Вы ввели некорректные данные!');
        small.text('');
    } else {
        if (press.is(':checked') && !wash.is(':checked')) {
            resultText.css('color', '#49f').text(mediumResult * 0.4);
            small.text('бел. руб.');
        } else if (!press.is(':checked') && wash.is(':checked')) {
            resultText.css('color', '#49f').text(mediumResult * 0.6);
            small.text('бел. руб.');
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

    if (heating.is(':checked')) {
        result *= 1.5;
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
    const result = +square.val() * 0.2;

    if (isNaN(result)){
        resultText.css('color', '#f44').text('Вы ввели некорректные данные!');
        small.text('');
    } else {
        resultText.css('color', '#49f').text(result);
        small.text('бел. руб.');
    }
});




const calcButton = $('.calculate'),
  form1 = $('#form1'),
  form2 = $('#form2'),
  form3 = $('#form3'),
  resultText = $('.sum'),
  small = $('.small');

calcButton.click(function () {
  const val1 = form1.val(),
    val2 = form2.val(),
    val3 = form3.val(),
    result = +val1 * 2 + +val2 * 3 + +val3 * 5;

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
  washingMain = $('.washing-main'),
  computationMain = $('.computation-main'),
  detailingMain = $('.detailing-main'),
  licenseMain = $('.license-main'),
  costPanel = $('.cost-panel'),
  navbarToggle = $('.navbar-toggle'),
  calculator = $('.allForms'),

  main = {
    main: mainMain,
    balancing: balancingMain,
    washing: washingMain,
    hydroCalc: computationMain,
    detailing: detailingMain,
    license: licenseMain
};
/*
const noSmart = $('.col-md-8.description-text');
const noSmart1 = $('.col-md-4.photo-wrapper');
*/


navbarButtons.click(function () {
    const mql = window.matchMedia('all and (max-width: 767px)');
    if (mql.matches) {
        navbarToggle.click();
    }
    
    let currentButtonClass = $(this).attr('class');
    console.log(currentButtonClass);
    console.log(currentButtonClass);

    if (!~currentButtonClass.indexOf('active')) {
        navbarButtons.removeClass('active');
        $(this).addClass('active');
        currentButtonClass += ' active';
        resultText.text('');
        small.text('');

        for (let key in main) {
            main[key].hide();
        }
        main[searchPressedButton(currentButtonClass)].show();
        if (searchPressedButton(currentButtonClass) === 'main' || searchPressedButton(currentButtonClass) === 'license') {
            costPanel.hide();
        } else {
            costPanel.show();
        }
        /*if (searchPressedButton(currentButtonClass) === 'balancing') {
        }*/
    }

    function searchPressedButton(currentButtonClass) {
      return (currentButtonClass === 'main-but active') ? 'main' :
        (currentButtonClass === 'bal active') ? 'balancing' :
          (currentButtonClass === 'wap active') ? 'washing' :
            (currentButtonClass === 'hid active') ? 'hydroCalc' :
              (currentButtonClass === 'det active') ? 'detailing' : 'license';
    }
});
