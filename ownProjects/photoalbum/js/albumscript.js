var divCarousel = $('#carousel'),
  mainImg = $('#mainImg'),
  navbarToggle = $('.navbar-toggle'),
  navbarBtn = $('.navbar-btn'),

  iH = ['Это я в Лошицком парке', 'Я на берегу Немана', 'Снова в Лошицком парке', 'Я на мосту Александра Невского'],
  iT = ['Это фото было сделано в день шестой годовщины нашей с Леной свадьбы.\n' +
    'Мы прогуливались по парку после ресторана. Это один из красивейших парков, что я видел.',
    'В этот день мы приехали в Гродно просто погулять. Это очень красивый город!',
    'Начало весны, вот-вот появятся первые листочки на деревьях и всё вокруг расцветёт.\n' +
    'Ещё немного и здесь стенет сказочно красиво!',
    'Мы только-только переехали в Санкт-Петербург, вышли осмотреться, прогуляться по городу.\n' +
    'Какой же красивый вид открывается отсюда...'],
  martyH = ['Задумался...', '"Да, мне действительно так удобно!"', 'Марти проснулся', 'Когтистая лапа'],
  martyT = ['Как будто бы он сам захотел, чтобы его сфотографировали и разместили это фото в Instagram!',
    'Марти любит лежать на подоконнике (особенно на подушке!), обычно он там спит, но что-то\n' +
    'его отвлекло! Возможно, он увидел что-нибудь вкусненькое... ',
    'Иногда он "зарывается" под одеяло поспать. А когда выспится, может высунуть нос и\n' +
    'немного полежать.',
    'Судя по всему, ему приснилась какая-то мышь, или птичка, на которую он охотится.'],
  foodH = ['Стейк из говядины', 'Пицца с морепродуктами', 'Шашлыки', 'Стейки на углях'],
  foodT = ['Очень вкусно такое мяско с салатиком из свежих овощей. Хлеб здесь наверное лишний! )))',
    'По идее, мидии должны были быть в открытых раковинах - так выглядело бы эффектнее!\n' +
    'Но на вкус и так хорошо. На мой взгляд - это лучшая начинка для пиццы.',
    'Отпуск, хорошая летняя погода, ну как тут не выехать на шашлыки?',
    'Жаль только, что у меня нат специальной решётки-гриль,\n' +
    'но и так получилось очень вкусно.'],
  hrodnoH = ['Улица Элизы Ожешко', 'Парк Жилибера', 'Каложская церковь', 'Живописное место'],
  hrodnoT = ['Очень красивая старая улица. Когда я попал туда впервые, у меня появилось ощущение,\n' +
    'что я нахожусь не Беларуси, а в каком-то городке из западной Европы.',
    'Этот парк находится в центре города. Он небольшой по размерам, но учень уютный\n' +
    'и красивый. Это отличное место для отдыха на свежем воздухе в хорошую погоду.',
    'Я с детства мечтал там побывать и увидеть её вживую. Она была построена в XII веке!',
    'Это вид на реку Нёман со стороны входа в Коложскую церковь. Не оторвать взгляд!'],
  parkH = ['Самый красивый парк в Минске!', 'Так и хочется там посидеть', 'Лучи солнца сквозь цветную дымку', 'Площадь часов'],
  parkT = ['Прогуливаясь на велосипеде, я не мог не заехать в это место.',
    'Отличная погода, прекрасный пейзаж, пустая скамья... Может это просто понедельник?',
    'А это в парке была чья-то свадебная фотосессия, во время которой пустили\n' +
    'разноцветную дымку. Хороший получился кадр.',
    'Это место отмечено на карте парка как "Площадь часов". Но других часов там нет.'],
  spbH = ['Большой проспект Петроградской стороны', 'Театр им. Андрея Миронова', 'Лахта-центр', 'Екатерининский дворец'],
  spbT = ['В этот день у меня сломалась машина. Я бродил по улицам в поисках отвёртки \n' +
    'и увидев такой вид, решил добавить его себе в фотоархив.',
    'В Санкт-Петербурге несчётное количество красивых мест. И это здание - одно из них.',
    'Это вид на строящийся Лахта-центр из набережной Крестовского острова.',
    'Организация, в которой я работал в Санкт-Петербурге организовала для клиентов\n' +
    'экскурсию в Екатерининский дворец, который находится в г. Пушкин.'],
  blH = ['Экологическая тропа "Голубые озёра"', 'А вживую это место выглядит ещё лучше!', 'Мёртвое озеро', 'Игра света на воде'],
  blT = ['Это одно из красивеёших мест Беларуси. Эта тропа ведёт к озёрам, спрятавшимся\n' +
    'в глубине лесного массива.',
    'По пути к озёрам можно сесть и передохнуть в беседке.',
    'Небольшое озерцо посреди леса выглялит просто потрясающе! Жаль, что\n' +
    'фотография не в состоянии это всё передать.',
    'Такую красоту могла создать только природа!'];

