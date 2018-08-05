'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var FIRST_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var makeWizardsObjects = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    var wizardObject = {
      name: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)] + ' ' + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
      coatColor: COATCOLORS[Math.floor(Math.random() * COATCOLORS.length)],
      eyesColor: EYESCOLORS[Math.floor(Math.random() * EYESCOLORS.length)]
    };
    wizards.push(wizardObject);
  }
  return wizards;
};

var wizardsArray = makeWizardsObjects();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardsArray.length; i++) {
  fragment.appendChild(renderWizard(wizardsArray[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;


  window.dialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.dialog.querySelector('.setup-close');
  var userName = document.querySelector('.setup-user-name');
  var submit = window.dialog.querySelector('.setup-submit');
  var coatWizard = window.dialog.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var eyesWizard = window.dialog.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var fireBall = window.dialog.querySelector('.setup-fireball-wrap');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.dialog.style.top = 80 + 'px';
    window.dialog.style.left = 50 + '%';
    window.dialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.dialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  userName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  userName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });


  submit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      document.forms.wizardForm.submit();

    }
  });

  coatWizard.addEventListener('click', function () {
    coatWizard.style.fill = window.setup.COATCOLORS[Math.floor(Math.random() * window.setup.COATCOLORS.length)];
  });
  eyesWizard.addEventListener('click', function () {
    eyesWizard.style.fill = window.setup.EYESCOLORS[Math.floor(Math.random() * window.setup.EYESCOLORS.length)];
  });

  fireBall.addEventListener('click', function () {
    fireBall.style.backgroundColor = window.setup.EYESCOLORS[Math.floor(Math.random() * window.setup.EYESCOLORS.length)];
  });

})();
