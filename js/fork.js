(function () {
  "use strict";

  var header = document.querySelector("header");
  var nav = document.querySelector("header nav");
  var menuBtn = document.querySelector(".show-menu");

  function closeMobileMenu() {
    if (header) header.classList.remove("active");
    if (nav) nav.classList.remove("active");
    if (menuBtn) menuBtn.classList.remove("active");
    document.querySelectorAll(".submenu-wrapper.active, .submenu-backdrop.active").forEach(function (el) {
      el.classList.remove("active");
    });
    document.querySelectorAll("header .nav_list > li > label.active").forEach(function (el) {
      el.classList.remove("active");
    });
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = header && header.classList.contains("active");
      if (open) {
        closeMobileMenu();
      } else {
        if (header) header.classList.add("active");
        if (nav) nav.classList.add("active");
        menuBtn.classList.add("active");
      }
    });
  }

  document.querySelectorAll("header .nav_list > li").forEach(function (item) {
    var label = item.querySelector(":scope > label");
    var submenu = item.querySelector(".submenu-wrapper");
    var backdrop = item.querySelector(".submenu-backdrop");
    if (!label || !submenu) return;

    function openSubmenu() {
      document.querySelectorAll(".submenu-wrapper.active, .submenu-backdrop.active").forEach(function (el) {
        if (el !== submenu && el !== backdrop) el.classList.remove("active");
      });
      document.querySelectorAll("header .nav_list > li > label.active").forEach(function (el) {
        if (el !== label) el.classList.remove("active");
      });
      label.classList.add("active");
      submenu.classList.add("active");
      if (backdrop) backdrop.classList.add("active");
    }

    function closeSubmenu() {
      label.classList.remove("active");
      submenu.classList.remove("active");
      if (backdrop) backdrop.classList.remove("active");
    }

    item.addEventListener("mouseenter", function () {
      if (window.innerWidth > 860) openSubmenu();
    });
    item.addEventListener("mouseleave", function () {
      if (window.innerWidth > 860) closeSubmenu();
    });
    label.addEventListener("click", function (event) {
      event.preventDefault();
      if (submenu.classList.contains("active")) closeSubmenu();
      else openSubmenu();
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest("header")) closeMobileMenu();
  });

  document.querySelectorAll(".faq_block").forEach(function (block) {
    var title = block.querySelector(".faq_title");
    if (!title) return;
    title.addEventListener("click", function () {
      var wasActive = block.classList.contains("active");
      document.querySelectorAll(".faq_block.active").forEach(function (open) {
        open.classList.remove("active");
        var btn = open.querySelector(".btn-faq");
        var text = open.querySelector(".faq_text");
        if (btn) btn.classList.remove("active");
        if (text) text.classList.remove("active");
      });
      if (!wasActive) {
        block.classList.add("active");
        var btn = block.querySelector(".btn-faq");
        var text = block.querySelector(".faq_text");
        if (btn) btn.classList.add("active");
        if (text) text.classList.add("active");
      }
    });
  });

  document.querySelectorAll("#landing-roadmap").forEach(function (section) {
    var track = section.querySelector(".roadmap-track");
    var cards = section.querySelectorAll(".roadmap_block");
    var dots = section.querySelectorAll(".roadmap-line button");
    var actions = section.querySelectorAll(".roadmap-actions button");
    if (!track || !cards.length) return;

    var index = 0;
    cards.forEach(function (card, i) {
      if (card.classList.contains("in-progress")) index = i;
    });

    function visibleCount() {
      return window.innerWidth <= 860 ? 1 : 3;
    }

    function maxIndex() {
      return Math.max(0, cards.length - visibleCount());
    }

    function apply() {
      index = Math.min(index, maxIndex());
      var card = cards[0];
      var styles = window.getComputedStyle(track);
      var gap = parseFloat(styles.columnGap || styles.gap || "18") || 18;
      var step = card.getBoundingClientRect().width + gap;
      track.classList.add("is-ready");
      track.style.transform = "translate3d(" + -(index * step) + "px, 0, 0)";
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === index);
      });
      if (actions[0]) actions[0].disabled = index <= 0;
      if (actions[1]) actions[1].disabled = index >= maxIndex();
    }

    if (actions[0]) actions[0].addEventListener("click", function () {
      index -= 1;
      apply();
    });
    if (actions[1]) actions[1].addEventListener("click", function () {
      index += 1;
      apply();
    });
    dots.forEach(function (dot, i) {
      dot.tabIndex = 0;
      dot.removeAttribute("aria-hidden");
      dot.addEventListener("click", function () {
        index = i;
        apply();
      });
    });
    window.addEventListener("resize", apply);
    apply();
  });

  document.querySelectorAll("form").forEach(function (form) {
    if (form.getAttribute("data-fork-bound")) return;
    form.setAttribute("data-fork-bound", "1");
    form.addEventListener("submit", function (event) {
      var action = (form.getAttribute("action") || "").trim();
      if (!action || action === "#" || action.indexOf("/api") === 0) {
        event.preventDefault();
        form.classList.add("is-submitted");
      }
    });
  });

  var contact = document.getElementById("contactUsForm");
  if (contact) {
    var fields = contact.querySelectorAll("input, textarea");
    var send = contact.querySelector(".btn-send-form");
    function syncContact() {
      var ready = true;
      fields.forEach(function (field) {
        if (!String(field.value || "").trim()) ready = false;
      });
      if (send) send.disabled = !ready;
    }
    fields.forEach(function (field) {
      field.addEventListener("input", syncContact);
    });
    if (send) {
      send.addEventListener("click", function (event) {
        event.preventDefault();
        if (send.disabled) return;
        var values = Array.prototype.map.call(fields, function (field) {
          return String(field.value || "").trim();
        });
        var subject = encodeURIComponent(values[2] || "Nexchain contact");
        var body = encodeURIComponent("Name: " + values[0] + "\nEmail: " + values[1] + "\n\n" + values[3]);
        window.location.href = "mailto:support@nexchain.ai?subject=" + subject + "&body=" + body;
      });
    }
    syncContact();
  }
})();
