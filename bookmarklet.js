javascript: (function() % 7 Bvar SNOT_URL % 3 D "https%3A%2F%2Fscript.google.com%2Fmacros%2Fs%2FAKfycbyugA593VsaajQAAQTDqyKPU1TO913PzWTHAN-jfjQ%2Fdev" % 3 Bvar HEIGHT % 3 D550 % 3 Bvar WIDTH % 3 D850 % 3 Bfunction bookmarkPopup(URL % 2 C HEIGHT % 2 C WIDTH) % 7 Bvar action % 3 D 'note' % 3 Bvar url % 3 D URL % 2 B '%3Faction%3D' % 2 B action % 2 B '%26pageUrl%3D' % 2 B document.URL % 2 B '%26pageTitle%3D' % 2 B document.title % 3 Bconsole.log(url) % 3 Bvar newWindow % 3 D window.open(url % 2 C 'name' % 2 C 'height%3D' % 2 B HEIGHT % 2 B '%2Cwidth%3D' % 2 B WIDTH) % 3 Bif(window.focus) % 7 BnewWindow.focus() % 3 B % 7 D % 7 DbookmarkPopup(SNOT_URL % 2 C HEIGHT % 2 C WIDTH) % 7 D)()
