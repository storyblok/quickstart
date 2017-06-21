// pretty print on load
window.onload = () => {
  window.window.currentStory = gup('_storyblok', window.location.href) + '-'
  initBtnToggle()
  initPrettyPrint()
  initSlugify()
  initTrackButton()
  initStartTourButtons()
  initLiveChat()
  initShowButton()

  initFirstAPICall()
  initSecondAPICall()

  initRenderingService()
  initTeaserState()

  initApiSdkBoilerplates()
  initAPIHowtos()

  checkSteps()
}

var hasClass = function(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function initBtnToggle() {
  var toggle = document.querySelectorAll('.step__toggle-btn')
  for (var i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', (event) => {
      var step = event.currentTarget.closest('.step')

      if (hasClass(step, 'step--toggle')) {
        step.classList.remove('step--toggle')
      } else {
        step.classList.add('step--toggle')
      }
    })
  }
}

function initTrackButton() {
  var trackButtons = document.querySelectorAll('[data-track]')
  for (var index = 0, max = trackButtons.length; index < max; index++) {
    var trackButton = trackButtons[index];
    trackButton.addEventListener('click', (event) => {
      var toTrack = trackButton.getAttribute('data-track')
      ga('send', 'event', 'Button', toTrack, 'quickstart-v2');
    })
  }
}

function initShowButton() {
  var showButtons = document.querySelectorAll('[data-show]')
  for (var index = 0, max = showButtons.length; index < max; index++) {
    var showButton = showButtons[index];
    showButton.addEventListener('click', (event) => {
      var toShowId = showButton.getAttribute('data-show')
      showButton.classList.add('quickstart--hidden')
      var element = document.querySelector(toShowId)
      element.classList.remove('quickstart--hidden')
    })
  }
}

function initLiveChat() {
  var buttons = document.querySelectorAll('[data-trigger-livechat]')
  for (var index = 0, max = buttons.length; index < max; index++) {
    var button = buttons[index];
    if (button) {
      button.addEventListener('click', () => {
        if (window.storyblok) {
          window.storyblok.openLiveChat()
        }
      })
    }
  }
}

function initStartTourButtons() {
  var startTourButtons = document.querySelector('[data-start-tour]')
  if (startTourButtons) {
    startTourButtons.addEventListener('click', () => {
      if (window.storyblok) {
        window.storyblok.startTour()
      }
    })
  }
}

function initFirstAPICall() {
  var button = document.querySelector('[data-first-api]')
  if (button) {
    button.addEventListener('click', () => {
      localStorage.setItem(window.currentStory + 'step-first-api', 'true');
      doFirstAPICall()
    })
  }
}

function doFirstAPICall() {
  var toShow = document.querySelector('#first-api')
  if (toShow) {
    toShow.classList.remove('quickstart--hidden')
    var button = document.querySelector('[data-first-api]')
    if (button) {
      var step = findAncestor(button, 'step')
      step.classList.add('step--active')
    }
  }
}

function initSecondAPICall() {
  var button = document.querySelector('[data-second-api]')
  if (button) {
    button.addEventListener('click', () => {
      localStorage.setItem(window.currentStory + 'step-second-api', 'true');
      doSecondAPICall()
    })
  }
}
function doSecondAPICall() {
  var toShow = document.querySelector('#second-api')
  if (toShow) {
    toShow.classList.remove('quickstart--hidden')
    var button = document.querySelector('[data-second-api]')
    if (button) {
      var step = findAncestor(button, 'step')
      step.classList.add('step--active')
    }
  }
}

function initRenderingService() {
  var button = document.querySelector('[data-rendering-service]')
  if (!!button) {
    button.addEventListener('click', () => {
      localStorage.setItem(window.currentStory + 'step-rendering-service', 'true');
      localStorage.setItem(window.currentStory + 'step-api-sdk-boilerplates', 'false');

      window.scrollIntoViewPolyfill();
      setTimeout(() => {
        document.querySelector('.step__5').scrollIntoView({ behavior: 'smooth' });
      }, 0)

      doRenderingService()
    })
  }
}
function doRenderingService() {
  var toShow = document.querySelector('#rendering-service')
  if (!!toShow) {
    toShow.classList.add('quickstart--show')
    document.querySelector('#api-sdk-boilerplates').classList.remove('quickstart--show')

    var step = findAncestor(document.querySelector('[data-rendering-service]'), 'step')
    step.classList.add('step--active')
  }
}

function initApiSdkBoilerplates() {
  var button = document.querySelector('[data-api-sdk-boilerplates]')
  if (!!button) {
    button.addEventListener('click', () => {
      localStorage.setItem(window.currentStory + 'step-rendering-service', 'false');
      localStorage.setItem(window.currentStory + 'step-api-sdk-boilerplates', 'true');

      window.scrollIntoViewPolyfill();
      setTimeout(() => {
        document.querySelector('.step__5').scrollIntoView({ behavior: 'smooth' });
      }, 0);
      doApiSdkBoilerplates()
    })
  }
}
function doApiSdkBoilerplates() {
  var toShow = document.querySelector('#api-sdk-boilerplates')
  if (!!toShow) {
    toShow.classList.add('quickstart--show')
    document.querySelector('#rendering-service').classList.remove('quickstart--show')

    var step = findAncestor(document.querySelector('[data-api-sdk-boilerplates]'), 'step')
    step.classList.add('step--active')
  }
}

function initTeaserState() {
  var teaser = document.querySelector('.quickstart__teaser')
  if (!!teaser) {
    document.querySelector('.step--teaser-creation').classList.add('step--active')
  }
}