$('#responsive-menu li a[class *= "closeNav"]').click(function () {
  var mql = window.matchMedia('all and (max-width: 767px)');
  if (mql.matches) {
    navbarToggle.click();
  }

    $('#responsive-menu li a[class *= "active"]').removeClass('active');
    $(this).addClass('active');
    var currentButton = $(this).attr('class');

    if (currentButton == 'main-page closeNav' + ' active') {
        divCarousel.css({'display' : 'none'});
        navbarBtn.css({'display' : 'none'});
        mainImg.fadeIn(1000);
    } else {
        mainImg.css({'display' : 'none'});
        var caruselImages = $('.carousel-inner');

        if (currentButton == 'i-am closeNav' + ' active') {
            for (var i = 1; i <5; i++) {
                caruselImages.find('.box' + i + ' img').attr('src', 'photo/iam/i' + i + '.jpg');
                caruselImages.find('.box' + i + ' .carousel-caption').html('<h4>' + iH[i-1] + '</h4><p>' + iT[i-1] + '</p>');
            }
            divCarousel.fadeIn(1000);
            navbarBtn.fadeIn(1000);
        } else if (currentButton == 'marty closeNav' + ' active') {
            for (var i = 1; i <5; i++) {
                caruselImages.find('.box' + i + ' img').attr('src', 'photo/marty/m' + i + '.jpg');
                caruselImages.find('.box' + i + ' .carousel-caption').html('<h4>' + martyH[i-1] + '</h4><p>' + martyT[i-1] + '</p>');
            }
            divCarousel.fadeIn(1000);
            navbarBtn.fadeIn(1000);
        } else if (currentButton == 'food closeNav' + ' active') {
            for (var i = 1; i <5; i++) {
                caruselImages.find('.box' + i + ' img').attr('src', 'photo/food/f' + i + '.jpg');
                caruselImages.find('.box' + i + ' .carousel-caption').html('<h4>' + foodH[i-1] + '</h4><p>' + foodT[i-1] + '</p>');
            }
            divCarousel.fadeIn(1000);
            navbarBtn.fadeIn(1000);
        } else if (currentButton == 'hrodno closeNav' + ' active') {
            for (var i = 1; i <5; i++) {
                caruselImages.find('.box' + i + ' img').attr('src', 'photo/places/hr' + i + '.jpg');
                caruselImages.find('.box' + i + ' .carousel-caption').html('<h4>' + hrodnoH[i-1] + '</h4><p>' + hrodnoT[i-1] + '</p>');
            }
            divCarousel.fadeIn(1000);
            navbarBtn.fadeIn(1000);
        } else if (currentButton == 'park closeNav' + ' active') {
            for (var i = 1; i <5; i++) {
                caruselImages.find('.box' + i + ' img').attr('src', 'photo/places/park' + i + '.jpg');
                caruselImages.find('.box' + i + ' .carousel-caption').html('<h4>' + parkH[i-1] + '</h4><p>' + parkT[i-1] + '</p>');
            }
            divCarousel.fadeIn(1000);
            navbarBtn.fadeIn(1000);
        } else if (currentButton == 'spb closeNav' + ' active') {
            for (var i = 1; i <5; i++) {
                caruselImages.find('.box' + i + ' img').attr('src', 'photo/places/spb' + i + '.jpg');
                caruselImages.find('.box' + i + ' .carousel-caption').html('<h4>' + spbH[i-1] + '</h4><p>' + spbT[i-1] + '</p>');
            }
            divCarousel.fadeIn(1000);
            navbarBtn.fadeIn(1000);
        } else if (currentButton == 'blue-lakes closeNav' + ' active') {
            for (var i = 1; i <5; i++) {
                caruselImages.find('.box' + i + ' img').attr('src', 'photo/places/bl' + i + '.jpg');
                caruselImages.find('.box' + i + ' .carousel-caption').html('<h4>' + blH[i-1] + '</h4><p>' + blT[i-1] + '</p>');
            }
            divCarousel.fadeIn(1000);
            navbarBtn.fadeIn(1000);
        }
    }
});
