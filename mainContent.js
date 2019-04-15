setContent();

function setContent() {
    const mainContent = {
            home: {
                heading: 'Добро пожаловать на сайт, посвящённый моим учебным проектам <span class="fcc">freeCodeCamp</span>',
                content: '<img src="images/freeCodeCamp.png" class="main-image" alt="freeCodeCamp-image">' +
                '<p class="main-text">Я разработал этот сайт в качестве своего первого проекта, а также контейнера для портфолио. ' +
                'Поскольку я лишь в начале пути на <a class="fcc" href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a>, ' +
                'он будет пополняться новыми мини-проектами по мере моего продвижения в обучении.</p>'
            },
            aboutMe: {
                heading: 'Как я стал фронтенд разработчиком...',
                content: '<img src="images/iam1.jpg" class="main-image">' +
                '<p class="main-text">' +
                'Привет! Меня зовут Сергей. Мне <span class="my-age"></span> <span class="age-suffix"></span> и я начинающий ' +
                'фронтенд разработчик. Более десяти лет я работал в сфере строительства инженером по отоплению и вентиляции. ' +
                'Ещё будучи школьником, я мог наблюдать как напротив окна моей комнаты строился новый дом. Строителям ' +
                'приходилось работать как в светлое время суток, так и в тёмное, а также в любую пору года не взирая на дожди, ' +
                'морозы и т.д. Тогда я решил, что ни за что не стану строителем. Но когда я закончил школу и пришло время ' +
                'получать специальность, строители в моей стране были очень востребованы и это была одна из самых развивающихся ' +
                'отраслей в Беларуси. В итоге, я поступил в <abbr title="Минский Государственный Архитектурно-Строительный Колледж">МГАСК</abbr> ' +
                'и получил специальность, которой так боялся в детстве. Для меня это был настоящий серьёзный вызов.' +
                '</p><p class="main-text">' +
                'Получив диплом и специальность, устроился в строительную организацию монтажником систем вентиляции и ' +
                'кондиционирования. В то же врямя нужно было получать высшее образование и я поступил на заочное отделение в ' +
                '<abbr title="Белорусский Национальный Технический Университет">БНТУ</abbr>. Через два года работы я получил ' +
                'должность инженера и дальше развивался в направлении отопления и вентиляции. Примерно в то же время я купил себе ' +
                'мой первый персональный компьютер. С тех пор, он "отнимал" практически всё моё свободное время. Работа по ' +
                'специальности стала доставлять всё меньше удовольствия и я постепенно начал осознавать, что занимаюсь не тем, ' +
                'чем хотел бы. В итоге, мне понадобилось чуть более десяти лет, чтобы принять решение сменить профиль. А закрепить ' +
                'данное решение помог кризис в сфере строительства, связанный с резким сокращением объёма строительства и как ' +
                'следствие - снижение дохода.' +
                '</p><p class="main-text">' +
                'Выбрать новую желаемую специальность не составило никакого труда, т.к. я охотно проводил огромное количество времени ' +
                'с компьютером и это меня не утомляло. Плюс ко всему, сфера IT стремительно развивалась и продолжает развиваться во ' +
                'всём мире, в том числе в Беларуси. Думаю, не стоит рассуждать на тему того, сколько зарабатывают программисты. ' +
                'Здесь и так всё понятно. Рассматрев различные направления в программировании, я выбрал "фронтенд". И вот, этот ' +
                'сайт - моя первая попытка создания собственного pet-проекта. По моей задумке, он должен отражать историю моего ' +
                'обучения, а со временем содержать в себе мой портфолио.' +
                '</p>'
            },
            portfolio: {
                heading: 'Мои проекты:',
                content: '<a href="fccProjects/personalPortfolioWebPage.html" target="_blank" class="projects-subsection fcc-projects">' +
                '<img src="images/fccLogo.jpeg" alt="FreeCodeCamp mini-projects" title="Мини-проекты freeCodeCamp">' +
                '</a><a href="#" class="projects-subsection own-projects"  id="own-projects">' +
                '<img src="images/myLogo.jpg" alt="Own mini-projects" title="Собственные мини-проекты">' +
                '</a><a href="#" class="projects-subsection real-projects">' +
                '<img src="images/realProjects.jpg" alt="Real projects" title="Реальные проекты">' +
                '</a>'
            },
            contacts: {
                heading: 'Контактные данные:',
                content: '<p class="main-text">Со мной можно связаться любым из нижеследующих способов:</p>' +
                '<ul class="call-me">' +
                '<li><a href="tel:+375292635369" class="icon-phone"> <span class="ic-desc">+375 (29) 263-53-69</span></a></li>' +
                '<li><a href="mailto:ipionov13@gmail.com" class="icon-envelop"> <span class="ic-desc"> ipionov13@gmail.com</span></a></li>' +
                '</ul>' +
                '<div class="social-box">' +
                '<a href="https://www.facebook.com/profile.php?id=100005317268811" class="icon-facebook2" target="_blank"></a>' +
                '<a href="https://vk.com/page-777107_28406709" class="icon-vk" target="_blank"></a>' +
                '<a href="https://github.com/Sergey-Ionov13" class="icon-github" target="_blank"></a>' +
                '<a href="https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%B8%D0%BE%D0%BD%D0%BE%D0%B2-9180484b/" class="icon-linkedin" target="_blank">' +
                '</a></div>'
            }
        },

        ownProjectsContent = {
            ownProjects: '<a href="#" class="projects-subsection bootstrap" id="bootstrap">' +
            '<img src="images/bootstrap.jpg" alt="Bootstrap Mini-projects" title="Мини-проекты разработанные в Bootstrap"></a>' +
            '<a href="#" class="projects-subsection js" id="js">' +
            '<img src="images/js.png" alt="JavaScript mini-projects" title="JavaScript мини-проекты"></a>',
            bootstrap: '<div class="bootstrap-container"><a href="ownProjects/ip/index.html" target="_blank" class="projects-subsection ip-project">' +
            '<img src="ownProjects/images/ip.png" alt="IP" title="ИП"></a>' +
            '<a href="ownProjects/photoalbum/index.html" target="_blank" class="projects-subsection photoalbum-project">' +
            '<img src="ownProjects/images/photoalbum.png" alt="My photoalbum" title="Мой фотоальбом"></a></div>',
            js: '<div class="js-container"><a href="ownProjects/currencyMaskedInput/index.html" target="_blank" class="projects-subsection currency-project">' +
            '<img src="ownProjects/images/currencyMaskedInput.png" alt="Currency Masked Input" title="Currency Masked Input">' +
            '</a></div>'
        },

        logoButton = document.querySelector('#logo'),
        navButtonsPanel = document.querySelector('#nav-bar'),
        navButtons = document.querySelectorAll('.bookmarks'),
        mainTag = document.querySelector('main'),
        heading = document.querySelector('.heading'),
        container = document.querySelector('.container');

    mainTag.classList.add('home');
    setContent(heading, mainContent[renameClassInVar(mainTag.getAttribute('class'))].heading);
    setContent(container, mainContent[renameClassInVar(mainTag.getAttribute('class'))].content);
    logoButton.classList.add('active');

    logoButton.addEventListener('click', () => {
        if (!logoButton.classList.contains('active')) {
            navButtons.forEach((i) => {
                i.classList.remove('active');
            });
            logoButton.classList.add('active');
            navButtonsPanel.classList.remove('visible');
            logoButton.classList.remove('visible');
            mainTag.setAttribute('class', '');
            mainTag.classList.add('home');
            setContent(heading, mainContent[renameClassInVar(mainTag.getAttribute('class'))].heading);
            setContent(container, mainContent[renameClassInVar(mainTag.getAttribute('class'))].content);
        }
    });

    navButtonsPanel.addEventListener('click', tabToggle);

    function tabToggle(event) {
        let pressedButton = event.target,
            className = pressedButton.classList[1];
        logoButton.classList.remove('active');
        if (!pressedButton.classList.contains('active')) {
            navButtons.forEach((i) => {
                i.classList.remove('active');
            });
            pressedButton.classList.add('active');
            navButtonsPanel.classList.remove('visible');
            logoButton.classList.remove('visible');
            mainTag.setAttribute('class', '');
            mainTag.classList.add(className);
            setContent(heading, mainContent[renameClassInVar(mainTag.getAttribute('class'))].heading);
            setContent(container, mainContent[renameClassInVar(mainTag.getAttribute('class'))].content);
        }
        if (pressedButton.classList.contains('about-me')) {
            ageCalc();
        }
        if (pressedButton.classList.contains('portfolio')) {
            newContent();
        }
    }

    function ageCalc() {
        let currentDate = new Date;
        const currentYear = currentDate.getFullYear(),
            currentMonth = currentDate.getMonth(),
            currentDay = currentDate.getDate(),
            myAgeSpan = document.querySelector('.my-age'),
            ageSuffixSpan = document.querySelector('.age-suffix');

        let myAge = currentDay >= 6 && currentMonth >= 10 ? currentYear - 1983 : currentYear - 1983 - 1,
            ageSuffix = myAge % 10 === 1 ? 'год' : myAge % 10 > 1 && myAge % 10 < 5 ? 'года' : 'лет';

        myAgeSpan.innerHTML = String(myAge);
        ageSuffixSpan.innerHTML = ageSuffix;
    }

    function newContent() {
        const ownProjectsButton = document.querySelector('#own-projects');
        ownProjectsButton.addEventListener('click', () => {
            controlContent(ownProjectsButton, container);
            const newContainer = document.querySelector('.' + getClassName(ownProjectsButton));
            if (newContainer) {
                newContainer.addEventListener('click', catchClick);
            }

            function catchClick(event) {
                let pressedButton = event.target.parentElement;
                const currentContent = newContainer.lastElementChild;
                if ((pressedButton.getAttribute('id') === 'bootstrap' && currentContent.getAttribute('class') === 'js-container') ||
                    (pressedButton.getAttribute('id') === 'js' && currentContent.getAttribute('class') === 'bootstrap-container')) {
                    currentContent.remove();
                }
                controlContent(pressedButton, newContainer);
            }
        });
    }

    function setContent(container, content) {
        container.innerHTML = content;
    }

    function renameClassInVar(className) {
        return (!(~className.indexOf('-'))) ? className : className.split('-').map((item, i) => {
            return (i === 0) ? item :
                item[0].toUpperCase() + item.slice(1);
        }).join('');
    }

    function controlContent(button, parContainer) {
        const chiContainer = document.querySelector('.' + getClassName(button));
        if (chiContainer) {
            chiContainer.remove();
        } else {
            addElements(parContainer, getClassName(button), getContent(button));
        }
    }

    function addElements(parentElem, className, content) {
        const container = document.createElement('div');
        container.className = className;
        container.innerHTML = content;
        parentElem.appendChild(container);
    }

    function getClassName(button) {
        return button.getAttribute('id') + '-container';
    }

    function getContent(button) {
        return ownProjectsContent[renameClassInVar(button.getAttribute('id'))];
    }
}