function checkSteps() {
  if (localStorage.getItem(window.currentStory + 'step-first-api') == 'true') {
    doFirstAPICall()
  }
  if (localStorage.getItem(window.currentStory + 'step-second-api') == 'true') {
    doSecondAPICall()
  }
  if (localStorage.getItem(window.currentStory + 'step-rendering-service') == 'true') {
    doRenderingService()
  }
  if (localStorage.getItem(window.currentStory + 'step-api-sdk-boilerplates') == 'true') {
    doApiSdkBoilerplates()
  }
  if (localStorage.getItem(window.currentStory + 'step-api-sdk-boilerplates-got-it') == 'true') {
    doApiSdkBoilerplateGotIt()
  }
}

function initAPIHowtos() {
  var qs = document.querySelectorAll('.quickstart__lang')
  var ct = document.querySelector('.step--choose-tech')

  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener('click', function (e) {
      var qtabs = ct.querySelectorAll('.quickstart__t')

      for (var j = 0; j < qtabs.length; j++) {
        qtabs[j].style.display = 'none'
      }

      for (var x = 0; x < qs.length; x++) {
        qs[x].classList = 'quickstart__lang'
      }

      this.classList = 'quickstart__lang quickstart__lang--active'
      console.log(document.querySelector('[data-tab=' + e.currentTarget.getAttribute('data-lang') + ']'))
      document.querySelector('[data-tab=' + e.currentTarget.getAttribute('data-lang') + ']').style.display = 'block'
    })
  }
}

function initPrettyPrint() {
  var toPrettyPrint = document.querySelectorAll('[data-pretty]')
  for (var index = 0, max = toPrettyPrint.length; index < max; index++) {
    var element = toPrettyPrint[index]
    var json = JSON.parse(element.innerHTML)
    clearStory(json)

    if (!!element.getAttribute('data-skip-body')) {
      json.content.body = []
      json = JSON.stringify(json, null, 2);
    } else {
      json = JSON.stringify(json, null, 2);
      json = json.replace('"body": [', '"body": [<em>')
      json = json.replace(`],
    "component": "root"`, `</em>],
    "component": "root"`)
    }

    json = json.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    json = json.replace('&lt;em&gt;', '<em>').replace('&lt;\/em&gt;', '</em>')
    element.innerHTML = json
  }
}

function initSlugify() {
  var toSlugify = document.querySelectorAll('[data-slugify]')
  for (var index = 0, max = toSlugify.length; index < max; index++) {
    var element = toSlugify[index];
    element.innerHTML = element.innerHTML.replace(/\s+/g, '-').toLowerCase()
  }
}

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function clearStory(story) {
  delete story.alternates
  delete story.tag_list
  delete story.sort_by_date
  delete story.is_startpage
  delete story.group_id
  delete story.parent_id
  delete story.content._editable
  return story
}

function gup(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Scroll Into View Polyfill
var x = function (o, l, t) { "use strict"; function e() { function e(o, l) { this.scrollLeft = o, this.scrollTop = l } function r(o) { return .5 * (1 - Math.cos(Math.PI * o)) } function c(o) { if ("object" != typeof o || null === o || o.behavior === t || "auto" === o.behavior || "instant" === o.behavior) return !0; if ("object" == typeof o && "smooth" === o.behavior) return !1; throw new TypeError("behavior not valid") } function s(t) { var e, r, c; do { e = (t = t.parentNode) === l.body, r = t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth, c = "visible" === o.getComputedStyle(t, null).overflow } while (!e && (!r || c)); return e = r = c = null, t } function i(l) { var t, e, c, s = (h() - l.startTime) / f; t = r(s = s > 1 ? 1 : s), e = l.startX + (l.x - l.startX) * t, c = l.startY + (l.y - l.startY) * t, l.method.call(l.scrollable, e, c), e === l.x && c === l.y || o.requestAnimationFrame(i.bind(o, l)) } function n(t, r, c) { var s, n, a, f, u = h(); t === l.body ? (s = o, n = o.scrollX || o.pageXOffset, a = o.scrollY || o.pageYOffset, f = p.scroll) : (s = t, n = t.scrollLeft, a = t.scrollTop, f = e), i({ scrollable: s, method: f, startTime: u, startX: n, startY: a, x: r, y: c }) } if (!("scrollBehavior" in l.documentElement.style)) { var a = o.HTMLElement || o.Element, f = 468, p = { scroll: o.scroll || o.scrollTo, scrollBy: o.scrollBy, elScroll: a.prototype.scroll || e, scrollIntoView: a.prototype.scrollIntoView }, h = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now; o.scroll = o.scrollTo = function () { c(arguments[0]) ? p.scroll.call(o, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : n.call(o, l.body, ~~arguments[0].left, ~~arguments[0].top) }, o.scrollBy = function () { c(arguments[0]) ? p.scrollBy.call(o, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : n.call(o, l.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset)) }, a.prototype.scroll = a.prototype.scrollTo = function () { c(arguments[0]) ? p.elScroll.call(this, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : n.call(this, this, arguments[0].left, arguments[0].top) }, a.prototype.scrollBy = function () { var o = arguments[0]; "object" == typeof o ? this.scroll({ left: o.left + this.scrollLeft, top: o.top + this.scrollTop, behavior: o.behavior }) : this.scroll(this.scrollLeft + o, this.scrollTop + arguments[1]) }, a.prototype.scrollIntoView = function () { if (c(arguments[0])) p.scrollIntoView.call(this, arguments[0] || !0); else { var t = s(this), e = t.getBoundingClientRect(), r = this.getBoundingClientRect(); t !== l.body ? (n.call(this, t, t.scrollLeft + r.left - e.left, t.scrollTop + r.top - e.top), o.scrollBy({ left: e.left, top: e.top, behavior: "smooth" })) : o.scrollBy({ left: r.left, top: r.top, behavior: "smooth" }) } } } } window.scrollIntoViewPolyfill = e }(window, document);
